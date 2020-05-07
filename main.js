function userProgress(time) {
  let start = 0;
  let progressBar = document.getElementById("progress");
  let divBlock = document.getElementById("block");
  let loadingBlock = document.getElementById("loading");
  let intervalClear = setInterval(function () {
    if (start > 100) {
      clearInterval(intervalClear);
      divBlock.style.display = "block";
      loadingBlock.style.display = "none";
    } else {
      progressBar.value = start;
      loadingBlock.style.display = "block";
    }

    start++;
  }, time);
}

userProgress(50);
