function avanca() {
  var primeiraescolha = window.prompt("Leia com atenção e escolha entre as opções 1, 2 ou 3.");
  while (true) {
    if ( primeiraescolha == 1 || primeiraescolha == 2 || primeiraescolha == 3) {
      if (primeiraescolha == 1) {
        alert("Boa escolha! A  próxima fase te espera!");
        window.location.href="./bastet_fase2.html";

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













