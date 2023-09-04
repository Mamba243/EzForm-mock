const test = require('./test')
const question = require('./question')
const stat = require('./stat')
const user = require('./user')
const template = require('./template')

module.exports = [
    ...test,
    ...question,
    ...stat,
    ...user,
    ...template
]