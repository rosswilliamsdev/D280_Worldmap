import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldComponent } from './world/world.component';
import { FactsComponent } from './facts/facts.component';

const routes: Routes = [
  { path: 'world', component: WorldComponent },
  { path: 'facts', component: FactsComponent },
  { path: '', redirectTo: '/world', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
