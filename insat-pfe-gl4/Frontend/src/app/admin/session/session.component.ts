import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Session} from './session.model';
import {FormDialogComponent} from "../students/all-students/dialogs/form-dialog/form-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Teachers} from "../teachers/all-teachers/teachers.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AddModalComponent} from "./add-modal/add-modal.component";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.sass']
})
export class SessionComponent implements OnInit {
  // @ts-ignore
  dataSource: Session[] = [
    {
      nbr: 1,
      dob: new Date(),
      doe: new Date(),
      president: {
        "gender": "male",
        "email": "test@email.com",
        "date": "2018-02-25T14:22:18Z",
        "department": "mathematics",
        "mobile": "1234567890",
        "name": "John Deo",
        "degree": "M.Sc., PHD."
      },
      students: []
    }
  ];
  displayedColumns: string[] = ['nbr', 'dob', 'doe', 'president', 'actions'];


  ngOnInit() {
  }

  constructor(public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }




    openAddDialog(): void {
      const dialogRef = this.dialog.open(AddModalComponent, {
        width: '640px',
        disableClose: true,
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result === 1) {
          // After dialog is closed we're doing frontend updates
          // For add we're just pushing a new row inside DataServicex
          this.showNotification(
            'snackbar-success',
            'La soutenance a été créée !',
            'bottom',
            'center'
          );
        }
      });
    }


    showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }


}

