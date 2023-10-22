import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/category.model';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})


export class CategoryListComponent implements OnInit{
categories?: Category[]=[];

 // categories$?: Observable<Category[]>;
constructor (private categoryService:CategoryService){

}
 ngOnInit(): void {
     this.categoryService.getAllCategories()
     .subscribe({
      next:(response)=> {
         console.log('Response from service:', response);
         this.categories= response;
       }
     });

}
}

// using async pipe
// ngOnInit(): void {
//      this. categories$ =this.categoryService.getAllCategories();

// }

