import Component from '../core/Component.js';
import Style from '../style/tech-stack.css';
import ReactLogo from '../assets/images/react-logo.svg';
import VueLogo from '../assets/images/vuejs-logo.svg';
import NodeLogo from '../assets/images/node.png';
import FigmaLogo from '../assets/images/figma.png';
import CshapLogo from '../assets/images/cshap.svg';
import JsLogo from '../assets/images/js-logo.svg';
import BILogo from '../assets/images/powerbi.png';
import DockerLogo from '../assets/images/docker-logo.svg';
import Firebase from '../assets/images/firebase.png';
import MysqlLogo from '../assets/images/mysql-logo.svg';
import rasLogo from '../assets/images/ras.svg';

export default class Techstack extends Component {
  template() {
    const frontList = [
      {
        name: 'React',
        star: '',
        desc: 'React를 기반으로 프로젝트에서 협업 및 개발한 경험이 있습니다.<br>React를 사용해 코드를 유지보수 하고, 더 좋은 코드로 질을 향상시킬 수 있습니다.',
        icon: ReactLogo,
      },
      {
        name: 'Vue.js',
        star: '',
        desc: 'Vue.js를 사용하여 다양한 종류의 웹을 개발해 본 경험이 있습니다. <br>SSR라이브러리와 Node.js를 사용해 클라이언트 측의 입장에서 개발을 할 수 있습니다.',
        icon: VueLogo,
      },
      {
        name: 'JavaScript',
        star: '',
        desc: 'JavaScript를 사용하여 다양한 웹을 만들어본 경험이 있습니다. <br> 교내에서 진행한 대회 등 다양한 곳에서 사용하였고, 좋은 결과를 이끌어 냈습니다.',
        icon: JsLogo,
      },
    ];
    const backList = [
      {
        name: 'Node.js / Express',
        star: '',
        desc: 'Node.JS를 사용해 간단한 백엔드 서버를 개발한 경험이 있습니다.<br>라이브러리 Socket.io를 사용해 실시간으로 데이터를 교환할 수 있습니다. <br>MySQL과 연결해 입력값과 데이터의 값을 비교해 값을 전달할 수 있습니다.',
        icon: NodeLogo,
      },
      {
        name: 'Docker',
        star: '',
        desc: 'Docker을 사용해 어플리케이션을 컨테이너로 패키징할 수 있습니다.<br>CI/CD 파이프라인을 통해 자동화된 베포를 할 수 있습니다.<br>Docker로 리소스의 가상화를 통해 서버 자원을 효율적으로 관리할 수 있습니다.',
        icon: DockerLogo,
      },
      {
        name: 'MySQL',
        star: '',
        desc: 'MYSQL을 사용해 하드웨어에서 전달한 값을 비교해 웹에 띄우는 프로젝트를 진행해본 경험이 있습니다.',
        icon: MysqlLogo,
      },
      {
        name: 'Firebase',
        star: '',
        desc: 'Firebase Firestore를 사용하여 촉박한 시간의 프로젝트 또는 간단한 개인 프로젝트에서 DB 대신 Firebase를 사용해서 프로젝트를 빠르게 완성시킨 경험이 있습니다.',
        icon: Firebase,
      },
    ];
    const langList = [
      {
        name: 'Figma',
        star: '',
        desc: 'Figma를 사용해 웹과 UI/UX를 디자인한 경험이 있습니다.Figma에서 컴포넌트, 아이콘을 포함한 디자인 시스템을 구축할 수 있습니다. 다양한 플러그인을 사용해 작업 효율을 늘일 수 있습니다.',
        icon: FigmaLogo,
      },
      {
        name: 'Power BI',
        star: '',
        desc: '엑셀의 한계를 뛰어넘기 위한 툴 Power BI를 사용해 공공데이터포털의 데이터 시각화 및 분석해본 경험이 있습니다.',
        icon: BILogo,
      },
      {
        name: 'Raspberry PI',
        star: '',
        desc: 'Raspberry PI를 사용해 웹 서버를 호스팅 할 수 있습니다.<br>Raspberry PI를 사용해 간단한 IoT 프로젝트를 만들어본 경험이 있습니다.',
        icon: rasLogo,
      },
      {
        name: 'C#',
        star: '스터디 중...',
        desc: 'C#을 로보티스, 시뮬레이션 분야에 사용하기 위해 공부하고 있습니다.',
        icon: CshapLogo,
      },
    ];

    const techStack = [
      { key: 'Frontend', list: frontList },
      { key: 'Backend', list: backList },
      { key: 'ETC', list: langList },
    ];

    return `
      <div class="tech-container">
        <div class="tech-title">🧑‍💻 기술 스택</div>
        <div class="tech-list-container">
          <div class="global-menu-list">
            ${techStack
              .map(
                (techList, idx) => `
                  <div class="global-menu ${idx === this.state.curTab ? 'global-menu-selected' : ''}">
                    ${techList.key}
                  </div>
              `
              )
              .join('')}
          </div>
          ${techStack
            .map(
              (techList, idx) => `
              <div class="tech-list-wrapper ${idx !== this.state.curTab ? 'hidden ' : ''}">
                <div class="tech-info-wrapper">
                  ${techList.list
                    .map(
                      (tech) => `
                      <div class="tech-info">
                        <img class="tech-icon" src=${tech.icon}/>
                        <div class="tech-star">
                          ${tech.star}
                        </div>
                        <div class="tech-tag">
                          ${tech.name}
                        </div>
                        <div class="tech-desc">
                          ${tech.desc}
                        </div>
                      </div>
                  `
                    )
                    .join('')}
                </div>
              </div>
            `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  setup() {
    this.state = { curTab: 0 };
  }

  setEvent() {
    this.addEvent('click', '.global-menu', (event) => {
      const idx = Array.from(event.target.parentElement.children).indexOf(event.target);
      this.setState({ ...this.state, curTab: idx });
    });
  }
}
