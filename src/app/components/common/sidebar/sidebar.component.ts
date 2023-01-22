import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PrimeIcons } from "primeng/api";
import { AsideService } from "../../../services/aside.service";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent {
	isSection: string = "survey";
	@Input() isSideSmall: boolean = false;
	@Output() isMenuopen = new EventEmitter();
	allCompnayIcon = PrimeIcons.USERS;
	logoutIcon = PrimeIcons.ARROW_CIRCLE_LEFT;
	constructor(public section: AsideService) {}

	sideBarArray = [
		{
			icon: PrimeIcons.HOME,
			label: "Dashboard",
			route: "/dashboard",
		},
		// {
		//   icon: PrimeIcons.USERS,
		//   label: 'Teams',
		//   route: '/dashboard/teams',
		// },
		// {
		//   icon: PrimeIcons.REPLY,
		//   label: 'Recommendations',
		//   route: '/dashboard/recommendations',
		// },
		// {
		//   icon: PrimeIcons.BOOK,
		//   label: 'Reports',
		//   route: 'dashboard/repots',
		// },
		{
			icon: PrimeIcons.USER,
			label: "Profile",
			route: "/dashboard/profile",
		},
	];
	closeSideBar() {
		this.isMenuopen.emit(false);
	}
}
