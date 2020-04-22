# uhelsinki-fullstackopen

To run any exercise, go to the app's root and run `npm install` once to install all required modules, then `npm start` every time to start the app.

#### Stuff I don't like about React (so far - some of it will probably get better when I go beyond the basics)

- every input must have a state hook and you have to define the onChange callback to set the state of the associated 
variable, so every time an input changes value theres a round trip to react

- When rendering two elements on two diferent lines, there is no whitespace between them. You have to manually add whitespace with {' '}

- messy syntax with all the curly braces everywhere

- confusing and overly complicated that if ou want to have a state variable you need to define a two-element array and use the setter every time you want to change the state

- component's state is being maintained by the parent, not by the component itself

- you can't do a simple "return" of a value from a component. You have to use callbacks from the parents.

- I can't simply "return" right away inside a component conditionally if I use any hooks. For example, in the countries app (part 2) in the Weather component I want it to just return right away without trying to do anything if an API key isn't provided, but I can't do that because then react complains that hooks must be run before any conditionals.

- having an input field is so much work, you hvae to create a variable for each input

- "you must never mutate state directly" this causes awkward code and is very easy to forget.

- any variable used inside an effect hook must be declared in the [] second parameter of the hook https://github.com/facebook/react/issues/14066

- no way to retrieve a value from a child component *once on-demand*. Instead I have to have a callback function that always gives me its value, seems very wasteful

- annoying that when rendering HTML tags, I can't use normal attributes like class (need to use className instead) or if I want to add a style I need to wrap the contents in weird curly braces instead of just a string

- inline styles are extra weird, values need to be wrapped in quotes, numeric pixels are numbers without the "px", hyphenated property names become camelCase
