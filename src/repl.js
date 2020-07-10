const { prompt } = require('inquirer');
const chalk = require('chalk');

const { parseAndEvaluate } = require('./parse-and-evaluate');

function askQuestions() {
  const questions = [
    { name: 'COMMAND', type: 'input', message: chalk.blue('>') },
  ];
  return prompt(questions);
}

const repl = async () => {
  try {
    const answer = await askQuestions();
    const { COMMAND } = answer;
    if (COMMAND.trim()) {
      console.log(chalk.yellow(parseAndEvaluate(COMMAND)));
    }
  } catch (err) {
    console.error(err);
  }

  repl();
};

if (require.main === module) {
  console.log(
    chalk.red(
      `Welcome to the ${chalk.bgYellow('Dropbear')} Programming Language`,
    ),
  );
  repl();
}

module.exports = repl;
