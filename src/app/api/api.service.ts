import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseApiService } from "src/app/service/base-api.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService extends BaseApiService<Api> {
  constructor(http: HttpClient) {
    super(http, `${environment.apiBasePath}/apis`);
  }
}

interface Method {
  summary?: string;
}

export interface Api {
  id?: string;
  name?: string;
  get?: Method;
  post?: Method;
}
