import { ApiRequest } from './../../model/api.request';
import { Person } from './../../model/person.model';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {ApiService} from '../../service/api.service';



@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  person: Person;
  apiRequest: ApiRequest;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {

    const editPersonId = window.localStorage.getItem('editPersonId');
    
    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      hobby: ['', Validators.required],
      favorite_colour: ['', Validators.required]
    });

    this.apiService.getPerson(editPersonId)
      .subscribe( data => {
        this.editForm.setValue(data.person[0]);
        this.editForm.value.first_name = data.person[0].first_name;
        console.log(data.person[0].first_name);

      });


  }

  onSubmit() {
    
    if (this.editForm.invalid) {
      alert('Please provide all details properly!!');
      return;
    }
    
    const person = 'person';
    const jsonObject = {};
    jsonObject[person] = [];
    jsonObject[person][0] = this.editForm.value;

    this.apiService.updatePerson(jsonObject)
      .pipe(first())
      .subscribe(
        data => {
            alert('User updated successfully.');
            this.router.navigate(['list-person']);
        },
        error => {
          alert(error);
        });
  }

}
