# minimal-fume-project

A minimal example project that uses **FUME Community** (`fume-fhir-converter`) to run a small transformation against a public FHIR server.

## Requirements

- Node.js (ESM project)
- npm

## Install

```sh
npm install
```

## Run

```sh
npm start
```

What it does:

- Starts a local FUME server on port `42420`
- Warms up FUME using the configured FHIR package(s)
- Executes the mapping expression in [src/index.js](src/index.js)
- Prints the transformation results as JSON

## Configuration

Edit the `options` object in [src/index.js](src/index.js) to change:

- `SERVER_PORT` (local port)
- `FHIR_SERVER_BASE` (FHIR endpoint)
- `FHIR_VERSION`
- `FHIR_PACKAGES` (FHIR Implementation Guide package name)

## License

AGPL-3.0
