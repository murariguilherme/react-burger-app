import React, { useState, useEffect } from "react";

import Aux from "../../hoc/AuxHoc";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  useEffect(() => {
    setDisabledInfo({
      salad: ingredients.salad <= 0,
      bacon: ingredients.bacon <= 0,
      cheese: ingredients.cheese <= 0,
      meat: ingredients.meat <= 0,
    });
  }, [ingredients]);

  const [disabledInfo, setDisabledInfo] = useState({
    salad: true,
    bacon: true,
    cheese: true,
    meat: true,
  });

  const [totalPrice, setTotalprice] = useState(3.99);
  const [purchaseble, setPurchaseble] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const getIngredientPrice = (type) => {
    switch (type) {
      case "salad":
        return 0.99;
      case "bacon":
        return 1.99;
      case "cheese":
        return 0.99;
      case "meat":
        return 2.99;
      default:
        return 0;
    }
  };

  const updatePurchasableStatus = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    setPurchaseble(sum > 0);
  };

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;

    const updatedIngredients = {
      ...ingredients,
    };

    updatedIngredients[type] = updatedCount;
    setTotalprice(totalPrice + getIngredientPrice(type));
    setIngredients(updatedIngredients);
    updatePurchasableStatus(updatedIngredients);
  };

  const delIngredientHandler = (type) => {
    const oldCount = ingredients[type];

    if (oldCount <= 0) return;

    const updatedCount = oldCount - 1;

    const updatedIngredients = {
      ...ingredients,
    };

    const newPrice = totalPrice - getIngredientPrice(type);
    updatedIngredients[type] = updatedCount;
    setTotalprice(newPrice);
    setIngredients(updatedIngredients);
    updatePurchasableStatus(updatedIngredients);
  };

  const purshaseHandler = () => setPurchasing(true);

  const cancelPurchaseHandler = () => setPurchasing(false);

  const purchaseContinueHandler = () => alert("Continue!");

  return (
    <Aux>
      <Modal show={purchasing} modalClosed={cancelPurchaseHandler}>
        <OrderSummary
          purchaseCanceled={cancelPurchaseHandler}
          purchaseContinued={purchaseContinueHandler}
          ingredients={ingredients}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientDeleted={delIngredientHandler}
        disabled={disabledInfo}
        totalPrice={totalPrice}
        purchaseble={purchaseble}
        ordered={purshaseHandler}
      />
    </Aux>
  );
};

export default BurgerBuilder;
