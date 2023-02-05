import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { environment } from "../environments/environment";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { TableModule } from "primeng/table";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { routingTable } from "./Router/routes";
import { ChipsModule } from "primeng/chips";
import {DropdownModule} from 'primeng/dropdown';

import { LoginComponent } from "./pages/Auth/login/login.component";
import { SignupComponent } from "./pages/Auth/signup/signup.component";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from "./components/common/sidebar/sidebar.component";
import { NavComponent } from "./components/common/nav/nav.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DasboradComponent } from "./pages/dasborad/dasborad.component";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { ResetpasswordComponent } from "./pages/Auth/resetpassword/resetpassword.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MessageComponent } from "./components/common/message/message.component";
import { MessageService } from "primeng/api";
import { AuthCommonPicComponent } from "./components/common/auth-common-pic/auth-common-pic.component";
import { AddExerciseComponent } from "./pages/add-exercise/add-exercise.component";
import { AddDoctorComponent } from './pages/add-doctor/add-doctor.component';
import { EditExerciseComponent } from './pages/edit-exercise/edit-exercise.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { EditDoctorComponent } from './pages/edit-doctor/edit-doctor.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		SignupComponent,
		SidebarComponent,
		SidebarComponent,
		NavComponent,
		DasboradComponent,
		ResetpasswordComponent,
		MessageComponent,
		AuthCommonPicComponent,
		AddExerciseComponent,
  AddDoctorComponent,
  EditExerciseComponent,
  DoctorsComponent,
  EditDoctorComponent,
	],
	imports: [
		MatTableModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		RouterModule.forRoot(routingTable),
		AngularFirestoreModule,
		BrowserModule,
		HttpClientModule,
		CommonModule,
		ProgressSpinnerModule,
		FormsModule,
		BrowserAnimationsModule,
		MessagesModule,
		MessageModule,
		TableModule,
		ChipsModule,
		DropdownModule
	],
	providers: [MessageService],
	bootstrap: [AppComponent],
})
export class AppModule {
}
