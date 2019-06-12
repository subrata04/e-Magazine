import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-addmagazine',
  templateUrl: './addmagazine.component.html',
  styleUrls: ['./addmagazine.component.css']
})
export class AddmagazineComponent implements OnInit {

  constructor( public  dialog: MatDialog) { }

  opendialog(){
    const dialogRef = this.dialog.open(ModalContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
  }

}


@Component({
  selector: 'DialogContentExampleDialog',
  templateUrl: 'modal.html',
})
export class ModalContent {}