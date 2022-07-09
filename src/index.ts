export interface HelloWorlder {
  helloWorld(): string;
}

export function HelloWorld(): string {
  console.log("HelloWorld From Published Packaged");
  return "HelloWorld";
}

export class MyHelloWorld implements HelloWorlder {
  constructor(private readonly message: string) {}

  helloWorld(): string {
    const msg = "HelloWorld From Published Packaged: " + this.message;
    console.log(msg);
    return msg;
  }
}
