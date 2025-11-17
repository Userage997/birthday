// Конфетти эффект
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffd93d', '#95e1d3'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        container.appendChild(confetti);
        
        // Удаляем конфетти после анимации
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Таймер до следующего ДР
function updateCountdown() {
    const now = new Date();
    const nextBirthday = new Date(now.getFullYear() + 1, 0, 1); // 1 января следующего года
    
    const diff = nextBirthday - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Секретное сообщение
function revealSecret() {
    const secretMessage = document.getElementById('secret-message');
    const button = document.querySelector('.secret-btn');
    
    secretMessage.classList.remove('hidden');
    button.style.display = 'none';
    
    // Создаем конфетти при открытии секрета
    createConfetti();
}

// Анимация котика
function animateCat() {
    const cat = document.querySelector('.cat-animation');
    const frames = ['😺', '😸', '😹', '😻', '😼', '😽'];
    let currentFrame = 0;
    
    setInterval(() => {
        cat.textContent = frames[currentFrame];
        currentFrame = (currentFrame + 1) % frames.length;
    }, 500);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Запускаем таймер
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Запускаем анимацию котика
    animateCat();
    
    // Создаем начальное конфетти
    setTimeout(createConfetti, 1000);
    
    // Добавляем конфетти при клике на подарки
    const giftCards = document.querySelectorAll('.gift-card');
    giftCards.forEach(card => {
        card.addEventListener('click', function() {
            createConfetti();
        });
    });
});
