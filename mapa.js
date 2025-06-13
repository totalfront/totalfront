document.addEventListener("DOMContentLoaded", () => {
  const regiony = {
    polska: "Polska – bitwa 1",
    niemcy: "Niemcy – neutralne",
    rosja: "Rosja – wróg",
  };

  Object.keys(regiony).forEach(id => {
    const region = document.getElementById(id);
    region.addEventListener("click", () => {
      document.getElementById("info").innerText = regiony[id];
    });
  });
});

