export const run = ({ foobar = 'test' }) => {
  console.log('testing 5 comment on different branch');
  return foobar;
};

export const bad = ({ foobar = 'test' }) => {
  console.log('testing 5 BAD comment on different branch');
  return foobar;
};

export const good = ({ foobar = 'test' }) => {
  console.log('testing 5 GOOD comment on different branch');
  return foobar;
};

export const ugly = ({ foobar = 'test' }) => {
  console.log('testing 5 UGLY comment on different branch');
  return foobar;
};
