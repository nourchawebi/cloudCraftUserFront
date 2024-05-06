import { Component, ElementRef, EventEmitter, Inject, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Annonce, TypeAnnonce, TypeInternship } from 'src/app/FrontOffice/models/AnnonceMang/Annonce';
import { AnnonceService } from 'src/app/FrontOffice/services/Annonce/annonce.service';

import * as L from 'leaflet';
import { isPlatformBrowser } from '@angular/common';
import { GetAnnonceComponent } from '../get-annonce/get-annonce.component';
@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent {
  annonceForm:FormGroup;
  typeAnnonceOptions:string[]=Object.values(TypeAnnonce);//enum
  TypeInternshipOptions:string[]=Object.values(TypeInternship);//enum
  imageUrl:string | ArrayBuffer | null = null;
  isInternshipSelected = false;
  isJobOfferSelected = false;
  isLostAndFoundSelected = false;
  isPFE_INTERNSHIP = false;
  isINTRODUCTORY_INTERNSHIP = false;
  isINGINEER_INTERNSHIP = false;
 // marker: L.Marker<any> | null = null;
  //circleMarker: L.CircleMarker<any> | null = null;
 // private map: L.Map | undefined;
 // selectedFile: File | null = null;
  selectedFile: any;
  governorate:any;
 @Output() close = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder, private annonceService: AnnonceService, private getAnnonce: GetAnnonceComponent) {
    this.annonceForm = this.formBuilder.group({
      title: [''],
      annonce_description: [''],
      typeAnnonce: [''],
      startDate: [''],
      governorate: [''],
      typeInternship: [''],
      file: [null]
    });
  }
  selectedType: TypeAnnonce = TypeAnnonce.INTERNSHIP; // Initialize selectedType to INTERNSHIP
  selectedTypeINTERSHIP: any; // Initialize selectedType to INTERNSHIP

  onClose(){
    this.close.emit();
  }

  onTypeAnnonceChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedType = selectedValue as TypeAnnonce; // Assuming selectedValue is of type TypeAnnonce
    this.isInternshipSelected = this.selectedType === TypeAnnonce.INTERNSHIP;
    this.isJobOfferSelected = this.selectedType === TypeAnnonce.JOB_OFFER;
    this.isLostAndFoundSelected = this.selectedType === TypeAnnonce.LOST_AND_FOUND;
    
  }
  onTypeIntershipChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedTypeINTERSHIP = selectedValue as TypeInternship; // Assuming selectedValue is of type TypeAnnonce
    this.isInternshipSelected = this.selectedTypeINTERSHIP === TypeAnnonce.INTERNSHIP;
    this.isJobOfferSelected = this.selectedTypeINTERSHIP === TypeAnnonce.JOB_OFFER;
    this.isLostAndFoundSelected = this.selectedTypeINTERSHIP === TypeAnnonce.LOST_AND_FOUND;
    
  }
  futureDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();

      if (selectedDate <= currentDate) {
        return { 'invalidDate': true };
      }

      return null;
    };
  }
  
  addJob(){

    if (this.annonceForm.valid) {
      const formData = new FormData();
      const title = this.annonceForm.get('title')?.value;
      const annonceDescription = this.annonceForm.get('annonce_description')?.value;
      const typeAnnonce = this.annonceForm.get('typeAnnonce')?.value;
      const startDate = this.annonceForm.get('startDate')?.value;
      const governorate  = this.annonceForm.get('governorate')?.value;
      //const typeInternship = this.annonceForm.get('typeInternship')?.value;
      
  
      if (title && annonceDescription && typeAnnonce && startDate) {
        formData.append('title', title);
        formData.append('annonce_description', annonceDescription);
        formData.append('typeAnnonce', typeAnnonce);
        formData.append('date', startDate);
        formData.append('governorate', governorate);
       // formData.append('typeintership', typeInternship);
        

        //formData.append('typeInternship', typeInternship);
        
        
        this.annonceService.addJob(formData).subscribe(
          () => {

            alert("Annonce Added successfully");
            this.annonceForm.reset();
            this.selectedFile = null;
            this.close.emit();
            this.getAnnonce.loadAnnonces();
          },
          (error) => {
            alert("An error occurred while adding the Announce");
            console.error(error);
          }
        );
      } else {
        alert("Please fill in all the required fields correctly");
      }
    } else {
      alert("Please fill in all the required fields correctly");
    }
  }
  
  addInternship(){

    if (this.annonceForm.valid) {
      const formData = new FormData();
      const title = this.annonceForm.get('title')?.value;
      const annonceDescription = this.annonceForm.get('annonce_description')?.value;
      const typeAnnonce = this.annonceForm.get('typeAnnonce')?.value;
      const startDate = this.annonceForm.get('startDate')?.value;
      const governorate  = this.annonceForm.get('governorate')?.value;
      const typeInternship = this.annonceForm.get('typeInternship')?.value;
      
  
      if (title && annonceDescription && typeAnnonce && startDate) {
        formData.append('title', title);
        formData.append('annonce_description', annonceDescription);
        formData.append('typeAnnonce', typeAnnonce);
        formData.append('date', startDate);
        formData.append('governorate', governorate);
        formData.append('typeintership', typeInternship);
        
        console.log("dddddddd",this.governorate);

        //formData.append('typeInternship', typeInternship);
        
        
        this.annonceService.addInternship(formData).subscribe(
          () => {
            console.log("dddddddd",this.governorate);

            alert("Annonce Added successfully");
            this.annonceForm.reset();
            this.selectedFile = null;
            this.close.emit();
            this.getAnnonce.loadAnnonces();
          },
          (error) => {
            alert("An error occurred while adding the Announce");
            console.error(error);
          }
        );
      } else {
        alert("Please fill in all the required fields correctly");
      }
    } else {
      alert("Please fill in all the required fields correctly");
    }
  }

  
  addPost(){

    if (this.annonceForm.valid) {
      const formData = new FormData();
      const title = this.annonceForm.get('title')?.value;
      const annonceDescription = this.annonceForm.get('annonce_description')?.value;
      const typeAnnonce = this.annonceForm.get('typeAnnonce')?.value;
      //const typeInternship = this.annonceForm.get('typeInternship')?.value;
      
  
      if (title && annonceDescription && typeAnnonce) {
        formData.append('title', title);
        formData.append('annonce_description', annonceDescription);
        formData.append('typeAnnonce', typeAnnonce);
       // formData.append('typeintership', typeInternship);
        

        //formData.append('typeInternship', typeInternship);
        
        
        this.annonceService.addOther(formData).subscribe(
          () => {

            alert("Annonce Added successfully");
            this.annonceForm.reset();
            this.selectedFile = null;
            this.close.emit();
            this.getAnnonce.loadAnnonces();
          },
          (error) => {
            alert("An error occurred while adding the Announce");
            console.error(error);
          }
        );
      } else {
        alert("Please fill in all the required fields correctly");
      }
    } else {
      alert("Please fill in all the required fields correctly");
    }
  }
  onFileSelected(event: any): void{
    this.selectedFile = event.target.files[0];
    if(this.selectedFile){
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = ()=>{
        this.imageUrl = reader.result;
    };
  }
  }
  
  addAnnonce(): void {
   if(this.isLostAndFoundSelected){
    if (this.annonceForm.valid) {
      const formData = new FormData();
      const title = this.annonceForm.get('title')?.value;
      const annonceDescription = this.annonceForm.get('annonce_description')?.value;
      const typeAnnonce = this.annonceForm.get('typeAnnonce')?.value;
      const startDate = this.annonceForm.get('startDate')?.value;
      //const typeInternship = this.annonceForm.get('typeInternship')?.value;
  
      if (title && annonceDescription && typeAnnonce && startDate) {
        formData.append('title', title);
        formData.append('annonce_description', annonceDescription);
        formData.append('typeAnnonce', typeAnnonce);
        formData.append('date', startDate);
        //formData.append('typeInternship', typeInternship);
        
        if (this.selectedFile) {
          formData.append('file', this.selectedFile, this.selectedFile.name);
        }
        
        this.annonceService.addAnnonce(formData).subscribe(
          () => {
            alert("Annonce Added successfully");
            this.annonceForm.reset();
            this.selectedFile = null;
            this.close.emit();
            this.getAnnonce.loadAnnonces();
          },
          (error) => {
            alert("An error occurred while adding the Announce");
            console.error(error);
          }
        );
      } else {
        alert("Please fill in all the required fields correctly");
      }
    } else {
      alert("Please fill in all the required fields correctly");
    }
   }else if(this.isJobOfferSelected){
    this.addJob();
   }else if(this.isInternshipSelected){
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    this.addInternship();
       }
       else{
        this.addPost();
       }


  }
  


  


}



