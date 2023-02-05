import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsideService } from 'app/services/aside.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  openMenu: boolean = false
  title = 'nula'
  showErrorMsg: boolean = false
  loading: boolean = true
  doctors: any = []
  msg = {
    detail: 'Deleted Doctor successfully',
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
    this.asideService.setSection('Doctors')
  }
  async ngOnInit() {
    await this.getDoctors()
  }
  async getDoctors() {
    await this.dataService.getDoctors()
    this.dataService.doctors$.subscribe((data) => {
      this.doctors = data
    })
    this.loading = false
  }
  async filterGlobal(event: any) {
    let searchedWord = event.target.value.toLowerCase()
    if (!searchedWord) {
      return await this.getDoctors()
    }
    this.doctors = this.doctors.filter((doctor: any) => {
      return doctor.name.toLowerCase()?.includes(searchedWord)
    })
  }

  async delete(doctorId: string) {
    await this.dataService.deleteDoctor(doctorId)
    await this.getDoctors()
    this.showErrorMsg = true
  }
  navigate(id: string) {
    console.log({id})
    this.router.navigate([`dashboard/edit-doctor/${id.trim()}`])
  }

}
