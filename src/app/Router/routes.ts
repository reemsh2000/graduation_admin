import { AddDoctorComponent } from './../pages/add-doctor/add-doctor.component'
import { LoginComponent } from '../pages/Auth/login/login.component'
import { SignupComponent } from '../pages/Auth/signup/signup.component'
import { DasboradComponent } from '../pages/dasborad/dasborad.component'
import { ResetpasswordComponent } from '../pages/Auth/resetpassword/resetpassword.component'
import { AddExerciseComponent } from 'app/pages/add-exercise/add-exercise.component'
import { EditExerciseComponent } from 'app/pages/edit-exercise/edit-exercise.component'
import { DoctorsComponent } from './../pages/doctors/doctors.component';
import { EditDoctorComponent } from './../pages/edit-doctor/edit-doctor.component';

export const routingTable = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'dashboard', component: DasboradComponent },
  { path: 'dashboard/doctors', component: DoctorsComponent },
  { path: 'dashboard/add-exercise', component: AddExerciseComponent },
  { path: 'dashboard/edit-exercise/:id', component: EditExerciseComponent },
  { path: 'dashboard/edit-doctor/:id', component: EditDoctorComponent },
  { path: 'dashboard/add-doctor', component: AddDoctorComponent },
]
