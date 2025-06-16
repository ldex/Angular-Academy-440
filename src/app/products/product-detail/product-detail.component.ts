import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { NgIf, UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    standalone: true,
    imports: [NgIf, UpperCasePipe, CurrencyPipe, DatePipe]
})
export class ProductDetailComponent {

  @Input() product: Product

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
    let id = this.activatedRoute.snapshot.params['id'];

    this
      .productService
      .getProductById(id)
      .subscribe(
        result => this.product = result
      )

  }

}
