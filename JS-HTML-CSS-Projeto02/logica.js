    
    
    
    function clickmulti() {
        
        let pnumber = document.querySelector('input#pnumber')
        let snumber = document.querySelector('input#snumber')
        let presp = document.querySelector('p#pmulti')
        
        if (pnumber.value == 0 || snumber.value == 0) {
            
            window.alert ('ERRO! Favor inserir dados!')
            
        }
    }