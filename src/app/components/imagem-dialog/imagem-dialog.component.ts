import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-imagem-dialog',
  templateUrl: './imagem-dialog.component.html',
  styleUrls: ['./imagem-dialog.component.scss']
})
export class ImagemDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  
  
}