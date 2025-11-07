// script.js — substituir o conteúdo atual por este

// lista de frases
const frases = [
  'Blindamos seus dados e fortalecemos sua infraestrutura',
  'Segurança inteligente para empresas que valorizam resultados',
  'Gestão de TI, monitoramento e ciberproteção em tempo real'
];

// função principal segura
function iniciarHero() {
  try {
    // seleciona a seção hero
    const hero = document.querySelector('.hero');
    if (!hero) {
      console.error('Elemento .hero não encontrado no DOM.');
      return;
    }

    // tenta obter #frase
    let fraseEl = document.getElementById('frase');

    // se não existir, cria um e insere logo depois do primeiro <h1> dentro de .hero
    if (!fraseEl) {
      console.warn('#frase não encontrado. Criando elemento #frase automaticamente.');
      fraseEl = document.createElement('h1');
      fraseEl.id = 'frase';
      // tenta inserir após o primeiro h1 existente, senão adiciona no topo da hero
      const primeiroH1 = hero.querySelector('h1');
      if (primeiroH1 && primeiroH1.parentNode === hero) {
        primeiroH1.insertAdjacentElement('afterend', fraseEl);
      } else {
        hero.insertAdjacentElement('afterbegin', fraseEl);
      }
    }

    // garante que o elemento esteja visível (estilos mínimos)
    fraseEl.style.display = 'block';
    fraseEl.style.color = '#fff';
    fraseEl.style.opacity = '0';
    fraseEl.style.transition = 'opacity 1.2s ease-in-out';

    // função que mostra a frase com fade
    let index = 0;
    function mostrarFrase() {
      // fade out
      fraseEl.style.opacity = '0';
      setTimeout(() => {
        fraseEl.textContent = frases[index];
        // força reflow para garantir transição
        void fraseEl.offsetWidth;
        // fade in
        fraseEl.style.opacity = '1';
        index = (index + 1) % frases.length;
      }, 300); // tempo de fade out antes de trocar
    }

    // mostra imediatamente (com pequeno atraso para garantir render)
    setTimeout(mostrarFrase, 150);

    // troca a cada 12s
    setInterval(mostrarFrase, 12000);

    console.log('Script do hero iniciado com sucesso.');
  } catch (err) {
    console.error('Erro ao iniciar hero:', err);
  }
}

// se usar defer no script tag, o DOM já estará carregado; caso contrário, fallback:
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarHero);
} else {
  iniciarHero();
}


  const imagens = ['imagens/001.jpg', 'imagens/002.jpg', 'imagens/003.jpg']
  let indiceImagem = 0
  const hero = document.querySelector('.hero')

  function trocarImagem() {
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${imagens[indiceImagem]}')`
    indiceImagem = (indiceImagem + 1) % imagens.length
  }

  trocarImagem()
  setInterval(trocarImagem, 12000) // troca imagem a cada 12s

  // MENU HAMBURGUER
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuToggle.querySelector('i').classList.add('fa-bars');
      menuToggle.querySelector('i').classList.remove('fa-times');
    });
  });
});

