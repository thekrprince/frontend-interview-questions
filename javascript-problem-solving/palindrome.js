// Palindrome for string

function palindrome(str) {
  if (str.trim().split('').length === 0) {
    return 'String is Empty';
  }

  const reversedStr = str.split('').reverse().join('');
  console.log(reversedStr);

  if (str === reversedStr) {
    return `${str} is Palindrome`;
  } else {
    return `${str} is not Palindrome`;
  }
}

const res = palindrome('MADAM');
console.log(res);
