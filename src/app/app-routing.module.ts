import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { BookComponent } from './book/book.component';
import { ReadbooksComponent } from './readbooks/readbooks.component';
import { ReadingbooksComponent } from './readingbooks/readingbooks.component';
import { ReadingPlanComponent } from './readingPlan/readingPlan.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path:'allbooks',
    component:AllbooksComponent
  },
  {
    path:'readingbooks',
    component:ReadingbooksComponent
  },
  {
    path:'plantoRead',
    component:ReadingPlanComponent
  },
  {
    path:'read',
    component:ReadbooksComponent
  },
  {
    path:'book',
    component:BookComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
