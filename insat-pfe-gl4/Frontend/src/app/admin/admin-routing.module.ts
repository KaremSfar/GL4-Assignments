import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddSessionComponent} from "./session/add-session/add-session.component";
import {SessionComponent} from "./session/session.component";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./teachers/teachers.module').then((m) => m.TeachersModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./library/library.module').then((m) => m.LibraryModule),
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./departments/departments.module').then(
        (m) => m.DepartmentsModule
      ),
  },
  {
    path: 'staff',
    loadChildren: () =>
      import('./staff/staff.module').then((m) => m.StaffModule),
  },
  {
    path: 'holidays',
    loadChildren: () =>
      import('./holidays/holidays.module').then((m) => m.HolidaysModule),
  },
  {
    path: 'fees',
    loadChildren: () => import('./fees/fees.module').then((m) => m.FeesModule),
  },
  {
    path: 'sessions/add-session',
    component: AddSessionComponent
  },
  {
    path: 'sessions/all',
    component: SessionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
