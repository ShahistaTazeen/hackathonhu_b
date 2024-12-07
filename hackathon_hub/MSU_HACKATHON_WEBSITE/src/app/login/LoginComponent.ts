import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BearpassService } from "../bearpass.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router,private id:BearpassService){}
  img = 'logo.png.png'
  
  M_id:string=""
  password=""
 
  login():void{
   if(this.M_id!=''&& this.password!=''){
    if(this.M_id.length!=9){
      alert("Enter valid bearpass id")
    }
    else{
      this.id.setMid(this.M_id)
    this.router.navigate(['/student'])
   }
  }else if(this.M_id!=''&&this.password==''){
    alert('Password is required')
  }
  else if(this.M_id==''&&this.password!=''){
      alert('Bearpass Id is required')
  }
  else{
    alert("Id and Password required")
  }

  }
}
