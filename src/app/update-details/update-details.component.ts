import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  itemToEdit: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<UpdateDetailsComponent>) {}

  dataForm: FormGroup;
  ngOnInit(): void {
    this.itemToEdit = this.data;
    console.log("in dialog");
    
    this.dataForm = new FormGroup({
      'body': new FormControl(this.itemToEdit.editedItem.body),
      'id': new FormControl(this.itemToEdit.editedItem.id),
      'title': new FormControl(this.itemToEdit.editedItem.title),
      'userId': new FormControl(this.itemToEdit.editedItem.userId)
    });
  }

  save() {    
    this.dialogRef.close(this.dataForm.value);    
  }

  close() {
    this.dialogRef.close();
  }

}
