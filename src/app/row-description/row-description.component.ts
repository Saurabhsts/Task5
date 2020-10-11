import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-row-description',
  templateUrl: './row-description.component.html',
  styleUrls: ['./row-description.component.css']
})
export class RowDescriptionComponent implements OnInit {

  constructor(private $dialogRef: MatDialogRef<RowDescriptionComponent>, @Inject(MAT_DIALOG_DATA) public bank: any) {
    console.log(bank);



}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line: typedef
  onCloseDialog() {
    this.$dialogRef.close();
  }
}
