import{a as s,j as a}from"./vendor-react-B-CooEwe.js";import{d as i}from"./vendor-styled-components-B4TNaiRj.js";import{F as n}from"./FavoriteButton-BLWesYrM.js";import{u as x}from"./vendor-react-router-BEqaQcTU.js";const d=i.section`
  width: 270px;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  background: white;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 15px 3px rgba(192, 192, 192, 0.5), 0 0 25px 8px rgba(255, 255, 255, 0.7);
  }

  img {
    width: 180px;
  }
`,g=s.memo(({pokemon:t})=>{console.log("card",t.id);const[e,o]=s.useState(!0),r=x();return a.jsxs(d,{onClick:()=>r(`/detail/${t.id}`),children:[e?a.jsx("div",{className:"w-[120px] h-[120px] leading-[120px] text-center",children:"로딩중..."}):null,a.jsx("img",{onLoad:()=>o(!1),src:t.front,style:{display:e?"none":"block"}}),a.jsxs("div",{className:"text-[20px] font-bold text-center",children:[t.name,a.jsx(n,{pokemonId:t.id})]})]})});export{g as C};
