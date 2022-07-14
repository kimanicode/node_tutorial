const _ = require('lodash')

const names = ["kimani",['karaba',['jeff'],['jack' ,['sparrow']]]]

const newNames = _.flattenDeep(names)

console.log(newNames)
console.log(_.flattenDeep)
