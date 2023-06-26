const onClickButton = () => {
  const hello = document.querySelector(".hello");
  hello.innerHTML = "안녕띠~";
  hello.classList.add("background-aliceblue");
};

const button = document.querySelector("#submit-button");
button.addEventListener("click", onClickButton);
