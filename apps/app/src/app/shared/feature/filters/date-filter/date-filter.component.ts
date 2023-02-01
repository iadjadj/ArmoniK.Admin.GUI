import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule, ClrDatagridFilterInterface } from '@clr/angular';

@Component({
  standalone: true,
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss'],
  imports: [ClarityModule, FormsModule, CommonModule],
})
export class DateFilterComponent implements ClrDatagridFilterInterface<string> {
  @Output() changes = new EventEmitter<never>();

  @Input() name = '';
  @Input() beforeDate: Date | null = null;
  @Input() afterDate: Date | null = null;

  get property(): string {
    return this.name + 'At';
  }

  get value(): { before: number | null; after: number | null } {
    return {
      before: this.beforeDate ? this.beforeDate.getTime() : null,
      after: this.afterDate ? this.afterDate.getTime() : null,
    };
  }

  onDateChange() {
    this.changes.emit();
  }

  clear() {
    this.beforeDate = null;
    this.afterDate = null;
    this.changes.emit();
  }

  reset() {
    this.beforeDate = null;
    this.afterDate = null;
  }

  /**
   * Check if the filter is active
   */
  isActive(): boolean {
    return !!this.beforeDate || !!this.afterDate;
  }

  /**
   * Required by the interface
   */
  accepts(): boolean {
    return true;
  }
}
