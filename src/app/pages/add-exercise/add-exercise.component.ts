import { AsideService } from 'app/services/aside.service'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { DataService } from 'app/services/data.service'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

@Component({
  selector: 'app-profile',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css'],
})
export class AddExerciseComponent implements OnInit {
  completeformprofile: boolean
  showMsg: boolean = false
  bodyPart = [
    'back',
    'cardio',
    'chest',
    'lower arms',
    'lower legs',
    'neck',
    'shoulders',
    'upper arms',
    'upper legs',
    'waist',
  ]
  excersiseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    urlVideo: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    restrictions: new FormControl([]),
    bodyPart: new FormControl([], Validators.required),
  })
  private msg = new BehaviorSubject<any>({})
  public msg$ = this.msg.asObservable()
  constructor(
    private dataService: DataService,
    private router: Router,
    public asideService: AsideService,
  ) {
    this.asideService.setSection('Add Excersise')
  }

  ngOnInit(): void {}
  async save() {
    if (this.excersiseForm.valid) {
      let message = await this.dataService.addExcersise(
        this.excersiseForm.value,
      )
      this.msg.next(message)
      this.excersiseForm.reset()
    } else {
      this.msg.next({
        detail: 'You should fill the required fields',
        summary: 'Warn',
        severity: 'warn',
      })
    }
    this.showMsg = true
  }
}
