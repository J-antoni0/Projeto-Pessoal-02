    
    
    
    function clickmulti() {
        
        let pnumber = document.querySelector('input#pnumber')
        let snumber = document.querySelector('input#snumber')
        let presp = document.querySelector('p#pmulti')
        let opcao = document.createElement('option')
        let escolha = document.querySelector('select#esc')

        switch (escolha.opcao) {
            
            case opcao[0]:
                if (pnumber.value == 0 || snumber.value == 0) {
            
                    window.alert ('ERRO! Favor inserir dados!')
            
                } else {
            
                    let reversao1 = Number(pnumber.value)
                    let reversao2 = Number(snumber.value)
                    let resultmulti = reversao1 + reversao2
                    presp.innerHTML = (`Resultado = ${resultmulti}`)


                }
        
                pnumber.focus()
                break
            
            case opcao[1]:
                if (pnumber.value == 0 || snumber.value == 0) {
            
                    window.alert ('ERRO! Favor inserir dados!')
            
                } else {
        
                    let reversao1 = Number(pnumber.value)
                    let reversao2 = Number(snumber.value)
                    let resultmulti = reversao1 - reversao2
                    presp.innerHTML = (`Resultado = ${resultmulti}`)


                }
        
                pnumber.focus()
                break
        }
    }

    function quadroum() {
        
        let presp = document.querySelector('p#pmulti')
        presp.innerHTML = (' ')

    }
