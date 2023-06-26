const container = document.querySelector(".paper-container");

const getPositionDifference = (e) => {};

const addPaper = () => {
  const paper = document.createElement("div");
  paper.classList.add("postit-paper");
  paper.id = Date.now();

  const paper_header = document.createElement("div");
  paper_header.classList.add("postit-paper-header");

  let startPosition = { x: 0, y: 0 };
  let currentPosition = { x: 0, y: 0 };
  let prevPosition = { x: 0, y: 0 };

  paper_header.addEventListener("mousedown", (e) => {
    startPosition = { x: e.clientX, y: e.clientY };
    const onMove = (e) => {
      currentPosition = {
        x: prevPosition.x + e.clientX - startPosition.x,
        y: prevPosition.y + e.clientY - startPosition.y,
      };
      paper.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener(
      "mouseup",
      (e) => {
        window.removeEventListener("mousemove", onMove);
        prevPosition = currentPosition;
      },
      { once: true }
    );
  });

  const button = document.createElement("button");
  button.classList.add("delete-button");
  button.addEventListener("click", () => {
    container.removeChild(paper);
  });

  const paper_body = document.createElement("div");
  paper_body.classList.add("postit-paper-body");

  const paper_content = document.createElement("textarea");
  paper_content.classList.add("postit-paper-content");

  paper_header.appendChild(button);
  paper_body.appendChild(paper_content);
  paper.appendChild(paper_header);
  paper.appendChild(paper_body);

  container.appendChild(paper);
};

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", addPaper);
