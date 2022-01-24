import { Component, VERSION } from '@angular/core';
export interface DataOfFootballers {
  playerName: string;
  playerCountry: string;
  playerClub: string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends CdkTableExporterModule {
  name = 'Angular ' + VERSION.major;

  title = 'export-table-data-to-any-format';
  dataSource: DataOfFootballers[] = [
    {
      playerName: 'Cristiano Ronaldo',
      playerCountry: 'Pourtgal',
      playerClub: 'Juventus',
    },
    {
      playerName: 'Lionel Messi',
      playerCountry: 'Argentina',
      playerClub: 'Barcelona',
    },
    {
      playerName: 'Neymar Junior',
      playerCountry: 'Brazil',
      playerClub: 'PSG',
    },
    {
      playerName: 'Tonni Kroos',
      playerCountry: 'Germany',
      playerClub: 'Real Madrid',
    },
    {
      playerName: 'Paul Pogba',
      playerCountry: 'France',
      playerClub: 'Manchester United',
    },
  ];
  displayedColumns: string[] = ['playerName', 'playerCountry', 'playerClub'];
}
