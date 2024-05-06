import { Component } from '@angular/core';
import { ReactService } from 'src/app/FrontOffice/services/React/react.service';

@Component({
  selector: 'app-add-react',
  templateUrl: './add-react.component.html',
  styleUrls: ['./add-react.component.css']
})
export class AddReactComponent {
id_annonce!:number;
  id_user:number=1;
  constructor(private reactService: ReactService) { }

  
}
