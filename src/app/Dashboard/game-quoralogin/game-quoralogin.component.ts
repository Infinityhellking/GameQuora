import { Component } from '@angular/core';

@Component({
  selector: 'app-game-quoralogin',
  templateUrl: './game-quoralogin.component.html',
  styleUrls: ['./game-quoralogin.component.css']
})
export class GameQuoraloginComponent {


  signUp(){
    const wrapper= document.getElementsByClassName('wrapper')
    const registerlink= document.getElementsByClassName('register-link')
    const loginlink= document.getElementsByClassName('login-link')


    wrapper[0].classList.add('active')
  }

  LoginUp(){
    const wrapper= document.getElementsByClassName('wrapper')
    const registerlink= document.getElementsByClassName('register-link')
    const loginlink= document.getElementsByClassName('login-link')
    
    wrapper[0].classList.remove('active')
  }

}
