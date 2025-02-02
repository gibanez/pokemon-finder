import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	MatButtonModule, 
	MatCheckboxModule,
	MatToolbarModule,
	MatIconModule,
	MatInputModule,
	MatAutocompleteModule,
	MatSlideToggleModule,
	MatCardModule,
	MatGridListModule,
	MatPaginatorModule,
	MatListModule,
	MatSidenavModule,
	MatTabsModule,
	MatChipsModule,
	MatBadgeModule,
	MatProgressBarModule,
	MatTooltipModule
} from '@angular/material';

const MODULES = [
	MatButtonModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatIconModule,
	MatInputModule,
	MatAutocompleteModule,
	MatSlideToggleModule,
	MatCardModule,
	MatGridListModule,
	MatPaginatorModule,
	MatListModule,
	MatSidenavModule,
	MatTabsModule,
	MatChipsModule,
	MatBadgeModule,
	MatProgressBarModule,
	MatTooltipModule
];

@NgModule({
  declarations: [],
  imports: [
    MODULES
  ],
  exports:[
  	MODULES
  ]
})
export class MaterialModule { }
