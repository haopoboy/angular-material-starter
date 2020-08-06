import { Injectable } from "@angular/core";
import {
  InMemoryDbService,
  RequestInfo,
  ResponseOptions,
} from "angular-in-memory-web-api";
import { MenuItem } from "../menu/menu.service";
import { Link } from "./../search/search.service";
import { PageImpl } from "./Page";
import { UtilService } from "./util.service";

@Injectable()
export class AppInMemoryDbService implements InMemoryDbService {
  constructor(private uitl: UtilService) {}

  async createDb(reqInfo?: RequestInfo): Promise<{}> {
    const yaml = await (await fetch("assets/db.yml")).text();
    const db: Db = this.uitl.asYaml().safeLoad(yaml);
    Object.keys(db).forEach((key) => {
      const property = db[key];
      if (Array.isArray(property)) {
        this.assignId(property);
      }
    });

    this.links(db);
    return db;
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

  links(db: Db): Link[] {
    const data = db.links.concat(
      db.menuItems.map((item) => {
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
    db.links = data;
    return data;
  }

  assignId(data: any[]): void {
    data.forEach((value, index) => {
      value.id = index + 1;
    });
  }
}

interface Db {
  menuItems: MenuItem[];
  links: Link[];
}
