import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/Models/category.model';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit ,OnDestroy{

  Id!: String;
  paramSubscription?: Subscription;
  category?:Category;

  constructor(private route:ActivatedRoute , private categoryService:CategoryService) { 
  
   
  }
 

   ngOnInit(): void {

  //   this.route.paramMap.subscribe({
  //     next:(params) =>{
  //      this.Id= params.get('Id');

  //       if(this.Id){
  //         // get the data from api for this category id

  //         this.categoryService.getCategoryById(this.Id).subscribe({
  //           next:(response) =>{

  //             this.category=response;
  //           }
  //         });
  //       }

  //     }
  //   });
 }
  onFormSubmit():void{
    console.log(this.category)
  }

  ngOnDestroy(): void {
     this.paramSubscription?.unsubscribe();
  }

}
