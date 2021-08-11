import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export type AlertType = 'success' | 'warning' | 'danger'

export  interface Alert {
    type: AlertType
    text: string
}

@Injectable()
export class AlertService {
    public alert$ = new Subject<Alert>()
}