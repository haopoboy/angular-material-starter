import { Injectable } from "@angular/core";
import {
  InMemoryDbService,
  RequestInfo,
  ResponseOptions,
} from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { MenuItem } from "../menu/menu.service";
import { Link } from "./../search/search.service";
import { PageImpl } from "./Page";

@Injectable()
export class AppInMemoryDbService implements InMemoryDbService {
  constructor() {}

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return { menuItems: this.menuItems(), links: this.links() };
  }

  responseInterceptor(
    response: ResponseOptions,
    requestInfo: RequestInfo
  ): ResponseOptions {
    if ("post" === requestInfo.method) {
      // Fix undefine body from request when updated data
      response.body = response.body
        ? response.body
        : (requestInfo.req as any).body;
      return response;
    } else if (requestInfo.id) {
      return response;
    } else {
      // United pageable from server
      const page = PageImpl.of(response.body);
      response.body = page;
      return response;
    }
  }

  menuItems(): MenuItem[] {
    const data = [
      {
        id: 0,
        icon: "dashboard",
        label: "Dashboard",
        routerLink: "/dashboard",
      },
      {
        id: 0,
        icon: "description",
        label: "Documents",
        routerLink: "/documents",
      },
    ];
    this.assignId(data);
    return data;
  }

  links(): Link[] {
    let data: Link[] = [
      {
        label: "Default",
        keyword: "default",
      },
    ];
    data = data.concat(
      this.menuItems().map((item) => {
        return {
          label: item.label,
          routerLink: item.routerLink,
          keyword: item.label,
          type: "menu",
          data: item,
        };
      })
    );

    this.assignId(data);
    return data;
  }

  assignId(data: any[]): void {
    data.forEach((value, index) => {
      value.id = index + 1;
    });
  }
}
