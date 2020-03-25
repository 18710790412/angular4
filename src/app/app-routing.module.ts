import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'add', component: MenuAddComponent },
  { path: 'detail/:id', component: MenuDetailComponent },
  { path: 'home', component: EmptyComponent ，data:{title:'测试1'}},
  { path: '', redirectTo: '/home', pathMatch: 'full' },  //空目录，重定向处理
  { path: '**', component: EmptyComponent } //通配符，其他路由失败的，会跳转到这个视图
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
