import { NgModule} from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { CategoryListComponent } from './Core/component/category-list/category-list.component';
import { AddCategoryComponent } from './Core/component/add-category/add-category.component';
import { EditCategoryComponent } from './Core/component/edit-category/edit-category.component';



const routes: Routes = [
    { path: 'admin/categories', component: CategoryListComponent },

    { path: 'admin/categories/add', component:AddCategoryComponent },

    { path: 'admin/categories/:Id', component:EditCategoryComponent }
  ];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}