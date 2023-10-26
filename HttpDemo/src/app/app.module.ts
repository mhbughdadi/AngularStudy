import { RouterModule, Routes } from '@angular/router';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { FollowersService } from './services/followers.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    NavBarComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'followers/:username',
        component: GithubProfileComponent
      },
      {
        path:'followers',
        component: GithubFollowersComponent
      },      {
        path:'posts',
        component: PostsComponent
      },      
      {
        path:'**',
        component: NotFoundComponent
      },
    ])
    
  ],
  providers: [
    PostService,
    [{provide: ErrorHandler, useClass: AppErrorHandler}],
    FollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
