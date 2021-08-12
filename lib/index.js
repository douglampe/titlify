(function () {
  'use strict';

  module.exports = titlify;

  function titlify(input, forceLowerCase) {
    const words = parse(input);
    const output = [];

    for (let i = 0; i < words.length; i++) {
      if (i > 0) {
        output.push(' ');
      }

      output.push(capitalize(words[i], forceLowerCase));
    }

    return output.join('');
  }

  function parse(input) {
    return input.split(/\W/g);
  }

  function capitalize(input, forceLowerCase) {
    const output = [];

    for (let i = 0; i < input.length; i++) {
      if (i === 0) {
        output.push(input[i].toUpperCase());
      } else {
        output.push(forceLowerCase ? input[i].toLowerCase() : input[i]);
      }
    }

    return output.join('');
  }
})();
