import { Component, OnInit } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailCopied: boolean = false
  numberCopied: boolean = false


  constructor(private clipboard: Clipboard) {}
  
  ngOnInit(): void {
    
  }
  
  copyEmail() {
    this.clipboard.copy('renanperin27@hotmail.com');
    this.emailCopied = !this.emailCopied
  }

  copyNumber() {
    this.clipboard.copy('27996232907');
    this.numberCopied = !this.numberCopied
  }
}
