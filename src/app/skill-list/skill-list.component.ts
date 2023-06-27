import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})


export class SkillListComponent {
  @Input() skills:  any[] = [];
  @Input() teacher: any;

  deleteSkill(skill: string): void {
    const index = this.teacher.skills.indexOf(skill);
    if (index !== -1) {
      this.teacher.skills.splice(index, 1);
    }
  }
}
