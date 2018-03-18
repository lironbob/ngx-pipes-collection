# ngx-pipes-collection
This is the repository for ngx-pipes-collection.

ngx-pipes-collection is a css variables module for Angular 2/4/5

## Installation
Install ngx-pipes-collection via NPM, using the command below.

### NPM
```shell
npm install --save ngx-pipes-collection
```

## Getting started
Import the `CssVarsModule` in your root application module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { CssVarsModule } from 'ngx-pipes-collection';

@NgModule({
  //...
  imports: [
    //...
    CssVarsModule.forRoot()
  ],
  //...
})
export class AppModule { }
```

## Use css-vars as a directive 

```typescript
import { Component, OnInit } from '@angular/core';
import { CssVars } from 'ngx-pipes-collection';

@Component({
    template: `<div [css-vars]="customCssVars"></div>`
    //...
})
export class CustomComponent {
    //...
    public customCssVars: CssVars;

    constructor() {
      this.customCssVars = {
        '--font-size': '12px',
        '--bg-color': '#000',
        '--text-color': '#eee'
      };
    }
}
```

## Set global css variables with css-vars service 

```typescript
import { Component, OnInit } from '@angular/core';
import { CssVarsService } from 'ngx-pipes-collection';

@Component({
    //...
})
export class AppComponent {
    //...

    constructor(cssService: CssVarsService) {
      cssService.setVariables({
        '--font-size': '12px',
        '--bg-color': '#000',
        '--text-color': '#eee'
      });
    }
}
```

## Directive input parameters
The ngx-pipes-collection input parameters are displayed below.

| Input | Required | Details |
| ---- | ---- | ---- |
| css-vars | Required | CssVars type - css key value object  |
