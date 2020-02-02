import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  persons: Person[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPersons().subscribe(data => {
      this.persons = data.person;
    });
  }

  deletePerson(person: Person): void {

    this.apiService.deletePerson(person.id).subscribe(
      data => {
        this.persons = this.persons.filter( p => p != person);
      });
  }

  updatePerson(person: Person): void {
    window.localStorage.removeItem("editPersonId");
    window.localStorage.setItem("editPersonId", person.id);
    //console.log(person);
    this.router.navigate(['edit-person']);
  }

  addPerson(): void {
    this.router.navigate(['add-person']);
  }

}
