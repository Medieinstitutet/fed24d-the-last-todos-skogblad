export class Todo {
  id: number;
  name: string;
  done: boolean;

  constructor (name: string, done: boolean) {
    this.id = Date.now();
    this.name = name;
    this.done = done;
  }
}