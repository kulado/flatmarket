# gocart-server

A standalone web server for [GOCart](https://github.com/kulado/gocart).

## Installation

```
npm install gocart-server
```

## Usage

The server requires the following environment variables:

```
CORS_ORIGINS=["https://your-origin.com"]
PORT=8000
SCHEMA_URI=https://your-origin.com/gocart.json
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Then run:

```sh
node ./node_modules/gocart-server/start
```

## License

See [LICENSE](https://github.com/kulado/gocart/blob/master/LICENSE.md).
