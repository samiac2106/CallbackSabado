function matricularPadawan(nombre,edad,planeta,estatura,clasificar){
    let padaxan={
        nombre:nombre,
        edad:edad,
        planeta:planeta,
        estatura:estatura
    }
   
    clasificar(padaxan)

}

matricularPadawan("Sandra",41, "tierra","1.55",function(padaxan){     
    if (padaxan.edad<15){
        console.log("Manejo de la fuerza")

    }else{
        console.log("Manejo de la luz")
    }
})



    
