import { Component } from '@angular/core';

@Component({
  selector: 'app-reglog',
  templateUrl: './reglog.component.html',
  styleUrls: ['./reglog.component.css']
})
export class ReglogComponent {


  constructor(){

  }
  
  
    signUp(){
      const regpage= document.getElementsByClassName('regpage')
      const signUpbtnlink= document.getElementsByClassName('signUpbtnlink')
      const signInbtnlink= document.getElementsByClassName('signInbtnlink')
      
      regpage[0].classList.add('active')
    }
  
    LoginUp(){
      const regpage= document.getElementsByClassName('regpage')
      const signUpbtnlink= document.getElementsByClassName('signUpbtnlink')
      const signInbtnlink= document.getElementsByClassName('signInbtnlink')
      
      regpage[0].classList.remove('active')
    }
}
