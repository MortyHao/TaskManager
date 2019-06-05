import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatTooltipModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatButtonToggleModule,
} from '@angular/material';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DirectiveModule } from '../directive/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageListComponent } from './image-list/image-list.component';
import { AgeInputComponent } from './age-input/age-input.component';

//this module is used for importing and exporting
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    DirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    DirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    ImageListComponent,
    MatButtonToggleModule,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  declarations: [ConfirmDialogComponent, ImageListComponent, AgeInputComponent],
})
export class SharedModule { }
