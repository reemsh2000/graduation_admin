import { AddDoctorComponent } from './../pages/add-doctor/add-doctor.component';
import { LoginComponent } from '../pages/Auth/login/login.component';
import { SignupComponent } from '../pages/Auth/signup/signup.component';
import { DasboradComponent } from '../pages/dasborad/dasborad.component';
import { ResetpasswordComponent } from '../pages/Auth/resetpassword/resetpassword.component';
import { AddExerciseComponent } from 'app/pages/add-exercise/add-exercise.component';
export const routingTable = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'dashboard', component: DasboradComponent },
  { path: 'dashboard/add-exercise', component: AddExerciseComponent },
  { path: 'dashboard/edit-exercise', component: AddExerciseComponent },
  { path: 'dashboard/add-doctor', component: AddDoctorComponent },
];
