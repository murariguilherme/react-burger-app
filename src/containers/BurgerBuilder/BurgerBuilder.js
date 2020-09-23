import React, { Component } from "react";

import Aux from "../../hoc/AuxHoc";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
  };

  getDefaultBurgerPrice = () => 3.99;

  getBurgerTotalPrice = () => {
    const defaultPrice = this.getDefaultBurgerPrice();
    const ingredientsPrice = Object.keys(this.state.ingredients)
      .map((key) => {
        return this.getIngredientPrice(key) * this.state.ingredients[key];
      })
      .reduce((a, b) => a + b, 0);
    return defaultPrice + ingredientsPrice;
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

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;
    this.setState({
      totalPrice: this.getBurgerTotalPrice(),
      ingredients: updatedIngredients,
    });
  };

  delIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) return;

    const updatedCount = oldCount - 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;
    this.setState({
      totalPrice: this.getBurgerTotalPrice(),
      ingredients: updatedIngredients,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }    

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientDeleted={this.delIngredientHandler}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
