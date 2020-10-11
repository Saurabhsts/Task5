import { HomeService } from './../service/home.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RowDescriptionComponent } from '../row-description/row-description.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  banks: any;
  city = 'DELHI';
  isLoadingResults = false;

  constructor(private $homeservice: HomeService, private $dialog: MatDialog) {}

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
  // tslint:disable-next-line: typedef
  onRowDesc(bank) {
    const dialogRef = this.$dialog.open(RowDescriptionComponent, {
      height: 'auto',
      width: 'auto',
      data: bank
    });
   }
}
