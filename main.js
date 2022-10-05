function punto3(){
    const num = 25
    let nume  
    while(nume !== num){
        nume = Number(prompt("Ingrese numero sorpresa"))
        if(nume < num)
            alert("El numero es pequeño")
        else if(nume > num)
            alert("El numero es grande")
    }
    alert("Felicitaciones")
}
function punto4(){
    let num = prompt("Ingrese numero")
    let it = 0  
    for(let i=1;i<=num;i++){
        if(num%i === 0)
            it++
        if(it>=3)
            break
    }
    if(it<=2)
        alert("El numero es primo")
    else
        alert("El numero no es primo")
}
function punto5(){
    const int = 1200
    let array = []
    for(let i=1;i<=int;i++){
        if(int%i === 0)
            array.push(i)
    }
    alert(array)
}   
punto5()