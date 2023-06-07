import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projetoCosts: string = 'assets/projeto1-costs.png'
  projetoCosts2: string = 'assets/projeto1-costs2.png'
  projetoMiniBlog: string = 'assets/Miniblog.png'
  projetoMiniBlog2: string = 'assets/Miniblog2.png'
  projetoMiniBlog3: string = 'assets/Miniblog3.png'
  projetoMiniBlog4: string = 'assets/Miniblog4.png'
  projetoMiniBlog5: string = 'assets/Miniblog5.png'
  projetoFormTinnova: string = 'assets/FormTinnova.png'
  projetoFormTinnova2: string = 'assets/FormTinnova2.png'
  projetoFormTinnova3: string = 'assets/FormTinnova3.png'
  projetoSwapi: string = 'assets/swapi.png'
  projetoSwapi2: string = 'assets/swapi2.png'
  projetoSwapi3: string = 'assets/swapi3.png'

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  expandImage() {

  }

}
