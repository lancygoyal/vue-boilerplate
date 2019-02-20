/* ===============
 * String Filters
 * ===============
 *
 */

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.toLowerCase().slice(1);
};

String.prototype.capitalizeEachLetter = function() {
  return this.toLowerCase()
    .split(' ')
    .map(function(word) {
      return word.capitalizeFirstLetter();
    })
    .join(' ');
};

Vue.filter('capitalizeFirstLetter', function(value) {
  return value.capitalizeFirstLetter();
});

Vue.filter('capitalizeEachLetter', function(value) {
  return value.capitalizeEachLetter();
});
