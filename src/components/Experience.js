import Component from '../core/Component.js';
import Style from '../style/experience.css';

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
        name: 'Gemini API Developer Contest',
        term: '2024.05. ~ ',
        descriptions: [
          'Gemini Api 외 구글에서 내놓은 기술을 활용해 개발하는 Gemini Api Developer Contest에 참가하였습니다.',
        ],
      },
      {
        name: 'STEM Leader CAMP',
        term: '2024.05.20 ~ 2024.05.24',
        descriptions: [
          'NUS (싱가포르 국립대학교)에서 진행한 UI/UX 디자인 수업을 들었고, AI Chatbot 앱/웹에서 UI/UX를 개선 + NUS 학생들이 사용할 수 있도록 이라는 주제를 추가해 영어로 발표를 하였습니다. 저희 팀이 선택한 웹은 가가라이브라는 랜덤 채팅 웹 이였습니다. <a href="https://velog.io/@huise0ng/1%EC%A3%BC%EC%9D%BC%EA%B0%84-NUS-%EB%8C%80%ED%95%99%EC%83%9D%EC%9D%84-%EA%B2%BD%ED%97%98%ED%95%98%EB%A9%B0" target="_blank">Velog 글 확인하기</a>',
        ],
      },
      {
        name: 'SmrtTeen App Challenge 2024 생활정보분야 개발부문 본선 진출',
        term: '2024.04. ~ ',
        descriptions: [
          '생활정보분야에서 경계선 지능 장애 아이의 학습을 위한 웹이라는 아이디어로 본선에 진출했고, 현재는 프로토타입 개발 중에 있습니다.',
        ],
      },
      {
        name: '교내 컨퍼런스 INSCON 발표',
        term: '2024.01.04',
        descriptions: [
          '2024학년도 신입생 멘토로 발탁되어 신입생과 먼저 이야기하고, 전반적인 학교 생활에 대해서 알려주었습니다. 본교 2학년 학생 중 2:1의 경쟁률을 넘어 발탁되었습니다. 신입생에게 다른 것보다도 컨디션 관리가 가장 중요함을 강조하였고, 저의 사례를 본떠 신입생을 도왔습니다.',
        ],
      },
      {
        name: 'SFPC 전북',
        term: '2024.01.15 ~ 2024.01.19',
        descriptions: [
          '한국정보교사연합회가 주최하는 SFPC에서 시범 참가자(중학생, 특목/특성화/자사고 등, (예비)교사) 자격으로 출전해 알고리즘 문제 10문제 중 팀과 함께 모든 문제를 해결하였고, 9등이라는 성적을 냈습니다. ',
        ],
      },
      {
        name: '2024 AI SW 프로젝트 공모전🏆',
        term: '2023.12. ~ 2024.04',
        descriptions: [
          '교내 AI SW 경진대회에서  우산 대여 시스템을 개발하여 장려상을 수상하였습니다. 재학 중인 학교는 기숙형 학교로 일요일 입소 날 우산을 챙겨오지 않는다면 금요일 비를 맞는 경우가 많았습니다. 이런 상황을 대비해 교내에서 사용할 수 있도록 우산 시스템을 개발하였고, 학생증을 사용해 우산 대여 및 반납이 가능합니다. 우산 사라짐과 같은 문제를 해결하기 위해서 대여자 목록을 선생님에게 보여줍니다. <a href="https://drive.google.com/file/d/1rF-_ls88jCUdcOcxgd9nTr62VVRO8GBZ/view?usp=drive_link" target="_blank">상장 확인하기</a>',
        ],
      },
      {
        name: '2024학년도 신입생 멘토 발탁',
        term: '2023.12.03',
        descriptions: [
          '2024학년도 신입생 멘토로 발탁되어 신입생과 먼저 이야기하고, 전반적인 학교 생활에 대해서 알려주었습니다. 본교 2학년 학생 중 2:1의 경쟁률을 넘어 발탁되었습니다. 신입생에게 다른 것보다도 컨디션 관리가 가장 중요함을 강조하였고, 저의 사례를 본떠 신입생을 도왔습니다.',
        ],
      },
      {
        name: '2023 교내 입학 설명회 학생 대표 발탁',
        term: '2023.08.',
        descriptions: [
          '2023년 7월, 3번째 부산소프트웨어마이스터고등학교 입학 설명회에 학생 대표로 발탁되어 코딩에 ‘ㅋ’도 몰랐던 내가 반년 동안 ‘코’까지 알게 된 과정을 발표하였습니다.',
        ],
      },
      {
        name: 'SW 마이스터고 연합 토크콘서트 참여',
        term: '2023.08',
        descriptions: [
          '소프트웨어마이스터고 4개교 학생과, 대전에서 만나는 기회를 얻었습니다. 4개교 학생들과 명함을 교환하고, 친분을 얻는 좋은 기회를 가지게 되었습니다. 대덕소마고에서 준비해준 강의 중 요기요 개발자의 고종현님의 프론트엔드 강의와 Figma를 사용한 웹 디자인 강의를 각각 1, 2순위로 수강하였습니다.',
        ],
      },
      {
        name: '2023년 AI•SW 기반 프로젝트 경진대회 본선 진출',
        term: '2023.06. ~ 2024.10',
        descriptions: [
          '부산에서 2030 엑스포를 개최할 시기, 부산을 널리 홍보할 수 있는 아이템이라는 주제로 어디에서나 부산을 경험하고, 느낄 수 있도록 사진을 촬영하면 웹에서 부산의 배경을 합성하는 AI 웹을 개발하였습니다. 최종라운드에 진출해 심사위원 앞에서 발표를 할 수 있었습니다. .',
        ],
      },
      {
        name: 'Software FUTURE&DREAM Challenge 2023 본선 진출',
        term: '2023.07. ~ 2023.12.',
        descriptions: [
          '선린인터넷고, 대덕소프트웨어마이스터고 학생과 환경을 위한 앱 에코마인드 개발을 진행하였습니다. 에코마인드에서는 환경을 위해서는 무단 투기보다 모든 쓰레기를 일반 쓰레기에 넣는 경우가 많다라는 생각을 했고, 카메라로 쓰레기를 촬영하면 어디에 버려야하는지를 알려주는 앱을 개발했습니다.',
        ],
      },
      {
        name: '2023년 대한민국 청소년 창업 경진 대회 본선 진출',
        term: '2023.05. ~ 2023.08.',
        descriptions: [
          '알츠하이머 환자를 위한 자동 약 배급기를 개발하였습니다. 알츠하이머 환자는 잠시전에 있었던 일도 잊는 일이 많습니다. 알츠하이머 환자는 약을 복용할 때 과다 복용으로 환자의 생명에 문제가 생기는 경우를 봤습니다. 최소한 약 과다 복용으로 생명을 잃는 일은 없으면 좋겠다는 생각을 하였고, 약을 복용해야하는 시간에 자동으로 약을 배급하고, AI로 환자와 대화를 할 수 있도록 개발을 진행하였습니다. ',
        ],
      },
      {
        name: '2023 네트워크 경진대회 작품 전시',
        term: '2023.10. ~ 2023.12',
        descriptions: [
          '교내에서 주최하는 네트워크 경진대회에서 기숙사에서 불편한 점인 출석 체크를 관련한 시스템을 개발하였습니다. 매번 점호 시간이면 출석 체크로 소요 하는 시간을 줄이기 위해 개발을 진행했습니다. 1학년 2반 동료 평가 및 교사 평가 1등을 달성하여 반을 대표해 교내에 작품을 전시했습니다.',
        ],
      },
      {
        name: '2023 SW AI 중등학교 헤커톤🏆',
        term: '2023.07.',
        descriptions: [
          '2023 SW AI 중등학교 헤커톤에 출전해 인공지능 주차장 시스템을 개발하여 장려상을 수상하였습니다. 인공지능 주차장 시스템은 현재 우리가 사용하는 주차장 (대형마트, 백화점 등)의 주차장을 타깃으로 설정하였고, 들어오고, 나갈 때 추가의 기다림 없이 카카오페이와 같은 페이 시스템으로 결제를 하도록 했습니다. 자동차가 주차장에 주차 시 LED ON으로 주차 공간이 남아있음을 표시했습니다.',
        ],
      },
      {
        name: 'BSSM 하계 헤커톤🏆',
        term: '2023.07.',
        descriptions: [
          '2023년 7월 하계 헤커톤에 참여해 시각 장애인의 안전을 위한 AI 지팡이를 개발하여 인기상을 수상하였습니다. AI 지팡이는 시각장애인이 사용하는 흰지팡이를 본떠 만들었습니다. 시각장애인은 언제나 사고가 일어날 수 있다고 생각하였고, 지팡이를 손에서 놓게 되면 시각장애인이 지팡이를 주울 수 있도록 소리로 신호를 주고, 5분내로 지팡이를 줍지 않는다면 앱으로 연결되어 있는 보호자에게 연락 및 119에 신고를 합니다. 지팡이를 놓는 상황을 대비해 버튼을 눌리면 지팡이를 놓아도 소리 및 보호자에게 연락이 가지 않도록 했습니다.',
        ],
      },
      
    ];

    return `
      <div>
        <div class="experience-title">💟 소중한 경험 <span class="experience-instruction">(각 세션을 눌리면 자세한 내용을 볼 수 있어요)</span></div>
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
