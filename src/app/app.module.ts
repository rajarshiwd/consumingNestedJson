import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import{HolidaysComponent} from './holiday.component';
import{HolidayDetailComponent} from'./holidaydetail.components';
import{routing} from './app.route';
import{DashComponent} from './dashboard.component';
import{CheckPipe} from './check.pipe';
import{KeysPipe} from './key.pipe';
import{ObjNgFor} from './new.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, 
  MdCheckboxModule,
  MdToolbar,
  MdCardModule,
MdToolbarModule,
MdDatepickerModule,
MdInputModule,
MdNativeDateModule} from '@angular/material';
import 'hammerjs';







@NgModule({
  declarations: [
    AppComponent,
    HolidayDetailComponent,
    HolidaysComponent,
    DashComponent,
    CheckPipe,
    KeysPipe,
    ObjNgFor
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdCardModule,
    MdToolbarModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule
  
    
  ],
  providers: [
   
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
