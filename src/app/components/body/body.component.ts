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

  constructor(private route: ActivatedRoute, private router: Router, private restService: RestService) { }

  ngOnInit() {
    this.restService.findAll().subscribe(data =>{
      this.meteoSwissData = data;
    })
  }

}
