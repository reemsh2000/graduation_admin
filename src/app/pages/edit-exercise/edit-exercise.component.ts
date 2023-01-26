import { DataService } from "app/services/data.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AsideService } from "app/services/aside.service";
import { BehaviorSubject } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-edit-exercise",
	templateUrl: "./edit-exercise.component.html",
	styleUrls: ["./edit-exercise.component.css"],
})
export class EditExerciseComponent implements OnInit {
	id: string = "";
	showMsg: boolean = false;
	private msg = new BehaviorSubject<any>({});
	public msg$ = this.msg.asObservable();
	excersiseForm = new FormGroup({
		name: new FormControl("", Validators.required),
		urlVideo: new FormControl("", Validators.required),
		description: new FormControl("", Validators.required),
		restrictions: new FormControl([]),
		// bodyPart: new FormControl([], Validators.required),
	});
	constructor(private route: ActivatedRoute, public dataService: DataService, public asideService: AsideService) {
		this.id = this.route.snapshot.paramMap.get("id") || "";
	}

	ngOnInit() {
		this.dataService.getExcersise(this.id).subscribe((data: any) => {
			let exersise = data.data().Record;
			this.excersiseForm = new FormGroup({
				name: new FormControl(exersise.name, Validators.required),
				urlVideo: new FormControl(exersise.urlVideo, Validators.required),
				description: new FormControl(exersise.description, Validators.required),
				restrictions: new FormControl(exersise.restrictions),
				// bodyPart: new FormControl([], Validators.required),
			});
		});
	}
	edit() {
		if (this.excersiseForm.valid) {
			this.dataService.updateExcersise(this.id, this.excersiseForm.value);
			this.msg.next({
				detail: "Exersise updated successfully",
				summary: "Success",
				severity: "success",
			});
			this.excersiseForm.reset();
		} else {
			this.msg.next({
				detail: "You should fill the required fields",
				summary: "Warn",
				severity: "warn",
			});
		}
		this.showMsg = true;
	}
}
