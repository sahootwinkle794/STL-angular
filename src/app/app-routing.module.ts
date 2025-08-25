import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { SakhyamComponent } from './pages/products/sakhyam/sakhyam.component';
import { DocumentMSystemComponent } from './pages/products/document-m-system/document-m-system.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then(m => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then(m => m.ContactModule),
      },
          {
        path: 'career',
        loadChildren: () =>
          import('./career/career.module').then(m => m.CareerModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./pages/services/services.module').then(m => m.ServicesModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/products/products.module').then(m => m.ProductsModule),
      },

      // {path:'sakhyam',component:SakhyamComponent},
      // {path : 'document-m-system',component:DocumentMSystemComponent},


      
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled',                           // these two section is built for scrolling back to top
      anchorScrolling: 'enabled'                                      // this is also built for scrolling back to top
    })],

  exports: [RouterModule],

})
export class AppRoutingModule {}
