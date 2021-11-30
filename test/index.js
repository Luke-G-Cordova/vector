import {default as V} from '../src/Vector.js';

let myVector = V.createNew(.3, .4);

myVector.normalize();
console.log(myVector);