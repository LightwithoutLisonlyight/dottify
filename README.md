# dottify - The easiest way to flat a object

<img alt="npm" src="https://img.shields.io/npm/v/dottify"> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/dottify">

<br>

How to use it ?

```javascript

// Import it
const { dottify } = require('dottify')

// Example Object
let object = {

    a : 1,
    b : 'Hello',
    c : true,
    d : [0,1,2,false,'Dottify'],
    e : {
        a: {
            b : {
                c : 'This is an inner value',
                d : () => console.log(0)
            }
        }
    },
    f : undefined,
    g : null

}

// Flat & save it
// The second parameter is optional... the default separator is the dot.
let flatted = dottify(object,'.')

//Print the result 
console.log(flatted)


/* 

The Output

{
    a: 1,
    b: 'Hello',
    c: true,
    'd.0': 0,
    'd.1': 1,
    'd.2': 2,
    'd.3': false,
    'd.4': 'Dottify',
    'e.a.b.c': 'This is an inner value',
    'e.a.b.d': [Function: d],
    f: undefined,
    g: null
  }

  */
  
  ```
