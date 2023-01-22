import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './Router/app-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { environment } from '../environments/environment';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { routingTable } from './Router/routes';
import { ChartModule } from 'primeng/chart';

import { LoginComponent } from './pages/Auth/login/login.component';
import { SignupComponent } from './pages/Auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { SnapshotComponent } from './components/common/snapshot/snapshot.component';
import { NavComponent } from './components/common/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DasboradComponent } from './pages/dasborad/dasborad.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ResetpasswordComponent } from './pages/Auth/resetpassword/resetpassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatTableModule } from '@angular/material/table';
import { ErrorMessageComponent } from './components/common/error-message/error-message.component';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    SnapshotComponent,
    SnapshotComponent,
    SidebarComponent,
    NavComponent,
    DasboradComponent,
    ResetpasswordComponent,
    ProfileComponent,
    ErrorMessageComponent,
  ],
  imports: [
    MatTableModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routingTable),
    ChartModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    TableModule
    // MessageService
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(library: FaIconLibrary){
  //   library.addIconPacks(fas,far)
  // }
}
