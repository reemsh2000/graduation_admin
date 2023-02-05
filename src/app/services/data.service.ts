import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class DataService {
	private exercises = new BehaviorSubject<any>([]);
	public exercises$ = this.exercises.asObservable();
	private doctors = new BehaviorSubject<any>([]);
	public doctors$ = this.doctors.asObservable();
	constructor(private router: Router, public firestore: AngularFirestore, private auth: AngularFireAuth) {}
	addExercise(Record: any): any {
		let exercises = { ...Record, id: this.firestore.createId() };
		return this.firestore
			.collection("exercises")
			.doc(exercises.id)
			.set({ ...exercises })
			.then(() => {
				const msg = "exercises added successfully";

				return {
					detail: msg,
					severity: "success",
					summary: "Success",
				};
			})
			.catch((err) => {
				console.error(err);
			});
	}

	getExercises() {
		let exercises: any = [];
		return this.firestore
			.collection("exercises")
			.get()
			.subscribe((data: any) => {
				data.docs.map((ele: any) => exercises.push(ele.data()));
				this.exercises.next(exercises);
				console.log({ exercises });
			});
	}
	getDoctors() {
		let doctors: any = [];
		return this.firestore
			.collection("doctors")
			.get()
			.subscribe((data: any) => {
				data.docs.map((ele: any) => doctors.push(ele.data()));
				this.doctors.next(doctors);
			});
	}

	getExercise(exersiseId: string) {
		return this.firestore.collection("exercises").doc(exersiseId).get();
	}
	getDoctor(exersiseId: string) {
		return this.firestore.collection("doctors").doc(exersiseId).get();
	}

	updateExercise(id: string, exercises: any) {
		return this.firestore
			.collection("exercises")
			.doc(id)
			.update({ ...exercises, id });
	}
	updateDoctor(id: string, exercises: any) {
		return this.firestore
			.collection("doctors")
			.doc(id)
			.update({ ...exercises, id });
	}
	deleteExercise(id: string) {
		return this.firestore.collection("exercises").doc(id).delete();
	}
	deleteDoctor(id: string) {
		return this.firestore.collection("doctors").doc(id).delete();
	}
	addNewDoctor(form: any) {
		return this.auth["createUserWithEmailAndPassword"](form.email, "doctor123").then((res: { user: any }) => {
			return this.firestore
				.collection("doctors")
				.doc(res.user.uid)
				.set({ name: form.name, email: form.email, id: res.user.uid })
				.then(() => {
					const msg = "Doctor added successfully";
					return {
						detail: msg,
						severity: "success",
						summary: "Success",
					};
				})
				.catch((err) => {
					console.error(err);
				});
		});
	}
}
