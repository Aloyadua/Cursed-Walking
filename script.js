document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadProgress = document.getElementById('downloadProgress');
    const progressBar = document.querySelector('.progress-bar');

    // Efeito de sangue no cursor
    const cursor = document.createElement('div');
    cursor.className = 'blood-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Efeito de hover nos elementos
    const elements = document.querySelectorAll('.stat, .download-btn');
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            playZombieSound();
        });
    });

    // Simulação de download
    downloadBtn.addEventListener('click', () => {
        downloadBtn.disabled = true;
        downloadProgress.style.display = 'block';
        
        // Efeito de sangue no clique
        createBloodSplatter(downloadBtn);
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 8 + 4;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = '<span class="btn-text">Download Completo!</span>';
                playSuccessSound();
                
                // Efeito de conclusão
                createCompletionEffect();
                // Adicionar chuva de estrelas
                createStarRain();
            }
            progressBar.style.width = `${progress}%`;
            
            // Efeito de sangue aleatório durante o download
            if (Math.random() < 0.1) {
                createBloodDrop();
            }
        }, 100);
    });

    function createBloodSplatter(element) {
        const splatter = document.createElement('div');
        splatter.className = 'blood-splatter-effect';
        splatter.style.left = `${Math.random() * 100}%`;
        splatter.style.top = `${Math.random() * 100}%`;
        element.appendChild(splatter);
        
        setTimeout(() => {
            splatter.remove();
        }, 1000);
    }

    function createCompletionEffect() {
        const effect = document.createElement('div');
        effect.className = 'completion-effect';
        document.querySelector('.download-section').appendChild(effect);
        
        setTimeout(() => {
            effect.remove();
        }, 2000);
    }

    // Efeitos de som
    function playZombieSound() {
        const audio = new Audio('https://example.com/zombie-groan.mp3');
        audio.volume = 0.2;
        audio.play().catch(() => {}); // Ignora erros de autoplay
    }

    function playSuccessSound() {
        const audio = new Audio('https://example.com/success.mp3');
        audio.volume = 0.3;
        audio.play().catch(() => {});
    }

    // Efeito de digitação no título
    const title = document.querySelector('.title');
    const originalText = title.textContent;
    title.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    typeWriter();

    // Efeito de sangue no scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            createBloodDrop();
        }
        lastScroll = currentScroll;
    });

    function createBloodDrop() {
        const drop = document.createElement('div');
        drop.className = 'blood-drop';
        drop.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, 1000);
    }

    function createStarRain() {
        const starCount = 100;
        const duration = 1500;
        
        // Pegar a posição do botão
        const button = document.getElementById('downloadBtn');
        const buttonRect = button.getBoundingClientRect();
        const centerX = buttonRect.left + buttonRect.width / 2;
        const centerY = buttonRect.top + buttonRect.height / 2;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Posicionar no centro do botão
            star.style.left = `${centerX}px`;
            star.style.top = `${centerY}px`;
            
            // Tamanho aleatório
            const size = Math.random() * 4 + 2;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Direção aleatória
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 200 + 100;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            // Definir variáveis CSS para a animação
            star.style.setProperty('--x', `${x}px`);
            star.style.setProperty('--y', `${y}px`);
            
            // Cores aleatórias entre vermelho e laranja
            const hue = Math.random() * 30 + 0;
            star.style.filter = `hue-rotate(${hue}deg)`;
            
            // Duração aleatória
            const randomDuration = Math.random() * 500 + duration;
            star.style.animationDuration = `${randomDuration}ms`;
            
            // Atraso aleatório
            star.style.animationDelay = `${Math.random() * 200}ms`;
            
            document.body.appendChild(star);
            
            // Remover a estrela após a animação
            setTimeout(() => {
                star.remove();
            }, randomDuration);
        }
    }

    document.getElementById('downloadBtn').addEventListener('click', function() {
        // Criar o conteúdo do arquivo
        const content = "Cursed Walking Modpack\n\n" +
                       "Versão: 1.20.1 (47.3.0)\n" +
                       "Mods: 100+\n" +
                       "RAM Mínima: 8GB\n\n" +
                       "Características:\n" +
                       "- Zumbis mais inteligentes e perigosos\n" +
                       "- Novas armas e equipamentos\n" +
                       "- Sistema de infecção e cura\n" +
                       "- Bunkers e fortalezas\n" +
                       "- Hordas noturnas\n\n" +
                       "Aloyadua Cores\n" +
                       "https://guns.lol/aloyadua\n\n" +

                       "Instruções pós download:\n" +
                       "1. Extrair o arquivo zip\n" +
                       "2. Colar na pasta do Cursed Walking, Ou nome que estiver utilizando\n" +
                       "3. Iniciar o jogo\n" +
                       "4. Se tiver algum problema, entre no discord do modpack e procure ajuda lá\n" +
                       "5. Divirta-se!\n" +

                       "Server onde esta o minecraft:\n" +
                       "https://discord.gg/6Esp6yKddT" 
        // Criar o blob com o conteúdo
        const blob = new Blob([content], { type: 'text/plain' });
        
        // Criar o link de download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'cursed_walking.txt';
        
        // Simular o clique no link
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Limpar o URL do blob
        URL.revokeObjectURL(link.href);

        // Mostrar barra de progresso
        const downloadProgress = document.getElementById('downloadProgress');
        const progressBar = document.querySelector('.progress-bar');
        downloadProgress.style.display = 'block';
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 8 + 4;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = '<span class="btn-text">Download Completo!</span>';
                
                // Abrir o link do Google Drive em uma nova aba após o download
                window.open('https://drive.google.com/drive/folders/1aaYmIlwrlOMStMPsQXLjXhvYOKua7_kd?usp=drive_link', '_blank');
                
                // Efeito de conclusão
                createCompletionEffect();
                // Adicionar chuva de estrelas
                createStarRain();
            }
            progressBar.style.width = `${progress}%`;
            
            // Efeito de sangue aleatório durante o download
            if (Math.random() < 0.1) {
                createBloodDrop();
            }
        }, 100);
    });
}); 