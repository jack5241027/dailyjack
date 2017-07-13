const jackDB = require('./').default;
const dataset = require('./jacks.json');
const env = require('../../.env.json');

const {
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
} = env || process.env;

const jacks = jackDB({
  projectId: FIREBASE_PROJECT_ID,
  clientEmail: FIREBASE_CLIENT_EMAIL,
  privateKey: FIREBASE_PRIVATE_KEY,
});

Promise.all(dataset.map(jack => jacks.insert(jack)))
  .then(() => process.exit());