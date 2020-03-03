export const run = ({ foobar = 'test' }) => {
  console.log('testing 3 comment on different branch');
  return foobar;
};

export const bad = ({ foobar = 'test' }) => {
  console.log('testing 3 BAD comment on different branch');
  return foobar;
};

export const good = ({ foobar = 'test' }) => {
  console.log('testing 3 GOOD comment on different branch');
  return foobar;
};

export const ugly = ({ foobar = 'test' }) => {
  console.log('testing 3 UGLY comment on different branch');
  return foobar;
};
