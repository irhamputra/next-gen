import { Command, flags } from "@oclif/command";

class NextGenerator extends Command {
  static description =
    "Next.js Generator for creating page and APIs file into your project";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  static usage = ["g p yourPage.js [Option]", "--help"];

  async run() {
    const { args, flags } = this.parse(NextGenerator);

    console.log(this.config);

    const name = flags.name ?? "world";
    this.log(`hello ${name} from ./src/index.ts`);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}

export = NextGenerator;
