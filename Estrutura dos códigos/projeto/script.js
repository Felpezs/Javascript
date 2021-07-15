function calcularMelhorPreco()
        {
          const precoAlcool = document.getElementById('alcool').value
          const precoGasolina = document.getElementById('gasolina').value

          if(precoAlcool != "")
          {
            if(precoGasolina != "")
            {
              let resultado = precoAlcool / precoGasolina
              if(resultado >= 0.7)
              {
                document.getElementById('resultado').innerHTML = 'é melhor usar gasolina'
              }
              else
              {
                document.getElementById('resultado').innerHTML = 'é melhor usar alcool'
              }

              
            }
            else
            {
              alert('Preencha o campo de Gasolina')
            }
          }
          else
          {
            alert('Preencha o campo de Alcool')
          }
        }
