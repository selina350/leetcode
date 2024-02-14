/**
 * @param {string} str
 * @return {number}
 */

//"MCMXCIV"=> 1994
  //"III"=> 3

  //"I"=>1
  //"X"=>10
  //"V"=>5
  //"IV"=>4
  //"IX"=>9
  //"L"=>50
  //"C=>100
  //"XL"=>40
  //"XC"=>90
  //"D"=>500
  //"M"=>1000
  //"CM"=>900
  //"CM"=>900

const romanToInt = (str) => {
    const reference = {
      'I': 1,
      'IV': 4,
      'V': 5,
      'X': 10,
      'IX': 9,
      'L': 50,
      'C': 100,
      'XL': 40,
      'XC': 90,
      'D': 500,
      'M': 1000,
      'CD': 400,
      'CM': 900,
    };
    let res = 0;
    const arrOfStr = str.split('');
    let shouldSkip = false;
    arrOfStr.forEach((letter, i) => {
      if (shouldSkip) {
        shouldSkip = false;
        return
      }
      let index = arrOfStr.length - i - 1;
      let key = arrOfStr[index - 1] + arrOfStr[index];

      let value = reference[key];
      if (value) {
        shouldSkip = true;

      }else{
        key = arrOfStr[index];
        value = reference[key]

      }
      res+= value


    });

    return res;
  };

console.log(romanToInt('MCMXCIV'));