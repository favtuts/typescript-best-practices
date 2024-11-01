# How to Debug TypeScript on Visual Studio Code
* https://tuts.heomi.net/how-to-debug-typescript-on-visual-studio-code/

# Create NodeJS Project

Create a folder to contain the project source code, name it “vscode-typescript-debugging”

Then create a src folder and add a “app.ts” file with the following content:
```ts
import { hello } from './hello';

class App {
    /** Entry point of our app */
    public static start() {
        console.log(hello('world'));
    }
}

App.start();
```

Add a file “hello.ts” still in the src folder 
```ts
/** Say hello */
export const hello = (name: string) => {
    const greeting = `Hello ${name}!`;
    return greeting;
};
```

# TypeScript compiler

After creating the project, the next step is to compile the TypeScript code into javascript code.  Remember, browsers only understand 3 languages: HTML, CSS and Javascript.

In the main directory of the project, you add the configuration file “tsconfig.json” with the following content:
```json
{
    "compilerOptions": {
        "outDir": "./out",
        "rootDir": "./src",
        "sourceMap": true,
        "moduleResolution": "node",
        "target": "es5"
    }
}
```

The key point in the above configuration is that you must enable the `sourceMap` option to `true`. The `sourceMap` files are created to map `TypeScript` to `Javascript` when debugging.


Note:  If you have installed TypeScript globally using the command:  `npm i -g typescript` , you can use the command `tsc` to compile typescript code. The command `tsc` will compile typescript code according to the options in the `tsconfig.json` file into a javascript file and save it to the out  folder  .


# NPM-Scripts

Next, we create a “package.json” file , which is a common configuration file for the entire project. All Node.JS projects need to have this file.

How to create package.json file using command as follows:
```bash
npm init –yes
```

Then we install Typescript for the project
```bash
npm install typescript --save-dev
```

The contents of the  package.json file  will be as follows:
```json
{
  "name": "vscode-typescript-debugging",
  "version": "1.0.0",
  "devDependencies": {
    "typescript": "^2.7.2"
  },
  "scripts": {
    "start": "node out/app.js",
    "prestart": "npm run build",
    "build": "tsc"
  }
}
```

# Run Node application

Open a command window in the project directory and type the command:
```bash
$ npm start

> vscode-typescript-debugging@1.0.0 prestart
> npm run build


> vscode-typescript-debugging@1.0.0 build
> tsc


> vscode-typescript-debugging@1.0.0 start
> node out/app.js

Hello world!
```


# Debugging

Still in the project folder, create another folder “.vscode” and add a file ‘launch.json” with the following content:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Build Project",
            "program": "${workspaceFolder}/src/app.ts",
            "preLaunchTask": "npm: build",
            "sourceMaps": true,
            "smartStep": true,
            "internalConsoleOptions": "openOnSessionStart",
            "outFiles": [
                 "${workspaceFolder}/out/**/*.js"
           ]
        }
    ]
}
```

Ok, so we have finished the configuration, now to debug typescript, you do as usual, set a breakpoint and run the program to call the line of code you just set the breakpoint on.

![vs-debug-console](./images/debug-console-visual-code.png)


# Conditional Breakpoints

With conditional breakpoints, you can use “Expression” or “Hit Count” as the condition.

* Expression : Same as if conditional statement, if expression returns true then breakpoint there.
* Hit Count : Number of times that line of code is called until the hit count is reached, then the breakpoint stops.

![breakpoint-condition](./images/breakpoint-condition.gif)