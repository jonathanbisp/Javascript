function Pessoa(){
    this.idade = 0
    setInterval(_=> {
        console.log(this.idade++);        
    }, 1000)
}
new Pessoa()