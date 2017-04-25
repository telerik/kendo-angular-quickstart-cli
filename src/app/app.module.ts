import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Import the ButtonsModule...
import { ButtonsModule } from '@progress/kendo-angular-buttons';

/* Loading CLDR data
 * http://www.telerik.com/kendo-angular-ui/components/internationalization/

import { load } from '@progress/kendo-angular-intl';

import * as likelySubtags from 'cldr-data/supplemental/likelySubtags.json';
import * as weekData from 'cldr-data/supplemental/weekData.json';
import * as currencyData from 'cldr-data/supplemental/currencyData.json';
import * as numbers from 'cldr-data/main/de/numbers.json';
import * as timeZoneNames from 'cldr-data/main/de/timeZoneNames.json';
import * as calendar from 'cldr-data/main/de/ca-gregorian.json';
import * as currencies from 'cldr-data/main/de/currencies.json';
import * as dateFields from 'cldr-data/main/de/dateFields.json';

load(
    likelySubtags,
    weekData,
    currencyData,
    numbers,
    currencies,
    calendar,
    dateFields,
    timeZoneNames
);

*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // ... and register it
    ButtonsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
