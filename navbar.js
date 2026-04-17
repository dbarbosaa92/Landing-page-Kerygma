(function () {
  const currentPath = window.location.pathname.replace(/\\/g, "/").toLowerCase();
  const basePath =
    currentPath.includes("/about/") ||
    currentPath.includes("/info/") ||
    currentPath.includes("/inscript/")
      ? "../"
      : "./";
  const virtualRoomUrl = "http://localhost:3000/";

  const navbarTemplate = `
  <nav class="navbar">
    <a href="${basePath}index.html" class="nav-brand">
      <img class="nav-brand-logo" src="${basePath}imagens/logoInsta.jpg" alt="Logo do Semin&aacute;rio Kerygma">
      <span class="nav-logo">Semin&aacute;rio Kerygma</span>
    </a>
    <div class="nav-links">
      <button class="nav-btn" onclick="window.location.href='${basePath}info/Info.html'">Informa&ccedil;&otilde;es acad&ecirc;micas</button>  
      <button class="nav-btn" onclick="window.location.href='${basePath}about/about.html'">Sobre n&oacute;s</button>
      <button class="nav-cta" onclick="window.location.href='${basePath}inscript/inscript.html'">Inscreva-se</button>
      <button class="nav-cta" onclick="window.location.href='${virtualRoomUrl}'">Sala virtual</button>
      
    </div>
  </nav>
  `;

  document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");
    header.innerHTML = navbarTemplate;
    document.body.prepend(header);
  });
})();
