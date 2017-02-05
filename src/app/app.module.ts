import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataComponent } from './data/data.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';
import { SearchBarComponent } from './data/components/search-bar/search-bar.component';
import { DataTableComponent } from './data/components/data-table/data-table.component';
import { DetailsPanelComponent } from './data/components/details-panel/details-panel.component';
import { AddRemoveComponent } from './data/components/add-remove/add-remove.component';
import { DataService } from './common/services/dataService/data.service'
import { SearchPipe } from './common/pipes/SearchPipe'
import { EditableField } from './data/components/details-panel/components/editable-field/editable-field.component';

const appRoutes: Routes = [
  { path: '', component: DataComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'monitor', component: MonitorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DataComponent,
    AnalysisComponent,
    MonitorComponent,
    SearchBarComponent,
    DataTableComponent,
    DetailsPanelComponent,
    AddRemoveComponent,
    SearchPipe,
    EditableField
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
