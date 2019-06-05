import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';
import { AppRoutingModule } from '../app-routing.module';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { loadSvgResources } from '../utils/svg.util';

import 'hammerjs';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    LoginModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers:[
    {provide:'BASE_CONFIG', useValue:'http://localhost:3000'}
  ],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('CoreModule exists, cannot loaded');
    }
    loadSvgResources(ir, ds);
  }
}
