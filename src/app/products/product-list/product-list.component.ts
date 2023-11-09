import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title: string = 'Products'
  //products: Product[]
  selectedProduct: Product;
  products$: Observable<Product[]>;

  private productService = inject(ProductService);

  // Pagination
  pageSize = 5;
  start = 0;
  end = this.pageSize;
  pageNumber = 1;

  previousPage() {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
    this.pageNumber--;
    this.selectedProduct = undefined;
  }

  nextPage() {
    this.start += this.pageSize;
    this.end += this.pageSize;
    this.pageNumber++;
    this.selectedProduct = undefined;
  }


  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  constructor() {
    this.products$ = this.productService.products$;

    // this
    //   .productService
    //   .products$
    //   .subscribe(
    //     data => this.products = data
    //   )
  }

}
