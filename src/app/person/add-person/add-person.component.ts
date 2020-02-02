import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      favorite_colour: ['', Validators.required],
      hobby: ['', Validators.required]
    });
  }

  onSubmit() {
    
    if (this.addForm.invalid) {
      alert('Please provide all details properly!!');
      return;
    }

    this.addForm.value.hobby = this.addForm.value.hobby.split(',');
    const person = 'person';
    const jsonObject = {};
    jsonObject[person] = [];
    jsonObject[person][0] = this.addForm.value;
    this.apiService.createPerson(jsonObject)
      .subscribe( data => {
        this.router.navigate(['list-person']);
      });
  }

}
