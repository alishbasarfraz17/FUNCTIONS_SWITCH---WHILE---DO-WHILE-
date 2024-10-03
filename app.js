//____________First____________//


function power(a, b) {
    return Math.pow(a, b);
  }

  console.log(power(2, 3)); 
console.log(power(5, 2)); 

//______________Second___________________________
function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isLeapYear(2020)); 
console.log(isLeapYear(2019)); 


// ____________Third_______//
function calculateS(a, b, c) {
    return (a + b + c) / 2;
  }
  
  function calculateArea(a, b, c) {
    let S = calculateS(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
  }

  console.log(calculateArea(3, 4, 5));
console.log(calculateArea(5, 12, 13)); 

//________fourth________//

function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
  }
  
  function calculatePercentage(average) {
    return (average / 100) * 100;
  }
  
  function mainFunction(marks1, marks2, marks3) {
    let average = calculateAverage(marks1, marks2, marks3);
    let percentage = calculatePercentage(average);
    console.log(`Average: ${average}`);
    console.log(`Percentage: ${percentage}%`);
  }

  mainFunction(80, 70, 90);

  //___________Fifth_____________//

  function customIndexOf(string, char) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === char) {
        return i;
      }
    }
    return -1;
  }

  console.log(customIndexOf("hello", "l"));
console.log(customIndexOf("hello", "x")); 


//______Sixth______________//

function deleteVowels(sentence) {
    let vowels = "aeiouAEIOU";
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
      if (vowels.indexOf(sentence[i]) === -1) {
        result += sentence[i];
      }
    }
    return result;
  }

  console.log(deleteVowels("hello world")); 
console.log(deleteVowels("javascript")); 


//_____________Seventh__________//


function countVowelOccurrences(text) {
    let count = 0;
    for (let i = 0; i < text.length - 1; i++) {
      let char1 = text[i].toLowerCase();
      let char2 = text[i + 1].toLowerCase();
      switch (true) {
        case (char1 === 'a' && (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u')):
        case (char1 === 'e' && (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u')):
        case (char1 === 'i' && (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u')):
        case (char1 === 'o' && (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u')):
        case (char1 === 'u' && (char2 === 'a' || char2 === 'e' || char2 === 'i' || char2 === 'o' || char2 === 'u')):
          count++;
          break;
      }
    }
    return count;
  }

  console.log(countVowelOccurrences("FUNCTIONS, switch statements, while... do-while loops | JAVASCRIPT")); // Output: 2
console.log(countVowelOccurrences("Pleases read this application and give me gratuity")); // Output: 2

//_____________Eighth__________//

function convertToMeters(km) {
    return km * 1000;
  }
  
  function convertToFeet(km) {
    return km * 3280.84;
  }
  
  function convertToInches(km) {
    return km * 39370.08;
  }
  
  function convertToCentimeters(km) {
    return km * 100000;
  }
  
  function mainFunction(km) {
    console.log(`Distance in meters: ${convertToMeters(km)}`);
    console.log(`Distance in feet: ${convertToFeet(km)}`);
    console.log(`Distance in inches: ${convertToInches(km)}`);
    console.log(`Distance in centimeters: ${convertToCentimeters(km)}`);
  }


  mainFunction(10);


//_____________Nineth__________//


function calculateOvertimePay(hours) {
    if (hours > 40) {
      let overtimeHours = hours - 40;
      return overtimeHours * 12;
    } else {
      return 0;
    }
  }

  console.log(calculateOvertimePay(45)); 
console.log(calculateOvertimePay(30)); 



//_____________Tenth__________//


function calculateCurrencyNotes(amount) {
    let notes = {
      100: 0,
      50: 0,
      10: 0
    };
    while (amount > 0) {
      if (amount >= 100) {
        notes[100]++;
        amount -= 100;
      } else if (amount >= 50) {
        notes[50]++;
        amount -= 50;
      } else {
        notes[10]++;
        amount -= 10;
      }
    }
    return notes;
  }


  console.log(calculateCurrencyNotes(250)); 