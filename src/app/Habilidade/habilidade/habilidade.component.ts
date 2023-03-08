import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
@Component({
  selector: 'app-habilidade',
  templateUrl: './habilidade.component.html',
  styleUrls: ['./habilidade.component.css']
})
export class HabilidadeComponent {
      color: ThemePalette = 'primary';
      mode: ProgressBarMode = 'determinate';
      
}
