import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validator, Validators,} from "@angular/forms";
import {CarService} from "../../../services/car.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit{

  constructor(public crudApi: CarService, private http:HttpClient, private formBuilder:FormBuilder, private router:Router) {
  }

  ngOnInit(): void {
        if(this.crudApi.choixmenu==="A"){
          this.infoForm();
        }
    }


  infoForm() {
    this.crudApi.dataForm = this.formBuilder.group(
        {
          manufacturer: ['', [Validators.required,Validators.minLength(3)]],
          model:  ['', [Validators.required,Validators.minLength(3)]],
          year: ['', [Validators.required]],
          capacity: ['', [Validators.required,Validators.min(1),Validators.max(7)]],
          registrationNumber: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(15)]]
        })
      }

  ResetForm(){
   this.crudApi.dataForm.reset();
  }

  onSubmit() {
    if (this.crudApi.choixmenu == "A"){
      console.log("ok")

      this.addCar();
    }else {
      this.updateCar();
    }
  }

  /*car = {
    manufacturer : "",
    model : "",
    year : "",
    capacity: 0,
  }*/

  carFile:any;

  imgURL:any;

  addCar(){
    if(this.crudApi.dataForm.valid)
    this.crudApi.createData(this.crudApi.dataForm.value).subscribe(data=>{
      this.ResetForm();
      this.router.navigate(['/cars'])
    });
  }

  updateCar(){

    this.crudApi.updateData(this.crudApi.dataForm.get("carId")?.value,this.crudApi.dataForm.value).subscribe(
      data => {
        this.router.navigate(['/cars']);
      }
    )

  }

  onSelectFile(event:any){
    if(event.target.files.length>0){
      console.log(event.target.files[0]);

      const file = event.target.files[0]
      this.carFile = file;

      var mimeType = event.target.files[0].type;
      if(mimeType.match(/image\/*/) == null){
        //this.message = "Only images are supported"
        return
      }

      var reader = new FileReader;
      reader.readAsDataURL(file);
      reader.onload = (_event) =>
        this.imgURL=reader.result;
    }
  }

  protected readonly onsubmit = onsubmit;
}
