import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about O nas./about.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {ArrorComponent} from './arror/arror.component';

//http://localhost:4200/  -> HomeComponent
//http://localhost:4200/about  -> AboutComponent
//http://localhost:4200/posts  ->  PostsComponent
//http://localhost:4200/about/extra  ->  PostsComponent
//http://localhost:4200/admin/admin.module  ->  AdminModule

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about O nas.', component: AboutComponent, children: [
            {path: 'extra', component: AboutExtraComponent}
        ]},
    {path: 'posts', component: PostsComponent},
    {path: 'posts/:id', component: PostComponent},
    {
     path: 'admin',
     loadChildren: () => import('./admin/admin.module')
            .then( m => m.AdminModule )
    },
    {path: 'error', component: ArrorComponent},
    {path: '**', redirectTo: '/error'}
]



@NgModule({
imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
})],
exports: [RouterModule]
})
export class AppRoutingModule{

}
