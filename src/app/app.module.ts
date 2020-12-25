import { TreeModule } from 'angular-tree-component';	
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';	
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";	
import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddDetailComponent } from './add-detail/add-detail.component';
//import { HelloComponent } from './hello.component';
// import { DialogComponent } from './dialog/dialog.component';





@NgModule({
  declarations: [	
    AppComponent, AddDetailComponent	
  ],
  imports: [
    BrowserModule, 
   
    
    CommonModule,
     TreeModule.forRoot(),	 
    AppRoutingModule,
    HttpClientModule,
    ],
 
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    ],
  providers: []
})
export class AppModule { }
