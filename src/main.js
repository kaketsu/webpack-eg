var greeter = require('./Greeter.js');
require('./style/main.css');
import {Person}  from './Person.js'

document.body.appendChild(greeter());

let a = new Person('huaqiuqiu');
document.body.appendChild(a.greet());