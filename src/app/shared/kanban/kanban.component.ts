import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { Contact } from '@operations/contacts/models/interfaces/contact';


@Component({
  selector: 'enccrm-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  @Input() kanbanFilteredDatasets: any = [];
  @Input() labels: string[] = [];
  @Input() headers: string[] = [];
  @Input() translators: string[][] = []; //options the below filters can be, order of this filter Choices array based on order of filters array
  @Input() filters: string[] = []; //different things you can filter by
  @Input() boxDetails: string[] = [];

  @Output() onZoom = new EventEmitter();
  @Output() filterKanban = new EventEmitter();

  dragData: [Contact[]] = [[]];
  dragDataSaved: [Contact[]] = [[]];

  private subs = new SubSink();

  // @TODO Come up wiht Filter Types
  // currentFilterType:string = '';

  constructor(
    public dialog: MatDialog,

  ) { }

  ngOnChanges(): void {
    // this.updateFilter(this.currentFilterType);
  }

  drop(event: CdkDragDrop<Contact[]>, column: number) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    this.updateConcept(event.container.data[event.currentIndex], column);

  }

  // updateConcept(contact:Contact, index:number) {
  //   if(this.currentFilterType === '') {
  //    contact[''] = index;
  //    //edit via store
  //   } else if(this.currentFilterType === '') {
  //      contact[''] = index;
  //       //edit via store
  //   } else { 
  //      contact[''] = this.headers[index];
  //      //edit via store
  //   }
  // }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClicked(type: string, event: any) {
    if (type === 'zoom') {
      this.rowClick(event);
    }
  }

  rowClick(event: Contact) {
    const dialogRef = this.dialog.open(ContactDetailComponent, {
      width: '30rem',
      height: '45rem',
      data: {
        concept: event,
        tasks$: this.backend.getNotesByConcept(event._id)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.action === 'update') {
        if (result.action === 'concept') {
          this.backend.editConcept(result.event as IConcept);
        } else { //task
          this.backend.editNotes(result.event as INote);
        }
      } else { //add
        if (result.action === 'concept') {
          this.backend.addConcepts(result.event as IConcept);
        } else { //task

          this.backend.addNote(result.event as INote);
        }
      }

    });
  }

  updateFilter(event: string) {
    // this.filterKanban.emit(event);
    // this.currentFilterType = event;
  }



}
