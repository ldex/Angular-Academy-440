import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    standalone: true,
    imports: [UpperCasePipe, CurrencyPipe, DatePipe]
})
export class ProductDetailComponent {
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);


  @Input() product: Product

  constructor() {
    let id = this.activatedRoute.snapshot.params['id'];

    this
      .productService
      .getProductById(id)
      .subscribe(
        result => this.product = result
      )

  }

}
