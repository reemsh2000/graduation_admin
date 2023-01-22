import { LoginComponent } from '../pages/Auth/login/login.component';
import { SignupComponent } from '../pages/Auth/signup/signup.component';
import { DasboradComponent } from '../pages/dasborad/dasborad.component';
import { ResetpasswordComponent } from '../pages/Auth/resetpassword/resetpassword.component';
import { ProfileComponent } from '../pages/profile/profile.component';
export const routingTable = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'dashboard', component: DasboradComponent },
  { path: 'dashboard/profile', component: ProfileComponent },
];
