import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  @Input() product: Product

  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private router = inject(Router);

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
