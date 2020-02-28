import { Recipe } from '../recipe.modle';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.less']
})
export class RecipesListComponent implements OnInit {
  
  recipes:Recipe[] = [
    new Recipe('测试食谱内容1', '食谱内容的详细描述1','http://s3m.nzwgs.com/galileo/764123-19f43456ebf5927c28601cc1cfe60e1d.jpg'),
    new Recipe('测试食谱内容2', '食谱内容的详细描述2','http://img2.imgtn.bdimg.com/it/u=1492127906,3028710124&fm=26&gp=0.jpg'),
    new Recipe('测试食谱内容3', '食谱内容的详细描述3','http://img3.imgtn.bdimg.com/it/u=1564154457,2160326790&fm=26&gp=0.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
