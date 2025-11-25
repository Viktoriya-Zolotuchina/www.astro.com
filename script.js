// Создаем звезды для фона
function createStars() {
    const starsBackground = document.getElementById('starsBackground');
    const starsCount = 150;
    
    for(let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsBackground.appendChild(star);
    }
}

// Анимация при прокрутке
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Если элемент виден в окне браузера
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('animated');
        }
    });
}

// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Изменение навигации при прокрутке
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
    
    // Запускаем анимации при прокрутке
    animateOnScroll();
});

// Обработка отправки формы
document.getElementById('consultationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Собираем данные формы
    const formData = {
        name: document.getElementById('clientName').value,
        email: document.getElementById('clientEmail').value,
        phone: document.getElementById('clientPhone').value,
        birthDate: document.getElementById('birthDate').value,
        birthTime: document.getElementById('birthTime').value,
        birthPlace: document.getElementById('birthPlace').value,
        service: document.getElementById('serviceType').value,
        message: document.getElementById('clientMessage').value,
        to_email: 'astro.krd123@mail.ru'
    };
    
    // В реальном проекте здесь будет код отправки на сервер
    // Для демонстрации просто показываем данные в консоли
    console.log('Данные формы для отправки на astro.krd123@mail.ru:', formData);
    
    // Показываем сообщение об успехе
    alert('Спасибо, ' + formData.name + '! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.');
    
    // Закрываем модальное окно
    const modal = bootstrap.Modal.getInstance(document.getElementById('consultationModal'));
    modal.hide();
    
    // Очищаем форму
    document.getElementById('consultationForm').reset();
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    animateOnScroll();
    
    // Добавляем стиль для навигации при прокрутке
    const style = document.createElement('style');
    style.textContent = `
        .navbar-scrolled {
            background-color: rgba(15, 20, 25, 0.98) !important;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3) !important;
        }
    `;
    document.head.appendChild(style);
});