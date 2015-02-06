'use strict';

var fs = require('fs')
  , path = require('path');

/**
 * Write the whole uniquely generated list to a human readable markdown file.
 *
 * @param {Array} list List of prior inventions.
 * @api public
 */
module.exports = function markdown(list) {
  var file = [
    '# Prior Inventions',
  ];

  list.forEach(function each(invention) {
    file.push('');
    file.push('**Name:**       '+ invention.name);
    file.push('**Description:**'+ invention.description);
    file.push('**Created:**    '+ invention.created.toLocaleDateString());

    if (invention.url) {
      file.push('**URL:**        '+ invention.url);
    }
  });

  fs.writeFileSync(path.join(process.cwd(), 'prior-inventions.md'), file.join('\n'));
};
