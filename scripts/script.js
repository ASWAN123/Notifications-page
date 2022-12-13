document.querySelector(".read").addEventListener("click" , ()=>{
    const data = document.querySelectorAll(".notification") ;
    var elements = Array.prototype.slice.call(data).slice( 0 , 3) ;
    elements.forEach(element => {
        element.classList.add("active")
    });
    document.querySelector(".number_read").innerHTML = 0;
})