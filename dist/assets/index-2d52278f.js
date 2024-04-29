(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m=document.querySelector(".listPets");function f(){let n="http://localhost:3000/petsUser";console.log(n),fetch(n).then(t=>t.json()).then(t=>{const r=t.map(s=>(console.log(s),`
  <div class="photo-card">
  <div class="photo-card2">
 
  <div class="stats">
    <p class="stats-item">
    імя тваринки:<br />   
      ${s.namePets}   
    </p>
    <p class="stats-item">
    власник тваринки:  <br />  
      ${s.owner} 
    </p>
    <p class="stats-item">
    опис тваринки:<br />
      ${s.director} 
    </p>
    <p class="stats-item">
    домашньому улюбленцю:<br />
      ${2024-s.year} роки
    </p>
  </div>
  </div>
  <p class="stats-item">
  id:  
    ${s.id}   
  </p>
</div>
      `));m.innerHTML=r}).catch(t=>console.error(t))}f();console.log("123");const y=document.querySelector(".button-addopen-modal"),d=document.querySelector(".titleinput"),u=document.querySelector(".genreinput"),a=document.querySelector(".directorinput"),p=document.querySelector(".yearinput"),v=document.querySelector(".btnADD"),l=document.querySelector(".modal-window"),h=document.querySelector(".btn-close");h.addEventListener("click",()=>{l.classList.add("true")});y.addEventListener("click",()=>{l.classList.remove("true")});function b(){v.addEventListener("click",()=>{l.classList.add("true");const n={namePets:d.value,owner:u.value,director:a.value,year:p.value};console.log(123),console.log(n);function t(r){fetch("http://localhost:3000/petsUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})}console.log(321),d.value==0||u.value==0||a.value==0||p.value==0?(alert("Введіть коткне значення або заповніть поля"),console.log(333)):(t(n),console.log(22))})}b();const D=document.querySelector(".btn-close2"),L=document.querySelector(".btnADD2"),g=document.querySelector(".button-delete"),S=document.querySelector(".inputdel"),i=document.querySelector(".modal-window2");D.addEventListener("click",()=>{i.classList.add("true")});g.addEventListener("click",()=>{i.classList.remove("true")});function q(){L.addEventListener("click",()=>{i.classList.add("true");const n=S.value;function t(r){fetch(`http://localhost:3000/petsUser/${r}`,{method:"DELETE"})}t(n)})}q();
