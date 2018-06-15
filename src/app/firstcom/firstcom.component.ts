import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

interface Member {
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './firstcom.component.html',
  styleUrls: ['./firstcom.component.css']
})
export class FirstcomComponent implements OnInit {
  user = { name: 'tt', age: 32 };
  skills: string[];
  showSkills: boolean;
  members: Member[];

  constructor(private http: Http) {
    this.showSkills = true;
    this.skills = ['AngularJS 1.x', 'Angular 2.x', 'Angular 4.x'];
    console.log('construct first component!');
  }

  ngOnInit() {
    console.log('call ngOnInit!');
    this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
      .map(res => res.json())
      .subscribe(data => {
        if (data) {
          console.log(data);
          this.members = data;
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
