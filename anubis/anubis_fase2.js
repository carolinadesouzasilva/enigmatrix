function avanca() {
    var primeiraescolha = window.prompt("Leia com atenção e escolha entre as opções 1, 2 ou 3.");
    while (true) {
      if ( primeiraescolha == 1 || primeiraescolha == 2 || primeiraescolha == 3) {
        if (primeiraescolha == 2) {
          alert("Muitos que vieram antes de você falharam pelo caminho. Você faz parte de um seleto grupo. Prepare-se!");
          window.location.href="./anubis_fase3.html";
  
          break;
        } else {
          window.location.href="../gameover.html";
          break;
        }
      } else {
               window.alert('Esta opção não é válida. Escolha entre 1, 2 ou 3.')
              avanca();
          }
    }
  }
