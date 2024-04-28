import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Recipe } from '../models/recipe.model';
import { ErrorHandleService } from './error-handle.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private url = 'Recipes';
  recipeDeleted = new Subject<void>();
  recipeAdded = new Subject<void>();
  recipeUpdated = new Subject<void>();

  constructor(
    private http: HttpClient,
    private errorHandleService: ErrorHandleService
  ) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(`${environment.baseApiUrl}/${this.url}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorHandleService.handle(error);
          return throwError(() => error);
        })
      );
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http
      .get<Recipe>(`${environment.baseApiUrl}/${this.url}/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorHandleService.handle(error);
          return throwError(() => error);
        })
      );
  }

  deleteRecipe(id: number): Observable<void> {
    return this.http
      .delete<void>(`${environment.baseApiUrl}/${this.url}/${id}`)
      .pipe(
        tap(() => this.recipeDeleted.next()),
        catchError((error) => {
          this.errorHandleService.handle(error);
          return throwError(() => error);
        })
      );
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http
      .post<Recipe>(`${environment.baseApiUrl}/${this.url}`, recipe)
      .pipe(
        tap(() => this.recipeAdded.next()),
        catchError((error) => {
          this.errorHandleService.handle(error);
          return throwError(() => error);
        })
      );
  }

  updateRecipe(id: number, recipe: Recipe): Observable<void> {
    return this.http
      .put<void>(`${environment.baseApiUrl}/${this.url}/${id}`, recipe)
      .pipe(
        tap(() => this.recipeUpdated.next()),
        catchError((error) => {
          this.errorHandleService.handle(error);
          return throwError(() => error);
        })
      );
  }
}
