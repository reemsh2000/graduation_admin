import { AsideService } from 'app/services/aside.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css'],
})
export class AddExerciseComponent implements OnInit {
  completeformprofile: boolean;
  excersiseForm = new FormGroup({
    name: new FormControl(''),
    videoUrl: new FormControl(''),
    descriptions: new FormControl(''),
    instructions: new FormControl(''),
    restrictions: new FormControl(''),
  });
  setEmail: any;
  setName: any;
  setPhone: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    public asideService: AsideService
  ) {
    this.authService.getUserData();
    this.asideService.setSection('Profile');
 
    // this.authService.email$.subscribe((data) => {
    //   this.setEmail = data;
    //   this.excersiseForm.setValue({
    //     email: this.setEmail,
    //     name: '',
    //     title: '',
    //     phone: '',
    //     nationality: '',
    //     gender: '',
    //   });
    // });
    // this.authService.username$.subscribe((data) => {
    //   this.setName = data?.Record?.name;

    //   this.excersiseForm.setValue({
    //     email: this.setEmail,
    //     name: this.setName,
    //     title: '',
    //     phone: '',
    //     nationality: '',
    //     gender: '',
    //   });
    // });
    // this.authService.profileData$.subscribe((data) => {
    //   this.excersiseForm.setValue({
    //     email: this.setEmail,
    //     name: this.setName,
    //     title: data?.title,
    //     phone: data?.phone,
    //     nationality: data?.nationality,
    //     gender: data?.gender,
    //   });
    // });
  }

  ngOnInit(): void {}
  save() {
    // this.authService.addProfileInformation(this.excersiseForm.value);
    this.completeformprofile = !this.authService.completeform;
  }
}
