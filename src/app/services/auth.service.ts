import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginValue: boolean;
  completeform: boolean;
  adminInfo: any;
  item: any;
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    public firestore: AngularFirestore
  ) {}
  private errorMsg = new BehaviorSubject<string>('');
  public errorMsg$ = this.errorMsg.asObservable();
  private email = new BehaviorSubject<any>('');
  public email$ = this.email.asObservable();

  private username = new BehaviorSubject<any>(null);
  public username$ = this.username.asObservable();

  private profileData = new BehaviorSubject<any>(null);
  public profileData$ = this.profileData.asObservable();

  public get getErrorMsg(): string {
    return this.errorMsg.getValue();
  }

  userId = '';

  checkAuth() {
    this.auth.onAuthStateChanged((user: any) => {
      if (user) {
        this.email.next(user.email);

        this.userId = user.uid;
        this.getUserName();
      }
    });
  }

  register(form: any, Record: any) {
    this.auth['createUserWithEmailAndPassword'](form.email, form.password).then(
      (res: { user: any }) => {
        this.userId = res.user.uid;
        this.firestore
          .collection('admin')
          .doc(res.user.uid)
          .set({ Record })
          .then(() => {
            this.firestore
              .collection('profile-company')
              .doc(res.user.uid)
              .set({})
              .then(() => {
                this.firestore.collection('profile').doc(res.user.uid).set({});
              });
          })

          .then(() => {
            this.router.navigate(['/company']);
          });
      }
    );
  }

  addProfileCompany(Record: any) {
    this.firestore
      .collection('profile-company')
      .doc(this.userId)
      .set({ ...Record, email: this.email.getValue() })
      .then(() => {
        this.completeform = true;
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  checkEmail(email: string) {
    return this.firestore
      .collection('profile', (ref) => ref.where('email', '==', email))
      .get();
  }

  checkCompnayName(cName: string) {
    return this.firestore
      .collection('profile-company', (ref) =>
        ref.where('companyName', '==', cName)
      )
      .get();
  }
  getAllCompanyData() {
    return this.firestore.collection('profile-company').get();
  }

  addIntrestQuestions(Record: any) {
    this.firestore
      .collection('intersetQuestion')
      .doc(this.userId)
      .set(Record)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  login(form: any) {
    this.auth['signInWithEmailAndPassword'](form.email, form.password)
      .then((res: { user: any }) => {
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        this.errorMsg.next('Invalid Email or Password');
      });
  }

  ResetPassword(email: string) {
    let msg;
    return this.auth
      .sendPasswordResetEmail(email)
      .then(
        () => {
          msg =
            'A password reset link has been sent to your email address , check spam emails';

          return {
            detail: msg,
            summary: 'Success',
            severity: 'success',
          };
          // this.router.navigate(['/login']);
        },
        (rejectionReason) => {
          msg = 'There is no user record corresponding to this identifier.';
          return rejectionReason && { detail: msg, severity: 'error', summary: 'Error' };
        }
      )
      .catch((e) => {
        msg = 'An error occurred while attempting to reset your password';
        return { detail: msg, severity: 'error', summary: 'Error' };
      });
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
      this.loginValue = false;
    });
  }
  loginWithGoogle() {
    this.auth.signInWithPopup(new GoogleAuthProvider()).then(() => {
      this.router.navigate(['/dashboard']);
    });
  }
  addProfileInformation(Record: any) {
    this.firestore
      .collection('profile')
      .doc(this.userId)
      .set(Record)
      .then(() => {
        this.completeform = true;
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  getProfileData() {
    return this.firestore
      .collection('profile')
      .doc(this.userId)
      .get()
      .subscribe((data) => {
        this.profileData.next(data.data());
      });
  }

  getUserName() {
    return this.firestore
      .collection('admin')
      .doc(this.userId)
      .get()
      .subscribe((data) => {
        this.username.next(data.data());
      });
  }
}