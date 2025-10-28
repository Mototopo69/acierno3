import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Studente } from '../studente/studente';
import { StudentiService } from '../services/studenti-service';
import { DettaglioStudente } from '../dettaglio-studente/dettaglio-studente';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  imports: [CommonModule,Studente,DettaglioStudente,RouterLink],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {
studenti: any[] = [];
constructor(private studentiService: StudentiService) {}
ngOnInit() {
this.studenti = this.studentiService.getStudenti();
}
}
