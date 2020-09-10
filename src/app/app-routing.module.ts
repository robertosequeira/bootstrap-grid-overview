import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainersComponent } from './containers/containers.component';
import { MediaQueriesComponent } from './media-queries/media-queries.component';
import { ColumnsComponent } from './columns/columns.component';
import { FlexComponent } from './flex/flex.component';

const routes: Routes = [
  { path: 'containers', component: ContainersComponent },
  { path: 'mediaqueries', component: MediaQueriesComponent },
  { path: 'columns', component: ColumnsComponent },
  { path: 'flex', component: FlexComponent },
  { path: '', pathMatch: 'full', redirectTo: 'containers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
