const $title = document.getElementById("title");
let flag = false;

function clickTitle() {
  if (flag == true) {
    flag == false;
    document.getElementById("dropMenu").style.visibility = "hidden";
  } else {
    flag == true;
    document.getElementById("dropMenu").style.visibility = "visible";
  }
}

function selectNum(num) {
  document.getElementById("num").innerHTML = num;
}

$title.addEventListener("click", clickTitle);
