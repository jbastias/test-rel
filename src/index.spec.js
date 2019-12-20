import { run } from './index';

test('run', () => {
  const foobar = '123';
  expect(run({ foobar })).toEqual(foobar);
});
