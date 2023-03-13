let tarea1= "1. Sacar al perro"
let estado1 = true

let tarea2= "2. Limpiar la loza"
let estado2 = true

let tarea3= "3. Tender la cama"
let estado3 =true

let tarea4= "4. hacer la cena"
let estado4 = true

let tarea5= "5. cortarme las uñas"
let estado5 =true

let tarea6= "6. Darle comida al gato"
let estado6 = true

let tarea7= "7. cortarme el pelo"
let estado7 =true

let tarea8= "8. hacer fundamentos"
let estado8 = true

let tarea9= "9. barrer la casa"
let estado9 =true

let tarea10= "10. comer"
let estado10 =true

const tareas = document.getElementById("yes")
if(estado1){
tareas.innerHTML +=
`<div id="tarea1" class="incompleto">
<p>${tarea1}</p>
</div>`
} else{ (estado1===false)
    `<div id="tarea1" class="incompleto">
<p>${tarea1}</p>
</div>`

}
if(estado2){
tareas.innerHTML +=
`<div id="tarea1" class="completo">
<p>${tarea2}</p>
</div>`
} else{`<div id="tarea1" class="incompleto">
<p>${tarea2}</p>
</div>`

}
if(estado3){
tareas.innerHTML +=
`<div id="tarea1" >
<p>${tarea3}</p>
</div>`
} else{`<div id="incompleto">
<p>${tarea3}</p>
</div>`

}
if(estado4){
tareas.innerHTML +=
`<div id="tarea1" class="incompleto">
<p>${tarea4}</p>
</div>`
} else{`<div id="tarea1" class="incompleto">
<p>${tarea4}</p>
</div>`

}
if(estado5){
tareas.innerHTML +=
`<div id="tarea1" class="incompleto">
<p>${tarea5}</p>
</div>`
} else{`<div id="tarea1" class="incompleto">
<p>${tarea5}</p>
</div>`

}
if(estado6){
tareas.innerHTML +=
`<div id="tarea1" class="incompleto">
<p>${tarea6}</p>
</div>`
} else{
    `<div id="tarea1" class="incompleto">
<p>${tarea6}</p>
</div>`
}
if(estado7){
tareas.innerHTML +=
`<div id="tarea1" class="incompleto">
<p>${tarea7}</p>
</div>`
} else{
    `<div id="tarea1" class="incompleto">
<p>${tarea7}</p>
</div>`

}
if(estado8){
tareas.innerHTML +=
`<div id="tarea1" class="incompleto">
<p>${tarea8}</p>
</div>`
} else{`<div id="incompleto">
<p>${tarea8}</p>
</div>;`

}
if(estado9){
tareas.innerHTML +=
`<div id="tarea1" class="incompleto">
<p>${tarea9}</p>
</div>`
} else{`<div id="tarea1" class="incompleto">
<p>${tarea9}</p>
</div>`

}
if(estado10){
tareas.innerHTML +=
`<div id="tarea1" class="incompleto">
<p>${tarea10}</p>
</div>`
} else{ `<div id="tarea1" class="incompleto">
<p>${tarea10}</p>
</div>`

}



