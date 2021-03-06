import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-steps-basic',
  template: `
    <nz-steps [(nzCurrent)]="current">
      <nz-step [nzTitle]="'Finished'" [nzDescription]="'This is a description.'"></nz-step>
      <nz-step [nzTitle]="'In Progress'" [nzDescription]="'This is a description.'"></nz-step>
      <nz-step [nzTitle]="'Waiting'" [nzDescription]="'This is a description.'"></nz-step>
    </nz-steps>
  `
})
export class NzDemoStepsBasicComponent implements OnInit {
  current = 1;

  constructor() {
  }

  ngOnInit() {
  }
}

