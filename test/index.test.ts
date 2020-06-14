import { expect, test } from '@oclif/test';

import cmd = require('../src');

xdescribe('next-generator', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world');
  });

  test
  .stdout()
  .do(() => cmd.run(['g p', 'jeff']))
  .it('runs --generate', ctx => {
    expect(ctx.stdout).to.contain('hello jeff');
  });
});
