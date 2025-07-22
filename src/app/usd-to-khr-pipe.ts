import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToKhr',
  standalone: true // Add this if you're using standalone components
})
export class UsdToKhrPipe implements PipeTransform {
  // Default exchange rate (1 USD = 4100 KHR)
  private exchangeRate: number = 4100;

  transform(value: number, ...args: any[]): string {
    if (isNaN(value)) return '';

    // Calculate Riel value
    const rielValue = value * this.exchangeRate;
    
    // Format with comma as thousand separator
    return new Intl.NumberFormat('km-KH', {
      style: 'decimal',
      maximumFractionDigits: 0
    }).format(rielValue) + ' ៛';
  }
}