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
    
    // Воспроизводим звук (если нужно)
    playSuccessSound();
}

// Модальные окна подарков
function showGift(giftNumber) {
    const modal = document.getElementById('gift-modal');
    const modalContent = document.getElementById('modal-content');
    
    let content = '';
    
    switch(giftNumber) {
        case 1:
            content = `
                <h2>🎮 500 Робуксов</h2>
                <div style="text-align: center; margin: 20px 0;">
                    <div style="font-size: 3rem; margin-bottom: 15px;">🎁</div>
                    <p style="font-size: 1.2rem; color: #ff6b6b; font-weight: bold;">
                        500 Robux для твоих игровых приключений!
                    </p>
                </div>
                <p>Чтобы получить подарок:</p>
                <ul style="text-align: left; margin: 15px 0; padding-left: 20px;">
                    <li>Напиши мне свой ник в Roblox</li>
                    <li>Я отправлю тебе 500 Robux в течение 24 часов</li>
                    <li>Наслаждайся покупками! 🛍️</li>
                </ul>
                <p><em>P.S. Выбирай самые крутые вещички! 😉</em></p>
            `;
            break;
        case 2:
            content = `
                <h2>✈️ Telegram Premium</h2>
                <div style="text-align: center; margin: 20px 0;">
                    <div style="font-size: 3rem; margin-bottom: 15px;">💎</div>
                    <p style="font-size: 1.2rem; color: #45b7d1; font-weight: bold;">
                        Премиум подписка на 1 месяц!
                    </p>
                </div>
                <p>Что ты получишь:</p>
                <ul style="text-align: left; margin: 15px 0; padding-left: 20px;">
                    <li>✅ Увеличенные лимиты загрузки</li>
                    <li>✅ Эксклюзивные стикеры и эмодзи</li>
                    <li>✅ Отсутствие рекламы</li>
                    <li>✅ Улучшенный менеджер загрузок</li>
                </ul>
                <p>Просто скажи мне свой номер телефона, и я активирую подписку! 📱</p>
            `;
            break;
        case 3:
            content = `
                <h2>💫 Исполнение желания</h2>
                <div style="text-align: center; margin: 20px 0;">
                    <div style="font-size: 3rem; margin-bottom: 15px;">✨</div>
                    <p style="font-size: 1.2rem; color: #ffd93d; font-weight: bold;">
                        Я выполню одно твое желание!
                    </p>
                </div>
                <p>Это твой шанс загадать что-то особенное! 🎯</p>
                <div style="background: #f0f8ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <p style="font-style: italic; color: #666; text-align: center;">
                        "Загадай желание, и я сделаю всё возможное для его исполнения!"
                    </p>
                </div>
                <p><strong>Условия:</strong></p>
                <ul style="text-align: left; margin: 15px 0; padding-left: 20px;">
                    <li>💝 Желание должно быть выполнимым</li>
                    <li>📅 Действительно в течение года</li>
                    <li>😊 Не должно нарушать законы и моральные принципы</li>
                </ul>
                <p>Просто скажи мне своё желание, и вперёд! 🚀</p>
            `;
            break;
    }
    
    modalContent.innerHTML = content;
    modal.classList.remove('hidden');
    createConfetti();
}

function closeModal() {
    document.getElementById('gift-modal').classList.add('hidden');
}

// Звуковые эффекты
function playSuccessSound() {
    try {
        // Простая звуковая волна
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.3);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(aContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log('Audio not supported');
    }
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
    
    // Закрытие модального окна по клику вне его
    document.getElementById('gift-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Добавляем обработчик Escape для закрытия модалки
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
