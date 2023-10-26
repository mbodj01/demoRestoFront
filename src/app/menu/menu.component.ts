import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first, pipe } from 'rxjs';
import { Menu } from '../model/menu.model';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

menu:any;
creerPlat! : FormGroup;
  errorMessage: any;

  ngOnInit(): void {
    this.listMenu()
    }

  constructor(
    private http : HttpClient,
    private fb :FormBuilder,
    public menuService : MenuService,
  ){
    this.creerPlat=this.fb.group({
      c_plat : this.fb.control(""),
      c_description : this.fb.control(""),
      c_prix : this.fb.control(""),
    })
  }

  public listMenu(){
    this.menuService.getMenu()
    .subscribe({
      next: (data) => {
        this.menu = data;
      },
      error: (err) => {

      }
    })
  }

  public creerMenu(){
    let c_plat =  this.creerPlat.value.c_plat;
    let c_description =  this.creerPlat.value.c_description;
    let c_prix =  this.creerPlat.value.c_prix;
    this.menuService.creerMenu(c_plat,c_description,c_prix)
    .subscribe({
      next : (response) =>{
          console.log(response);
          // window.location.reload();
      },
      error : (error) =>{
        console.error(error);
        this.errorMessage = error.message;
      }
    });
  }
}
