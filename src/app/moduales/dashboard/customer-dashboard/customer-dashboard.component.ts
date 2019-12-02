import { Component, OnInit } from "@angular/core";
import { VERSION, MatMenuTrigger } from "@angular/material";

@Component({
  selector: "app-customer-dashboard",
  templateUrl: "./customer-dashboard.component.html",
  styleUrls: ["./customer-dashboard.component.scss"]
})
export class CustomerDashboardComponent implements OnInit {
  constructor() {}
  onOpenMenu(menu: any): void {
    console.log(menu);
  }

  data: any[] = [];

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      const item = {
        id: i,
        name: `Person ${i}`,
        email: `person${i}@gmail.com`
      };

      this.data.push(item);
    }
  }
}
