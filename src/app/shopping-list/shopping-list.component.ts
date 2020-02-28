import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('apples',7),
    new Ingredient('mogons',3)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
