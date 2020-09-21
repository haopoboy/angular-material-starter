import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Parameter } from "../api.service";

@Component({
  selector: "app-parameters",
  templateUrl: "./parameters.component.html",
  styleUrls: ["./parameters.component.css"],
})
export class ParametersComponent implements OnInit {
  @Input()
  data: Parameter[] = [];
  @ViewChild("myForm")
  myForm: NgForm;

  @Output()
  send = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clear(): void {
    this.myForm.form.reset();
    this.send.emit(this.myForm.form);
  }
}
