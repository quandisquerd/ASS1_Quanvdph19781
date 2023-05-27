import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: IProduct = {
    name: "",
    price: 0,
    img: "",
    description: "",
  };
  constructor(private productService: ProductService, private param: ActivatedRoute) {
    this.param.paramMap.subscribe(data => {
      const id = String(data.get("id"));
      this.productService.getOne(id).subscribe(data => {
        this.product = data
      })
    })
  }
  HandleAdd() {
    this.productService.add(this.product).subscribe(data => {
      window.location.href = '/admin/product'
    })
  }
}
