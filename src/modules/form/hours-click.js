export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available")
    
    hours.forEach(( avaiable ) => {
        avaiable.addEventListener("click", (selected) => {
            
            //Removendo a classe hour-selected de todas as li nao selecionandas
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            // Adiciona a classe na li clicada
            selected.target.classList.add("hour-selected")
        })
    })
}