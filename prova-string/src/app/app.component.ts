import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StringheComponent } from './stringhe/stringhe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Angular";
 
  constructor(public dialog: MatDialog){}

  openDialog(): void {
    const dialogRef = this.dialog.open(StringheComponent, {
      width: '900px',
      height: '670px',

    });
  }
}