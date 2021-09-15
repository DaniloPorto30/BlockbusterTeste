import { FilmesService } from './../filmes.service';
import { Component, OnInit } from '@angular/core';
import { FilmeModel } from '../filmes/filme.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 filme: FilmeModel = new FilmeModel();
  filmes: Array<any> = new Array();

  constructor(public filmesService: FilmesService) { }

  ngOnInit() {
    this.listarFilmes();
  }

   listarFilmes(){
this.filmesService.listarFilmes().subscribe(filmes =>{
  this.filmes = filmes;
}, err =>{
  console.log("Erro ao listar Filmes", err);
})
  }

}

