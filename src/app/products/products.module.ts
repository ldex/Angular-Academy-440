import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    exports: [ProductListComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule,
        ProductDetailComponent,
        ProductListComponent,
        ProductInsertComponent
    ]
})
export class ProductsModule { }
