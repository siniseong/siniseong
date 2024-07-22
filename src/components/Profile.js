import Component from '../core/Component.js';
import GithubIcon from '../assets/images/github-icon.svg';
import VelogIcon from '../assets/images/velog-icon.svg';
import ProfileImage from '../assets/images/siniseong.jpg';
import Mail from '../assets/images/mail.svg';

import Style from '../style/profile.css';

export default class Profile extends Component {
  template() {
    const linkList = [
      {
        name: 'github',
        iconSrc: GithubIcon,
        href: 'https://github.com/huise0ng',
      },
      {
        name: 'velog',
        iconSrc: VelogIcon,
        href: 'https://velog.io/@huise0ng/posts',
      },
      {
        name: 'Mail',
        iconSrc: Mail,
        href: 'mailto:huiseong2785@naver.com',
      },
    ];
    return `
      <div class="profile-container">
        <div class="profile-wrapper">
          <img class="profile-image" src="${ProfileImage}" alt=""/>
          <div class="profile-name">
            신희성
            <div class="profile-position">
              프론트엔드, 시뮬레이션 엔지니어
            </div>
            <div class="profile-icon-wrapper">
              ${linkList.map(link => `
                <div>
                  <a target="_blank" href="${link.href}">
                    <img class="profile-icon" src="${link.iconSrc}" alt="${link.name}"/>
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="profile-title">🧑‍💻 소개</div>
        <div class="profile-description">
          사회에 긍정적인 영향을 주는 <br>
          서비스를 만드는 개발자가 되는 것이 꿈입니다.<br><br>
          팀원과 원활한 협업을 할 수 있는 개발자가 되는 것이 저의 큰 목표 입니다. <br>
          원활한 협업이라는 것은 기술 스택을 습득하는 것 보다 어려운 과정이라는 것을 알고 있고, 모든 프로젝트를 진행할 때 원활한 협업을 하기 위해 깊게 고민하고, 먼저 양보합니다.
        </div>
      </div>
    `;
  }

  mounted() {
    console.log(`
                                             
                            ##               
                      ##                     
##  ##   ####   ### #####  ##    ###   ## ## 
##  ##  ## ##  ##    ##    ##   ## ##  ##### 
## ##  ##  ## ##     ##    ##  ##  ##  ## ## 
## #   ## ##  ##    ##    ##   ##  ## ##  #  
###    #####  ##    ##    ##   ## ##  ## ##  
##     ## ##   ###  ###   ##    ###   ## ##  
                                             
                                             
https://wandering-confidence-5d5.notion.site/640335f2db3b4360b1f142116b5dcb1f?pvs=4
    `);
  }
}
