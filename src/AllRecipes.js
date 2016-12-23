import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class AllRecipes extends Component {
  recipes() {
    if (this.props.recipesStore.recipes.length) {
      for (let recipe of this.props.recipesStore.recipes) {
        console.log(recipe);
      }
    }
    return 'no recipes for now';
  }
  render() {
    return (
      <div>
        <h2>All recipes</h2>
        <div>
          {this.recipes()}
        </div>
      </div>
    )
  }
}
