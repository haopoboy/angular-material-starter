import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { map, mergeMap } from "rxjs/operators";
import { UtilService } from "../service/util.service";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  cards = [];
  /** Based on the screen size, switch from standard to one column per row */
  cards$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    mergeMap(({ matches }) => {
      return this.service.cards$.pipe(
        map((cards: any[]) => {
          if (matches) {
            cards.forEach((c) => Object.assign(c, c.headset));
          }
          return cards;
        })
      );
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: DashboardService,
    private util: UtilService
  ) {}

  ngOnInit(): void {
    this.cards$.subscribe((cards) => (this.cards = cards));
  }

  async deleteCard(card: any): Promise<void> {
    await this.service.deleteCard(card.id);
    this.util.asArrays(this.cards).remove(card);
  }
}
