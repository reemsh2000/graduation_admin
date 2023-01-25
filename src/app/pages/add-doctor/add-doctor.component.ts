import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AsideService } from 'app/services/aside.service';
import { DataService } from 'app/services/data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  completeformprofile: boolean
  showMsg: boolean = false
  excersiseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    doctoEmail: new FormControl('', Validators.required),
  })
  private msg = new BehaviorSubject<any>({})
  public msg$ = this.msg.asObservable()
  constructor(
    private dataService: DataService,
    public asideService: AsideService,
  ) {
    this.asideService.setSection('Add Doctor')
  }

  ngOnInit(): void {}
  save() {
    if (this.excersiseForm.valid) {
      this.msg.next(this.dataService.addExcersise(this.excersiseForm.value))
      console.log({ msg: this.msg.getValue() })
      this.excersiseForm.reset()
    } else {
      this.msg.next({
        detail: 'You should fill the required fields',
        summary: 'warn',
        severity: 'warn',
      })
    }
    this.showMsg = true
  }

}
