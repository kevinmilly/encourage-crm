import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enccrm-contact-kanban',
  template: `
  <enccrm-general-card>
     Kanban
   </enccrm-general-card>
  `,
  styleUrls: ['./contact-kanban.component.scss']
})
export class ContactKanbanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
