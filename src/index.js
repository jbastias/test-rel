export const run = ({ foobar = 'test' }) => {
  console.log('testing comment on different branch');
  return foobar;
};

export const bad = ({ foobar = 'test' }) => {
  console.log('testing BAD comment on different branch');
  return foobar;
};

export const good = ({ foobar = 'test' }) => {
  console.log('testing GOOD comment on different branch');
  return foobar;
};

export const ugly = ({ foobar = 'test' }) => {
  console.log('testing UGLY comment on different branch');
  return foobar;
};
