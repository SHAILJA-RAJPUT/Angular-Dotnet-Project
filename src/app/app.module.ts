import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from './Core/component/category-list/category-list.component';
import { AddCategoryComponent } from './Core/component/add-category/add-category.component';
import{HttpClientModule} from '@angular/common/http';

 import { MatTableModule } from '@angular/material/table';
 import { MatPaginatorModule } from '@angular/material/paginator';
 import { MatSortModule } from '@angular/material/sort';
import { EditCategoryComponent } from './Core/component/edit-category/edit-category.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
     MatTableModule,
   MatPaginatorModule,
   MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }