import { Injectable } from "@angular/core";
import * as yaml from "js-yaml";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor() {}

  asYaml(): yaml {
    return yaml;
  }
}
