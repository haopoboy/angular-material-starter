import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OpenApi } from "openapi-v3";
import { BaseApiService } from "src/app/service/base-api.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService extends BaseApiService<Api> {
  constructor(http: HttpClient) {
    super(http, `${environment.apiBasePath}/apis`);
  }

  forMethod(method: Method = {}): Methods {
    return new Methods(method);
  }

  urlOf(api: Api): string {
    if (api.url) {
      return api.url.startsWith("http")
        ? api.url
        : `${location.origin}${api.url}`;
    } else {
      return `${location.origin}${environment.apiBasePath}${api.name}`;
    }
  }
}

class Methods {
  constructor(private method: Method) {}

  queryParameters(): Parameters {
    return new Parameters(
      this.method.parameters?.filter((p) => !p.in || "query" === p.in)
    );
  }

  pathParameters(): Parameters {
    return new Parameters(
      this.method.parameters?.filter((p) => "path" === p.in)
    );
  }
}

class Parameters {
  constructor(public values: Parameter[] = []) {}
  filterFrom(params: {}): Parameter[] {
    return this.values.filter((param) => !!params[param.name]);
  }
}

export interface Parameter {
  name: string;
  in?: "query" | "path";
}

export interface Method {
  summary?: string;
  parameters?: Parameter[];
}

export interface Api {
  id?: string;
  name?: string;
  get?: Method;
  post?: Method;
  url?: string;
  openApi?: OpenApi;
}
