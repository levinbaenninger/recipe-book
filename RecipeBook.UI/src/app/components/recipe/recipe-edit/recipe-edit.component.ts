import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss',
})
export class RecipeEditComponent implements OnInit {
  recipeForm!: FormGroup;

  constructor(
    private recipeService: RecipeService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imagePath: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.recipeService.getRecipe(id)?.subscribe((recipe) => {
        if (recipe) {
          this.recipeForm.patchValue(recipe);
        }
      });
    }
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const newRecipe: Recipe = this.recipeForm.value;
      let id = this.activatedRoute.snapshot.params['id'];

      if (id) {
        newRecipe.id = +id;
        this.recipeService.updateRecipe(id, newRecipe).subscribe(() => {
          this.recipeForm.reset();
          this.router.navigate(['/recipes', id]);
        });
      } else {
        this.recipeService.addRecipe(newRecipe).subscribe((recipe) => {
          this.recipeForm.reset();
          this.router.navigate(['/recipes', recipe.id]);
        });
      }
    }
  }

  onReset() {
    this.recipeForm.reset();
  }
}
