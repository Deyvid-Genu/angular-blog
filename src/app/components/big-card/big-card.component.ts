import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()
  mainNewsImage: string = '';
  @Input()
  mainNewsTitle: string = '';
  @Input()
  mainNewsDescription: string = '';
  @Input()
  mainNewsDate: string = '';
  @Input()
  Id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
