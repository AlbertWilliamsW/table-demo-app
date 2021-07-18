import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Tour of Heroes';
  // ngOnChanges(){
  //   console.log("child ngOnChanges");    
  // }

  // ngOnInit(): void {
  //   console.log("Parent ngOnInit");    
  // }

  // ngAfterContentInit(){
  //   console.log("Parent ngAfterContentInit"); 
  // }

  // ngAfterContentChecked(){
  //   console.log("Parent ngAfterContentChecked"); 
  // }

  // ngAfterViewInit(){
  //   console.log("Parent ngAfterViewInit"); 
  // }

  // ngAfterViewChecked(){
  //   console.log("Parent ngAfterViewChecked"); 
  // }

  // ngOnDestroy(){
  //   console.log("Parent ngOnDestroy"); 
  // }
}
