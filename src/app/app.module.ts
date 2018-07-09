import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventComponent } from './event/event.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './app.routing';
import { AuthGuard } from './shared/auth.guard/auth.guard';
import { DevExtremeModule } from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    PageNotFoundComponent,
    EventComponent,
    FormEditComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    DevExtremeModule,
    RouterModule.forRoot(
      routes,
    )
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
