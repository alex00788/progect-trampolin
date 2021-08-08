import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/interfaces';
import {AuthService} from '../shared/components/services/auth.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup
  submitted = false
  message: string

  constructor(
      public auth: AuthService,
      private router: Router,
        private currentRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.currentRoute.queryParams.subscribe( (params: ParamMap) => {
      if ( params ['loginAgain']) {
        this.message = 'Введите данные'
      } else if (params['authFailed']) {
          this.message = 'сессия истекла введите данные заного'
      }
    })

  this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.minLength(8),
        Validators.required
      ]),
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.submitted = true
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth
        .login(user)
        .subscribe(
            () => {
               this.form.reset()
               this.router.navigate(['/admin', 'dashboard'])
               this.submitted = false
            }
           ,( e ) => {
              console.log( 'error in login', e );
                this.submitted = false
            }
        )
  }
}
