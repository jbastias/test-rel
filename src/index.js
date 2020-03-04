export const run = ({ foobar = 'test' }) => {
  console.log('testing 32 comment on different branch');
  return foobar;
};

export const bad = ({ foobar = 'test' }) => {
  console.log('testing 6 BAD comment on different branch');
  return foobar;
};

export const good = ({ foobar = 'test' }) => {
  console.log('testing 6 GOOD comment on different branch');
  return foobar;
};

export const ugly = ({ foobar = 'test' }) => {
  console.log('testing 6 UGLY comment on different branch');
  return foobar;
};
