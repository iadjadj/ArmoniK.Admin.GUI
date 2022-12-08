import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrpcCoreModule } from '@ngx-grpc/core';
import { GrpcWebClientModule } from '@ngx-grpc/grpc-web-client';
import { LocaleProvider } from './providers';
import {
  ApiService,
  ErrorService,
  BrowserTitleService,
  FavoritesService,
  GrafanaService,
  GrpcPagerService,
  GrpcResultsService,
  GrpcSessionsService,
  GrpcTasksService,
  HistoryService,
  LanguageService,
  PagerService,
  SeqService,
  SettingsService,
} from './services';

/**
 * Contain the code that is specific to the application
 * and implements the Cross-Cutting Concerns of the application
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: {
        host: '',
      },
    }),
  ],
  providers: [
    BrowserTitleService,
    LocaleProvider,
    LanguageService,
    SettingsService,
    HistoryService,
    ApiService,
    ErrorService,
    FavoritesService,
    PagerService,
    SeqService,
    GrafanaService,
    GrpcResultsService,
    GrpcPagerService,
    GrpcSessionsService,
    GrpcTasksService,
    {
      provide: Storage,
      useFactory: () => localStorage,
    },
  ],
})
export class CoreModule {}
