import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { UsersPageComponent } from './pages/users-page/users-page.component'
import { MainPageComponent } from './pages/main-page/main-page.component'
import { MainLayoutComponent } from '../common/layouts/main-layout/main-layout.component'


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: MainPageComponent },
      { path: 'users', component: UsersPageComponent }
    ]),
    CommonModule
  ],
  declarations: [
    UsersPageComponent,
    MainPageComponent,
    MainLayoutComponent
  ]
})
export class DashboardModule {
}
