import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about O nas./about.component';
import {AppRoutingModule} from './app.routing.module';
import {ArrorComponent} from './arror/arror.component';
import {SharedModule} from './admin/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutExtraComponent,
    HomeComponent,
    PostComponent,
    PostsComponent,
    AboutComponent,
    ArrorComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
