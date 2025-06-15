import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { AdminComponent } from './admin.component';
import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AdminComponent,
    ErrorComponent
  ],
  providers: [],
})
export class SharedModule { }
