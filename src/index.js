import '@babel/polyfill';
import yargs from 'yargs';

const argv = yargs
  .option('foobar', {
    alias: 'f',
    describe: 'foobar',
    type: 'string',
    // require: true,
    default: null,
  })
  .help()
  .version().argv;

const run = ({ foobar }) => {
  console.log(foobar || 'xxx');
  console.log(foobar || 'abc');
  console.log(`new shit!!!`);
};

(async () => {
  let options = null;
  if (argv.foobar) {
    options = { foobar: argv.foobar };
  }

  await run(options || {});
})();
