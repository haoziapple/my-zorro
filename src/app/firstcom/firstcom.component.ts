import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface Member {
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'app-first',
  templateUrl: './firstcom.component.html',
  styleUrls: ['./firstcom.component.css']
})
export class FirstcomComponent implements OnInit {
  user = { name: 'tt', age: 32 };
  skills: string[];
  showSkills: boolean;
  members: Member[];
  members$: Observable<Member[]>;

  constructor(private http: HttpClient) {
    this.showSkills = true;
    this.skills = ['AngularJS 1.x', 'Angular 2.x', 'Angular 4.x'];
    console.log('construct first component!');
  }

  ngOnInit() {
    console.log('call ngOnInit!');
    this.members$ = this.http
      .get<Member[]>(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
      .subscribe(data => {
        if (data) {
          this.members = data;
          console.log(data);
        }
      });

  }

  addSkill(skill: string) {
    const skillStr = skill.trim();
    if (this.skills.indexOf(skillStr) === -1) {
      this.skills.push(skillStr);
    }
  }

}
