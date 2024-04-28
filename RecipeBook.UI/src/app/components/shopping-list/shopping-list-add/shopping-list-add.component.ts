import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './shopping-list-add.component.html',
  styleUrl: './shopping-list-add.component.scss',
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  shoppingListAddForm!: FormGroup;
  @Input() selectedIngredient?: Ingredient;
  isAdd = true;

  constructor(
    private formBuilder: FormBuilder,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.shoppingListAddForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedIngredient'] && this.shoppingListAddForm) {
      this.shoppingListAddForm.patchValue({
        itemName: this.selectedIngredient?.name,
        amount: this.selectedIngredient?.amount,
      });
      this.isAdd = false;
    } else {
      this.isAdd = true;
    }
  }

  onSubmit() {
    if (this.shoppingListAddForm.valid) {
      const newIngredient = new Ingredient(
        this.shoppingListAddForm.value.itemName,
        this.shoppingListAddForm.value.amount
      );

      if (this.isAdd) {
        this.shoppingListService.addIngredient(newIngredient);
      } else {
        this.shoppingListService.editIngredient(
          this.selectedIngredient!,
          newIngredient
        );
      }

      this.resetForm();
    }
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.selectedIngredient!);
    this.resetForm();
  }

  resetForm() {
    this.shoppingListAddForm.reset();
  }
}
