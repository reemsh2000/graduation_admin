import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AsideService } from 'app/services/aside.service';
import { DataService } from 'app/services/data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  completeformprofile: boolean
  showMsg: boolean = false
  id: string = "";
  doctorForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl({value:'',disabled:true}, Validators.required),
  })
  private msg = new BehaviorSubject<any>({})
  public msg$ = this.msg.asObservable()
  constructor(
    private dataService: DataService,
    public asideService: AsideService,
    private route: ActivatedRoute
  ) {
    this.asideService.setSection('Edit Doctor')
    this.id = this.route.snapshot.paramMap.get("id") || "";
  }

	ngOnInit() {
		this.dataService.getDoctor(this.id).subscribe((data: any) => {
			let doctor = data.data();
			this.doctorForm = new FormGroup({
				name: new FormControl(doctor.name, Validators.required),
				email: new FormControl({value:doctor.email, disabled: true}, Validators.required),
			});
		});
	}
	edit() {
		if (this.doctorForm.valid) {
			this.dataService.updateDoctor(this.id, this.doctorForm.value);
			this.msg.next({
				detail: "Doctor updated successfully",
				summary: "Success",
				severity: "success",
			});
			this.doctorForm.reset();
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
