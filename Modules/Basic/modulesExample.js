/**
 * This is just one way to go about modules exporting.


function printGodfather(){
    console.log("Godfather is the greatest movie ever made.");
}

function printHagga(){
    console.log("Hagga is the most hagga movie ever made.");
}

module.exports.godfather = printGodfather;
module.exports.hagga = printHagga;

*/


/**
 * Streamlined approach for exporting modules
 */

module.exports = {
  printGodfather : function(){
      console.log("Godfather is the greatest movie ever made.");
  },

  printChappie : function(){
      console.log("Chappie is the most hagga movie ever made.");
  }

};