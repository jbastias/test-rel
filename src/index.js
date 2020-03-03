export const run = ({ foobar = 'test' }) => {
  console.log('testing 4 comment on different branch');
  return foobar;
};

export const bad = ({ foobar = 'test' }) => {
  console.log('testing 4 BAD comment on different branch');
  return foobar;
};

export const good = ({ foobar = 'test' }) => {
  console.log('testing 4 GOOD comment on different branch');
  return foobar;
};

export const ugly = ({ foobar = 'test' }) => {
  console.log('testing 4 UGLY comment on different branch');
  return foobar;
};
