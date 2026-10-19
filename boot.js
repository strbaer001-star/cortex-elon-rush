// Keep startup failures separate from graphics compatibility.
(function(){
 const status=document.getElementById('loadstatus'),button=document.getElementById('startRun');
 window.cortexBootError=function(error,stage){console.error('CORTEX RUSH startup:',stage,error);status.textContent='GAME LOAD ERROR · '+(stage||'startup')+' · '+(error?.message||'Please retry');button.disabled=false;button.innerHTML='RELOAD GAME ↗';button.onclick=function(){location.reload()};};
 import('./game.js?v=5').catch(function(error){window.cortexBootError(error,'game files');});
})();
