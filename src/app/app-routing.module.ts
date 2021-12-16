import { RecipesComponent } from './recipes/recipes.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component : HomepageComponent },
  // { path: 'blog', component : BlogComponent},
  // { path: 'recipes', component : RecipesComponent },
  // { path: 'about', component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
