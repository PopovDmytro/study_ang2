import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [`
    h1  {
      margin: 0;
      font-size: 12px;
      color: #999;
    }
  `]
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
