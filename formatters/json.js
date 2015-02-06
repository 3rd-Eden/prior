'use strict';

var fs = require('fs')
  , path = require('path');


/**
 * Write the whole uniquely generated list to a human readable JSON file.
 *
 * @param {Array} list List of prior inventions.
 * @api public
 */
module.exports = function formatter(list) {
  fs.writeFileSync(path.join(process.cwd(), 'prior-inventions.json'), JSON.stringify(list, null, 2));
};
