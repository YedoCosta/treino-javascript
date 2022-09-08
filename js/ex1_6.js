function calcularHora() {
    const minutos = Number(prompt("Quantos minutos? "))
    const horatot = minutos / 60
    // const total = jantar + garcom
    const hora = ~~(minutos / 60);
    const min = minutos % 60;
    //  alert("Total de horas: "+horatot);
    if (hora != 0 && min != 0)
        alert("\n\n" + hora + " Horas e " + min + " minutos de viagem");
    else if (hora != 0)
        alert("\n\n" + hora + " Horas de viagem");
    else if (min != 0)
        alert("\n\n" + min + " minutos de viagem");

    // Uso crase para fazer interpolação. Segue exempo abaixo

}