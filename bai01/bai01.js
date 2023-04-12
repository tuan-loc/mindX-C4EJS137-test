function checkPrimeNumber(number) {
  if (number < 2) {
    return false;
  }

  const maxIndex = Math.sqrt(number);
  let i = 2;

  while (i <= maxIndex) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }

  return true;
}

function totalPrime(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    if (checkPrimeNumber(i)) {
      total += i;
    }
  }
  return total;
}

function calcTotalPrime() {
  let number01 = +document.getElementById("number01").value;
  let number02 = +document.getElementById("number02").value;
  let total = totalPrime(number01, number02);
  document.getElementById("result").innerHTML = total;
}

document.getElementById("totalPrime").addEventListener("click", calcTotalPrime);
