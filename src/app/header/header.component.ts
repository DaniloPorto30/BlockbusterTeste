import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

filmebotton = 'https://w7.pngwing.com/pngs/730/275/png-transparent-black-and-white-camera-film-art-filmstrip-cinema-graphy-film-reel-angle-monochrome-photographic-film.png';
  banner = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/1200px-Blockbuster_logo.svg.png';
  constructor() { }

  ngOnInit(): void {
  }

}
