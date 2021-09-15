import { FilmesService } from './../filmes.service';
import { Component, OnInit } from '@angular/core';
import { FilmeModel } from './filme.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  nome: any ='';
  banner = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/1200px-Blockbuster_logo.svg.png';

  filme: FilmeModel = new FilmeModel();
  filmes: Array<any> = new Array();

  constructor(public filmesService: FilmesService) { }

  ngOnInit() {
  
  }

  editar(id:number){
    this.filmesService.editarFilme(id, this.filme).subscribe(filme =>{
      this.filme = new FilmeModel();
      this.listarFilmes();
    }, err => { 
      console.log("Erro ao Editar Filme", err)
    });
  }
  deletar(id:number){
    this.filmesService.deletarFilme(id).subscribe(filme =>{
      this.filme = new FilmeModel();
      this.listarFilmes();
    }, err => { 
      console.log("Erro ao Deletar Filme", err)
    });
  }
  cadastrar(){

    console.log(this.filme);
    this.filmesService.cadastrarFilme(this.filme).subscribe(filme =>{
      this.filme = new FilmeModel();
      Swal.fire(
        'Filme Cadastrado!',
       'Click para sair!',
        'success'
      )
      this.listarFilmes();
    }, err => { 
      console.log("Erro ao cadastrar Filmes", err)
    });
  }
   listarFilmes(){
this.filmesService.listarFilmes().subscribe(filmes =>{
  this.filmes = filmes;
}, err =>{
  console.log("Erro ao listar Filmes", err);
})
  }
  pesquisar(){
    this.listarFilmes();
      
    }

  }

