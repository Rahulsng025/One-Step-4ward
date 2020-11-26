import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// For MDB Angular Free
import { NavbarModule, WavesModule } from 'angular-bootstrap-md'
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'register', component: AboutComponent },
  { path: 'about', component: BlogComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    NavbarModule, 
    WavesModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
