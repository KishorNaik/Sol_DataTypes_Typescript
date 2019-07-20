function onMyMessage(message: string): never {
  throw new Error(message);
}

//onMyMessage("Kishor");

//let neverObj: never = null;
let voidObj: void = null;
