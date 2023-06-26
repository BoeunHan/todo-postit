const addPaper = () => {
  const paper = document.createElement("div");
  paper.classList.add("postit-paper");

  const paper_header = document.createElement("div");
  paper_header.classList.add("postit-paper-header");

  const button = document.createElement("button");
  button.classList.add("delete-button");

  const paper_body = document.createElement("div");
  paper_body.classList.add("postit-paper-body");

  const paper_content = document.createElement("textarea");
  paper_content.classList.add("postit-paper-content");

  paper_header.appendChild(button);
  paper_body.appendChild(paper_content);
  paper.appendChild(paper_header);
  paper.appendChild(paper_body);

  document.querySelector(".paper-container").appendChild(paper);
};

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", addPaper);
