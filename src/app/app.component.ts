import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { QuoteService, Quote } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'rxjs-exercise';

  constructor(private readonly quoteService: QuoteService) { }

  onRefresh() {
    console.log('clicked');
  }

  ngOnInit(): void {
    forkJoin([this.quoteService.getQuote(), this.quoteService.getQuote(), this.quoteService.getQuote()])
      .subscribe({
        next: (quotes: Quote[]) => {
          console.log(quotes);
        }
      });
  }
}
