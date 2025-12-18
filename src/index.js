import { FumeServer } from "fume-fhir-converter";

const server = new FumeServer();
const options = {
  SERVER_PORT: 42420,
  FHIR_SERVER_BASE: 'https://hapi.fhir.org/baseR4',
  FHIR_VERSION: '4.0.1',
  FHIR_PACKAGES: 'il.core.fhir.r4', // will fetch leatest version from registry
  // FHIR_SERVER_AUTH_TYPE: 'BASIC' | 'NONE',
  // FHIR_SERVER_UN: ''
  // FHIR_SERVER_PW: ''
  // FHIR_PACKAGE_REGISTRY_URL?: string
  // FHIR_PACKAGE_REGISTRY_TOKEN?: string
  // FHIR_PACKAGE_CACHE_DIR?: string
};

// The input data to be transformed
const input = {};

// The mapping expression to be used for transformation
const expression = "$search('Patient', {'_count': '200'}).entry.resource"

// warmup the server
server.warmUp(options).then(async () => {
  const results = await server.transform(input, expression);
  console.log('Transformation results:');
  console.log(JSON.stringify(results, null, 2));
  console.log(`FUME server still running on port ${options.SERVER_PORT}`);
  console.log('Press Ctrl+C to shut down the server.');
});

// shutdown the server when done
process.on('SIGINT', async () => {
  await server.shutDown();
});