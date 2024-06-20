const removeShorts = () => {
  const shorts = document.getElementById("content");

  if (shorts) shorts.remove();
};

window.addEventListener("load", removeShorts);

window.addEventListener("scroll", removeShorts);
