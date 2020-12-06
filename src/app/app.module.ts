import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// For MDB Angular Free
import { NavbarModule, 
  WavesModule, 
  CarouselModule, 
  IconsModule, 
  CardsModule,
  PopoverModule,
  CollapseModule } from 'angular-bootstrap-md'
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
// Services
import { BlogService } from './services/blog.service';
// Admin Component
import { BlogAdminComponent } from './admin/blog-admin/blog-admin.component';
import { DestinationAdminComponent } from './admin/destination-admin/destination-admin.component';
import { AboutAdminComponent } from './admin/about-admin/about-admin.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'register', component: AboutComponent },
  { path: 'about', component: BlogComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'about-admin', component: AboutAdminComponent },
  { path: 'blog-admin', component: BlogAdminComponent },
  { path: 'destination-admin', component: DestinationComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    DestinationComponent,
    BlogAdminComponent,
    DestinationAdminComponent,
    AboutAdminComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    NavbarModule, 
    WavesModule,
    CarouselModule,
    CardsModule,
    PopoverModule,
    CollapseModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
