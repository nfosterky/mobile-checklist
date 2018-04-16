export default class CheckItem {
  constructor (title, done = false) {
    this.key = Date.now();
    this.title = title;
    this.done = done;
  }
}