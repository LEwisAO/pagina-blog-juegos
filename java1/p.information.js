const yo = document.querySelector('.imagen-yo');
const informacion = document.querySelector('.p-informacion');

//console.log(menu)
//console.log(hamburguesa)

yo.addEventListener('click', ()=>{
    informacion.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(informacion.classList.contains('spread') && e.target !=informacion && e.target != yo){
        informacion.classList.toggle("spread")
         }
})   