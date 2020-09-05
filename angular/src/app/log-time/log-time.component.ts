import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-time',
  templateUrl: './log-time.component.html',
  styleUrls: ['./log-time.component.css'],
})
export class LogTimeComponent implements OnInit {
  employees: any = [];
  projects: any = [];
  logForm: FormGroup = this.fb.group({
    eId: ['', Validators.required],
    pId: ['', Validators.required],
    logDate: ['', Validators.required],
    logTime: ['', Validators.required],
  });

  constructor(
    public dataService: DataService,
    public HttpService: HttpClient,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.HttpService.get(environment.API_URL + '/employees').subscribe(
      (res) => {
        this.employees = res;
      }
    );
    this.HttpService.get(environment.API_URL + '/projects').subscribe((res) => {
      this.projects = res;
      // this.selectedProject = res[0].Name;
    });
  }

  createLog() {
    if (this.logForm.status == 'INVALID') {
      alert('Enter All Fields');
    } else {
      this.HttpService.post(
        environment.API_URL + '/log',
        this.logForm.value
      ).subscribe((res) => {
        alert('Log Added Successfully');
      });
    }
  }
}
