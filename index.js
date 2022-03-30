class Noticia{
  constructor(titulo,data,resumo,texto){
    this.titulo = titulo;
    this.data = data;
    this.resumo = resumo;
    this.texto = texto;
  }
  mostrarNoticia(){
  return this.titulo+ "\n"+this.data+"\n" + this.resumo+ "\n"+ "\n"+ this.texto
}
  
}



let noticia = new Noticia('A verdadeira cor de Barney!','23.03.2022','Cientistas descobrem a verdadeira cor do Dinossauro Barney','Depois de milhares de anos estudando e pesquisando Cientistas da faculdade de Harvard descobriram que realmente a cor verdadeira do Dinossauro que divertiu crianças ao mundo é ROSA!')

console.log(noticia.mostrarNoticia())