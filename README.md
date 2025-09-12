# Pokédex Project

포켓몬 API([PokeAPI](https://pokeapi.co/))를 활용하여 리액트로 만든 **포켓몬 도감 프로젝트**입니다.  
1세대 151마리 포켓몬의 이름, 설명, 이미지(앞/뒤)를 불러옵니다.

---

## 🚀 배포

[https://pokedex-project-steel.vercel.app/](https://pokedex-project-steel.vercel.app/)

---

## 🔍 주요 기능

- 한국어 포켓몬 이름 및 설명 출력
- 앞/뒤 이미지 뒤집기 (FlipCard)
- 포켓몬 리스트 카드화
- **검색 기능** (한글 지원)
- **찜하기(♥)** 기능 및 찜 목록 페이지 제공
- **반응형 레이아웃** (데스크톱/모바일)
- 카드 호버 시 은은하게 반짝이는 효과

---

## 📸 스크린샷
![포켓몬도감](https://github.com/user-attachments/assets/7d4375d8-f594-4734-be36-5acccde2fdd2)


---

## 📁 프로젝트 구조

```
src
├── App.jsx
├── App.scss
├── index.css
├── main.jsx
├── component
│   ├── Card.jsx
│   ├── FavoriteButton.jsx
│   └── FlipCard.jsx
├── pages
│   ├── Detail.jsx
│   ├── Favorite.jsx
│   ├── Main.jsx
│   └── Search.jsx
└── RTK
    ├── selector.js
    ├── slice.js
    ├── store.js
    └── thunk.js
```

---

## ⚙️ 사용 기술

- **React** (with Vite)
- **Redux Toolkit** (RTK)
- **React Router DOM**
- **tailwindcss** (v4)
- **styled-components**
- **react-icons**
- **korean-regexp**
- **PokeAPI**

---

## 🧪 실행 방법

```bash
npm install
npm run dev
```
