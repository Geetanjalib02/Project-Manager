import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  empLogs = new Subject();
  emps = new Subject();
  proj = new Subject();

  public employeeLogs = this.empLogs.asObservable();
  public employees = this.emps.asObservable();
  public projects = this.proj.asObservable();

  updateLogs(data) {
    this.empLogs.next(data);
  }

  updateEmployee(data) {
    this.emps.next(data);
  }

  updateProjects(data) {
    this.proj.next(data);
  }
}
