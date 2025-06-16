import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { NgIf, NgFor, AsyncPipe, UpperCasePipe, SlicePipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: true,
    imports: [NgIf, NgFor, RouterLink, AsyncPipe, UpperCasePipe, SlicePipe, CurrencyPipe]
})
export class ProductListComponent {
  title: string = 'Products'
  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.products$ = this.productService.products$;
  }

  // Pagination
  pageSize = 5;
  start = 0;
  end = this.pageSize;
  pageNumber = 1;

  previousPage() {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
    this.pageNumber--;
  }

  nextPage() {
    this.start += this.pageSize;
    this.end += this.pageSize;
    this.pageNumber++;
  }

  onSelect(product: Product) {
    this.router.navigateByUrl('/products/' + product.id);
  }

}
