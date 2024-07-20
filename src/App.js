import Component from './core/Component.js';
import Profile from './components/Profile.js';
import TechStack from './components/TechStack.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Experience from './components/Experience.js';
import Lead from './components/Lead.js';
import Prize from './components/prize.js';


export default class App extends Component {
  template() {
    return `
      <div data-component="header-appender"></div>
      <div class="global-container">
        <div class="global-list">
          <div data-component="profile-appender" id="about"></div>
          <div class="global-line"></div>
          <div data-component="techstack-appender" id="skills"></div>
          <div class="global-line"></div>
          <div data-component="projects-appender" id="projects"></div>
          <div class="global-line"></div>
          <div data-component="lead-appender" id="lead"></div> 
          <div class="global-line"></div>
          <div data-component="experience-appender" id="experience"></div>
          <div class="global-line"></div>
          <div data-component="prize-appender" id="experience"></div>
         
          
        </div>
      </div>
      <div data-component="footer-appender"></div>
    `;
  }

  mounted() {
    const $headerAppender = this.target.querySelector('[data-component="header-appender"]');
    new Header($headerAppender);

    const $profileAppender = this.target.querySelector('[data-component="profile-appender"]');
    new Profile($profileAppender);

    const $techstackAppender = this.target.querySelector('[data-component="techstack-appender"]');
    new TechStack($techstackAppender);

    const $projectsAppender = this.target.querySelector('[data-component="projects-appender"]');
    new Projects($projectsAppender);

    const $leadAppender = this.target.querySelector('[data-component="lead-appender"]'); 
    new Lead($leadAppender); 

    const $experienceAppender = this.target.querySelector('[data-component="experience-appender"]');
    new Experience($experienceAppender);

    const $prizeAppender = this.target.querySelector('[data-component="prize-appender"]');
    new Prize($prizeAppender);

    const $footerAppender = this.target.querySelector('[data-component="footer-appender"]');
    new Footer($footerAppender);
    
  }
}
