import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
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
  HandleEdit() {
    this.productService.edit(this.product).subscribe(data => {
      window.location.href = '/admin/product'
    })
  }
}
