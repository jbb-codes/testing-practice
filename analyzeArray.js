function analyzeArray(arr) {
  const average = () => {
    return (
      arr.reduce((sum, num) => {
        return sum + num;
      }, 0) / arr.length
    );
  };

  const minimum = () => {
    return arr.sort((a, b) => a - b)[0];
  };

  const maximum = () => {
    return arr.sort((a, b) => b - a)[0];
  };

  const length = () => {
    return arr.length;
  };

  return {
    average: average(),
    min: minimum(),
    max: maximum(),
    length: length(),
  };
}

module.exports = analyzeArray;
