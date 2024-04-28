import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  constructor() {
    let savedIngredients = localStorage.getItem('ingredients');
    this.ingredients = savedIngredients ? JSON.parse(savedIngredients) : [];
  }

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
  }

  editIngredient(oldIngredient: Ingredient, newIngredient: Ingredient) {
    this.ingredients[this.ingredients.indexOf(oldIngredient)] = newIngredient;
    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
  }
}
