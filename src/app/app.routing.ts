import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';


const appRoutes: Routes = [
  {
    path:"",
    component: ListingComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
