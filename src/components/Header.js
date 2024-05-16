import Component from '../core/Component.js';
import MoonIcon from '../assets/images/moon-icon.svg';
import SunIcon from '../assets/images/sun-icon.svg';
import confetti from 'canvas-confetti';  
import Style from '../style/header.css';

export default class Header extends Component {
  setup() {
    this.state = { 
      isDarkMode: window.__theme === window.__DARK
    };
    this.updateProgressBar = this.updateProgressBar.bind(this);
  }

  template() {
    return `
        <div class="header-wrapper">
            <div class="header-theme-button">${
              this.state.isDarkMode
                ? `<img src=${SunIcon} alt='sun-icon'/>`
                : `<img src=${MoonIcon} alt='moon-icon'/>`
            }</div>
            <div class="header-menu">프로젝트</div>
            <div class="header-menu">기술</div>
            <div class="header-menu">소개</div>
            <div class="header-confetti-button">❤</div> 
        </div>
        <div class="progress-bar"></div>  <!-- 스크롤 진행바 요소 추가 -->
    `;
  }

  setEvent() {
    this.addEvent('click', '.header-theme-button', () => {
      const newTheme = this.state.isDarkMode ? window.__LIGHT : window.__DARK;
      window.__setTheme(newTheme);
      this.setState({ isDarkMode: newTheme === window.__DARK });
    });

    this.addEvent('click', '.header-wrapper', (event) => {
      const idx = Array.from(event.target.parentElement.children).indexOf(
        event.target
      );
      if (idx === 0 || idx === 4) return;  
      const menus = ['', 'projects', 'skills', 'about'];
      const sectionElement = document.getElementById(menus[idx]);
      const sectionTop = sectionElement?.getBoundingClientRect().top;

      window.scrollTo({
        top: window.scrollY + sectionTop - 80,
        behavior: 'smooth',
      });
    });

    this.addEvent('click', '.header-confetti-button', () => {
      const shapes = ['circle', 'square', 'triangle', 'line'];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 },
        shapes: [randomShape],
      });
    });

    window.addEventListener('scroll', this.updateProgressBar);
  }

  updateProgressBar() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.querySelector('.progress-bar').style.width = `${scrollPercent}%`;
  }

  cleanup() {
    window.removeEventListener('scroll', this.updateProgressBar);
  }
}
