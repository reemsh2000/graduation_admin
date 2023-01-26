import { Component, Input, OnInit } from "@angular/core";
import { AsideService } from "app/services/aside.service";
import { DataService } from "app/services/data.service";

@Component({
	selector: "app-dasborad",
	templateUrl: "./dasborad.component.html",
	styleUrls: ["./dasborad.component.css"],
})
export class DasboradComponent implements OnInit {
	openMenu: boolean = false;
	title = "nula";
	displayResult = false;
	showErrorMsg: boolean = false;

	constructor(private asideService: AsideService, private dataService: DataService) {
		this.asideService.openAside$.subscribe((val) => {
			this.openMenu = val;
		});
		this.asideService.setSection("Dashboard");

	}
	async ngOnInit() {
    
		await this.dataService.getExcersises();
		this.dataService.excersises$.subscribe((e) => {
			console.log({ e });
		});
	}
}
