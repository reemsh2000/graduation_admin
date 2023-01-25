import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class DataService {
	private excersises = new BehaviorSubject<any>([]);
	public excersises$ = this.excersises.asObservable();

	constructor(private router: Router, public firestore: AngularFirestore) {}
	addExcersise(Record: any): any {
		this.firestore
			.collection("excersise")
			.add({ Record })
			.then(() => {
				const msg = "A password reset link has been sent to your email address , check spam emails";

				return {
					detail: msg,
					summary: "Success",
					severity: "success",
				};
			})
			.catch((err) => {
				console.error(err);
			});
	}

	getExcersises() {
		let excersises: any = [];
		this.firestore
			.collection("excersise")
			.get()
			.subscribe((data) => {
				data.docs.map((ele: any) => excersises.push(ele.data().email));
				this.excersises.next(excersises);
			});
	}

	updateExcersise(id: string, excersise: any) {
		this.firestore.collection("excersise").doc(id).update(excersise);
	}
	deleteExcersise(id: string) {
		this.firestore.collection("excersise").doc(id).delete();
	}

	addDoctorEmail(doctorEmail: string, doctorName: string) {
		this.firestore
			.collection("doctors")
			.add({ doctorName, doctorEmail })
			.then(() => {
				const msg = "Doctor added successfully";

				return {
					detail: msg,
					summary: "Success",
					severity: "success",
				};
			})
			.catch((err) => {
				console.error(err);
			});
	}
}
