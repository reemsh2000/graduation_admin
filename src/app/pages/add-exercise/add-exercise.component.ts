import { AsideService } from "app/services/aside.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "app/services/data.service";

@Component({
	selector: "app-profile",
	templateUrl: "./add-exercise.component.html",
	styleUrls: ["./add-exercise.component.css"],
})
export class AddExerciseComponent implements OnInit {
	completeformprofile: boolean;
	excersiseForm = new FormGroup({
		name: new FormControl(""),
		urlVideo: new FormControl(""),
		description: new FormControl(""),
		instruction: new FormControl(""),
		restrictions: new FormControl([]),
	});
	setEmail: any;
	setName: any;
	setPhone: any;
	msg: any = {};
	constructor(private dataService: DataService, private router: Router, public asideService: AsideService) {
		this.asideService.setSection("Add Excersise");

		// this.authService.email$.subscribe((data) => {
		//   this.setEmail = data;
		//   this.excersiseForm.setValue({
		//     email: this.setEmail,
		//     name: '',
		//     title: '',
		//     phone: '',
		//     nationality: '',
		//     gender: '',
		//   });
		// });
		// this.authService.username$.subscribe((data) => {
		//   this.setName = data?.Record?.name;

		//   this.excersiseForm.setValue({
		//     email: this.setEmail,
		//     name: this.setName,
		//     title: '',
		//     phone: '',
		//     nationality: '',
		//     gender: '',
		//   });
		// });
		// this.authService.profileData$.subscribe((data) => {
		//   this.excersiseForm.setValue({
		//     email: this.setEmail,
		//     name: this.setName,
		//     title: data?.title,
		//     phone: data?.phone,
		//     nationality: data?.nationality,
		//     gender: data?.gender,
		//   });
		// });
	}

	ngOnInit(): void {}
	save() {
		// this.authService.addProfileInformation(this.excersiseForm.value);
		// this.completeformprofile = !this.authService.completeform;
		this.dataService.addExcersise(this.excersiseForm.value)
		.then((msg:any) => {
			this.msg = msg;
		});
		console.log({ t: this.excersiseForm.value });
	}
}
