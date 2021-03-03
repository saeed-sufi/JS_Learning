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

* in order to share information between different methods in a class, we assign that information to an instance variable ex. `this.timer = ...`

* `window.location` gives information about the url you're visiting. 

* Use `btoa` and `atob` to convert ascci to base64 and viceversa.

* you can use `now` service to get a live version of your app very easily. Just do `npx now`.
