import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { MatLegacySelect as MatSelect } from '@angular/material/legacy-select';

@Component({
  selector: 'app-stringhe',
  templateUrl: './stringhe.component.html',
  styleUrls: ['./stringhe.component.css']
})
export class StringheComponent {
  name = "Angular"

  protected banks: string[] = [
    'Bank A',
    'Bank B',
    'Bank C',
    // Add more banks as needed
  ];

  /** Control for the selected bank */
  public bankCtrl: FormControl = new FormControl(null);

  /** Control for the MatSelect filter keyword */
  public bankFilterCtrl: FormControl = new FormControl('');

  /** List of banks filtered by search keyword */
  public filteredBanks: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect!: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor() { }

  ngOnInit() {
    // Set initial selection
    this.bankCtrl.setValue(this.banks[0]);

    // Load the initial bank list
    this.filteredBanks.next(this.banks.slice());

    // Listen for search field value changes
    this.bankFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue() {
    this.filteredBanks
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: string, b: string) => {
          // Restituisci true se le due stringhe sono uguali, altrimenti false
          return a === b;
        };
      });
}

  protected filterBanks() {
    if (!this.banks) {
      return;
    }
    // Get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // Filter the banks
    this.filteredBanks.next(
      this.banks.filter(bank => bank.toLowerCase().indexOf(search) > -1)
    );
  }


}