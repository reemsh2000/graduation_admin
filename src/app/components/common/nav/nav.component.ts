import { DataService } from "app/services/data.service";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AuthService } from "app/services/auth.service";
import { LoaderService } from "../../../services/loader.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
	styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
	isOpen: boolean = false;
	@Output() isMenuopen = new EventEmitter();

	onMenu() {
		this.isOpen = !this.isOpen;
		this.isMenuopen.emit(this.isOpen);
	}
	emailUser: any;
	userName: any;
	constructor(public store: LoaderService, private authService: AuthService, private dataService: DataService) {
		this.authService.getUserData();
		this.authService.email$.subscribe((data) => {
			this.emailUser = data;
		});

		this.authService.username$.subscribe((data) => {
			this.userName = data?.Record?.name;
		});
	}

	ngOnInit(): void {}

	login = this.authService.loginValue;

	logout() {
		this.authService.logout();
		this.login = false;
	}
	profile() {}
}
