# checkedJS

This project aims to allow JS developers to define datatypes for their beloved JS functions/methods/variables, without losing the benefits of dynamic typing while still maintaining a well defined interface with defined datatypes.

This is basically a datatype definition library with some nice additions.


## Basic usage
```
var func = type() // create a new type function
  .int.or(type().float)
  .int // second parameter is an integer
  .int.value(20) // third parameter maybe an optional int, with default value 20
  .ret(int.or(float))
  = function(a, b c) {
      return a + b + c
   };
```


calling the function is now done normally with
```
func(10, 20, 30);
```

if its callen with

```
func(10, 'hello', 30)
```

it throws an exception or logs to console.
same applies if the return value does not match the return datatype.

```
var prop = type()
  .int
  .prop(); // creates a checked integer

prop = 10; // okay
prop = 'Hello World'; // Exception


var complex = type()
  .object({
    a: type().int,
    b: type().int
  }).prop(); // creates a checked object with the specified attributes
complex.a = 10; // ok
complex.b = 'YOLO'; // not cool man... not cool

```

## Additional features:
 - Contracts
 - Interface specifications
 - Const Types
 - WebWorker Abstraction
 - more stuff possible


### Contracts
They are executed before and after every execution of the function (if it is a function). or checked before/after every modification the property

```
var f = type()
  .int
  .int
  .float
  .before(function(x, z) { return x > 10 && z*x < 1000; })
  .after(function(x) { return x > 10; })
  = function(x, y, z) {
   x = x - z;
   return x + y + z;
  }
```

### Interface specifications
For object types define their structure by JSON. The specified object has to have at least contain the attributes

```
var f = type()
  .object({
    a: type().int
    b: type().float
  })
  .int = function(a, b) {
    a.a = a.b * 2 + n;
    
  }
```

### Const Types
Const Types cannot change their value after they got a value. If they are changed an exception is rised.

```
var vari = type()
  .int.const()
  .prop();

vari = 10; // ok
vari = 20; // ERROR

var f = type()
  .int.const() = function(x) {
    x = 10; // error
  }
f(10);
```

### WebWorker
TODO


