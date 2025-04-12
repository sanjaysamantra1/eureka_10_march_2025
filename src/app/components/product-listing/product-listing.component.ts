import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PRODUCTS } from './product';

@Component({
  selector: 'app-product-listing',
  standalone: true, // Add this for standalone component
  imports: [CommonModule, FormsModule], // Add required modules
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  products = PRODUCTS;
  filteredProducts = PRODUCTS;
  currentPage = 1;
  productsPerPage = 5;
  searchQuery = '';
  sortOrder: 'none' | 'asc' | 'desc' = 'none';

  ngOnInit(): void {
    // Initialization if needed
  }

  applySearch() {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.currentPage = 1;
  }

  applySort() {
    this.filteredProducts = [...this.filteredProducts].sort((a, b) => {
      if (this.sortOrder === 'asc') return a.price - b.price;
      if (this.sortOrder === 'desc') return b.price - a.price;
      return 0;
    });
  }

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.productsPerPage;
    const end = start + this.productsPerPage;
    return this.filteredProducts.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.filteredProducts.length / this.productsPerPage);
  }
}