# <center> Template Syntax  </center>

## Raw Html

The most basic form of data binding is text interpolation using the "Mustache" syntax (double curly braces):

<span>Message: {{ msg }}</span>

Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use v-html on trusted content and never on user-provided content.

## Attribute Bindings

Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive:

```javascript
<div v-bind:id="dynamicId"></div>
```
Short syntax: 
```javascript
<div :id="dynamicId"></div>
```

### Dynamically Binding Multiple Attributes

```javascript
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}

<div v-bind="objectOfAttrs"></div>
```

## Using JavaScript Expressions

In Vue templates, JavaScript expressions can be used in the following positions:

- Inside text interpolations (mustaches)
- In the attribute value of any `Vue directives` (special attributes that start with `v-`)

>Each binding can only contain one single expression.

## Directives

Directives are special attributes with the `v-` prefix
```js 
<p v-if="seen">Now you see me</p>
```
Here, the `v-if` directive would remove or insert the `<p>` element based on the truthiness of the value of the expression `seen`.

## Arguments

```html
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>
```
```html
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```
Here, `href` `click` is the argument.

## Daynamic Argument

It is also possible to use a JavaScript expression in a directive argument by wrapping it with square brackets:

```javascript
<a v-bind:[attributeName]="url"> ... </a>
<a :[attributeName]="url"> ... </a>
```
Similarly, you can use dynamic arguments to bind a handler to a dynamic event name:

```Javascript
<a v-on:[eventName]="doSomething"> ... </a>

<!-- shorthand -->
<a @[eventName]="doSomething"> ... </a>
```

### Dynamic Argument Value Constraints

- Dynamic arguments are expected to evaluate to a `string`, with the exception of `null`.
- The special value null can be used to explicitly remove the binding. Any other non-string value will trigger a warning.
- Any other `non-string` value will trigger a `warning`.

```js
<a :[someAttr]="value"> ... </a>
```
>Avoid naming keys with uppercase characters, as browsers will coerce attribute names into lowercase.

## Modifiers

Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way.
For example, the `.prevent` modifier tells the `v-on` directive to call `event.preventDefault()` on the triggered event:

```javascript
<form @submit.prevent="onSubmit">...</form>
```
![GitHub Logo](https://vuejs.org/assets/directive.DtZKvoAo.png)



# <center> Recativity Fundamentals  </center>

### Declaring Reactive State
- we use the `data` option to declare `reactive state` of a component
- The option value should be a `function` that returns an `object`
- Vue will call the function when `creating a new component instance`, and wrap the returned object in its `reactivity` system.

```javascript
<div id="app"></div>

const App = {
    data() {
        return {
            count: 1
        }
    },

    mounted() {
        console.log(this.count)

        this.count = 2
    },

    template: `Count is: {{ count }}`
};

Vue.createApp(App).mount('#app');
```
- Do not use `$` `_` for top level data properties cause Vue use its own built-n APIs

### Deep Reactivity
```javascript
const App = {
    data() {
        return {
            obj: {
                nested: { count: 0},
                arr: ['foo', 'bar']
            }
        }
    },
    methods: {
        mutateDeeply() {
            this.obj.nested.count++
            this.obj.arr.push('baze');
        }
    },
    mounted() {
        this.mutateDeeply()
    }
};

Vue.createApp(App).mount('#app');
```