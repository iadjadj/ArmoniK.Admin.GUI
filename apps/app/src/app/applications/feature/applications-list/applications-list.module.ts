import { AsyncPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { GrpcPagerService } from '@armonik.admin.gui/shared/data-access';
import { GrpcApplicationsService } from '@armonik.admin.gui/applications/data-access';
import { AutoRefreshDropdownComponent } from '@armonik.admin.gui/shared/feature';
import {
  ClrDatagridModule,
  ClrDropdownModule,
  ClrIconModule,
} from '@clr/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ApplicationsListRoutingModule } from './applications-list-routing.module';
import { ApplicationsListComponent } from './applications-list.page';
import { IdFilterComponent } from '../../../shared/feature/filters';
import { ActionBarComponent } from '../../../shared/feature';

@NgModule({
  declarations: [ApplicationsListComponent],
  imports: [
    AutoRefreshDropdownComponent,
    ClrIconModule,
    ClrDropdownModule,
    ClrDatagridModule,
    TranslateModule,
    ActionBarComponent,
    ApplicationsListRoutingModule,
    NgClass,
    AsyncPipe,
    DatePipe,
    NgFor,
    NgIf,
    IdFilterComponent,
  ],
  providers: [GrpcApplicationsService, GrpcPagerService],
})
export class ApplicationsListModule {}
