# Learn TypeScript – The Ultimate Beginners Guide
* https://tuts.heomi.net/learn-typescript-the-ultimate-beginners-guide/

# TypeScript cheat sheet PDF

This makes it easy to look up and revise concepts/syntax quickly.

![typescript_cheatsheet_dark](./images/TypeScript-Cheat-Sheet-DARK.png)


![typescript_cheatsheet_light](./images/TypeScript-Cheat-Sheet-LIGHT.png)


# Install TypeScript Compiler

First, ensure you have [Node](https://nodejs.org/en/download/) installed globally on your machine.

You can [install NVM - Node Version Manager](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) which is a tool for managing Node version in your device:
* https://github.com/coreybutler/nvm-windows/releases

After NVM installed, you can use [NVM commands guide](https://gist.github.com/chranderson/b0a02781c232f170db634b40c97ff455) for operations


```bash
$ nvm list-remote
$ nvm install 20.18.0
$ nvm use 20.18.0
$ nvm list
  * 20.18.0 (Currently using 64-bit executable)
$ node -v
v20.18.0
$  npm -v
10.8.2
```

After Node installed by NVM, you can install the TypeScript compiler globally on your machine:
```bash
$ npm i -g typescript

added 1 package in 4s
npm notice
npm notice New minor version of npm available! 10.8.2 -> 10.9.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.9.0
npm notice To update run: npm install -g npm@10.9.0
npm notice
```

Noted that: [After npm upgrade, on Windows getting error that npm.ps1 is not digitally signed](https://github.com/npm/cli/issues/7280). Running this seems to have fixed it for me in Powershell as an admin. Ref: [about_Execution_Policies](https://learn.microsoft.com/vi-vn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4)

```bash
$  Get-ExecutionPolicy -Scope CurrentUser
Undefined
$ set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Get-ExecutionPolicy -Scope CurrentUser
RemoteSigned
```

To check if the installation is successful
```bash
$  tsc -v
Version 5.6.3
```


# How to Compile TypeScript

Open up your text editor and create a TypeScript file (for example, `index.ts`). Write some JavaScript or TypeScript:
```ts
let sport = 'football';

let id = 5;
```

We can now compile this down into JavaScript with the following command:
```bash
$ tsc index
```

TSC will compile the code into JavaScript and output it in a file called index.js:
```js
var sport = 'football';
var id = 5;
```

If you want TSC to compile your code automatically, whenever you make a change, add the "watch" flag:
```bash
tsc index.ts -w
```

TypeScript will reports errors in your text editor whilst you are coding:
```ts
var sport = 'football';
var id = 5;

id = '5'; // Error: Type 'string' is not assignable to 
type 'number'.
```