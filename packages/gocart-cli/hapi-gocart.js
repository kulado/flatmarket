var Boom = require('boom')
var createHandler = require('./service.js')
var gocartValidation = require('./validation.js')
var Joi = require('joi')
var pkg = require('./package.json')

var DEFAULT_CORS_ORIGINS = ['*']
var PATH = '/'

var optionsSchema = Joi.object().keys({
    corsOrigins: Joi.array().min(1).items(Joi.string()).default(DEFAULT_CORS_ORIGINS),
    schemaUri: Joi.string().uri({ scheme: /^https/ }).required(),
    stripeSecretKey: Joi.string().token().required(),
})

exports.register = register
exports.optionsSchema = optionsSchema

register.attributes = {
    pkg: pkg,
}

function register(server, options, next) {
    var validation = Joi.validate(options, optionsSchema)
    if (validation.error) return next(validation.error)
    options = validation.value
    var handler = createHandler(options.stripeSecretKey, options.schemaUri)
    var cors = {
        origin: options.corsOrigins,
    }
    server.route({
        config: {
            cors: cors,
            id: 'gocart',
            validate: {
                payload: gocartValidation.createCharge,
            },
        },
        method: 'POST',
        path: PATH,
        handler: function (req, reply) {
            return handler(req.payload)
                .then(reply)
                .catch(function (err) {
                    if (err.isBoom) return reply(err)
                    return reply(Boom.badImplementation())
                })
        },
    })
    server.route({
        config: {
            cors: cors,
            id: 'gocart-preflight',
        },
        method: 'OPTIONS',
        path: PATH,
        handler: function (req, reply) {
            return reply()
        },
    })
    return next()
}
