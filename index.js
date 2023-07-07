const name = 'projects/hidden-display-243419/secrets/testingthis/versions/latest';

const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

const client = new SecretManagerServiceClient();

async function accessSecretVersion() {
  const [version] = await client.accessSecretVersion({
    name: name,
  });

  const payload = version.payload.data.toString();

  console.info(`Super hemmelig hemmelighet: ${payload}`);
}

accessSecretVersion();