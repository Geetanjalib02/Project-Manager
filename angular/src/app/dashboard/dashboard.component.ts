import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  employees: any = [];
  projects: any = [];
  selectedProject: any = '';
  selectedEmployee: any = '';

  constructor(
    private HttpService: HttpClient,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.HttpService.get(environment.API_URL + '/employees').subscribe(
      (res) => {
        this.employees = res;
        this.dataService.updateEmployee(res);
      }
    );
    this.HttpService.get(environment.API_URL + '/projects').subscribe((res) => {
      this.projects = res;
      this.dataService.updateProjects(res);
    });

    this.getEmployeeLogs();
  }

  changeProject(project) {
    this.selectedProject = project;
    let params = { eId: this.selectedEmployee, pId: project };
    this.getEmployeeLogs(params);
  }

  changeEmployee(employee) {
    this.selectedEmployee = employee;
    let params = { eId: employee, pId: this.selectedProject };
    this.getEmployeeLogs(params);
  }

  getEmployeeLogs(param?) {
    this.HttpService.get(environment.API_URL + '/logs', {
      params: param || {},
    }).subscribe((res) => {
      this.dataService.updateLogs(res);
    });
  }
}
