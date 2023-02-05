import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AsideService } from 'app/services/aside.service'
import { DataService } from 'app/services/data.service'

@Component({
  selector: 'app-dasborad',
  templateUrl: './dasborad.component.html',
  styleUrls: ['./dasborad.component.css'],
})
export class DasboradComponent implements OnInit {
  openMenu: boolean = false
  title = 'nula'
  displayResult = false
  showErrorMsg: boolean = false
  loading: boolean = true
  exercises: any = []
  msg = {
    detail: 'Deleted excersise successfully',
    summary: 'Success',
    severity: 'success',
  }
  constructor(
    private asideService: AsideService,
    private dataService: DataService,
    private router: Router,
  ) {
    this.asideService.openAside$.subscribe((val) => {
      this.openMenu = val
    })
    this.asideService.setSection('Exercises')
  }
  async ngOnInit() {
    await this.getexercises()
  }
  async getexercises() {
    await this.dataService.getExercises()
    this.dataService.exercises$.subscribe((data) => {
      this.exercises = data
    })
    this.loading = false
  }
  async filterGlobal(event: any) {
    let searchedWord = event.target.value.toLowerCase()
    if (!searchedWord) {
      return await this.getexercises()
    }
    this.exercises = this.exercises.filter((excersise: any) => {
      return excersise.name.toLowerCase()?.includes(searchedWord)
      //|| excersise.country.name.toLowerCase().includes(searchedWord)
    })
  }

  async delete(exersiseId: string) {
    await this.dataService.deleteExercise(exersiseId)
    await this.getexercises()
    this.showErrorMsg = true
  }
  navigate(id: string) {
    this.router.navigate([`dashboard/edit-exercise/${id.trim()}`])
  }
}
