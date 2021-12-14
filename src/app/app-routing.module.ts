import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  { path: "comments", component: CommentsComponent },
  { path: "stocks", component: StocksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
