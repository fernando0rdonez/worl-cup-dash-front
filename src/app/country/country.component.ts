import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { faEarthAmericas, faPerson, faPersonBooth } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {


  @Input()
  country:Country = {
    id:"",
    name: "" ,
    couch: "",
    delegates: 0 ,
    continent: "Asia",
    flag: ""
  }

  faEarthAmericas = faEarthAmericas;
  faPerson = faPerson
  faPersonBooth = faPersonBooth

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  deleteItem(){

    this.http.delete(`http://localhost:3000/country/${this.country.id!}`).subscribe((res)=>{
      console.log(res);

    })
  }

}
interface Country  {
  id?:string;
  name: string ;
  couch: string;
  delegates: number ;
  continent: "Asia" | "Erope" | "America" | "Africa" | "Australia";
  flag: string
};
