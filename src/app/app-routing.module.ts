import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './Experiencia/experiencia/experiencia.component';
import { HabilidadeComponent } from './Habilidade/habilidade/habilidade.component';
import { HomeComponent } from './home/home/home.component';
import { LinkComponent } from './link/link/link.component';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:SidenavComponent
  // },
  {
    path:'',
    redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'habilidade',
    component:HabilidadeComponent
  },
  {
    path:'experiencia',
    component:ExperienciaComponent 

  },
  {
    path:'link',
    component:LinkComponent 

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
