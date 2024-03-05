# 실습 완료 후 템플릿 (Vercel 배포)
https://ipad-relights-projects.vercel.app/

---

# 애플패드 반응형 웹사이트 (데스크탑 모드)

## 개요
    애플패드 상품 설명을 위한 웹사이트를 만들어 보며 실습
## 주요 실습내용
    * Assets - 에셋 (이미지, 영상 등 기본 제공되는 파일)의 개념
    * 조금 더 JS를 활용하여 CSS 를 제어
      - li tag 별로 transitionDelay를 동적으로 할당
    * css 심화과정 실습
      - 스크롤 내릴때 해당영역은 틀 고정 - sticky
      - 해당 요소의 뒤에 있는 요소들을 블러 처리 - backdrop-filter
      - 해당 영역을 드래그 및 복사 붙여넣기가 안되도록 - user-select
      - Icon 애니매이션 처리 - @keyframes, animation 속성
    * figure 태그에 대한 실습 - 이미지와 설명을 같이 담아주고 해당 컨텐츠를 독립화시킴
    * css에서 변수를 설정하여 사용 (전역으로 두고 같은 값을 일괄로 부여)
    * 스프라이트 기법 - Icon 이미지를 여러 개를 묶어서 한 개 이미지 파일을 만들어 애니메이션 처리
    * Video 태그에 대한 실습 - 동영상 재생 태그 (유튜브 API랑 비슷한 듯)
    * Mock 활용하여 HTML TAG 생성 - Back-End 통하지 않고 만들어진 Json 데이터
    * Comment tagged templates VS 플러그인 사용 - VSCode에서 하이라이팅 되도록
    * Template Literal 방식에 대한 개념 - JS에서 백틱으로 html을 구현
    * A TAG로 각주효과를 사용 (자체 Page 내에서 이동하는 기능?!)
    * Vercel을 이용하여 웹페이지 배포
## 보완 및 개선필요 사항
    * 데이터 불러오는 내용은 없음. (DB, Back-End 사용X)
    * 동일한 구조의 css가 많아 타이핑이 많고 오타가 많이 발생 됨.
    * css에 선언된 속성들이 많아서 가독성이 너무 떨어짐.
## 관련링크
    * 리셋 CSS : https://www.jsdelivr.com/package/npm/reset-css
    * 구글 폰트 : https://fonts.google.com/
    * Figure mdn : https://developer.mozilla.org/ko/docs/Web/HTML/Element/figure
    * Animation mdn : https://developer.mozilla.org/ko/docs/Web/CSS/animation
    * Video mdn : https://developer.mozilla.org/ko/docs/Web/HTML/Element/video
    * Vercel 웹 배포 : https://vercel.com/

# 애플패드 반응형 웹사이트 (태블릿, 모바일 모드)

## 개요
    애플패드 상품 설명 웹 사이트를 반응형 웹으로 태블릿 모드, 모바일 모드일때로 변형
## 주요 실습내용
    * 기존에 완성된 웹 사이트를 태블릿, 모바일 모드일 때 스타일 작업을 다시 진행
    * 반응형 웹 페이지 @media 사용
## 보완 및 개선필요 사항
    * 변형 된 웹페이지도 스타일 재작업 위주로 하여서 css쪽에 분량이 너무 방대하게 됨.
