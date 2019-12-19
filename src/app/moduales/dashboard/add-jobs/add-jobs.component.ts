import { Component, OnInit, NgZone } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IJobSignUp } from "src/models/dashboard.modal";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-add-jobs",
  templateUrl: "./add-jobs.component.html",
  styleUrls: ["./add-jobs.component.scss"]
})
export class AddJobsComponent implements OnInit {
  jobForm: FormGroup;
  addJob: IJobSignUp;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private zone: NgZone
  ) {
    this.createForm();
  }

  ngOnInit() {}
  openSnackBar() {
    this.zone.run(() => {
      this.snackBar.open(
        `Added job ${this.jobForm.controls["jobNumber"].value}`,
        "OK"
      );
    });
  }

  get f() {
    return this.jobForm.controls;
  }
  createForm() {
    this.jobForm = this.fb.group({
      jobName: ["", [Validators.required]],
      address: ["", [Validators.required]],
      clientName: ["", [Validators.required]],
      notes: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      jobNumber: ["", [Validators.required]]
    });
  }

  save(): void {
    if (this.jobForm.valid) {
      this.addJob = {
        jobName: this.jobForm.controls["jobName"].value,
        address: this.jobForm.controls["address"].value,
        clientName: this.jobForm.controls["clientName"].value,
        notes: this.jobForm.controls["notes"].value,
        phone: this.jobForm.controls["phone"].value,
        jobNumber: this.jobForm.controls["jobNumber"].value
      };
      //   this.authService.createJobSite(this.addJob).subscribe(data => {
      //     if (data) {
      //       this.openSnackBar();
      //       this.jobForm.reset();
      //     } else {
      //       alert("Error");
      //     }
      //     console.log(data);
      //   });
      // } else {
      //   Object.keys(this.jobForm.controls).forEach(field => {
      //     const control = this.jobForm.get(field);
      //     control.markAsDirty();
      //     // elementForm.get(controlName).markAsDirty({onlySelf: true});
      //   });
      //   this.httpErrors = "Please correct the validation errors.";
    }
  }
}
