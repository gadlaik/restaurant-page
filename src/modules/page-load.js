const pageLoad = function () {
  const div = document.createElement("div");
  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Piccolo Mondo";
  content.appendChild(title);

  const main = div;
  main.classList.add("main");
  const h2 = document.createElement("h2");
  h2.textContent = "We Are The Best";
  const para = document.createElement("p");
  para.textContent = "We are the best because we make the best food, duh...";
  main.appendChild(h2);
  main.appendChild(para);
  content.appendChild(main);
};

export { pageLoad };
