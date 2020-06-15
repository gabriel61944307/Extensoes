document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#btn').addEventListener('click', function(){
        var texto = document.querySelector('#texto').value;

        var analisado = {
            "qtd_char":0,
            "qtd_palavras":0,
            "qtd_linhas":0,
            "qtd_notalphanum":0
        }

        analisado = analisador(texto);

        document.querySelector('#result').innerHTML = "<h3>Caracteres: " + analisado.qtd_char + "</h3>" +
        "<h3>Caracteres (sem pontuação): " + (analisado.qtd_char-analisado.qtd_notalphanum) + "</h3>" +
        "<h3>Palavras: " + analisado.qtd_palavras + "</h3>" +
        "<h3>Linhas: " + analisado.qtd_linhas + "</h3>"
        ;


    })

    function analisador(text){
        var i = 0;
        var qtd_palavras = 0;
        var qtd_linhas = 0;
        var qtd_notalphanum = 0;
        while(i < text.length){
            if(i > 0 && !text[i].match(/[0-9a-zA-Z]/)){
                console.log(i);
                qtd_notalphanum++;
                qtd_palavras++;
            }
            if(i > 0 && !text[i].match(/[0-9a-zA-Z]/) && !text[i-1].match(/[0-9a-zA-Z]/)){
                qtd_palavras--;
            }
            
            if(text[i].match(/(\r\n|\n|\r)/gm)){
                qtd_linhas++;
            }
            i++;
        }

        if(i > 0 && text[text.length-1].match(/[0-9a-zA-Z]/)){
            qtd_palavras++;
        }
        if(i > 0 && !text[0].match(/[0-9a-zA-Z]/)){
            qtd_notalphanum++;
        }
        qtd_linhas++;


        return {"qtd_char":text.length,"qtd_palavras":qtd_palavras,"qtd_linhas":qtd_linhas,"qtd_notalphanum":qtd_notalphanum}
    }


})