document.addEventListener("DOMContentLoaded", () => {
  const mapa = document.getElementById("mapa");

  mapa.addEventListener("load", () => {
    const svgDoc = mapa.contentDocument;

    const regiony = {
      podlasie: "🇵🇱 Polska",
      lwow: "⚔️ W trakcie bitwy",
      kaliningrad: "🇷🇺 Rosja",
    };

    Object.keys(regiony).forEach(id => {
      const region = svgDoc.getElementById(id);
      if (region) {
        region.style.cursor = "pointer";
        region.addEventListener("click", () => {
          document.getElementById("info").innerText = `Region: ${id.toUpperCase()} – ${regiony[id]}`;
        });
      }
    });
  });
});
