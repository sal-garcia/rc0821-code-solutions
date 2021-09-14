/* exported truncate */
function truncate(length, string) {

  var holder = string.slice(0, length) + '...';

  return holder;
}
