import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {
    transform(value: boolean): 'vuela' | 'no vuela' {
        console.log('Value = ', value );

        return value ? 'vuela': 'no vuela';
    }
}