(()=>{const e=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(d=>{window.deferredPropmt=d,e.classList.toggle("hiddle",!1)})),e.addEventListener("click",(async()=>{const d=window.deferredPropmt;d&&(d.prompt(),window.deferredPropmt=null,e.classList.toggle("hidden",!0))})),window.addEventListener("appinstalled",(e=>{window.deferredPropmt=null}))})();