import { HomeService } from './../service/home.service';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  banks: any;
  city = 'DELHI';
  isLoadingResults = false;

  constructor(private $homeservice: HomeService) {}

  ngOnInit(): void {
    this.Getallbanks();
  }

  // tslint:disable-next-line: typedef
  Getallbanks() {
    this.isLoadingResults = true;
    this.$homeservice.Getdata(this.city).subscribe((data) => {
    this.banks = data;
    this.isLoadingResults = false;
    });
  }

  // tslint:disable-next-line: typedef
  onSelectCity(selectedCity: string) {
    this.city = selectedCity;
    this.Getallbanks();
  }
}
