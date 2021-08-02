import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {FbAuthRespons, User} from '../interfaces';

@Injectable()
export class AuthService {
    public error$: Subject<string> = new Subject<string>()
    constructor(private http: HttpClient) {
    }

    get token(): string {
        const expDate = new Date (localStorage.getItem('fb-token-exp'))
        if (new Date() > expDate) {
            this.logout()
            return null
        }
        return localStorage.getItem('fb-token')
    }

    login (user: User): Observable<any> {
        user.returnSecureToken = true

      return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apikey}`, user)
          .pipe(
              tap(this.setToken),
              catchError(this.handleError.bind(this))
          )
    }

    logout () {
        this.setToken(null)
    }

    isAutontif(): boolean {
        return !!this.token
    }

    private handleError(error: HttpErrorResponse) {
        console.log('etttooo error', error);
        const {message} = error.error.error
        switch (message) {
            case 'INVALID_EMAIL':
                this.error$.next('неверный email')
                break
            case 'INVALID_PASSWORD':
                this.error$.next('неверный пароль')
                break
            case 'EMAIL_NOT_FOUND':
                this.error$.next('Такого email нет')
                break
        }
        return throwError(error)

    }

    private setToken(response: FbAuthRespons | null) {
        if (response) {
            const expDate = new Date( new Date().getTime() )
            localStorage.setItem('fb-token', response.idToken)
            localStorage.setItem('fb-token-exp', expDate.toString())
        } else {
            localStorage.clear()
        }
    }
}
