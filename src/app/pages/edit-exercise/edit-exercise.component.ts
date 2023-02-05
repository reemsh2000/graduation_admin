import { DataService } from 'app/services/data.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AsideService } from 'app/services/aside.service'
import { BehaviorSubject } from 'rxjs'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.css'],
})
export class EditExerciseComponent implements OnInit {
  id: string = ''
  showMsg: boolean = false
  private msg = new BehaviorSubject<any>({})
  public msg$ = this.msg.asObservable()
  bodyPart = [
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
    urlImage: new FormControl('', Validators.required),
    muscleName: new FormControl('', Validators.required),
    burntCalories: new FormControl('', Validators.required),
  })
  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
    public asideService: AsideService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || ''
    this.asideService.setSection('Edit exercises')
  }

  ngOnInit() {
    this.dataService.getExercise(this.id).subscribe((data: any) => {
      let exersise = data.data()
      this.exerciseForm = new FormGroup({
        name: new FormControl(exersise.name, Validators.required),
        urlVideo: new FormControl(exersise.urlVideo, Validators.required),
        description: new FormControl(exersise.description, Validators.required),
        muscleName: new FormControl({ name: exersise.muscleName }),
        urlImage: new FormControl(exersise.urlImage),
        burntCalories: new FormControl(exersise.burntCalories),
      })
    })
  }
  edit() {
    if (this.exerciseForm.valid) {
      const formData = {
        ...this.exerciseForm.value,
        muscleName: this.exerciseForm.value.muscleName.name,
      }
      this.dataService.updateExercise(this.id, formData)
      this.msg.next({
        detail: 'Exersise updated successfully',
        summary: 'Success',
        severity: 'success',
      })
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
