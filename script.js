const header = document.createElement("h1");
header.setAttribute("id", "content");
header.innerText = "Breaking Bad";
document.body.append(header);

const main = document.createElement("div");
main.setAttribute("class", "main");
document.body.append(main);

function breakingBad({ name, image, portrayed, status }) {
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  
  container.innerHTML = `
  <img src="${image}" alt=displayimages class="rounded">
  <h2>${name}</h2>
  <p>Portrayed by: ${portrayed}</p>
  <p>Current Status: ${status}</p>`;

  main.append(container);
}

fetch("https://www.breakingbadapi.com/api/characters")
  .then((data) => data.json())
  .then((characters) => {
    characters.forEach((data) => {
      const users = {
        name: data.name,
        image: data.img,
        portrayed: data.portrayed,
        status: data.status,
      };

      breakingBad(users);
    });
  });
