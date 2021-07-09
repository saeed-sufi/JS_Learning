# JS_Learning

* Nan is a "numeric value" that represents sth that is not a number!

* In js, variable type can be changed without any problem!

* Strings are immutable in js.

* `typeof` is an operator! just like `+` sign.

* An array is a special type of object so we can look inside the array using a dot.

* In javascript almost everthing is an object; even if it's not a real object, it is treated or interpreted as an object.

* falsy values: false, 0, '', null, undefined, NaN, 0. Everything else is a truthy.

* Not(`!`) has a higher precedence than `&&` and `||`. `&&` has a higher precedence that `||`.

* A higher order function is a function that either: 1- accepts a function as an argument or 2- returns a function as a result.

* Javascript is special in the sense that functions are considered first class citizens or entities. So, we can pass them around as arguments, we can return them inside a function and we can even assign them to a variable. 

* The `Map` method is perfect when you want to create a new array that is based on another array.

* "Scope" is the biggest source of confusion regarding variables and "context" is the biggest source of confusion regarding objects.

* "Scope" is like a one way street. The traffic only flows in one direction. Code can reach outwards to access a variable but it cannot reach inwards.

* `let` uses a block scope whereas stupid `var` uses function scope.

* The `this` keyword points towards the object that is executing the current function.

* What `this` keyword points towards, changes depending on the "context".

* Never ever forget to initialize a variable with either `let` or `const`. Very strange behaviour and bugs may occur!

* JS don't care about the type of elements of an array: let a = [1, "saeed', NaN, null, true]

* Arrays are special types of objects where the keys are an ordered set of indices. 

* Put helper functions after the main code. 

* Remember to take benefit of `continue` directive to avoid extra nesting.

* Doing maths is “safe” in JavaScript. At worst, we’ll get NaN as the result.

* Values null and undefined are special: they equal == each other and don’t equal anything else.

* In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages. It’s just a special value which represents “nothing”, “empty” or “value unknown”. Normally, one uses null to assign an “empty” or “unknown” value to a variable (instead of using 'undefined')

* The result of typeof null is "object". That’s an officially recognized error in typeof behavior

* The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. 

* Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.
  
* 'expressions' produce results whereas 'statements' do actions. Function expressions produce immediate results whereas function declarations do not.

* This keyword is only assigned a value when an object calles a method.

* Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

* AND returns the first falsy value while OR returns the first truthy one.

* ... the important difference between them is that:
  * || returns the first truthy value.
  * ?? returns the first defined value.
  
* The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.
  
 * If a function does not return a value, it is the same as if it returns undefined.
 
 * ... The proper way to characterize them is that == checks for value equality with coercion allowed, and === checks for value equality without allowing coercion; === is often called “strict equality” for this reason.
 
 * arrays are by default coerced to strings by simply joining all the values with commas (,) in between. `a=[1,2,3]; b="1,2,3"; a==b \\true`
 
 * specification says that `NaN` is neither greater than nor less than any other value.

* `forEach` method unlike `map` or `reduce`, returns `undefined` so it's not chainable.

* use `find` method on arrays to search for a unique id or identifier. use `filter` for searching in an array and get all the elements that pass the criteria.

* remember that `sort` method mutates the original array!

* a variable declared with `var` in the global context, is attached to the global object (`window` in the browser) but variables that are declared with `let` and `const` are not attached to the global objects.

* `innerText` property will return only the text inside the element without any formatting applied to it but `textContent` property will return the text keeping the format. `innerText` is aware of what is going to show up in the page.

* `__proto__` is a 'reference' to the object `prototype`

* to find out the value of `this` follow these 3 checks: 1. is the function defined in an arrow function? 2. did you call `bind, apply, call` on the function when you invoked it? 3. All other cases (the value of `this` would be whatever is to the left of `.`)

* the first argument of `bind, call, apply` is the value of `this` that we want to execute the function with. 

* `call` can accept more than 2 arguments. `apply` accepts only two arguments and destructures the second argument. Both `call` and `apply` change the reference of `this` and they immediately call the function, whereas `bind` doesn't call the function.

* in order to share information between different methods in a class, we assign that information to an instance variable ex. `this.timer = ...`

* `window.location` gives information about the url you're visiting. 

* Use `btoa` and `atob` to convert ascci to base64 and viceversa.

* you can use `now` service to get a live version of your app very easily. Just do `npx now`.

* An `object` is an entity that has data and behaviour (nouns and verbs).

* In Javascript, a `constructor` is a reusable blueprint.

* A `constructor` function looks like a regular function and the fact that how we use this function, makes it a `constructor` function (by using `new` keyword which is an operator that creates a new instance of the constructor function object type).

* The `require()` syntax for importing js files, works in gulp because gulp is running in Node.js but it wouldn't work in browser! This is when we need **webpack** for making a bundled file of all of the separate js files. 

* When we `require()` a file, the code that file is executed immediatelly. But apart from running this file, we need to have access to certain parts of it. In other words we want to make these parts, accessible or callable.

* `require()` returns `exports` object.

* first install webpack globally, then create a `webpack.config.js` file in the root of the main directory. Note that webpack needs us to give it an absolute path (not a relative path); This is why we need to use `path`.

* `babel-loader` helps us to integrate babel with webpack

* The first item in a jquery array-like object, is always a pointer to the native DOM element. 

* Browsers download an image, as soon as they see a `src` or `srcset` attribute in the `img` tag.

* By adding Modernizr to your project you would be able to check what features the browser support on the fly.

* When using `querySelectorAll()` use `scope` pseudo-class to make `querySelectorAll` to only match selectors on descendants of the base element. 

```
const select = document.querySelector('.select');
const inner = select.querySelectorAll(':scope .outer .inner');
```
* Always use `{` on the same line of the beforehand code as js might mess things up by `automatic semicolon insertion`.

* When we use `...` with functions to deal with any number of parameters, then we call it `rest` operator i.e for the rest of parameters. In ES5, we had to use `arguments` which is an array-like object (key: value) but `arguments` does not work in arrow functions. So, with arrow functions we have to use `...` syntax.

* All numbers in js are stored in 64-bit format, so if any number cannot be stored in 64-bit format, return `infinity`.  

* `NaN == NaN` will return false because `NaN` returns a unique value each time you reference it. In order to check if some value is NaN you should always use `isNaN()` method. If we check for `isFinite()`, it checks not only for `NaN` but also for `Infinity`. In short, `isFinite` checks whether we have a regular number or not. 

* 3 must-know points about arrow functions: 1. `this` object is not changed using arrow functions. 2. you cannot use `arguments` with arrow functions. 3. you cannot use `new` keyword to call arrow functions. 

* We use `IIFE` to avoid global leakage. We also have `IIAF` which stands for Immediately Invoked Arrow Function. 

* When you are using `closure` you are making private members, globally available. Do it when needed not always. 

* `sum(5)(6)` is an example of `currying`. It's a unique way to call inner functions where you can pass arguments partially or pass multiple arguments in a function but one argument at a time. `currying` is very useful in functional programming. 

* When you are creating a data structure and want it to be iterable, you need to use `Symbol.iterator`. 

* `generator` functions help you pause and resume the code. Normally functions return single value but with generators we can return multiple values is phases.

* `mark and sweep` algorithm is used for `garbage collection` which starts from root element and marks referenced element and clear `unreachable` ones. 

* Error handling with `try...catch` with let you handle the errors at `run time` which is better than facing with errors in `compile time`. We use `try...catch` to handle the errors without stopping the code execution.

* You can use `throw` operator to notify the user about the errors. The error object inside `throw` can be of any error class types such as `Error`, `TypeError`, `SyntaxError`.

* `finally` block is always executed. You can omit `catch` block and use only `try...finally` blocks to let go of the error and continue with your program regardless of what error could have occured in a `catch` block.

* `for ... in` loop returns the array `indices` whereas `for ... of` loop returns the array `elements`.

* `forEach` loop cannot be stopped in between. If for some reason you need to break out of the loop, do not use `forEach`.

* `splice` is a very powerfull method for arrays. It can remove, insert, add or replace elements in an array.

* Methods to search in an array: `indexOf()`, `lastIndexOf()`, `includes()`. `find()`, `findIndex()`, `filter()`. With find and findIndex if no element is found, it will return `undefined` and `filter` will return an empty array.

* To flatten an array we use `reduce` method. There is also a `reduceRight()` method which starts from `array.length - 1` element and goes toward `0th` element. 

* The `sort()` method compares elements as if they are strings even when sorting numeric values. That's why we need to use the callback function which is called the `compare` function. 

* Always square brackets on the left hand side, indicate destructuring not an array. 

* There are four ways to create a date object: 1. `new Data()` 2. `new Date(year, month, ..., milliseconds)` 3. `new Date(millisecond)` 4. `new Date(string)`

* If your are using string to initiate a date object, abide by ISO format: `YYYY-MM-DDTHH:mm:ss:sssZ`

* In any case of object creation, the basic idea is that we are creating a container to bundle data pieces. 

* You can have dynamic key name in an object by putting the key inside []: `let obj = {[tempV]: 1001, ...}`. Also, when using classes, you can have dynamic properties and dynamic method names. 

* If you want to make a clone (copy) of an object (pass it as value) in ES6 you can use `assign`: `const obj1 = Object.assign({}, obj)`.

* In earlier versions of ES, a function could play the role of a class, that's why traditional functions can change the what `this` points to.  

* If you need to have access to a class's methods, those method should be defined as `static`. In other words, we don't need to have an instance of a class to refer to a static member. Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.

* When creating a module which has services for which we do not need to instantiate the class, we use static members. 

* `super` is the keyword which allows you to access parent class members. `super()`: calls parent constructor, `super.method()`: calls parent's methods and `super.property` access parent properties. 

* If you need to import scripts directly into html files, use `<script type="module"> import {calc} from './calc.js'; calc() </script>` . Remember that all `named modules` must be imported using curly brackets: `import {sum , multiply} from './calc'`

* In modern web build tools like web pack, if some imported modules are not used, then those modules get removed, that is `tree shaking`. 

* `default export` means there will be one module per file. Many frameworks use this approach to export one function or class. 
