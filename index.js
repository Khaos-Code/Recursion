function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        return year % 400 === 0 ? true : false;
      }
      return true;
    }
    return false;
  }
  
//   // Example usage
//   const year = 2024;
//   console.log(`${year} is a leap year: ${isLeapYear(year)}`);
  
function getTicketPrice(age) {
    if (age <= 12) {
      return "$10";
    } else if (age >= 13 && age <= 17) {
      return "$15";
    } else if (age >= 18) {
      return "$20";
    } else {
      return "Invalid age";
    }
  }
  
//   // Example usage
//   const age = 16;
//   console.log(`Ticket price for age ${age}: ${getTicketPrice(age)}`);

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
//   // Example usage
//   const n = 7;
//   console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);
  
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Clean the string
    function checkRecursive(start, end) {
      if (start >= end) return true;
      if (str[start] !== str[end]) return false;
      return checkRecursive(start + 1, end - 1);
    }
    return checkRecursive(0, str.length - 1);
  }
  
//   // Example usage
//   const inputString = "A man, a plan, a canal: Panama";
//   console.log(`"${inputString}" is a palindrome: ${isPalindrome(inputString)}`);
  