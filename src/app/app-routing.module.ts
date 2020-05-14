import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RessourceBoardModule } from './ressource-board/ressource-board.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { CrmModule } from './crm/crm.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';


const routes: Routes = [
  // { path: 'ressourceBoard', module: RessourceBoardModule },
  // { path: 'catalogue', module: CatalogueModule },
  // { path: 'crm', module: CrmModule },
  // { path: 'dashboard', module: DashboardModule },
  // { path: 'home', module: HomeModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
