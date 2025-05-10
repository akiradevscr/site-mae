// Lista de GIFs fofos de abraço
const gifs = [
    "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
    "https://media.giphy.com/media/3M4NpbLCTxBqU/giphy.gif",
    "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
    "https://media.giphy.com/media/HaC1WdpkL3W00/giphy.gif",
    "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
    "https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif",
    "https://media.giphy.com/media/26gsspf0C2Uey5bTG/giphy.gif",
    "https://media.giphy.com/media/l2SpWg4CGhP1RZuTe/giphy.gif",
    "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
    "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
    "https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif",
    "https://media.giphy.com/media/kvKFM3UWg2P04/giphy.gif",
    "https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif"
  ];
  
  // Texto fofos para o botão "textinho fofo"
  const textosFofos = [
    "Mãe, seu amor é meu abrigo mais seguro.",
    "Você é a razão do meu sorriso todos os dias.",
    "Obrigado por me amar mesmo quando eu erro.",
    "Se eu sou quem sou hoje, é por sua causa.",
    "Seus abraços curam até as dores da alma.",
    "Você é meu anjo na Terra, mãe.",
    "Amor de mãe é o mais puro que existe.",
    "Você me ensinou o que é força e doçura.",
    "Tudo que faço tem um pouco de você.",
    "Seu carinho me guia todos os dias.",
    "Te ver sorrir é meu maior presente.",
    "Mãe, você é minha melhor amiga.",
    "Te amo com todo meu coração, mãe.",
    "Você é o sol dos meus dias nublados.",
    "Obrigada por nunca desistir de mim.",
    "Cada lembrança contigo é um tesouro.",
    "Você merece o mundo inteiro de amor.",
    "Sou grato por cada sacrifício que fez.",
    "Seus conselhos são minha sabedoria.",
    "Mãe, eu te amo mais do que palavras."
  ];
  
  let indiceTexto = 0;
  
  // Função para mostrar o GIF de abraço e garantir que carregue corretamente
  function mostrarAbraco() {
    const hugContent = document.getElementById("hugContent");
    const hugGif = document.getElementById("hugGif");
  
    // Escolher um GIF aleatório
    const index = Math.floor(Math.random() * gifs.length);
    hugGif.src = gifs[index];
  
    // Adicionar um evento de erro caso o GIF falhe ao carregar
    hugGif.onerror = function () {
      // Se o GIF falhar, usa um GIF de fallback
      hugGif.src = "https://media.giphy.com/media/HaC1WdpkL3W00/giphy.gif"; // Abraço padrão
    };
  
    // Exibir o conteúdo do abraço
    hugContent.style.display = "block";
  }
  
  // Função para mostrar o texto fofo com troca dinâmica
  function mostrarTextoFofo() {
    const cuteBox = document.getElementById("cuteText");
    cuteBox.style.display = "block";
    cuteBox.innerText = textosFofos[indiceTexto];
    indiceTexto = (indiceTexto + 1) % textosFofos.length;
  }
  
