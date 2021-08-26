import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
{ path: 'poliza', redirectTo: 'poliza/index.component'},
{ path: 'poliza/index', component: IndexComponent},
{ path: 'poliza/create', component: CreateComponent},
{ path: 'poliza/edit/ :idpoliza', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolizaRoutingModule { }
