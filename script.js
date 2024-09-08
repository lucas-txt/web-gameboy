
;(function(){// 1#>game-boy

  var start = document.querySelector('div.botao-start')
  start_cont = 0

  start.addEventListener('click', function () {
      start.style.boxShadow = '0px 0px 0px rgba(255, 255, 255, 0)'
      start.style.top = '7px'
      start.style.left = '3px'
      setTimeout(function () {
          start.style.boxShadow = '3px 7px 0px var(--amarelo-escuro)'
          start.style.top = '0px'
          start.style.left = '0px'
      }, 200)

      let tela_desligada = document.querySelector('div#desligado')
      if (start_cont == 0) {
          start_cont++
          tela_desligada.style.display = 'block'
      } else if (start_cont == 1) {
          start_cont--
          tela_desligada.style.display = 'none'
      }
  })

  var projetos = document.getElementsByClassName('projeto')
  projetos[0].style.display = 'block'
  var projetos_cont = 0

  var seta_direita = document.querySelector('div.botao-seta-direita')
  seta_direita.addEventListener('click', function () {
      seta_direita.style.boxShadow = '0px 0px 0px rgba(255, 255, 255, 0)'
      seta_direita.style.top = '7px'
      seta_direita.style.left = '3px'

      if (start_cont == 0) {
          if (projetos_cont == projetos.length-1) {
              projetos_cont = 0
          } else {
              projetos_cont++
          }

          for (let c=0; c<projetos.length; c++) {
              if (c == projetos_cont) {
                  projetos[c].style.display = 'block'
              } else {
                  projetos[c].style.display = 'none'
              }
          }
      }

      setTimeout(function () {
          seta_direita.style.boxShadow = '3px 7px 0px var(--amarelo-escuro)'
          seta_direita.style.top = '0px'
          seta_direita.style.left = '0px'
      }, 200)
  })

  var seta_esquerda = document.querySelector('div.botao-seta-esquerda')
  seta_esquerda.addEventListener('click', function () {
      seta_esquerda.style.boxShadow = '0px 0px 0px rgba(255, 255, 255, 0)'
      seta_esquerda.style.top = '7px'
      seta_esquerda.style.left = '3px'

      if (start_cont == 0) {
          if (projetos_cont == 0) {
              projetos_cont = projetos.length-1
          } else {
              projetos_cont--
          }
          for (let c=0; c<projetos.length; c++) {
              if (c == projetos_cont) {
                  projetos[c].style.display = 'block'
              } else {
                  projetos[c].style.display = 'none'
              }
          }
      }
      
      setTimeout(function () {
          seta_esquerda.style.boxShadow = '3px 7px 0px var(--amarelo-escuro)'
          seta_esquerda.style.top = '0px'
          seta_esquerda.style.left = '0px'
      }, 200)
  })

})()