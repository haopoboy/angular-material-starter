import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OpenApi } from "openapi-v3";
import { mergeMap } from "rxjs/operators";
import { UtilService } from "../service/util.service";
import { Api, ApiService } from "./api.service";

@Component({
  selector: "app-api",
  templateUrl: "./api.component.html",
  styleUrls: ["./api.component.css"],
})
export class ApiComponent implements OnInit {
  url = "";
  data: Api = {};
  response = "";
  method = "";
  options = {
    language: "yaml",
    readOnly: true,
  };
  params = "";
  pathParams = "";

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private util: UtilService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(mergeMap((params) => this.service.getById(params.id)))
      .subscribe((data) => this.initData(data));
  }

  initData(data: Api): void {
    this.data = data;
    this.url = this.service.urlOf(data);
    this.get();
  }

  async get(params: any = {}): Promise<any> {
    this.method = "get";
    const methods = this.service.forMethod(this.data.get);

    const queryNames = methods
      .queryParameters()
      .filterFrom(params)
      .map((p) => p.name);

    this.setParams(params, queryNames);
    const queryParams = {};
    queryNames.forEach((p) => (queryParams[p] = params[p]));

    this.setPathParams(
      params,
      methods
        .pathParameters()
        .filterFrom(params)
        .map((p) => p.name)
    );

    let response;
    try {
      response = await this.http
        .get(`${this.url}${this.pathParams}`, {
          observe: "response",
          params: queryParams,
        })
        .toPromise();
    } catch (error) {
      response = error;
    }

    this.initResponse(response);
  }

  initResponse(response: any): void {
    if (response.body && response.body.openapi) {
      this.data.openApi = response.body;
    }

    this.response = this.util.asYaml().safeDump({
      body: response.body || "",
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
        .keys()
        .map((k) => `${k}=${response.headers.get(k)}`),
    });
  }

  setParams(params: {}, names: string[]): void {
    this.params = names.map((p) => `${p}=${params[p]}`).join("&");
    if (this.params) {
      this.params = `?${this.params}`;
    }
  }

  setPathParams(params: {}, names: string[]): void {
    this.pathParams = names.map((p) => params[p]).join("/");
    if (this.pathParams) {
      this.pathParams = `/${this.pathParams}`;
    }
  }
}
