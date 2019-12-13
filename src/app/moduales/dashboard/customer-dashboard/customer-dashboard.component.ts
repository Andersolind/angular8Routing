import { Component, OnInit } from "@angular/core";
import { VERSION, MatMenuTrigger, } from "@angular/material";
import { Materials, IJobSignUp } from "src/models/dashboard.modal";

@Component({
  selector: "app-customer-dashboard",
  templateUrl: "./customer-dashboard.component.html",
  styleUrls: ["./customer-dashboard.component.scss"]
})
export class CustomerDashboardComponent implements OnInit {
  data: IJobSignUp[] = [];
  constructor() {}
  onOpenMenu(menu: any): void {
    console.log(menu);
  }

  ngOnInit(): void {
    this.mockJobs();
  }

  public mockJobs() {
    for (let i = 1; i <= 10; i++) {
      const item = {
        name: i,
        phone: `Person ${i}`,
        email: `person${i}@gmail.com`
      };
      this.data.push(item);
    }
  }
}
