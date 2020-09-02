import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Injectable,
  Type,
} from "@angular/core";
import * as yaml from "js-yaml";
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  asYaml(): yaml {
    return yaml;
  }

  createComponentFactory(
    components: Map<string, Type<{}>>,
    name: string = "",
    defaultComponent: Type<{}> = EmptyContentComponent
  ): ComponentFactory<{}> {
    let componentFactory;
    if (components.has(name)) {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        components.get(name)
      );
    } else {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        defaultComponent
      );
    }
    return componentFactory;
  }

  asArrays(array: any[]): Arrays {
    return new Arrays(array);
  }

  /**
   * Quickly prevent firing default event and NPE from original elements.
   * @param event from element
   */
  preventFiringEvent(event): void {
    if (!event) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
  }

  uuid(): string {
    return uuid();
  }
}

class Arrays {
  constructor(private array: any[]) {}

  remove(element: any): void {
    const index = this.array.indexOf(element);
    if (index > -1) {
      this.array.splice(index, 1);
    }
  }
}

/**
 * An empty content for createComponentFactory().
 */
@Component({
  selector: "app-empty",
  template: `Nothing here`,
})
export class EmptyContentComponent {
  constructor() {}
}
