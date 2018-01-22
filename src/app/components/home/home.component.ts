import { Component, OnInit } from '@angular/core';
import { Game, Series } from "app/models/models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private items: Array<Series | Game>

  ngOnInit() {
    this.getItems()
  }

  getItems = () => {
    var fs = require('fs');

    this.items = JSON.parse(fs.readFileSync('C:/gamesLib.json', 'utf8'))
  }

  saveItems = () => {

    var fs = require('fs');
    let json = JSON.stringify(this.items, null, 2);

    fs.writeFile("C:/gamesLib.json", json, (err) => {
      if (err) {
        return alert(err);
      }

      alert("The file was saved!");
    });

  }

}
