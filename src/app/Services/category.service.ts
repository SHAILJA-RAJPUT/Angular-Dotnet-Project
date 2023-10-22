import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{Category} from '../Models/category.model'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private Http:HttpClient) { }

  addCategory(model:AddCategoryRequest): Observable<void>{
    return this.Http.post<void>(`${environment.apiBaseUrl}/api/categories`,model)
  }

getAllCategories():Observable<Category[]>{

return this.Http.get<Category[]>( `${environment.apiBaseUrl}/api/Categories`);

}

getCategoryById(Id: string):Observable<Category>{
  return this.Http.get<Category>(`${environment.apiBaseUrl}/api/Categories/${Id};`)
}

}
