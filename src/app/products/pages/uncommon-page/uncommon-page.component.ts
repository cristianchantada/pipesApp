import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

    //i18n Select
    public name: string = 'Cristian';
    public gender: 'male' | 'female' = 'male';
    public invitationMap = {
        male: 'invitarlo',
        female: 'invitarla'
    }

    changeClient():void {
        this.name = 'Paula';
        this.gender = 'female';
    }

    // i18nPlural
    public clients: string[] = ['María', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];

    public clientsMap = {
        '=0': 'no tenemos ningún cliente esperando',
        '=1': 'tenemos un cliente esperando',
        '=2': 'tenemos 2 personas esperando',
        'other': 'tenemos # clientes esperando',
    }

    deleteClient(): void {
        this.clients.shift();
    }

    // KeyValue Pipe

    public person = {
        name: 'Cristian',
        age: 36,
        address: 'Chantada, Lugo',
    }

    // Async Pipe
    public myObservableTimer = interval(2000).pipe(
        tap(value => console.log('tap:', value))
    );

    public promiseValue: Promise<string> = new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve('Tenemos data en la promesa');
        console.log('Tenemos data en la promesa');

        } , 3500)
    });


}
