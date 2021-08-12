const t = require('tap');
const titlify = require('../lib');
const {ESLint} = require('eslint');

async function lint() {
  const eslint = new ESLint();
  const formatter = await eslint.loadFormatter('stylish');

  const results = await eslint.lintFiles(['lib/**/*.js', 'test/**/*.js']);
  const resultText = formatter.format(results);

  console.log(resultText);
}

function test() {
  t.test('should parse various non-word characters', t => {
    t.plan(5);
    t.equal(titlify('this is a test'), 'This Is A Test');
    t.equal(titlify('this-is-a-test'), 'This Is A Test');
    t.equal(titlify('this\\is/a.test'), 'This Is A Test');
    t.equal(titlify('this-is-a-TEST', true), 'This Is A Test');
    t.equal(titlify('this-is-a-TEST', false), 'This Is A TEST');
    t.end();
  });
}

(async function () {
  await lint();
  test();
}).apply().catch(error => {
  process.exitCode = 1;
  console.error(error);
});
