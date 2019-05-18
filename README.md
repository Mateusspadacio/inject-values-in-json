# inject-values-in-json

It is a helper method to inject values in json attributes

### Scenery
If you have a default json template stored in your database and your application needs to replace some values to let it dynamic, you can use this to help you.

### How to use
This is a simple usage

```js
const injectByKeyValuePairs = require('inject-values-in-json');

// it can be a json string as well
const json = {
  title: 'About ${subject}',
  content: 'Dear ${name}, <br />I am contacting you because... <br />This is my phone number ${phone}',
  sent: '${date}'
};

const keyValuePairs = {
  name: 'Jhon',
  subject: 'Something',
  phone: '202-555-0175',
  date: new Date()
};

injectByKeyValuePairs(json, keyValuePairs);

// output
/*
{ 
  title: 'About Something',
  content: 'Dear Jhon, <br />I am contacting you because... <br />This is my phone number 202-555-0175',
  sent: '2019-05-18T01:58:54.983Z' 
}
*/
```

You can use functions as well

```js
const json = {
  title: 'I want to generate some random ids for ${name}s products',
  products: [
    { id: '${id}', name: 'skate' },
    { id: '${id}', name: 'bicycle' },
    { id: '${id}', name: 'computer' },
    { id: '${id}', name: 'cellphone' }
  ]
};

const keyValuePairs = {
  name: 'Jhon',
  id: () => Math.random().toString(36).substring(7)
};

injectByKeyValuePairs(json, keyValuePairs);

// output
/*
{ 
  title: 'I want to generate some random ids for Jhons products',
  products:
   [ 
     { id: 'e6rdq', name: 'skate' },
     { id: '02xaq', name: 'bicycle' },
     { id: 'cs45v', name: 'computer' },
     { id: '6d6cfn', name: 'cellphone' }
   ]
}
*/
```
