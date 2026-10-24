//obfuscation so the code is not 10 miles long
//sets third input box value from array

function setThirdValue() {
  $("#thirdInput").val(thirdValArr.join(""));
}
let thirdValArr = ['0', '0', ':', '0', '0', ':', '0', '0', ';', '0', '0'];
//this is a janky solution but I never claimed to be a front-end engineer
if (document.getElementById("thirdInput").value != "00:00:00;00") {
  thirdValArr = document.getElementById("thirdInput").value.split("");
}
//lazyness
function goodInput() {
  console.log("good input! :)");
}
function badInput() {
  console.log("bad input! :(");
}
//by default, caret goes to right. to keep same, insert index - 1.
function setThirdCaret(index) {
  document.getElementById("thirdInput").setSelectionRange(index + 1, index + 1);
  goodInput();
}
//further encapsulation of code.
function thirdBackspace(index, caret) {
  thirdValArr[index] = '0';
  setThirdValue();
  setThirdCaret(caret);
}
function setThirdValueAndCaret(index, val, caret) {
  thirdValArr[index] = val;
  setThirdValue();
  setThirdCaret(caret);
}
//this can probs be 1 equation via obfuscation but just trying to make work right now.

document.getElementById("thirdInput").addEventListener("keydown", e => {
  console.log("Carat at: ", e.target.selectionStart);
  const index = e.target.selectionStart;
  // arrays that define acceptable number inputs for differnt slots
  //for the first hour mark & second mark, can only be 0, 1, or 2
  const zOArr = ['0', '1', '2'];
  // for the second hour mark, if first is 2, can only be 0, 1, 2, or 3
  const zTArr = ['0', '1', '2', '3'];
  // for the minutes & seconds, first digit can only be 0-5
  const zFArr = ['0', '1', '2', '3', '4', '5'];
  //for the others, can be 0-9
  const numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // drop frame invalid 00/01
  const dFArr = ['0', '1'];
  // input validation for all 11 chars #sobbing-and/or-crying
  switch (index) {
    case 0:
      e.preventDefault();
      // adding to every case so that arrow keys work
      if (e.key == "ArrowRight") {
        setThirdCaret(index);
        break;
      }
      if (zOArr.includes(e.key)) {
        // set value to pressed key
        // if value is 2, then next get zero'd out if not 0, 1, 2, or 3.
        if (e.key == '2' && (!(zTArr.includes(thirdValArr[1])))) {
          thirdValArr[1] = '0';
        }
        //set input box value, rinse and repeat
        setThirdValueAndCaret(0, e.key, index);
        break;
      }
      //anything else, do nothing.
      else {
        badInput();
        break;
      }


    case 1:
      e.preventDefault();
      if (e.key == "ArrowLeft") {
        setThirdCaret(index - 2);
        break;
      }
      if (e.key == "ArrowRight") {
        setThirdCaret(index + 1);
        break;
      }
      if (e.key == "Backspace") {
        thirdBackspace(0, index - 2);
        break;
      }
      if (thirdValArr[0] == '2') {
        if (zTArr.includes(e.key)) {
          setThirdValueAndCaret(1, e.key, index + 1);
          break;
        }
        else {
          badInput();
          break;
        }
      }
      if (numArr.includes(e.key)) {
        setThirdValueAndCaret(1, e.key, index + 1);
        break;
      }
      badInput();
      break;


    case 2:
      e.preventDefault();
      if (e.key == "ArrowLeft") {
        setThirdCaret(index - 2);
        break;
      }
      if (e.key == "ArrowRight") {
        setThirdCaret(index);
        break;
      }
      if (e.key == "Backspace") {
        thirdBackspace(1, index - 2);
        break;
      }
      if (zFArr.includes(e.key)) {
        setThirdValueAndCaret(3, e.key, index + 1);
        break;
      }
      badInput();
      break;


    case 3:
      e.preventDefault();
      if (e.key == "ArrowLeft") {
        setThirdCaret(index - 3);
        break;
      }
      if (e.key == "ArrowRight") {
        setThirdCaret(index);
        break;
      }
      if (e.key == "Backspace") {
        thirdBackspace(1, index - 3);
        break;
      }
      if (zFArr.includes(e.key)) {
        setThirdValueAndCaret(3, e.key, index);
        break;
      }
      badInput();
      break;


    case 4:
      e.preventDefault();
      if (e.key == "ArrowLeft") {
        setThirdCaret(index - 2);
        break;
      }
      if (e.key == "ArrowRight") {
        setThirdCaret(index + 1);
        break;
      }
      if (e.key == "Backspace") {
        thirdBackspace(3, index - 3);
        break;
      }
      if (numArr.includes(e.key)) {
        setThirdValueAndCaret(4, e.key, index + 1);
        break;
      }
      badInput();
      break;


    case 5:
      e.preventDefault();
      if (e.key == "ArrowLeft") {
        setThirdCaret(index - 2);
        break;
      }
      if (e.key == "ArrowRight") {
        setThirdCaret(index);
        break;
      }
      if (e.key == "Backspace") {
        thirdBackspace(4, index - 2);
        break;
      }
      if (zFArr.includes(e.key)) {
        setThirdValueAndCaret(6, e.key, index + 1);
        break;
      }
      badInput();
      break;


    case 6:
      e.preventDefault();
      if (e.key == "ArrowLeft") {
        setThirdCaret(index - 3);
        break;
      }
      if (e.key == "ArrowRight") {
        setThirdCaret(index);
        break;
      }
      if (e.key == "Backspace") {
        thirdBackspace(4, index - 3);
        break;
      }
      if (zFArr.includes(e.key)) {
        setThirdValueAndCaret(6, e.key, index);
        break;
      }
      badInput();
      break;


    case 7:
      e.preventDefault();
      if (e.key == "ArrowLeft") {
        setThirdCaret(index - 2);
        break;
      }
      if (e.key == "ArrowRight") {
        setThirdCaret(index + 1);
        break;
      }
      if (e.key == "Backspace") {
        thirdBackspace(6, index - 3);
        break;
      }
      if (numArr.includes(e.key)) {
        if (e.key == '0' && thirdValArr[4] != '0' && dFArr.includes(thirdValArr[10])) {
          thirdValArr[10] = '2';
        }
        setThirdValueAndCaret(7, e.key, index + 1);
      }
      break;


    case 8:
      e.preventDefault();
      if (e.key == "ArrowLeft") {
        setThirdCaret(index - 2);
        break;
      }
      if (e.key == "ArrowRight") {
        setThirdCaret(index);
        break;
      }
      if (e.key == "Backspace") {
        thirdBackspace(7, index - 2);
        break;
      }
      if (zOArr.includes(e.key)) {
        setThirdValueAndCaret(9, e.key, index + 1);
        break;
      }
      badInput();
      break;


    case 9:
      e.preventDefault();
      if (e.key == "ArrowLeft") {
        setThirdCaret(index - 3);
        break;
      }
      if (e.key == "ArrowRight") {
        setThirdCaret(index);
        break;
      }
      if (e.key == "Backspace") {
        thirdBackspace(7, index - 3);
        break;
      }
      if (zOArr.includes(e.key)) {
        setThirdValueAndCaret(9, e.key, index);
        break;
      }
      badInput();
      break;


    case 10:
      e.preventDefault();
      if (e.key == "ArrowLeft") {
        setThirdCaret(index - 2);
        break;
      }
      if (e.key == "ArrowRight") {
        setThirdCaret(index);
        break;
      }
      if (e.key == "Backspace") {
        thirdBackspace(9, index - 3);
        break;
      }
      if (thirdValArr[6] == 0 && thirdValArr[7] == 0 && thirdValArr[4] != 0) {
        if (!(dFArr.includes(e.key))) {
          setThirdValueAndCaret(10, e.key, index);
          break;
        }
        else {
          badInput();
          break;
        }
      }
      if (numArr.includes(e.key)) {
        setThirdValueAndCaret(10, e.key, index);
        break;
      }
      badInput();
      break;


    case 11:
      e.preventDefault();
      if (e.key == "ArrowLeft") {
        setThirdCaret(index - 2);
        break;
      }
      if (e.key == "Backspace") {
        thirdBackspace(10, index - 2);
        break;
      }
      badInput(); //would like to meld into next input maybe
      break;

  }

}
)

console.log("test");