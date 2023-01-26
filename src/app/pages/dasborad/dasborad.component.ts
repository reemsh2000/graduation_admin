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
  excersises: any = []
  constructor(
    private asideService: AsideService,
    private dataService: DataService,
    private router: Router,
  ) {
    this.asideService.openAside$.subscribe((val) => {
      this.openMenu = val
    })
    this.asideService.setSection('Dashboard')
  }
  async ngOnInit() {
    await this.getExcersises()
  }
  async getExcersises() {
    await this.dataService.getExcersises()
    this.dataService.excersises$.subscribe((data) => {
      this.excersises = data
    })
    this.loading = false
  }
  async filterGlobal(event: any) {
    let searchedWord = event.target.value.toLowerCase()
    if (!searchedWord) {
      return await this.getExcersises()
    }
    this.excersises = this.excersises.filter((excersise: any) => {
      return excersise.name.toLowerCase()?.includes(searchedWord)
      //|| excersise.country.name.toLowerCase().includes(searchedWord)
    })
  }

  async delete(exersiseId: string) {
    await this.dataService.deleteExcersise(exersiseId)
    await this.getExcersises()
  }
  navigate(id: string) {
    this.router.navigate([`dashboard/edit-exercise/${id.trim()}`])
  }
}
