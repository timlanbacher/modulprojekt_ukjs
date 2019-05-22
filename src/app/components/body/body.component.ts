import { Component, OnInit } from '@angular/core';
import { MeteoSwissData } from 'src/app/models/MeteoSwissData';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  meteoSwissData: MeteoSwissData;
  plz: number;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.findAll().subscribe((data) => {
      this.meteoSwissData = data;
    });
    this.plz = 8820;
  }

  onSubmit() {
    const stringPlz = this.plz.toString();
    this.meteoSwissData = undefined;
    this.restService.find(stringPlz).subscribe((data) => {
      this.meteoSwissData = data;
    });
  }
}
