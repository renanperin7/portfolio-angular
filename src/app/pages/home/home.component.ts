import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageUrl: string = 'assets/renan-oficial.jpg'
  htmlIcon: string = 'assets/icons8-html-48.png'
  cssIcon: string = 'assets/icons8-css-48.png'
  javascriptIcon: string = 'assets/icons8-javascript-48.png'
  typescriptIcon: string = 'assets/icons8-typescript-48.png'
  angularIcon: string = 'assets/icons8-angular-50.png'
  reactIcon: string = 'assets/icons8-react-40.png'
  bootstrapIcon: string = 'assets/icons8-bootstrap-48.png'

  constructor() { }

  ngOnInit() {
  }

}
