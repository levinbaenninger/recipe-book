import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe?: Recipe;
  private subscription!: Subscription;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.recipeService.getRecipe(+params['id']).subscribe((recipe) => {
        this.selectedRecipe = recipe;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }

  onDelete() {
    if (this.selectedRecipe?.id !== undefined) {
      this.recipeService.deleteRecipe(this.selectedRecipe.id).subscribe(() => {
        this.router.navigate(['/recipes']);
      });
    }
  }
}
