# Template Processor

This library processes the templates and replaces placeholders with random items from preset lists.

## Usage

```javascript
const { TemplateProcessor } = require('@idenisovs/template-processor');

const sources = {
    name: [ 'Andrew', 'Boris', 'Chris' ],
    adjective:  [ 'Happy', 'Angry', 'Neutral' ]
};

const template = 'Hello from [adjective] [name]'

const tp = new TemplateProcessor(sources);

const result = tpl.process(template);

console.log(result); // Hello from Happy Boris
```

## Templates

### Simple template

```javascript
const template = 'Hello [name]!';
```

### Placeholder variants

It is possible to define two or more sources, which will be used randomly:

```javascript
const template = '[name|animal] say [greeting]!';
```

```javascript
const sources = {
    name: [ 'Andrew', 'Boris' ],
    animal:  [ 'Cat', 'Dog' ],
    greeting: [ 'Hello', 'Meow', 'Moo' ]
};
```

#### Expected result

In this case result might be one of the following:

```
Cat say Hello!
Andrew say Moo!
```