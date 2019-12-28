import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/Product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {}

  ngOnInit() {
    const productId: number = parseInt(this.route.snapshot.paramMap.get('productId'), 10);
    this.product = this.productService.getProductById(productId);
  }

}
