import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projetoUm: string = 'assets/projeto1-costs.png'
  projetoUmDois: string = 'assets/projeto1-costs2.png'

  constructor() { }

  ngOnInit() {
  }

}
