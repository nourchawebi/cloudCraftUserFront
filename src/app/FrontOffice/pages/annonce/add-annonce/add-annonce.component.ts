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
  


  /*Initmap(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then(leaflet => {

        const map = leaflet.map(this.elementRef.nativeElement.querySelector('#map')).setView([36.7, 10], 13);

        leaflet.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
          maxZoom: 20,
          attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        map.on('click', (e: any) => {
          console.log(`LatLng: ${e.latlng.lat}, ${e.latlng.lng}`);
          if (this.marker) {
            map.removeLayer(this.marker);
          }
        
          // Update form fields based on coordinates
          this.annonceForm.patchValue({
            locationLx: e.latlng.lng,
            locationLy: e.latlng.lat
          });
        
          this.marker = leaflet.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
            .bindPopup(`Latitude: ${e.latlng.lat}, Longitude: ${e.latlng.lng}`);
        
          // Fetch address from coordinates and update form fields
          this.getAddressFromCoords(e.latlng.lat, e.latlng.lng).then((address) => {
            this.annonceForm.patchValue({
              governorate: address.state || '',
              country: address.country || '',
            });
          });
        });
        
        
        
        

        map.on('dblclick', (e: any) => {
          if (this.circleMarker) {
            map.removeLayer(this.circleMarker);
          }
          this.circleMarker = leaflet.circleMarker([e.latlng.lat, e.latlng.lng], {
            color: 'red',
            weight: 4,
            radius: 150
          }).addTo(map);
        });

        map.on('contextmenu', (e: any) => {
        });
      }).catch(error => {
        console.error('Error loading Leaflet', error);
      });
    }
  }

  async getAddressFromCoords(latitude: number, longitude: number): Promise<any> {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`);
    const data = await response.json();
    return {
        country: data.address?.country,
        city: data.address?.city,
    };
}
showMap: boolean = false;

toggleMap(): void {
  this.showMap = !this.showMap;
  this.Initmap();
}
*/


}



