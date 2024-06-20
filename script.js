const removeShorts = () => {
  const shorts = document.getElementById("content");
  shorts.remove();
};

window.addEventListener("load", removeShorts);

window.addEventListener("scroll", removeShorts);
