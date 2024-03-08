import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stringhe',
  templateUrl: './stringhe.component.html',
  styleUrls: ['./stringhe.component.css']
})
export class StringheComponent {
  name = "Angular"
  
  unfilteredDataToSearch: string[] = [
    "Atlanta Hawks - ATL(Atlanta)",
    "Boston Celtics - BOS(Boston)",
    "Brooklyn Nets - BKN(Brooklyn)",
    "Charlotte Hornets - CHA(Charlotte)",
    "Chicago Bulls - CHI(Chicago)",
    "Cleveland Cavaliers - CLE(Cleveland)",
    "Dallas Mavericks - DAL(Dallas)",
    "Denver Nuggets - DEN(Denver)",
    "Detroit Pistons - DET(Detroit)",
    "Golden State Warriors - GSW(Golden State)",
    "Houston Rockets - HOU(Houston)",
    "Indiana Pacers - IND(Indiana)",
    "Los Angeles Clippers - LAC(Los Angeles)",
    "Los Angeles Lakers - LAL(Los Angeles)",
    "Memphis Grizzlies - MEM(Memphis)",
    "Miami Heat - MIA(Miami)",
    "Milwaukee Bucks - MIL(Milwaukee)",
    "Minnesota Timberwolves - MIN(Minnesota)",
    "New Orleans Pelicans - NOP(New Orleans)",
    "New York Knicks - NYK(New York)",
    "Oklahoma City Thunder - OKC(Oklahoma City)",
    "Orlando Magic - ORL(Orlando)",
    "Philadelphia 76ers - PHI(Philadelphia)",
    "Phoenix Suns - PHX(Phoenix)",
    "Portland Trail Blazers - POR(Portland)",
    "Sacramento Kings - SAC(Sacramento)",
    "San Antonio Spurs - SAS(San Antonio)",
    "Toronto Raptors - TOR(Toronto)",
    "Utah Jazz - UTA(Utah)",
    "Washington Wizards - WAS(Washington)"
  ];
  filteredDataToSearch: string[] = [];

  public beComponentForm: FormGroup = new FormGroup({
    slct_cntrl: new FormControl("")
  });

  ngOnInit() {
    this.filteredDataToSearch = this.unfilteredDataToSearch;
  }

  lookup(e:any) {
    this.filteredDataToSearch = this.unfilteredDataToSearch
      .filter(
        i =>
          i.toString()
            .toLowerCase()
            .indexOf(e) > -1
      );
  }

  clean(t:any){
    t.value = '';
    this.lookup(t.value);
  }

}
