import * as inquirer from 'inquirer';
import { Question } from 'inquirer';

// TODO: params should be typed, not as an any
export const promptTheQuestion = async (args: any) => {
  const questions: Question[] = [];

  if (!args.name) {
    questions.push({
      type: 'input',
      name: 'fileName',
      message: 'What is the name of your file:',
      default: 'index.js',
    });
  }

  const answers = await inquirer.prompt(questions);

  return {
    ...args,
    fileName: answers.fileName,
  };
};
