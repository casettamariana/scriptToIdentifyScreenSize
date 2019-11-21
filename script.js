window.onload = function () {

            var sizeWindow = window.innerHeight;
            var div = document.getElementById('elementoDIV');
            var sizeDIV = document.getElementById('elementoDIV').offsetHeight;

            //se a div for menor que o tamanho da tela
            if (sizeDIV < sizeWindow) {
                var marginDIV = ((sizeWindow - sizeDIV) / 2);
                div.style.marginTop = marginDIV + 'px';
                div.style.marginBottom = marginDIV + 'px';
            //se a div for igual que o tamanho da tela
            } else if (sizeDIV == sizeWindow) {
                div.style.marginTop = '1px';
                div.style.marginBottom = '0px';
                div.style.overflow = 'hidden';
            //se a div for maior que o tamanho da tela
            } else if (sizeDIV > sizeWindow) {
                //ajustar os estilos de elementos dentro da sua div para diminuir o tamanho da mesma
                //código deve ser específico para seu conteúdo
            }

        }
