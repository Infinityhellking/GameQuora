import { Component } from '@angular/core';

@Component({
  selector: 'app-game-quoralogin',
  templateUrl: './game-quoralogin.component.html',
  styleUrls: ['./game-quoralogin.component.css']
})
export class GameQuoraloginComponent {

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


// const signUpbtnlink: HTMLElement | null = document.querySelector('.signUpbtnlink');
// const signInbtnlink: HTMLElement | null = document.querySelector('.signInbtnlink');
// const regpage: HTMLElement | null = document.querySelector('.regpage');

// signInbtnlink?.addEventListener('click', () => {
//   if (regpage) {
//     regpage.classList.toggle('active');
//   }
// });



// const signUpbtnlink=document.querySelector('.signUpbtnlink');
// const signInbtnlink= document.querySelector('signInbtnlink')
// const regpage= document.getElementsByClassName('regpage')

// signInbtnlink?.addEventListener('click',()=>{
//   regpage.classList.toggle('active');
// })