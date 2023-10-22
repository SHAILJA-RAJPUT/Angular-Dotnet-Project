import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddCategoryRequest } from 'src/app/Models/add-category-request.model';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {

 model:AddCategoryRequest;

 private addCategorySubscription ?:Subscription
    constructor(private categoryService:CategoryService){
     this. model={
      Name:'',
      UrlHandle:''
    };
  }



  onFormSubmit(){
 this.addCategorySubscription=this.categoryService.addCategory(this.model)
 .subscribe({
  next:(response) =>{
    console.log("success");
  }
 });
}

ngOnDestroy(): void {
  this.addCategorySubscription?.unsubscribe();
}

}
