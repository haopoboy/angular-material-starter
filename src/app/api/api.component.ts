import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { mergeMap } from "rxjs/operators";
import { environment } from "src/environments/environment";
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
    this.url = `${location.origin}${environment.apiBasePath}/${data.name}`;
    if (data.get) {
      this.get();
    }
  }

  async get(): Promise<any> {
    this.method = "get";
    const response = await this.http
      .get(this.url, { observe: "response" })
      .toPromise();

    this.response = this.util.asYaml().safeDump({
      body: response.body,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
        .keys()
        .map((k) => `${k}=${response.headers.get(k)}`),
    });
  }
}
