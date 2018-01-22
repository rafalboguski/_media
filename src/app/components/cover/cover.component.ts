import { Component, OnInit, Input } from '@angular/core';
import { Game, Series } from "app/models/models";

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  constructor() { }

  @Input() item: Game | Series;

  ngOnInit() {
  }

}
