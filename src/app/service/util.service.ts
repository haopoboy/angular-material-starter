import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Injectable,
  Type,
} from "@angular/core";
import * as yaml from "js-yaml";

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
