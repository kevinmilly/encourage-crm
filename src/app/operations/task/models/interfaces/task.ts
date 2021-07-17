export interface Task {
    id: string;
    taskName: string;
    taskType: string;
    priority: string;
    description: string;
    // contact: {id:string, name:string}
    contact:any
}
  