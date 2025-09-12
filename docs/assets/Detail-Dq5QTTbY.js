import{a as n,j as t}from"./vendor-react-B-CooEwe.js";import{a as p}from"./vendor-react-redux-BzmVG37m.js";import{s as m}from"./selector-CzoOXTVI.js";import{F as d}from"./FavoriteButton-BLWesYrM.js";import{d as i}from"./vendor-styled-components-B4TNaiRj.js";import{b as c}from"./vendor-react-router-BEqaQcTU.js";import"./vendor-cookie-BX9QSSmL.js";import"./vendor-use-sync-external-store-kNwEBF0s.js";import"./vendor-reselect-CiXCCDx7.js";import"./index-DxUjyv1S.js";import"./vendor-react-dom-FMfG9m7v.js";import"./vendor-scheduler-SPyfQU6S.js";import"./vendor-@reduxjs-ZEJhpANJ.js";import"./vendor-redux-BXkGT1VS.js";import"./vendor-immer-DqxjFn0G.js";import"./vendor-redux-thunk-ClJT1hhx.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";const l=i.div`
  width: 250px;
  height: 250px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: ${e=>e.$flipped?"rotateY(180deg)":"rotateY(0deg)"};
`,x=i.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
`,h=i.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  transform: rotateY(180deg);
`;function f({front:e,back:r}){const[o,s]=n.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsxs(l,{$flipped:o,children:[t.jsx(x,{src:e}),t.jsx(h,{src:r})]}),t.jsx("button",{onClick:()=>s(a=>!a),children:"뒤집기"})]})}function D(){const{pokemonId:e}=c(),r=p(m(Number(e)));return t.jsx("div",{className:"min-h-screen flex justify-center items-center px-4 py-4",children:t.jsxs("div",{className:"bg-white drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)] transition-all duration-300 rounded-xl px-10 py-8 max-w-md w-full text-center hover:translate-y-[-4px] hover:shadow-[0_0_20px_5px_rgba(192,192,192,0.5),_0_0_35px_12px_rgba(255,255,255,0.7)]",children:[t.jsxs("div",{className:"text-3xl font-bold mb-7",children:[r.name,t.jsx(d,{pokemonId:Number(e)})]}),t.jsx("div",{className:"whitespace-pre-wrap text-center",children:r.description}),t.jsx(f,{front:r.front,back:r.back})]})})}export{D as default};
