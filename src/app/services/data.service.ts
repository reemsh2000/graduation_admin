import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class DataService {
	constructor(private router: Router, public firestore: AngularFirestore) {}
	addExcersise(Record: any):any {
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
}
