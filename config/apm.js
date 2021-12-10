import apm from 'elastic-apm-node';
apm.start({
  // Override the service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'test-Service',

  // Use if APM Server requires a secret token
  secretToken: process.env.ELASTIC_APM_SECRET_TOKEN,

  // Set the custom APM Server URL (default: http://localhost:8200)
  serverUrl: process.env.ELASTIC_APM_SERVER_URL,

  // Set the service environment
  environment: process.env.NODE_ENV,

  cloudProvider: 'none' // For testing locally

});
