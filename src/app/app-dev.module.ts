import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import {
  HttpClientInMemoryWebApiModule,
  InMemoryDbService
} from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { TinkerService } from './services/tinker.service';
import { FakeBackendProvider } from './services/fake-backend-interceptor.service';

@NgModule({
  imports: [
    AppModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 0,
      passThruUnknownUrl: true
    })
  ],
  providers: [
    FakeBackendProvider,
    TinkerService,
    {
      provide: InMemoryDataService,
      useExisting: InMemoryDbService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppDevModule {
}
