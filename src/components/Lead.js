
import Component from '../core/Component.js';
import Style from '../style/experience.css';

export default class Experience extends Component {
  setEvent() {
    this.addEvent('click', '.experience-item-title div', (event) => {
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
        name: 'CSI 멘토',
        term: '2024.04. ~',
        descriptions: [
          '2024학년도 1학년 학생들이 운영하는 사이버보안과 IOT 동아리에 2학년 멘토로 동아리의 운영 방식, 해결해야할 우선 순위를 알려주고, 일정을 관리했습니다.',
        ],
      },
      {
        name: 'CRUISE 크루즈 팀장',
        term: '2024.03. ~',
        descriptions: [
          '2024학년도 분실물 시스템 <b>어딧노</b>를 개발하는 전공동아리 크루즈의 팀장으로 계획 발표 및 팀의 일정 관리를 하였고, 다양한 분야에서 팀원과 함께 개발하였습니다.',
        ],
      },
      {
        name: '2-4반 학급 부반장',
        term: '2024.03. ~',
        descriptions: [
          '2024학년도 2-4반 학급 부반장으로 반장을 도와가며 학급 운영 및 봉사를 하였습니다.',
        ],
      },
      
    ];

    return `
      <div>
        <div class="experience-title">🧑‍🤝‍🧑리드 <span class="experience-instruction">(각 세션을 눌리면 자세한 내용을 볼 수 있어요)</span></div>
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
