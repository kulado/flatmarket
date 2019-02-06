var actions = require('gocart-web').actions
var Component = require('__component__')
var connect = require('gocart-web').connect
var Provider = require('react-redux').Provider
var React = require('react')
var ReactDom = require('react-dom')
var store = require('gocart-web').store

module.exports = function (data, htmlElement) {
    store.dispatch(actions.reset(data))
    var provider = React.createElement(Provider, { store: store }, React.createElement(connect(Component)))
    return ReactDom.render(provider, htmlElement)
}
