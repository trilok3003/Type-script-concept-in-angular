export abstract class Base {
  abstract getName();
  showName() {
    console.log(this.getName());
  }
}
export class Derived extends Base {
  getName() {
    return 'Hello';
  }
}

/**
 * 1. Follow the DRY Principle — Don’t Repeat Yourself. Once you find yourself copying and pasting methods from one component to another, it will be an obvious sign for creating an abstract class instead.
2. Form Component — Handling standard submission logic, error handling logic, lock and unlock form state logic, validation logic and etc.
3. Listing Component — Handling page loading state for fetching the list of items to display, sorting logic, pagination logic, search from a list logic and etc.
4. Editable / Readonly Components — Handling shared logic between an editable components and readonly components.
5. Components with almost exactly same members / functionalities but different API endpoints.
 */