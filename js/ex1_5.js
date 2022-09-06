function fecharAssento(){
const jantar = Number(prompt("Valor do jantar R$"))
const garcom = jantar * 0.10
const total = jantar + garcom
alert("Valor Total: "+total);
// Uso crase para fazer interpolação. Segue exempo abaixo
alert(`Taxa Garçon: ${garcom} - Total do Jantar: ${total}`);
}