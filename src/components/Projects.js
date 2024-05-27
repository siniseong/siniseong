import Component from '../core/Component.js';
import GithubIcon from '../assets/images/github-icon.svg';
import LinkIcon from '../assets/images/link-icon.svg';
import Style from '../style/projects.css';
import StreakImage from '../assets/images/streak.png';
import diary1 from '../assets/images/diary1.png';
import diary2 from '../assets/images/diary2.png';
import umb1 from '../assets/images/umb1.png';
import umb2 from '../assets/images/umb2.png';
import jj from '../assets/images/jj1.png';
import eco1 from '../assets/images/eco1.png';
import eco2 from '../assets/images/eco2.png';
import bit from '../assets/images/bit.png'

export default class Projects extends Component {
  template() {
    const projectList = [
      {
        name: '경계선 지능 장애 아이의 학습을 위한 서비스, 바운더리',
        intro:'케이크를 자르지 못하는 아이들" 책을 통해 <u>경계선 지능 장애의 현실</u>을 알게 되었습니다. 한국에는 약 700만 명이 이 장애를 겪고있지만 지원 시설은 부족합니다. 조기 진단과 교육이 중요하지만 많은 제약이 있습니다. 이를 해결하기 위해 저희는 "바운더리" 서비스를 고안했습니다. 이 서비스는 경계선 지능 장애 학생들이 시간과 공간의 제약 없이 인지력을 향상시킬 수 있도록 도와줍니다.',
        members: '프론트엔드 개발자, 디자인 2명, 백엔드 개발자 2명',
        role: '프론트엔드 개발, 디자인',
        term: '2024.04. ~',
        techStack: [
          'React',
          'Spring Boot',
          'MySQL',
          'Docker',
          'Figma',
        ],
        features: [
          '케이크를 자르지 못하는 아이들" 책을 통해 <u>경계선 지능 장애의 현실</u>을 알게 되었습니다. 한국에는 약 700만 명이 이 장애를 겪고있지만 지원 시설은 부족합니다. 조기 진단과 교육이 중요하지만 많은 제약이 있습니다. 이를 해결하기 위해 저희는 "바운더리" 서비스를 고안했습니다. 이 서비스는 경계선 지능 장애 학생들이 시간과 공간의 제약 없이 인지력을 향상시킬 수 있도록 도와줍니다.',
        ],
        github: '',
        image1: '',
        image2: '',
        troubleShooting: {
          role:
            "대회 서류 합격 이 후 피그마를 통해 프로토타입을 구성했어요. 최대한 경계선 지능 장애 아이의 편의성을 위해서 복잡한 디자인을 사용하지 않았고, 기능도 학습에 필요한 기능만 넣었어요.",
          trouble:
            '대회의 주제를 확인한 후 팀원과 아이디어 회의를 하는 과정에서 서로의 생각이 달라서 마찰이 일어났습니다. 너무 많은 회의가 있었고, 보고서를 작성할 때 제가 팀장이였을 경우에는 제가 모든 내용을 채우고, 피드백을 받는 방식을 고수하고 있었기에 제가 팀장에게 불만을 제기하기도 했습니다. 하지만 이 부분에서는 제 생각이 잘못되었다는 것을 이해했고, 팀원 모두가 자신의 분야를 맡아서 개요서를 채워넣었습니다. <a href="https://wandering-confidence-5d5.notion.site/c882d8a0b97846b08e514d9faccd8941?pvs=4" target="_blank">제가 맡은 파트의 개요서</a> <br/>' +
            '의미 없는 많은 회의를 진행하는 부분에 대해서는 팀원의 의견을 물어보고, 개인의 시간만 생각하는 회의가 아닌 모두의 시간을 고려하여 회의를 하는 방식으로 트러블을 해결했습니다. <br/>',
          okay:
            'Figma를 사용해 보여주기식의 프로토타입이 아닌 피그마 내에서 동작하도록 디자인을 완성해보았습니다.<br>'+
            '다른 의견으로 많은 트러블이 있었지만 만약 이 트러블을 해결하지 못했다며 현재의 과정도 오지 못한채 팀이 해체되었을 것이라고 생각합니다. 팀원과의 갈등을 해결하는 능력도 매우 중요함을 다시 한 번 깨달았습니다. ',
            
          resultImage: '',
        },
      },
      {
        name: '재미있는 일기장 로또 일기',
        intro:
          '나눔 로또에서 주마다 추첨하는 번호를 이용해 일기를 적으면 번호 한개를 주는 일기장입니다. 그동안의 지루했던 일기장과 반면에 재미를 주며 사용자가 <u>일기를 적도록 유도</u>하는 웹/앱입니다. ',
        members: '프론트엔드 개발자 1명, 백엔드 개발자 1명',
        role: '프론트엔드 개발, 디자인',
        term: '2024.04. ~',
        techStack: [
          'React',
          'Vue',
          'Vuex',
          'Node.js',
          'Express',
          'MySQL',
          'Docker',
          'Figma',
        ],
        features: [
          '일기는 오늘 있었던 일을 기록하고, 미래에 훑어보며 기억을 회상하는 용도로 많이 쓰는데 저는 일기장이 인생에서 많이 중요하다고 생각했습니다. 하지만 보통 사람들은 일기를 잘 적지 않습니다. 그 이유를 찾아보니 <u>재미를 줄 수 있는 일기장이 없었습니다.</u> 조금이라도 재미있거나, 무엇인가를 제공한다면 일기를 쓰지 않을까? 라고 생각하였고, 중독성이 강한 <u>나눔로또와 연결</u>해 로또 일기를 개발하게 되었습니다. ',
        ],
        github: 'https://github.com/Lotto-Diary/Lotto_Diary_Frontend.git',
        image1: diary1,
        image2: diary2,
        troubleShooting: {
          role:
            "React를 사용해 일기장 웹을 개발했어요 나눔 로또 API를 사용해서 최종 결과와 번호를 대조해 나의 번호와 같은 갯수 만큼 코인을 주는 로직을 구현했어요. 구현을 완료한 웹을 Docker를 사용해 가상화 컨테이너로 패키징을 했어요Figma를 사용해 웹과 앱 디자인을 하였고, 일기장의 귀여움과 따뜻함을 표현하기 위해 파스텔톤으로 디자인을 했어요.",
          trouble:
            '프로젝트 도입 부분 서로의 일정에 피해가 갈정도로 많은 회의를 했습니다. 많은 회의로 서로가 불편해지고, 개발에도 진척이 없었습니다. 저희는 회의를 오프라인이 아닌 온라인으로 변경해 <u>디스코드를 사용</u>해 서로 괜찮은 시간에 회의를 진행하고 진척해 나갔습니다.<br/>' +
            '처음 개발 중에 틀이 갖춰져있지 않아 개발을 진행하며 서로 기억을 하고 있는 부분이 달랐습니다. 저희는 이 문제를 Slack을 사용해 공지로 내용을 정리했고, 노션에 명세서, 기획, 아이템 세부 설명을 정리해 문제를 해결했습니다.<br/>',
          okay:
            'Docker를 이용해 가상화 컨테이너로 패키징 하는 방법을 배웠습니다. 우리 주변에 상용화 된 API를 사용해 보았습니다.<br>'+
            '가장 작은 팀원 (2명)과 프로젝트를 진행해보면서 더 많은 책임감을 느끼게 되었습니다. 프론트엔드, 디자인 1명 / 백엔드 1명으로 진행해 한 명의 부재가 있다면 프로젝트의 기간이 길어짐을 느꼈습니다.',
            
          resultImage: StreakImage,
        },
      },
      {
        name: '금요일도 뽀송한 하교! 우산 대여 시스템',
        intro:
          '재학 중인 학교는 기숙사 퇴소일인 금요일 비가 오는 경우가 많았습니다. 비가 오면 학생들은 비를 맞으며 하교를 해야했습니다. 이제는 <u>비 오는 날에도 뽀송하게 하교</u>할 수 있도록 학생을 돕는 우산 대여 시스템을 기획하게 되었습니다.',
        members: '프론트엔드 개발자 2명, 백엔드 개발자 1명, 하드웨어 개발자 1명',
        role: '프론트엔드 개발, 디자인',
        term: '2023.12. ~ 2024.04.',
        techStack: [
          'React',
          'Firebase',
          'Figma',
          'Arduino',
          'C / C++',
          'Vercel',
        ],
        features: [
          '부산소프트웨어마이스터고 (재학 중인 학교)는 금요일에 기숙사를 퇴소하고 집에 갑니다. 만약 금요일 비가 온다면 비를 맞으며 귀가해야하는 일이 종종 있었습니다. 만약 <u>우산을 대여하는 서비스</u>가 있다면 학교에서 우산을 빌려준다면 비를 맞지 않고, 하교를 할 수 있다고 생각했습니다. 어떤 학생이 빌려갔는지 로그를 남기기 위해서 학생증을 사용하고자 했습니다.',
        ],
        github: 'https://github.com/0-Zeroo/0.0-Frontend',
        image1: umb1,
        image2: umb2,
        troubleShooting: {
          role:
            "React를 사용해 비밀번호 변경 페이지, 로그인 모달을 구현했습니다. 구현한 페이지에 Firestore를 사용하여 로그인과 비밀번호 변경을 구현하였습니다. 로그인은 Firebase의 기능 중 Authentication에서 임의의 이메일을 등록해 로그인을 구현하였습니다. 비밀번호 변경에서는 Authentication의 uid를 이용해 비밀번호 변경을 구현하였습니다. <br>Figma에서 검은색을 테마로한 웹을 디자인 했습니다.",
          trouble:
            '프로젝트를 진행하면서 하드웨어적 역량이 커지다보니 불만이 생기게 되었습니다. 불만을 해결하기 위해서 버스 타는 팀원 없이 역할과 시간을 분배했습니다. ' ,
          okay:
            'PM의 역할 중요성에 대해서 알게 되었습니다. 팀원의 개개인의 역량이 뛰어나더라도 PM이 중간에서 길을 정리해주지 않으면 개발에 난항이 생기고, 한 사람만이 안고 가야하는 부담이 생길 수 있다라는 것을 배웠습니다. '+
            '개발을 하기 전, 먼저 <u>확실한 개발 일자</u>를 맞추고 진행을 해야됨을 더 중요하게 생각하게 되었습니다. ',
            
          resultImage: StreakImage,
        },
      },
      {
        name: '기숙사에서 점호 시간을 단축! 찍책',
        intro:
          '재학 중인 학교는 기숙사에서 매일 저녁 9시 저녁 점호를 합니다. 저녁 점호 시간를 할 때  출석을 부르는 시간이 반이상을 차지한다고 생각했습니다. 학생들이 저녁 점호를 좋아하지 않고, 줄였으면 좋겠다는 말을 많이 해왔습니다. 이런 이야기를 계기로 <u>하드웨어 (NFC리더기)에 학생증을 찍으면 학생 정보를 출력</u>해주는 찍책을 기획하게 되었습니다. ',
        members: '프론트엔드 개발자 / 하드웨어 개발자 1명, 서버 개발자 1명',
        role: '프론트엔드 개발, 하드웨어 개발',
        term: '2023.10. ~ 2023.12.',
        techStack: [
          'JavaScript',
          'Raspberry PI',
          'Socket.io',
          'Python',
          'Github Page',
        ],
        features: [
          '재학 중인 학교는 기숙사에서 매일 저녁 9시 저녁 점호를 합니다. 저녁 점호 시간를 할 때  출석을 부르는 시간이 반이상을 차지한다고 생각했습니다. 학생들이 저녁 점호를 좋아하지 않고, 줄였으면 좋겠다는 말을 많이 해왔습니다. 이런 이야기를 계기로 <u>하드웨어 (NFC리더기)에 학생증을 찍으면 학생 정보를 출력</u>해주는 찍책을 기획하게 되었습니다. ',
        ],
        github: 'https://github.com/Attendance-check/JJick-Check',
        image1: 'https://img.youtube.com/vi/AW4Gdp_aLgI/hqdefault.jpg', 
        image2: jj,
        videoLink: 'https://www.youtube.com/watch?v=AW4Gdp_aLgI&t=1s', 
        troubleShooting: {
          role:
            "JS와 Socket.io를 통해 NFC리더기에 학생증을 찍으면 정보를 출력하는 웹 화면을 구현했습니다. Rasberry PI를 통해 하드웨어를 구현 및 간단한 웹 서버를 호스팅 하였습니다.<br>MySQL을 사용해 학생증의 번호와 DB에 저장된 번호와 같은지 대조해 값을 출력하였습니다.",
          trouble:
            '팀원과의 스택간 격차가 있었습니다. 저는 제가 알고 있는 스택들을 사용할 수 있었지만 팀원은 배워야하는 사항이였습니다. 많지 않은 시간에 공부하기 위해 시간을 소모하는 것은 무리라고 느껴 팀원에게 구현 부분을 할당하고 개발에 진행하였습니다. ' ,
          okay:
            'USB선 없이 Socket.io를 사용해 웹 DB 하드웨어를 연결할 수 있음을 알게되었습니다. '+
            '협업의 중요성을 뼈저리게 느꼈습니다. 팀원의 부재로 혼자하려는 시도를 했는데 모르는 부분이 많아질 수록 개발 시간이 지연과 협업으로만 얻을 수 있는 깨달음을 얻지 못했다고 생각합니다. ',
            
          resultImage: StreakImage,
        },
      },
      {
        name: '환경을 생각하는 착한 생각, 에코마인드',
        intro:
          '환경이라는 키워드로 개발을 진행하게 되었습니다. 환경이라는 것에 대해서 요즘 많은 사람이 관심을 가지고 있고, 많은 시스템이 개발되고 있지만 큰 환경이라는 틀에서 가장 중요한 것은 <u>쓰레기를 올바른 곳에 분리수거하기</u> 라고 생각했습니다. 분리수거를 올바르게 하면 포인트를 줘서 사용자의 유입을 늘렸습니다.',
        members: '기획자 1명, 앱 개발자 1명, 백엔드 개발자 1명, 디자이너 1명 ',
        role: '디자인',
        term: '2023.7. ~ 2023.12.',
        techStack: [
          'Flutter',
          'Dart',
          'Flask',
          'Python',
          'Figma',
          'OpenCV',
        ],
        features: [
          '환경이라는 키워드로 개발을 진행하게 되었습니다. 환경이라는 것에 대해서 요즘 많은 사람이 관심을 가지고 있고, 많은 시스템이 개발되고 있지만 큰 환경이라는 틀에서 가장 중요한 것은 <u>쓰레기를 올바른 곳에 분리수거하기</u> 라고 생각했습니다. 분리수거를 올바르게 하면 포인트를 줘서 사용자의 유입을 늘렸습니다.',
        ],
        github: 'https://github.com/orgs/Software-FUTURE-DREAM-Challenge-2023/repositories',
        image1: eco1,
        image2: eco2,
        troubleShooting: {
          role:
            "Figma를 사용해서 환경을 나타내는 에코마인드 디자인을 했습니다.<br>AI 기술에 대한 오픈소스 Google에서 서칭했습니다.",
          trouble:
            '팀원이 모두 다른 지역에 살고, 회의 일정 잡기도 까다로웠습니다. 회의는 아이디어를 구체화 시킬 때 화상으로 회의를 하였고, 그 후 Discord를 활용해 디자인, 앱 개발 등 진도를 쌓아나갔습니다.' ,
          okay:
            '오로지 화상 회의로만 프로젝트의 진도를 판별하는게 아니고, 서로 텍스트로 이야기하면서도 개발을 빠르게 진행해 나갈 수 있음을 배웠습니다. '+
            '이 프로젝트에서 기획자 친구를 보고 자신을 반성하며 배웠습니다. 어떤 상황에서도 팀원을 진정시키고, 오히려 용기를 북돋아주는 말을 해주었고, 회의를 진행하면서 참여도가 낮은 친구가 있는데도 차분히 팀과 소통할 수 있도록 통로를 만들어주는 모습을 보며 팀원의 기획력을 배웠고, 실생활에서도 팀원을 원활하게 이끌 수 있는 기획력을 가지려고 노력하고 있습니다. ',
            
          resultImage: StreakImage,
        },
      },
      {
        name: '2030 세계 박람회를 부산에서! BIT',
        intro:
          '<u>2030 세계 박람회를 홍보하자</u>라는 주제를 가지고 개발한 AI웹 입니다. 부산이라는 지역을 절대 잊지 않도록 어디에서나 사진을 찍으면 그 사진을 부산의 배경과 합성 시켜주는 AI 웹입니다. ',
        members: '프론트엔드, 백엔드 1명 AI 2명',
        role: '프론트엔드, 백엔드',
        term: '2023.05. ~ 2023.10.',
        techStack: [
          'HTML5',
          'CSS3',
          'JavaScript',
          'OpenCV',
          'YoLo v5',
          'Node.js',
        ],
        features: [
          '2030 엑스포를 홍보하자라는 주제를 가지고 개발한 AI웹 입니다. 부산이라는 지역을 절대 잊지 않도록 <u>어디에서나 사진을 찍으면 그 사진을 부산의 배경과 합성 시켜주는 AI 웹</u>입니다. 2030세대가 많이 이용하는 인생네컷의 붐이 일어나고 있고, 저희도 부산을 배경으로한 사진을 만들면 인기가 많을 것같다고 생각해 기획하게 되었습니다. ',
        ],
        github: 'https://github.com/BIT-BUSAN',
        image1: 'https://img.youtube.com/vi/AW4Gdp_aLgI/dvMidtkXms.jpg', 
        image2: bit,
        videoLink: 'https://www.youtube.com/watch?v=_dvMidtkXms', 
        troubleShooting: {
          role:
            "Html, CSS, JS를 이용해 2030 엑스포를 유치할 수 있는 나라들과 부산을 비교해 부산의 장점을 토대로 부산을 소개하는 웹페이지를 개발하였습니다.<br>OpenCV, Yolo V5를 사용해 AI를 개발에 참여했습니다. <br>Node.js를 사용해 웹에 AI 기술을 연동시켰습니다.",
          trouble:
            '이 프로젝트를 진행하게 된 계기는 부산에서 진행한 대회였습니다. 아이디어를 1차적으로 통과하면개발에 진행했었고, 저희팀은 아이디어를 제출하고, 갑작스럽게 붙은 상황에서 AI에 대한 지식을 가지고 있지 않았습니다. 저희팀은 따로 <u>공부하는 시간을 같기보다 이론 위주의 강의를 듣고, 개발을 하며 막히는 부분을 구글링</u> 하는 방식으로 개발을 진행하였습니다.  ' ,
          okay:
            'Node.js로 웹과 AI를 연결하는 방법에 대해서 알게 되었습니다. '+
            '추가로 Flask도 가능하고, Web Socket으로도 연결이 가능하다는 자료를 보았는데 Web Socket을 사용해 연결을 해보고 싶습니다.  ',
            
          resultImage: StreakImage,
        },
      },
    ];
    return `
    <div>
      <div class="projects-title">
        <div>📑 프로젝트</div>
      </div>
      <div class="global-menu-list">
        ${projectList
          .map(
            (_, idx) => `
              <div class="global-menu projects-menu ${
                idx === this.state.curTab ? 'global-menu-selected ' : ''
              }">${idx + 1}</div>
          `
          )
          .join('')}
      </div>
      <div class="projects-content">
      ${projectList
        .map(
          (project, idx) => `
          <div class="${idx !== this.state.curTab ? 'hidden ' : ''}">
            <div>
              <div class="projects-item-intro">
                <div class="projects-item-title">
                  ${project.name}
                  <div class="projects-item-link-wrapper">
                    <a target="_blank" href="${project.github}">
                      Github
                    </a>
                  </div>
                </div>
                <div class="projects-item-intro-item">
                  <div class="projects-item-intro-label">
                    기간
                  </div>
                  ${project.term} 
                </div>
                <div class="projects-item-intro-item">
                  <div class="projects-item-intro-label">
                    인원
                  </div>
                  ${project.members} 
                </div>
                <div class="projects-item-intro-item">
                  <div class="projects-item-intro-label">
                    역할
                  </div>
                  ${project.role} 
                </div>
                <div class="projects-item-techstack-wrapper">
                  ${project.techStack
                    .map(
                      (tech) =>
                        `<div class="projects-item-tech-tag">${tech}</div>`
                    )
                    .join('')}
                </div>
              </div>
            </div>
            
            <div class="projects-item-content">
              <div class="projects-item-content-title">미리보기</div>
              <div class="projects-item-image-wrapper">
                  ${
                    project.image1 !== null
                      ? `
                  <a target="_blank" href="${project.videoLink}">
                    <img class="projects-item-image" src=${project.image1} alt="YouTube Video Thumbnail"/>
                  </a>`
                      : ''
                  }
                  ${
                    project.image2 !== null
                      ? `
                  <img class="projects-item-image" src=${project.image2}/>`
                      : ''
                  }
              </div>
              <div class="projects-item-desc">${project.intro}</div>
            </div>

            <div class="projects-item-content">
              <div class="projects-item-content-title">아이디어 기획</div>
              <div class="projects-item-desc projects-item-desc-list">
                ${project.features
                  .map((desc) => `•&nbsp;&nbsp;${desc}<br/>`)
                  .join('')}
              </div> 
            </div>
            
            <div class="projects-item-content">
              <div class="projects-item-content-title">제가 이 프로젝트에서</div>
                <div class="projects-item-desc">
                  <div class="projects-item-sub-label">•&nbsp;&nbsp;맡은 역할</div>
                  <div class="projects-item-sub-desc">${
                    project.troubleShooting.role
                  }</div>
                  <div class="projects-item-sub-label">•&nbsp;&nbsp;트러블 해결</div>
                  <div class="projects-item-sub-desc">${
                    project.troubleShooting.trouble
                  }</div>
                  <div class="projects-item-sub-label">•&nbsp;&nbsp;배운 점</div>
                  <div class="projects-item-sub-desc">${
                    project.troubleShooting.okay
                  }</div>
                </div>
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
      const idx = Array.from(event.target.parentElement.children).indexOf(
        event.target
      );
      this.setState({ ...this.state, curTab: idx });
    });
  }
}
