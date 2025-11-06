function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  this.reset();
});
