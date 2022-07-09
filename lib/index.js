"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyHelloWorld = exports.HelloWorld = void 0;
function HelloWorld() {
    console.log("HelloWorld From Published Packaged");
    return "HelloWorld";
}
exports.HelloWorld = HelloWorld;
class MyHelloWorld {
    constructor(message) {
        this.message = message;
    }
    helloWorld() {
        const msg = "HelloWorld From Published Packaged: " + this.message;
        console.log(msg);
        return msg;
    }
}
exports.MyHelloWorld = MyHelloWorld;
