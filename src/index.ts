import { Command, flags } from '@oclif/command';
import { createFile } from './utils/createFile';
import { promptTheQuestion } from './utils/promptTheQuestion';
import { Args } from './utils/typings';

class NextGenerator extends Command {
  static description =
    'Next.js Generator for creating page and APIs file into your project';

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    path: flags.string({
      description: 'create file to specific path in your project',
      default: './pages',
    }),
  };

  static args: Args[] = [
    { name: 'generate', options: ['g'] },
    { name: 'create', options: ['p', 'a'] },
    { name: 'fileName' },
  ];

  static usage = ['g p yourPage.js [Option]', '--help'];

  async run() {
    const { args, flags } = this.parse(NextGenerator);

    if (!args.generate && !args.create) {
      this.error('You may skip the generate and create command', { exit: 1 });
      this.exit(1);
    }

    if (!args.generate) {
      this.error('You may skip the generate command, try: next-gen g ', {
        exit: 1,
      });
      this.exit(1);
    }

    if (!args.create) {
      this.error('You may skipped the create command, try: next-gen g p', {
        exit: 1,
      });
      this.exit(1);
    }

    // if args is not available, then prompting
    if (!args.fileName) {
      return createFile(await promptTheQuestion(args), flags);
    }

    await createFile(args, flags);
  }
}

export = NextGenerator;
