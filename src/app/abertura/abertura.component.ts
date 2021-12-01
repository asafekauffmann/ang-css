import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-abertura',
   templateUrl: './abertura.component.html',
   styleUrls: ['./abertura.component.sass']
})
export class AberturaComponent implements OnInit {

   storedTheme: string | null  = localStorage.getItem('theme-color');

   constructor() { }

   ngOnInit(): void {
   }

   setTheme() {
      if(this.storedTheme === 'theme-dark') {
         localStorage.setItem('theme-color', 'theme-light');
         this.storedTheme = localStorage.getItem('theme-color');
      } else {
         localStorage.setItem('theme-color', 'theme-dark');
         this.storedTheme = localStorage.getItem('theme-color');

      }
   }

}
