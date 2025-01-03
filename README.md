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

# <center> Class & Style Binding  </center>

### Binding HTML Classes
```js
<div id="app">
  <div class="static" :class="{ active: isActive, 'text-danger': hasError}">{{ text }}</div>
</div>
```
```js
<script>
  const App = {
    data() {
      return {
        isActive: true,
        hasError: true
        text: "Something"
      };
    }
  };

  Vue.createApp(App).mount("#app");
</script>
```
- two word class mustbe blocked with inverted comma. ex- `'active'` `'text-danger'`
- When isActive and hasError change become true it will render in dom like
`<div class="static active text-danger">Something</div>`

### Bound class Object
```js
<div id="app">
  <div :class="clasObj">Something</div>
</div>
```
```js
<script>
  const App = {
    data() {
      return {
        clasObj: {
          active: true,
          "text-danger": true,
        },
      },
    },
  }

  Vue.createApp(App).mount("#app");
</script>
```
### Binding to Computed property
```js
<div id="app">
  <div :class="classObject">Something</div>
</div>
```
```js
<script>
  const App = {
    data() {
      return {
        isActive: true,
        hasError: null,
      };
    },

    computed: {
      classObject() {
        return {
          active: this.isActive && !this.hasError,
          'text-danger': ! this.hasError && this.hasError.type === 'fatal'
        }
      }
    }
  };

  Vue.createApp(App).mount("#app");
</script>
```

### List Rendering

- It is recommended to provide a `key` attribute with `v-for` whenever possible, unless the iterated DOM content is simple
- The `key` binding expects primitive values - i.e. `strings` and `numbers`. Do not use `objects` as `v-for` keys.

```js
<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>
```
- It's not recommended to use `v-if` and `v-for` on the same element due to implicit precedence
- When they exist on the same node, `v-if` has a higher priority than `v-for`.


# <center> Event Handling  </center>

### Inline Hanler
```javascript
<script>
  const App = {
    data() {
      return {
        count: 0
      };
    },
  };

  Vue.createApp(App).mount("#app");
</script>
```
```html
<div id="app">
  <button @click="count++">Add 1</button>
  <p>The button above has been clicked {{ count }} times.</p>
</div>
```

### Method Handler

```js
<script>
const App = {
  data() {
    return {
      name: 'vue.js'
    };
  },


  methods: {
    greet(event) {
      alert(`Hello ${this.name}`);

      if (event) {
        alert(event.target.tagName)
      }
    }
  }
};

Vue.createApp(App).mount("#app");
</script>
```
```html
<div id="app">
  <button @click="greet">Greet</button>
</div>
```
`A method handler automatically receives the native DOM Event object that triggers it`

- Inline Handler `foo()` `count++`
- Method Handler `foo.bar` `foo['bar']`

### Event Modifier

```js
methods: {
  warn(message, event) {

    if (event) {
      event.preventDefault();
    }
    alert('message');
  }
}
```
writing `event.preventDefault()` inside methods is not a good practice

To address this problem, Vue provides event modifiers for v-on.
- `.stop`
- `.prevent`
- `.self`
- `.capture`
- `.once`
- `.passive`

```html
<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>
```
# <center> Form Input Bindings  </center>


```html
<div id="app">
  <h1>{{ message }}</h1>

  <input :value="message" @input="event => message = event.target.value">

  <input v-model="message">

</div>
```
```js
<script>
  const App = {
    data() {
      return {
        message: 'Hello'
      };
    },
  };

  Vue.createApp(App).mount("#app");
</script>
```

```html
<input :value="message" @input="event => message = event.target.value">

`both are actually same`

<input v-model="message">
```

### Text

Type (elements) | Property | Event
------------|--------------|--
`text` `text-area` | value | input
`checkbox` `radio` | checked | change
`select`| value as prop | change

><b>Note:</b> `v-model` will ignore the initial value, checked or selected attributes found on any form elements. It will always treat the current bound JavaScript state as the source of truth. You should declare the initial value on the JavaScript side, using the data option.

Note that interpolation inside `<textarea>` won't work. Use v-model instead.

```html
<!-- bad -->
<textarea>{{ text }}</textarea>

<!-- good -->
<textarea v-model="text"></textarea>
```

### Select

```js
<div id="app">

  <div>Selected Value: {{ selected }}</div>
  
  <select v-model="selected">
    <option disabled value="">Please Selected a  Value</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

</div>
```

```js
<script>
  const App = {
    data() {
      return {
        selected: ''
      }
    }
  };
  Vue.createApp(App).mount("#app");
</script>
```

>If the initial value of your v-model expression does not match any of the options, the `<select>` element will render in an "unselected" state. On iOS this will cause the user not being able to select the first item because iOS does not fire a change event in this case. It is therefore recommended to provide a disabled option with an empty value, as demonstrated in the example above.