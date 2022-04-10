import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;
  constructor(
    private shopService: ShopService,
    private activateRoute: ActivatedRoute,
    private bcService: BreadcrumbService
  ) { 
    this.bcService.set('@productDetails',' ');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    if (id !== null) {
      this.shopService.getProduct(+id).subscribe({
        next: (product) => {
          this.product = product;
          this.bcService.set('@productDetails', product.name!);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
