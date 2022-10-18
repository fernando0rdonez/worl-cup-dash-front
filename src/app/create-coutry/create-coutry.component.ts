import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { faEarthAmericas, faPerson, faPersonBooth } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-coutry',
  templateUrl: './create-coutry.component.html',
  styleUrls: ['./create-coutry.component.css']
})
export class CreateCoutryComponent implements OnInit {

  createCountry: FormGroup;
  listCountries :CountryForm[] = []

  constructor(private readonly fb: FormBuilder, private http: HttpClient) {
    this.createCountry = this.initForm()
  }

  ngOnInit(): void {
    this.getCountries()
  }

  onSubmit(data: CountryForm): void {
    console.log(data);
    this.http.post('http://localhost:3000/country', data).subscribe((res)=> {
      console.log(res);
      this.getCountries()
    })
    this.createCountry.reset()

  }

  getCountries():void {
    this.http.get('http://localhost:3000/country').subscribe((res)=>{
      this.listCountries = res as CountryForm []
    })
  }


  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      couch: ['', [Validators.required, Validators.minLength(1)]],
      delegates: ['', [Validators.required, Validators.min(2), Validators.max(29)]],
      continent: ['', [Validators.required, Validators.required]],
      flag: ['', [Validators.required,  Validators.minLength(6)]]
    })
  }
}

interface CountryForm  {
  id?:string;
  name: string ;
  couch: string;
  delegates: number ;
  continent: "Asia" | "Erope" | "America" | "Africa" | "Australia";
  flag: string
};
