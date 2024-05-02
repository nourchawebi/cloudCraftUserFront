import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/FrontOffice/models/AnnonceMang/Comment';
import { CommentService } from 'src/app/FrontOffice/services/Comment/comment.service';
declare var webkitSpeechRecognition: any
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  filteredText:any;
  myComment:string='';
  isRecognizing: boolean = false; 
  recognition: any;
  transcription: string = '';
  commentForm: FormGroup;
  id_user:number=1;
  @Output() close = new EventEmitter<void>();
  @Input() id : any | undefined;

  constructor(private formBuilder : FormBuilder,private http: HttpClient , private commentService: CommentService){
    this.commentForm= this.formBuilder.group({
      comment_description: ['']
    });

    this.recognition = new webkitSpeechRecognition();
    this.recognition.lang = 'en-US';
  
    this.recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      console.log(transcript); // Display recognized text
      this.transcription += transcript + ' ';
      this.commentForm.get('comment_description')?.setValue(this.transcription);
    };

  }
  toggleRecognition() {
    if (!this.isRecognizing) {
      this.transcription = ''; // Clear previous transcription
      this.recognition.start(); // Start recognition
    } else {
      this.recognition.stop(); // Stop recognition
    }
    this.isRecognizing = !this.isRecognizing; // Toggle recognition flag
  
  
  }
  
  addComment():void{
   
    if(this.transcription!=""){
      const commentDescription = this.transcription;
      
      
      
      const formData = new FormData();
      formData.append("comment_text", commentDescription );
      formData.append("annonce_id", this.id.toString());
      formData.append("id_user", this.id.toString());
      //console.log("New 2222222222222222222comment",formData);
      
     this.commentService.addComment(formData).subscribe(()=> {
        alert("Comment added successfully!");
        this.commentForm.reset();
        this.close.emit();
      }, err => {
        
        alert("An error occurred while adding Comment.");
        console.log(err);
      });
      return;
    }
    if(this.commentForm.valid){
      const commentDescription = this.commentForm.get('comment_description')?.value;
        const formData = new FormData();
        formData.append("comment_text", commentDescription );
        formData.append("annonce_id", this.id.toString());
        formData.append("id_user", this.id.toString());
 
       

       this.commentService.addComment(formData).subscribe(()=> {
          alert("Comment added successfully!");
          this.commentForm.reset();
          this.close.emit();
        }, err => {
          alert("An error occurred while adding Comment.");
          console.log(err);
        });
      }
    }
   
  
  onClose(){
    this.close.emit();
  }

}
