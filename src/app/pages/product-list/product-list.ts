import { Component } from '@angular/core';
import { ProductServices } from '../../services/product-services';
import { Router } from '@angular/router';
import { listProducts } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  listProducts: listProducts | null = null

  constructor(private productServices: ProductServices, private router: Router){}

  ngOnInit(){
    this.fetchProducts()
  }

  fetchProducts(){
    this.productServices.getAllProducts().subscribe({
      next: (response) => {
        this.listProducts = response
        console.log(this.listProducts)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
