import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllColorsDisplayComponent} from './components/all-colors-display/all-colors-display.component';

const routes: Routes = [{path: '', component: AllColorsDisplayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
