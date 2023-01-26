import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private excersises = new BehaviorSubject<any>([])
  public excersises$ = this.excersises.asObservable()

  constructor(private router: Router, public firestore: AngularFirestore) {}
  addExcersise(Record: any): any {
    let excersise = { ...Record, id: this.firestore.createId() }
    return this.firestore
      .collection('excersise')
      .doc(excersise.id)
      .set({ Record: excersise })
      .then(() => {
        const msg =
          'A password reset link has been sent to your email address , check spam emails'

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

  getExcersises() {
    let excersises: any = []
    return this.firestore
      .collection('excersise')
      .get()
      .subscribe((data: any) => {
        data.docs.map((ele: any) => excersises.push(ele.data().Record))
        this.excersises.next(excersises)
      })
  }

  getExcersise(exersiseId: string) {
    return this.firestore
      .collection('excersise')
      .doc(exersiseId)
      .get()
      .subscribe((data: any) => {
        console.log(data.data())
        return data.data()
      })
  }

  updateExcersise(id: string, excersise: any) {
    return this.firestore.collection('excersise').doc(id).update(excersise)
  }
  deleteExcersise(id: string) {
    return this.firestore.collection('excersise').doc(id).delete()
  }

  addDoctorEmail(form: any) {
    return this.firestore
      .collection('doctors')
      .add({ name: form.name, doctorEmail: form.doctorEmail })
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
  }
}
