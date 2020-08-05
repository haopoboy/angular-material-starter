import { TestBed } from "@angular/core/testing";
import { AppInMemoryDbService } from "./app-in-memory-db.service";

describe("AppInMemoryDbService", () => {
  let service: AppInMemoryDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppInMemoryDbService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
