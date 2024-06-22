    function clicou() {
        let presp = document.querySelector('p#pmulti')
        let pnumber = document.querySelector('input#pnumber')
        let snumber = document.querySelector('input#snumber')
        pnumber.value = ' '
        snumber.value = ' '
        presp.innerHTML = (' ')

    }
    
    function clickmulti() {
        
        let pnumber = document.querySelector('input#pnumber')
        let snumber = document.querySelector('input#snumber')
        let presp = document.querySelector('p#pmulti')
        let escolha = document.querySelector('select#esc').value
        
        if (pnumber.value == 0 || snumber.value == 0) {
            
            window.alert ('ERRO! Favor inserir dados!')
            pnumber.value = ' '
            snumber.value = ' '
        }



        switch (escolha) {
            
            case 'Somar':
                if (pnumber.value > 0 && snumber.value > 0) {
                let reversao1 = Number(pnumber.value)
                let reversao2 = Number(snumber.value)
                let resultmulti = reversao1 + reversao2
                presp.innerHTML = (`Resultado = ${resultmulti}`)
                }
                pnumber.focus()
                break
                    
            case 'Subtrair':
                if (pnumber.value > 0 && snumber.value > 0) {
        
                    let reversao1 = Number(pnumber.value)
                    let reversao2 = Number(snumber.value)
                    let resultmulti = reversao1 - reversao2
                    presp.innerHTML = (`Resultado = ${resultmulti}`)                

                }
        
                pnumber.focus()
                break

            case 'Multiplicar':
                if (pnumber.value > 0 && snumber.value > 0) {
            
                    let reversao1 = Number(pnumber.value)
                    let reversao2 = Number(snumber.value)
                    let resultmulti = reversao1 * reversao2
                    presp.innerHTML = (`Resultado = ${resultmulti}`)


                }
                pnumber.focus()
                break
            
                case 'Divisao Real':
                    if (pnumber.value > 0 && snumber.value > 0) {
                
                        let reversao1 = Number(pnumber.value)
                        let reversao2 = Number(snumber.value)
                        let resultmulti = reversao1 / reversao2
                        presp.innerHTML = (`Resultado = ${resultmulti}`)
    
    
                    }
                    pnumber.focus()
                    break 

                case 'Divisao Inteira':
                    if (pnumber.value > 0 && snumber.value > 0) {
                
                        let reversao1 = Number(pnumber.value)
                        let reversao2 = Number(snumber.value)
                        let resultmulti = reversao1 % reversao2
                        presp.innerHTML = (`Resultado = ${resultmulti}`)
    
    
                    }
                    pnumber.focus()
                    break
                
        }
    }

    function quadroum() {
        
        let presp = document.querySelector('p#pmulti')
        let pnumber = document.querySelector('input#pnumber')
        let snumber = document.querySelector('input#snumber')
        pnumber.value = ' '
        snumber.value = ' '
        presp.innerHTML = (' ')
    }
