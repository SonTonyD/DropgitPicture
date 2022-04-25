import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DinhComponent } from './drop-picture/dinh/dinh.component';
import { KhieuComponent } from './drop-picture/khieu/khieu.component';
import { NguyenComponent } from './drop-picture/nguyen/nguyen.component';

const routes: Routes = [
    {path: 'dinh', component: DinhComponent },
    {path: 'nguyen', component: NguyenComponent },
    {path: 'khieu', component: KhieuComponent },
    
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule {}