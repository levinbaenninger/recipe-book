import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ShoppingListAddComponent } from './shopping-list-add/shopping-list-add.component';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingListAddComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  selectedIngredient?: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onSelectItem(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }
}
