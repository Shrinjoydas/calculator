let screen = document.getElementById("input");

button = document.querySelectorAll("button");

screen.value = " ";

for (item of button) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    // console.log(buttonText);

    if (buttonText == "X") {
      buttonText = "";
      screen.value += "*";
    } else if (buttonText == "C") {
      screen.value = "";
    } else if (buttonText == "=") {
      screen.value = eval(screen.value);
    } else if (buttonText == "⌫") {
      screen.value = screen.value.slice(0, -1);
    } else {
      screen.value += buttonText;
    }
  });
}