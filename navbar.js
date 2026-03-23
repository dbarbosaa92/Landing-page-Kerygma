const navbarTemplate = `
<nav class="navbar">
  <a href="/" class="nav-brand">
    <img class="nav-brand-logo" src="/images/logoInsta.jpg" alt="Logo seminario kerygma">
    <span class="nav-logo">Seminario Kerygma</span>
  </a>
  <div class="nav-links">
    <button class="nav-btn" onclick="location.href='#'">Sala virtual</button>
    <button class="nav-btn" onclick="location.href='/about/about.html'">Sobre nós</button>
    <button class="nav-btn" onclick="location.href='/info/Info.html'">Informações acadêmicas</button>
    <button class="nav-cta" onclick="location.href='https://docs.google.com/forms/d/e/1FAIpQLSdAdX3VuGcrBxXHM0jCIpmPYnFUMpMfN62yVlbNe9Y6Ln5Z_Q/viewform?usp=header'">Inscreva-se</button>
  </div>
</nav>
`;

// Insere o navbar no inicio do <body> ou em um elemento especifico
document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.innerHTML = navbarTemplate;
  document.body.prepend(header);
});
