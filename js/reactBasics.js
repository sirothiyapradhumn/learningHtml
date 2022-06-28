//exporting & importing on react

import obj from './temp';
import yolo from './temp';

console.log(obj);
console.log(yolo);

//named import

import {key as haati } from './strings';
import { exportedObj } from './strings';

 //all

import * as bundled from './strings';
  //use
  bundled.key;
  bundled.exportedObj;

  /*
  bundled = {
    key:  "SHA-23402340",
    exportedObj : {
        name: "sahil",
        age: 24,
    }
  }

  */

