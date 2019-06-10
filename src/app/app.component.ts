import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  recipes: Recipe[] = [
  new Recipe('Meatloaf', ['meat', 'loaf'], ['wash the meatloaf', 'eat the meatloaf', 'poop the meatloaf'])
];
}
