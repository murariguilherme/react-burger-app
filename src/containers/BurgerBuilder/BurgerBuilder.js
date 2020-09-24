import React, { Component } from "react";

import Aux from "../../hoc/AuxHoc";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 3.99,
    purchaseble: false,
    purchasing: false,
  };

  getIngredientPrice = (type) => {
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

  updatePurchasableStatus = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    this.setState({ purchaseble: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };

    const newPrice = this.state.totalPrice + this.getIngredientPrice(type);
    updatedIngredients[type] = updatedCount;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchasableStatus(updatedIngredients);
  };

  delIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) return;

    const updatedCount = oldCount - 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };

    const newPrice = this.state.totalPrice - this.getIngredientPrice(type);
    updatedIngredients[type] = updatedCount;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchasableStatus(updatedIngredients);
  };

  purshaseHandler = () => {
    this.setState({ purchasing: true });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientDeleted={this.delIngredientHandler}
          disabled={disabledInfo}
          totalPrice={this.state.totalPrice}
          purchaseble={this.state.purchaseble}
          ordered={this.purshaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
