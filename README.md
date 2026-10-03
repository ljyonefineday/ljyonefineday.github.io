# Junyoung Lee · Portfolio

GitHub Pages로 올리는 정적 포트폴리오 사이트입니다. 빌드 도구 없이 HTML/CSS만으로 동작합니다.

## 폴더 구조

```
index.html            ← 모든 문구가 여기 있습니다 (✏️ 주석으로 섹션 표시)
assets/css/style.css  ← 디자인 (색상은 맨 위 :root 변수만 바꾸면 됨)
assets/js/main.js     ← 이메일 복사 버튼
assets/img/           ← 프로필 사진, 파비콘, 공유 썸네일
.nojekyll             ← GitHub Pages가 파일을 그대로 서비스하도록 하는 빈 파일 (지우지 마세요)
```

## 문구 수정하기

1. `index.html` 을 VS Code 같은 편집기로 엽니다.
2. `✏️` 로 검색하면 섹션별 위치가 나옵니다 (HERO, FOCUS, PHYSICAL AI, AGENT LAB, CAREER, RESEARCH, EDUCATION, CONTACT).
3. 태그(`<...>`) 사이의 글자만 바꾸면 됩니다.
4. 저장 후 `index.html` 을 브라우저로 열어 바로 확인할 수 있습니다.

자주 쓰는 표기:

| 하고 싶은 것 | 쓰는 법 |
|---|---|
| 줄바꿈 | `<br>` |
| 노란 형광펜 강조 | `<span class="mark">강조할 문장</span>` |
| 굵게 | `<b>굵게</b>` |
| `&` 기호 | `&amp;` |
| 상태 배지 | `pill live`(초록) · `pill wip`(노랑) · `pill done`(회색) |

카드나 경력 항목을 추가할 때는 비슷한 블록 하나를 통째로 복사해서 붙여넣고 글자만 바꾸세요.

### 프로필 사진 넣기
`assets/img/profile.jpg` (세로 4:5 비율 권장) 를 넣고, `index.html` 에서 `📷` 로 검색해 주석을 해제합니다.

## GitHub Pages로 올리기

**방법 A. 주소를 `https://ljyonefineday.github.io` 로 쓰기 (추천)**
1. GitHub에서 `ljyonefineday.github.io` 라는 이름으로 새 Public 저장소를 만듭니다.
2. 이 폴더 안의 파일을 전부 업로드합니다 (`Add file → Upload files`, 또는 git push).
3. 저장소 `Settings → Pages` 에서 Source를 `Deploy from a branch`, Branch를 `main` / `(root)` 로 저장합니다.
4. 1~2분 뒤 `https://ljyonefineday.github.io` 에서 확인합니다.

**방법 B. 다른 이름의 저장소 (예: `portfolio`)**
위와 같고, 주소가 `https://ljyonefineday.github.io/portfolio/` 가 됩니다. 모든 경로가 상대 경로라 그대로 동작합니다.

**git으로 올리는 경우**
```bash
cd 이_폴더
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ljyonefineday/ljyonefineday.github.io.git
git push -u origin main
```

수정 후에는 `git add . && git commit -m "문구 수정" && git push` 하면 1~2분 내 반영됩니다.

### 개인 도메인 (선택)
도메인이 있다면 `Settings → Pages → Custom domain` 에 입력하고, DNS에 CNAME을 `ljyonefineday.github.io` 로 설정합니다.

## 공개 전 체크리스트
- [ ] 회사 내부 조직명·과제 내용 공개 가능 여부 확인
- [ ] 경력 연도 (반도체연구소 복귀, Digital Twin 센터 이동 시점)
- [ ] FlexSim MCP 서버 카드 공개 여부
- [ ] 프로필 사진, 공유 썸네일(og.png)
