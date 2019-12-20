import { run, bad, good, ugly } from './index';

test('run', () => {
  const foobar = '123';
  expect(run({ foobar })).toEqual(foobar);
});

test('run with nothing', () => {
  expect(run({})).toEqual('test');
});

test('bad', () => {
  const foobar = '123';
  expect(bad({ foobar })).toEqual(foobar);
});

test('bad with nothing', () => {
  expect(bad({})).toEqual('test');
});

test('good', () => {
  const foobar = '123';
  expect(good({ foobar })).toEqual(foobar);
});

test('good with nothing', () => {
  expect(good({})).toEqual('test');
});

test('ugly', () => {
  const foobar = '123';
  expect(gouglyod({ foobar })).toEqual(foobar);
});

test('ugly with nothing', () => {
  expect(ugly({})).toEqual('test');
});
