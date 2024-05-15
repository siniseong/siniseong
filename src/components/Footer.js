import Component from '../core/Component.js';
import Style from '../style/footer.css';

export default class Footer extends Component {
  template() {
    return `
        <div class="footer-wrapper">
            <div>포트폴리오를 끝까지 읽어주셔서 감사합니다! 누구와도 소중한 인연이 닿기를 원합니다. 편하게 연락 주세요! </div>
            <div> © 2024. siniseong All rights reserved. </div>
        </div>
    `;
  }
}
