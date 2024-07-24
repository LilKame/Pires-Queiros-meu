document.addEventListener('DOMContentLoaded', function () {
    // Seleciona a div clicável
    const buttonMoreInformation = document.querySelector('#seguradora-image-card-extra');
    const overlayMoreInformation = document.querySelector('#seguradora-image-overlay')
    const overlayText = document.querySelector('#seguradora-image-overlay-text')
    const overlayText2 = document.querySelector('#seguradora-image-overlay-text-2')
    // Verifica se o elemento foi encontrado
    if (buttonMoreInformation) {
        // Adiciona o evento de clique à div
        buttonMoreInformation.addEventListener('click', function () {
            buttonMoreInformation.classList.add('fade-out')
            setTimeout(function () {
                buttonMoreInformation.style.visibility = 'hidden'
                overlayMoreInformation.style.display = 'block';
                setTimeout(function () {
                    overlayText.style.display = 'flex'
                    setTimeout(function () {
                        overlayText2.style.display = 'flex'
                    }, 7000)
                }, 1000)
                setTimeout(function () {
                    buttonMoreInformation.style.visibility = 'visible'
                    buttonMoreInformation.classList.remove('fade-out')
                    overlayMoreInformation.style.opacity = 0;
                    overlayText.style.display = 'none'
                    overlayText2.style.display = 'none'
                    setTimeout(function () {
                        overlayMoreInformation.style.opacity = 1;
                        overlayMoreInformation.style.display = 'none'
                    }, 1000)
                }, 16000)
            }, 500)
        });
    } else {
        console.error('Elemento com o ID "#seguradora-image-card-extra" não foi encontrado.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Selecione a div a ser observada
    const target = document.getElementById('representante-card');
    const cards = document.querySelectorAll('.cards')
    // Crie uma instância do IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cards.forEach(cards=> {
                    cards.style.display= 'flex'
                })
            } 
            else{
                cards.forEach(cards=> {
                    cards.style.display= 'none'
                })
            }
        });
    }, {
        threshold: 0.1 // Percentual de visibilidade da div para ativar o efeito
    });

    // Comece a observar o elemento
    observer.observe(target);
});



