// 1.
let validate = ()=>{
    let input = document.getElementById('num').value; 
    if (input>0) {
        document.getElementById('result').innerHTML = "The input is positive number "+input;
    } if (input<0) {
        document.getElementById('result').innerHTML = "The input is negative number "+input; 
    } if(input==0) {
        document.getElementById('result').innerHTML = "The input is zero number "+input;
    }
}

// 2.
let numArray = [1, -1, 0, -3, 5];
let sum = 0;
let add = () => {
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      sum += numArray[i];
    }
  }
};
add();
console.log(sum);

// 3.
let fibonacci = (num) => {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

const nTerms = prompt("Enter the number of terms: ");

if (nTerms <= 0) {
  console.log("Enter a positive integer.");
} else {
  for (let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
  }
}

// 4.

let add1 = ()=>{
    let numOne = document.getElementById("numOne").value;
    let numTwo = document.getElementById("numTwo").value;
    let result = parseInt(numOne) + parseInt(numTwo);
    document.getElementById("result").innerHTML = result; 
}
let reset = ()=>{
    document.getElementById("numOne").value = '';
    document.getElementById("numTwo").value = '';
    document.getElementById("result").innerHTML = 0; 
}

