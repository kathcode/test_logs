'use strict';

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  const orderedLogs = require('../sort')(logSources);

  return orderedLogs.forEach((log, index) => {
    printer.print(log.last);
    if (index === orderedLogs.length - 1) printer.done();
  });
};
