import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-edit-exercise",
	templateUrl: "./edit-exercise.component.html",
	styleUrls: ["./edit-exercise.component.css"],
})
export class EditExerciseComponent implements OnInit {
	constructor(private route : ActivatedRoute) {
		this.route.snapshot.paramMap.get('id');
	}

	ngOnInit(): void {}
}
