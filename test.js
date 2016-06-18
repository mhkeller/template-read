var template = require('./index')

var x = template('<%= data.author %>')({
  data: {
    author: 'mhk'
  }
})

console.log(x)

var y = template('<%~ data.authors %>')({
  data: {
    authors: [{name: 'mhk'}, {name: 'hwk'}]
  }
})

console.log(template('<%~ data.authors %>').source)

console.log(y)