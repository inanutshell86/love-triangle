/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const loveTriangles = preferences.filter(function(item, i) {
    return preferences[preferences[item - 1] - 1] === i + 1 && item !== i + 1;
  });

  return loveTriangles.length / 3;
};
