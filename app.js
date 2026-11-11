let data=[];
fetch("rebates.json").then(r=>r.json()).then(j=>{data=j;render(j);});
function render(list){const b=document.getElementById("brands");b.innerHTML="";
list.forEach(m=>{const g=document.createElement("div");g.className="group";g.innerHTML="<b>"+m.manufacturer+"</b>";
m.rebates.forEach(r=>{const bt=document.createElement("button");bt.className="rebate";bt.textContent=r.title;bt.onclick=()=>document.getElementById("rebate-image").src=r.page;g.appendChild(bt);});
b.appendChild(g);});
}
document.addEventListener("input",e=>{if(e.target.id==="search"){const t=e.target.value.toLowerCase();render(data.filter(x=>x.manufacturer.toLowerCase().includes(t)));}});
function printCurrent(){const s=document.getElementById("rebate-image").src;if(!s)return;const w=window.open("");w.document.write("<img src='"+s+"' style='width:100%'>");w.print();w.close();}