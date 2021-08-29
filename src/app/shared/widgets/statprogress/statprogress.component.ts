import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statprogress',
  templateUrl: './statprogress.component.html',
  styleUrls: ['./statprogress.component.scss']
})
export class StatprogressComponent implements OnInit {

  @Input() title: string;
  @Input() value: number;
  @Input() progress: number;
  @Input() text: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {

  }

}
