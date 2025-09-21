const names = require('./4-moduleName');
// const { name1, name2 } = require('./4-moduleName');  // destructure

const sayHi = require('./5-modulePart');

sayHi('Nikki');

//Any file you require() always runs.
// You only get the exports if you assign it to a variable.

require('./7-mind-granade'); // executing the file

sayHi(names.name1);
sayHi(names.name2);
