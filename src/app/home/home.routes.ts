import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const HomeRoutes: Routes = [
  { path: 'home',  component: HomeComponent }
];
export const homeRoutes = RouterModule.forChild(HomeRoutes);
