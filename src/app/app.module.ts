import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreateAccComponent } from './create-acc/create-acc.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { Menu1Component } from './menu1/menu1.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AccountServiceService } from './account-service.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';




const appRoute:Routes=[
 
  {path:'Home',component:HomeComponent},
   {path:'Menu',component:MenusComponent},
   {path:'AboutUs',component:AboutComponent},
   {path:'Contact',component:ContactComponent},
   {path:'SignUp',component:CreateAccComponent},
   {path:'Feedback',component:FeedbackComponent},
   {path:'Customer',component:CustomerComponent},
   {path:'Admin',component:AdminComponent},
   {path:'AdminLogin',component:AdminLoginComponent},
   {path:'Menu1',component:Menu1Component},
   
   
   
   {path:'',component:HomeComponent}

  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenusComponent,
    AboutComponent,
    ContactComponent,
    CreateAccComponent,
    FeedbackComponent,
    CustomerComponent,
    AdminComponent,
    Menu1Component,
    AdminLoginComponent,
    ViewAccountsComponent,
    Menu2Component,
    Menu3Component
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoute),HttpClientModule,HttpModule
  ],
  providers: [AccountServiceService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
