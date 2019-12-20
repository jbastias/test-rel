import '@babel/polyfill';
import yargs from 'yargs';
import { run } from './index';

const argv = yargs
  .option('foobar', {
    alias: 'f',
    describe: 'foobar',
    type: 'string',
    default: null,
  })
  .help()
  .version().argv;

(async () => {
  let options = null;
  if (argv.foobar) {
    options = { foobar: argv.foobar };
  }

  const foobar = await run(options || {});
  console.log(foobar);
})();
