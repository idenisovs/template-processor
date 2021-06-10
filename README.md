# Template Processor

This library processes the templates and replaces placeholders with random items from preset lists.

## Example

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