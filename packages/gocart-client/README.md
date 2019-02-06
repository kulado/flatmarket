# gocart-client

A browser client for [GOCart](https://github.com/kulado/gocart).

## Installation

```
npm install gocart-client
```

## Usage

```js
var gocart = require('gocart-client').create({
    host: 'your-gocart-server.com',
})
gocart.getStatus()
    .then(function (status) {})
    .caught(function (err) {})
```

## API Reference

- [`Client.create(options)`](#clientcreateoptions)
- [`Client` Instance Methods](#client-instance-methods)
    - [`client.createCharge(options)`](#clientcreatechargeoptions)

### `Client.create(options)`

Creates the client.

```js
var client = Client.create(options)
```

##### **`options`** `Object`

- **`host`** `String`

    The host. *Required*.

- **`pathname`** `String`

    The pathname. Default `'/'`.

### `Client` Instance Methods

#### `client.createCharge(options)`

Creates the charge.

```js
client.createCharge(options)
    .then(function (payload) {})
```

##### **`options`** `Object`

- **`email`** `String`

    The email. *Required*.

- **`metadata`** `Object`

    Metadata about the charge. Default `undefined`.

- **`sku`** `String`

    The SKU. Should correspond to a key in the [Products Object](packages/gocart-schema#products-object). *Required*.

- **`token`** `String`

    The Stripe token. *Required*.

## License

See [LICENSE](https://github.com/kulado/gocart/blob/master/LICENSE.md).
