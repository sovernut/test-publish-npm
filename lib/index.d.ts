export interface HelloWorlder {
    helloWorld(): string;
}
export declare function HelloWorld(): string;
export declare class MyHelloWorld implements HelloWorlder {
    private readonly message;
    constructor(message: string);
    helloWorld(): string;
}
