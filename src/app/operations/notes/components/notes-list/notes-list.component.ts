import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enccrm-notes-list',
  template: `
  <enccrm-general-card>
     <enccrm-table></enccrm-table>
  </enccrm-general-card>
  `,
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
