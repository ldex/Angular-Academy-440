import { Routes } from "@angular/router";




export const routes: Routes = [
  { path: '', loadComponent: () => import('./product-list/product-list.component').then(m => m.ProductListComponent), title: 'Product List' },
  { path: 'insert', loadComponent: () => import('./product-insert/product-insert.component').then(m => m.ProductInsertComponent), title: 'Insert Product' },
  { path: ':id', loadComponent: () => import('./product-detail/product-detail.component').then(m => m.ProductDetailComponent), title: 'Product Detail' },
];