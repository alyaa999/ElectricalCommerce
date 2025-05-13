import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from './validationFns';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { RegisterRequest } from '../../Interfaces/Auth/Auth.models';



interface userRegisteration{
  FirstName:string,
  LastName:string,
  Email:string,
  Password:string,
  ConfirmPassword:string,
  phoneNumber:string
}
@Component({
  selector: 'app-register',
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
   user:userRegisteration={FirstName:"",LastName:"",Email:"",phoneNumber:"",Password:"",ConfirmPassword:""};
     errorResponceMsg:String=""

   constructor(private router:Router,private authService:AuthService){

   }
   FrmValidation:FormGroup=new FormGroup({
      FirstName:new FormControl(this.user.FirstName,[Validators.required,Validators.pattern("[a-zA-Z-' ]{1,49}$")]),
      LastName:new FormControl(this.user.LastName,[Validators.required ,Validators.pattern("[a-zA-Z-' ]{1,49}$")]),
      phoneNumber:new FormControl(this.user.phoneNumber,Validators.required),
      Email:new FormControl (this.user.Email ,[Validators.required ,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")] ),
      Password:new FormControl(this.user.Password,Validators.required),
      ConfirmPassword:new FormControl(this.user.ConfirmPassword,Validators.required),
   },{validators:passwordMatchValidator()})

   onSubmit(){
      console.log(this.user)
      if (this.FrmValidation.valid) {
        this.user = this.FrmValidation.value;

      const data:RegisterRequest={
        Email:this.user.Email,
        DisplayName:this.user.FirstName+ ' ' +this.user.LastName,
        PhoneNumber:this.user.phoneNumber,
        Password:this.user.Password
      }
        this.authService.register(data).subscribe({
            next: (Response: any)=>{
              console.log(Response)
              this.router.navigate(['/login']);
            },
            error: (res)=>{
              this.errorResponceMsg = res.error.message
            }
          });
        } else {
        Object.keys(this.FrmValidation.controls).forEach(key => {
          const control = this.FrmValidation.get(key);
          control?.markAsTouched();
        });
    }
  }
}
