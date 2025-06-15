import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';

const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Product List' },
  { path: 'insert', component: ProductInsertComponent, title: 'Insert Product' },
  { path: ':id', component: ProductDetailComponent, title: 'Product Detail' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
