import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { SampleServiceService } from '../sample-service.service';
import { UpdateDetailsComponent } from '../update-details/update-details.component';

@Component({
  selector: 'app-sample-project',
  templateUrl: './sample-project.component.html',
  styleUrls: ['./sample-project.component.css']
})
export class SampleProjectComponent implements OnInit {

  constructor(private dataService: SampleServiceService,
    public dialog: MatDialog) { }

  dataForm: FormGroup;

  receivedData: any = [];
  ngOnInit(): void {
    this.dataService.getData().subscribe((data)=>{
      this.receivedData = data;
    });

    this.dataForm = new FormGroup({
      'body' : new FormControl(null),
      'id' : new FormControl(null),
      'title' : new FormControl(null),
      'userId' : new FormControl(null),
    });
  }

  editData(editedItemIndex: number){
    const dialogConfig = new MatDialogConfig();  

    dialogConfig.disableClose = true;
    dialogConfig.width = '100%';
    dialogConfig.data ={
      editedIndex: editedItemIndex,
      editedItem:this.receivedData[editedItemIndex]
    };
    
    const dialogRef = this.dialog.open(UpdateDetailsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        (data) => {
          console.log("Dialog output:", data);
          if(data !== undefined){
            this.receivedData[editedItemIndex].body = data?.body;
            this.receivedData[editedItemIndex].id = data?.id;
            this.receivedData[editedItemIndex].title = data?.title;
            this.receivedData[editedItemIndex].userId = data?.userId;
          }            
        }
    );    
  }
}

