const { getUserInput, nameQuestion } = require('../helpers/inquirer');
const { writeConfigFile, fetchName } = require('../helpers/handle-config');

const nameHandler = async () => {
  let name = await fetchName();
  if (!name) {
    newName = await getUserInput([nameQuestion]);
    await writeConfigFile(newName);
    name = newName.name;
  }
  const greeting = `Welcome to System Reporter, ${name}.`;
  console.log(greeting);
};

module.exports = nameHandler;
