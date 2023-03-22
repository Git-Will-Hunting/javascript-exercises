const repeatString = function(str, num) {
  if (num < 0)
  return "ERROR"
  if (num === 0){
  return ''
  }
  for (let i = 0; i < num; i++) {
  return str.repeat(num);
  }
};

// Do not edit below this line
module.exports = repeatString;
