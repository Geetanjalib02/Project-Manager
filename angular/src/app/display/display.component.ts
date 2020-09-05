import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  empLogs: any = [];
  employees: any = [];
  projects: any = [];
  page: Number= 1;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.employees.subscribe((res) => {
      this.employees = res;
    });
    this.dataService.projects.subscribe((res) => {
      this.projects = res;
    });
    this.dataService.employeeLogs.subscribe((res) => {
      this.empLogs = res;
      this.empLogs.map((log) => {
        log.projectName = this.getProjectName(log.projectId);
        log.employeeName = this.getEmployeeName(log.EmployeeId);
        return log;
      });
    });

    
  }

  getProjectName(projectId) {
   return this.projects[
      this.projects.findIndex((project) => project._id == projectId)
    ].Name;

  }

  getEmployeeName(employeeId) {
    return this.employees[
      this.employees.findIndex((employee) => employee._id == employeeId)
    ].EName;
  }
 
  
}
