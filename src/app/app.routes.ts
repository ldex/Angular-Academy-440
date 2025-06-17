import { Routes } from '@angular/router';





export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', loadComponent: () => import('./shared/home.component'), title: 'Home Page' },
  { path: 'contact', loadComponent: () => import('./shared/contact.component').then(m => m.ContactComponent), title: 'Contact Us' },
  { path: 'admin', loadComponent: () => import('./shared/admin.component').then(m => m.AdminComponent), title: 'Admin Area' },
  { path: 'products', loadChildren: () =>
                        import('./products/products.routes')
                        .then(m => m.routes) },
  { path: '**', loadComponent: () => import('./shared/error.component').then(m => m.ErrorComponent), title: 'Page Not Found' }
];