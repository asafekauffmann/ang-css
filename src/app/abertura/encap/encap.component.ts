import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-encap',
   templateUrl: './encap.component.html',
   styleUrls: ['./encap.component.sass']
})
export class EncapComponent implements OnInit {

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
