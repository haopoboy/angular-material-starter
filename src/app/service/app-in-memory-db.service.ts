import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { MenuItem } from "../menu/menu.service";

@Injectable()
export class AppInMemoryDbService implements InMemoryDbService {
  constructor() {}
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return { menuItems: this.menuItems() };
  }

  menuItems(): MenuItem[] {
    const data = [
      { id: 0, icon: "dashboard", label: "Dashboard", routerLink: "dashboard" },
      {
        id: 0,
        icon: "description",
        label: "Documents",
        routerLink: "documents",
      },
    ];
    this.assignId(data);
    return data;
  }

  assignId(data: any[]): void {
    data.forEach((value, index) => {
      value.id = index + 1;
    });
  }
}
