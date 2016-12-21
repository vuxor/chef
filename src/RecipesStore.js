import { observable } from "mobx";

class RecipesStore {
  @observable recipes = [];
}

const recipesStore = new RecipesStore();

export default recipesStore;
