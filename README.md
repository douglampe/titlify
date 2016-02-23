# titlify
> Tiny module to parse various strings into words and capitalize the first letter of each word.

## Installation

```sh
$ npm install --save titlify
```

## Usage

### titlify(input, forceLowerCase) 

**Parameters**

**input**: `string`, String to parse.

**forceLowerCase**: `bool`, Specify true in order to force all letters after first letter of word 
to lowercase or false (default) to keep existing casing after first letter.

```js
var titlify = require('titlify');

titlify('somewhere-over-the-rainbow'); // returns "Somewhere Over The Rainbow" 

titlify('somewhere over the rainbow'); // returns "Somewhere Over The Rainbow" 

titlify('somewhere/over/the.rainbow'); // returns "Somewhere Over The Rainbow"

titlify('SomeWhere-OVER-the-RainBow'); // returns "ShomeWhere OVER The RainBow" 

titlify('SomeWhere-OVER-the-RainBow', true); // returns "Shomewhere Over The Rainbow" 

titlify('SomeWhere-OVER-the-RainBow', false); // returns "ShomeWhere OVER The RainBow" 

```
## License

MIT © [Doug Lampe](http://www.douglampe.com)