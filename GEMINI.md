# 이 프로젝트는 Google의 Gemini 모델을 지원합니다.

## 이 프로젝트에서 Gemini를 활용하는 방법

이 문서는 AI를 위한 설정 파일이 아니라, **이 프로젝트를 보는 사람들을 위한 안내서**입니다. 작가가 '통합 글쓰기 환경(IWE)' 내에서 마주할 수 있는 창의적, 기술적 장벽을 Gemini를 활용해 어떻게 극복할 수 있는지에 대한 구체적인 사례와 프롬프트를 공유합니다.

### 기능 1: VitePress 커스텀 컴포넌트 코드 생성

*   **설명:** 마크다운의 한계를 넘어 글을 다채롭게 표현하기 위해, Vue.js 기반의 커스텀 컴포넌트 코드 초안을 생성합니다. 이를 통해 작가가 직접 책을 디자인할 수 있습니다.
*   **Gemini의 역할:** Vue 컴포넌트의 보일러플레이트 코드를 생성하여 기술적인 진입 장벽을 낮춥니다.
*   **프롬프트 예시:**
    ```
    VitePress에서 사용할 수 있는, 소설 속 인물의 프로필 카드를 보여주는 Vue 3 컴포넌트를 만들어줘. 이름, 나이, 특징을 props로 받아야 하고, 카드 배경은 옅은 회색이었으면 좋겠어.
    ```

### 기능 2: 글의 구조 및 목차 아이디어 구상

*   **설명:** 새로운 챕터나 글의 전체적인 구조에 대한 아이디어가 필요할 때, 다양한 관점의 목차를 제안받습니다.
*   **Gemini의 역할:** 제시된 핵심 주제를 바탕으로 독자의 흥미를 유발할 수 있는 논리적이고 창의적인 글의 흐름과 소제목들을 생성하여 작가의 브레인스토밍을 돕습니다.
*   **프롬프트 예시:**
    ```
    '작가를 위한 Git 활용법'이라는 주제로 책을 쓴다고 가정하고, 비전공자 작가들이 흥미를 느낄 만한 목차를 5개 챕터로 구성해 줘.
    ```

---

*이 문서는 [Google Gemini CLI](https://github.com/google/gemini-cli) 저장소의 GEMINI.md 템플릿을 기반으로 작성되었습니다.*

*이 프로젝트는 Google의 공식 제품이 아닙니다.*