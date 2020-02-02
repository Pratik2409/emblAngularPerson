import { EditPersonComponent } from './person/edit-person/edit-person.component';
import { ListPersonComponent } from './person/list-person/list-person.component';
import { AddPersonComponent } from './person/add-person/add-person.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'add-person', component: AddPersonComponent },
  { path: 'list-person', component: ListPersonComponent },
  { path: 'edit-person', component: EditPersonComponent },
  {path : '', component : ListPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
