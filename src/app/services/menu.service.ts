import { Injectable } from '@angular/core';
import { Menu } from '../model/menu.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const listMenu = 'http://localhost:8080/menu/listMenu';
const creerMenu = 'http://localhost:8080/menu/creerMenu'
const httpOptions = {
  headers : new HttpHeaders({'Content-type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu! : Menu[];

  constructor(private http : HttpClient) { }

  public getMenu() : Observable<any>{
    return this.http.get(listMenu,httpOptions);
   }

   public creerMenu (plat : string, description : string, prix : number) :Observable<any> {
    return this.http.post(creerMenu,{
      plat,
      description,
      prix
    },httpOptions)
   }


}
