import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'testing';
  password: string = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  validChars: string = "";
  length: number;

  onSubmit(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    if(this.includeLetters){
      this.validChars += letters;
    }
    if(this.includeNumbers){
      this.validChars += numbers;
    }
    if(this.includeSymbols){
      this.validChars += symbols;
    }

    let generatedPassword = "";
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * this.validChars.length);
      generatedPassword += this.validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parseInt(value);
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  // getPassword(){
  //   return this.password;
  // }
}
