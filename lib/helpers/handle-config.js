const fs = require('fs');

const configPath = '/Users/thomasodonnell/.system-reporter-config.json';

const readConfig = () => {
  const configFile = fs.readFileSync(configPath, 'utf8', (err, data) => {
    err && console.log(err);
    data && console.log(data);
  });
  console.log(configFile);
  if (configFile) {
    return configFile;
  }
};

exports.writeConfigFile = async (infoObj) => {
  let config;
  let newConfigFileContents;
  try {
    config = readConfig();
    if (await config) {
      const configFileContents = JSON.parse(config);
      newConfigFileContents = JSON.stringify({
        ...configFileContents,
        infoObj,
      });
    } else {
      newConfigFileContents = JSON.stringify({ ...infoObj });
    }
  } catch (error) {
    console.log(error);
  }

  await fs.writeFile(configPath, newConfigFileContents, null, (err) => {
    err && console.log(err);
  });
};
