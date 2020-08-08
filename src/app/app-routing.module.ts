import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CanaccessGuard } from './guards/canaccess.guard';


const routes: Routes = [

{
  path:'',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)

},
{
  path:'register',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)

},
{
  path:'marketplace/:id',
  loadChildren: () => import('./marketplace-site/site/site.module').then(m => m.HomeMarketplace),
  canActivate:[CanaccessGuard]

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
