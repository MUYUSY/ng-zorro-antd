import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'nz-demo-timeline-custom',
  template: `
    <nz-timeline>
      <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Solve initial network problems 2015-09-01</nz-timeline-item>
      <nz-timeline-item [nzColor]="'red'">
        <ng-template #custom>
          <i class="anticon anticon-clock-circle-o" style="font-size: 16px;"></i>
        </ng-template>
        Technical testing 2015-09-01
      </nz-timeline-item>
      <nz-timeline-item>Network problems being solved 2015-09-01</nz-timeline-item>
    </nz-timeline>`,
  styles: []
})

export class NzDemoTimelineCustomComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
}
