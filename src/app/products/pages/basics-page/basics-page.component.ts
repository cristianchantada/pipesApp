import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

    public nameLower: string = 'cristian';
    public nameUpper: string = 'CRISTIAN';
    public fullName: string = 'crIsTiAn vArElA cAsAS';

    public customDate: Date = new Date();

}

