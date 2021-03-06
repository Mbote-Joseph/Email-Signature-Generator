import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmailcardComponent } from './components/emailcard/emailcard.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { HomeButtonsComponent } from './components/home-buttons/home-buttons.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { TemplateEditComponent } from './components/template-edit/template-edit.component';
import { EditHomeComponent } from './components/edit-home/edit-home.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { ImageFormComponent } from './components/image-form/image-form.component';
import { SocialFormComponent } from './components/social-form/social-form.component';
import { AddonFormComponent } from './components/addon-form/addon-form.component';
import { DesignFormComponent } from './components/design-form/design-form.component';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmailcardComponent,
    TemplatesComponent,
    HomeButtonsComponent,
    HomeFooterComponent,
    TemplateEditComponent,
    EditHomeComponent,
    GeneralFormComponent,
    HomeComponent,
    ImageFormComponent,
    SocialFormComponent,
    AddonFormComponent,
    DesignFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatFormFieldModule,
    HttpClientModule
  
  ],
  providers: [UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
