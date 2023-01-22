import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
@Injectable({
	providedIn: "root",
})
export class DataService {
	constructor(private http: HttpClient) {}
}
