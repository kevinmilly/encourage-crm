import {AfterViewInit, Component, ViewChild, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

import * as fromContacts from '@operations/contacts/index';
import { ContactDetailComponent } from '@operations/contacts/components/contact-detail/contact-detail.component';
import { Store } from '@ngrx/store';


@Component({
  selector: 'enccrm-table', 
  templateUrl: './table.component.html', 
  styleUrls: ['./table.component.scss'] 
})
export class TableComponent implements OnInit {

  @Input() data:any[] = [];
  @Input() columns:string[] = [];
  @Input() displayNames:string[] = [];
  @Input() action = false; 
  @Input() pipesNeeded:string[] = [];
  @Input() pipeType:string = ''
  @Input() linksNeeded:string[] = [];

  @Output() onZoom = new EventEmitter();

  dataSaved:any[] = [];

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource;
  refColumns:string[] = []

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;



  constructor(
    private store:Store
  ) {
   }

  ngOnInit(): void {    
    console.dir(this.linksNeeded);
    console.dir(this.pipesNeeded);
    this.displayedColumns = this.displayNames;
    this.columns = this.columns.filter(c => c !== "id");
    this.dataSaved = [...this.data];
  }

  ngAfterViewInit() {
    this.resetTableAndFilter(this.data);
  }

  ngOnChanges(): void {
    this.resetTableAndFilter(this.data);
  }

  resetTableAndFilter(data:fromContacts.Contact[]) {
    this.dataSource = new MatTableDataSource([...data]);
    this.setupSortAndPagination();
      

  }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }


  onClicked(type:string,event:any) {
    // if(type==='zoom') {
    //   this.rowClick(event);
    // } else if(type==='delete') {
    //    if(confirm("Are you sure you wanted to delete this concept?")) {
    //      this.onDelete.emit(event);
    //    }
    // }
  }

  setupSortAndPagination() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } 

  launchModal(entity:any) {
      this.onZoom.emit(entity);
  }

  // rowClick(event:fromContacts.Contact) {
  //   const dialogRef = this.dialog.open(ContactDetailComponent, {
  //     width: '90%',
  //     height: '45rem',
  //     data: {
  //       contact:event
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
    
  //     if(result.action === 'update') {
  //       if (result.type === 'concept') {
  //         this.backend.editConcept(result.event as Contact);
  //       } else { //note
  //          this.backend.editNotes(result.event as INote);
  //       }
  //     } else { //add
  //       if (result.type === 'concept') {
  //         this.backend.addConcepts(result.event as Contact);
  //       } else { //note
  //           this.backend.addNote(result.event as INote);
  //       }
  //     }

  //   });
  // }




}
