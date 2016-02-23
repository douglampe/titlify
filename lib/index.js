(function () {
  'use strict';

  module.exports = titlify;

  function titlify(input, forceLowerCase) {
    var i;
    var words = parse(input);
    var output = '';

    for (i = 0; i < words.length; i++) {
      if (i > 0) {
        output += ' ';
      }
      output += capitalize(words[i], forceLowerCase);
    }

    return output;
  }

  function parse(input) {
    return input.split(/\W/g);
  }

  function capitalize(input, forceLowerCase) {
    var i;
    var output = '';

    for (i = 0; i < input.length; i++) {
      if (i === 0) {
        output += input[i].toUpperCase();
      } else {
        output += forceLowerCase ? input[i].toLowerCase() : input[i];
      }
    }

    return output;
  }
})();
