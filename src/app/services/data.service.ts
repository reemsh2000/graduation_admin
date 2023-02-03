import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private exercises = new BehaviorSubject<any>([])
  public exercises$ = this.exercises.asObservable()

  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    private auth: AngularFireAuth,
  ) {}
  addExercise(Record: any): any {
    let exercises = { ...Record, id: this.firestore.createId() }
    return this.firestore
      .collection('exercises')
      .doc(exercises.id)
      .set({ ...exercises })
      .then(() => {
        const msg = 'exercises added successfully'

        return {
          detail: msg,
          severity: 'success',
          summary: 'Success',
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  getExercises() {
    let exercises: any = []
    return this.firestore
      .collection('exercises')
      .get()
      .subscribe((data: any) => {
        data.docs.map((ele: any) => exercises.push(ele.data()))
        this.exercises.next(exercises)
      })
  }

  getExercise(exersiseId: string) {
    return this.firestore.collection('exercises').doc(exersiseId).get()
  }

  updateExercises(id: string, exercises: any) {
    return this.firestore
      .collection('exercises')
      .doc(id)
      .update({ ...exercises, id })
  }
  deleteExercises(id: string) {
    return this.firestore.collection('exercises').doc(id).delete()
  }

  addNewDoctor(form: any) {
    return this.auth['createUserWithEmailAndPassword'](
      form.email,
      'doctor123',
    ).then((res: { user: any }) => {
     return this.firestore
        .collection('doctors')
        .doc(res.user.uid)
        .set({ name: form.name, email: form.email, id: res.user.uid })
        .then(() => {
          const msg = 'Doctor added successfully'
          return {
            detail: msg,
            severity: 'success',
            summary: 'Success',
          }
        })
        .catch((err) => {
          console.error(err)
        })
    })
  }
}
