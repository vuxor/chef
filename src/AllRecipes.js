import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class AllRecipes extends Component {
  recipes() {
    let recipesDiv = (<div>no recipes for now</div>);
    if (this.props.recipesStore.recipes.length) {
      console.log(this.props.recipesStore.recipes);
      for (let recipe of this.props.recipesStore.recipes) {
        console.log(recipe);
        let ingArray = [];
        for (let ing of recipe.ingredients) {
          ingArray.push(ing);
        }
        recipesDiv = (
          <div>
            <p>
              {recipe.name}
            </p>
            <ul>
              {ingArray.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
            <p>
              {recipe.directions}
            </p>
          </div>
        )
      }
    }
    return recipesDiv;
  }
  render() {
    return (
      <div className="recipe">
        <h2>All recipes</h2>
        {this.props.recipesStore.recipes.length ?
            this.props.recipesStore.recipes.map((recipe, index) => (
              <div key={index}>
                <p>{recipe.name}</p>
                <ul>
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
                <p>
                  {recipe.directions}
                </p>
              </div>
            )): 'No recipes for now'}
      </div>
    )
  }
}
