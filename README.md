Template parse
===

> Underscore templates but with the option to return data

```js
var templateString = template('<%~ data.authors %>')({
  data: {
    authors: [{name: 'mhk'}, {name: 'jsb'}]
  }
})

// => [ { name: 'mhk' }, { name: 'hwk' } ]
```