var fs = require('fs');

var nodelist = function(nodelistPath){
   if (!(this instanceof nodelist)) return new nodelist(nodelistPath);

   var nodelistString = fs.readFileSync(nodelistPath, {
      encoding: 'utf8'
   });
   if( nodelistString.slice(-1) === '\x1A' ){ // EOF
      nodelistString = nodelistString.slice(-1);
   }
   var nodelistLines = nodelistString.split( /\x0d?\x0a/ );
   nodelistString = null;

   this.nodelistLines = nodelistLines;
};

module.exports = nodelist;