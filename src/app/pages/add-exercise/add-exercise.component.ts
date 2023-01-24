import { AsideService } from "app/services/aside.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "app/services/data.service";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

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
	private msg = new BehaviorSubject<any>({});
	public msg$ = this.msg.asObservable();
	constructor(private dataService: DataService, private router: Router, public asideService: AsideService) {
		this.asideService.setSection("Add Excersise");
	}

	ngOnInit(): void {}
	save() {
		this.msg.next(this.dataService.addExcersise(this.excersiseForm.value));
		console.log({ msg: this.msg.getValue() });
	}
}
