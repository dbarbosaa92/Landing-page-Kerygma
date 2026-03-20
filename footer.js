const footerTemplate = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="nav-logo">SEMINÁRIO KERYGMA</a>
          <p>Av. Santa Leopoldina, nº 80 - ES, Vila Velha, Itapuã </p>
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
        <p>Copyright 2026 SEMINÁRIO KERYGMA MINISTERIAL, Inc. &nbsp;·&nbsp; Terms &amp; Privacy</p>
      </div>
    </div>
`

//inserir o footer 
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.createElement("footer")
    footer.innerHTML = footerTemplate;
    document.body.append(footer)
})