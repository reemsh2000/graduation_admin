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
    { name: '' },
    { name: 'back' },
    { name: 'cardio' },
    { name: 'chest' },
    { name: 'lower arms' },
    { name: 'lower legs' },
    { name: 'neck' },
    { name: 'shoulders' },
    { name: 'upper arms' },
    { name: 'upper legs' },
    { name: 'waist' },
  ]
  exerciseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    urlVideo: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    muscleName: new FormControl('', Validators.required),
    urlImage:new FormControl('', Validators.required),
    burntCalories: new FormControl(0,Validators.required),
  })
  private msg = new BehaviorSubject<any>({})
  public msg$ = this.msg.asObservable()

  constructor(
    private dataService: DataService,
    public asideService: AsideService,
  ) {
    this.asideService.setSection('Add Exercise')
  }

  ngOnInit(): void {}
  async save() {
    const formData = {
      ...this.exerciseForm.value,
      muscleName: this.exerciseForm.value.muscleName.name,
    }

    if (this.exerciseForm.valid) {
      let message = await this.dataService.addExercise(formData)
      this.msg.next(message)
      this.exerciseForm.reset()
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
