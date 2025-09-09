// 정보 섹션으로 부드럽게 스크롤
const scrollToInfo = () => {
    document.getElementById('info').scrollIntoView({ 
        behavior: 'smooth' 
    });
};

// 스크롤 애니메이션 옵션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// 스크롤 감지 후 클래스 추가
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// fade-in 요소 감시 시작
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// 순차적 등장 애니메이션 지연 설정
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((el, index) => {
    el.style.transitionDelay = (index * 0.1) + 's';
});

// 스크롤 시 패럴럭스 효과
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.float-item');
    const speed = 0.5;

    parallax.forEach((item, index) => {
        const yPos = -(scrolled * (speed + index * 0.1));
        item.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// 버튼 클릭 시 인터랙션 효과
document.querySelector('.cta-button').addEventListener('click', (event) => {
    event.currentTarget.style.transform = 'translateY(-3px) scale(0.98)';
    setTimeout(() => {
        event.currentTarget.style.transform = 'translateY(-3px) scale(1)';
    }, 150);
});

// 페이지 로딩 애니메이션
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
