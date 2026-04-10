(function () {
  const currentPath = window.location.pathname.replace(/\\/g, "/").toLowerCase();
  const basePath =
    currentPath.includes("/about/") ||
    currentPath.includes("/info/") ||
    currentPath.includes("/inscript/")
      ? "../"
      : "./";

  const footerTemplate = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="${basePath}index.html" class="nav-logo">SEMIN&Aacute;RIO KERYGMA</a>
            <p>Av. Santa Leopoldina, n&ordm; 80 - ES, Vila Velha, Itapu&atilde;</p>
          </div>

          <div class="footer-col">
            <h4>Veja mais nas redes sociais</h4>
            <ul>
              <li><a href="https://www.instagram.com/seminariokerygma/">Instagram</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Entre em contato conosco:</h4>
            <ul>
              <li><a href="tel:+5527997927725">Fabiane - (27) 99792-7725</a></li>
              <li><a href="tel:+5521992457885">Davi - (21) 99245-7885</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>Copyright 2026 SEMIN&Aacute;RIO KERYGMA MINISTERIAL, Inc. &nbsp;&middot;&nbsp; Terms &amp; Privacy</p>
        </div>
      </div>
  `;

  document.addEventListener("DOMContentLoaded", () => {
    const footer = document.createElement("footer");
    footer.innerHTML = footerTemplate;
    document.body.append(footer);
  });
})();
