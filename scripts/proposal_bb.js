// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 80);
        observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// 스크롤 효과
const mainEl = document.querySelector('main');
const sections = document.querySelectorAll("section:not(.no-scroll)");

let current = 0;
let isScrolling = false;

mainEl.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    const scrollTop = mainEl.scrollTop;
    const noScrollSections = document.querySelectorAll("section.no-scroll");
    let inNoScroll = false;
    noScrollSections.forEach(sec => {
        if (scrollTop >= sec.offsetTop - 10 && scrollTop < sec.offsetTop + sec.offsetHeight) {
        inNoScroll = true;
        }
    });
    if (inNoScroll) return;

    e.preventDefault(); // 스냅 구간에서 기본 스크롤 차단

    isScrolling = true;

    if (e.deltaY > 0 && current < sections.length - 1) current++;
    else if (e.deltaY < 0 && current > 0) current--;

    // scrollIntoView 대신 mainEl.scrollTop 직접 제어
    mainEl.scrollTo({
        top: sections[current].offsetTop,
        behavior: "smooth"
    });

    setTimeout(() => { isScrolling = false; }, 900);
}, { passive: false }); // preventDefault 쓰려면 passive: false 필수