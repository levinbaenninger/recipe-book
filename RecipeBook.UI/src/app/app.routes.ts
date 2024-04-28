import { Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NotFoundComponent } from './components/error-page/not-found/not-found.component';
import { ServerErrorComponent } from './components/error-page/server-error/server-error.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { recipeRoutes } from './components/recipe/recipe.routes';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeComponent, children: recipeRoutes },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: 'error/404', component: NotFoundComponent },
  { path: 'error/500', component: ServerErrorComponent },
  { path: '**', redirectTo: '/error/404' },
];
