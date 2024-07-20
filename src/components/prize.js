import Component from '../core/Component.js';
import Style from '../style/prize.css';

export default class Experience extends Component {
  setEvent() {
    this.addEvent('click', '.experience-item-title', (event) => {
      const item = event.target.closest('.experience-item');
      const desc = item.querySelector('.experience-item-desc');
      if (desc) {
        desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
      }
    });
  }

  template() {
    const experienceList = [
      {
        name: '임베디드과헤커톤 최우수상(2위)',
        term: '2024.07.14 ~ 15',
        descriptions: [
          '교내 임베디드과에서만 진행하는 헤커톤에서 스마트 헬스케어 키오스크를 개발해 최우수상(2위)를 수상하였습니다.',
        ],
      },
      {
        name: '모범상 (선행부분)',
        term: '2024.05.31',
        descriptions: [
          '부산소프트웨어마이스터고등학교에서 부반장으로 활동하여 모범상 (선행부문)을 수상하였습니다.',
        ],
      },
      {
        name: 'SFPC 전북 9위',
        term: '2024.01.15 ~ 2024.01.19',
        descriptions: [
          '한국정보교사연합회가 주최하는 SFPC에서 시범 참가자(중학생, 특목/특성화/자사고 등, (예비)교사) 자격으로 출전해 알고리즘 문제 10문제 중 팀과 함께 모든 문제를 해결하였고, 9등이라는 성적을 냈습니다. ',
        ],
      },
      {
        name: '2024 AI SW 프로젝트 공모전 6위 (장려상)',
        term: '2023.12. ~ 2024.04',
        descriptions: [
          '교내 AI SW 경진대회에서  우산 대여 시스템을 개발하여 장려상을 수상하였습니다. 재학 중인 학교는 기숙형 학교로 일요일 입소 날 우산을 챙겨오지 않는다면 금요일 비를 맞는 경우가 많았습니다. 이런 상황을 대비해 교내에서 사용할 수 있도록 우산 시스템을 개발하였고, 학생증을 사용해 우산 대여 및 반납이 가능합니다. 우산 사라짐과 같은 문제를 해결하기 위해서 대여자 목록을 선생님에게 보여줍니다. <a href="https://drive.google.com/file/d/1rF-_ls88jCUdcOcxgd9nTr62VVRO8GBZ/view?usp=drive_link" target="_blank">상장 확인하기</a>',
        ],
      },
      {
        name: '2023학년도 1학기 독서 활동 장려상',
        term: '2023.11.30',
        descriptions: [
          '한 학기동안 독서록 및 책 대출로 독서 활동 장려상을 수상하였습니다.',
        ],
      },
      {
        name: '교내 하계 전공 캠프(해커톤) 4위 (인기상)',
        term: '2023.07',
        descriptions: [
          '2023년 7월 하계 헤커톤에 참여해 시각 장애인의 안전을 위한 AI 지팡이를 개발하여 인기상을 수상하였습니다. AI 지팡이는 시각장애인이 사용하는 흰지팡이를 본떠 만들었습니다. 시각장애인은 언제나 사고가 일어날 수 있다고 생각하였고, 지팡이를 손에서 놓게 되면 시각장애인이 지팡이를 주울 수 있도록 소리로 신호를 주고, 5분내로 지팡이를 줍지 않는다면 앱으로 연결되어 있는 보호자에게 연락 및 119에 신고를 합니다. 지팡이를 놓는 상황을 대비해 버튼을 눌리면 지팡이를 놓아도 소리 및 보호자에게 연락이 가지 않도록 했습니다.',
        ],
      },
      {
        name: '부산광역시정보연구원장상 (3위)',
        term: '2023.07.',
        descriptions: [
          '2023 SW AI 중등학교 헤커톤에 출전해 인공지능 주차장 시스템을 개발하여 장려상을 수상하였습니다. 인공지능 주차장 시스템은 현재 우리가 사용하는 주차장 (대형마트, 백화점 등)의 주차장을 타깃으로 설정하였고, 들어오고, 나갈 때 추가의 기다림 없이 카카오페이와 같은 페이 시스템으로 결제를 하도록 했습니다. 자동차가 주차장에 주차 시 LED ON으로 주차 공간이 남아있음을 표시했습니다.',
        ],
      }
     
    ];

    return `
      <div>
        <div class="experience-title">🏆 수상했어요 <span class="experience-instruction">(각 세션을 눌리면 자세한 내용을 볼 수 있어요)</span></div>
        <div class="experience-content">
          ${experienceList
            .map(
              (experience) => `
              <div class="experience-item">
                <div class="experience-item-title">
                  <div>${experience.name}</div> 
                </div>
                <div class="experience-item-term">${experience.term}</div> 
                <div class="experience-item-desc" style="display: none;">
                ${experience.descriptions
                  .map((desc) => `• ${desc}<br/>`)
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
}
