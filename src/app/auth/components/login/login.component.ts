import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Apollo } from 'apollo-angular'
import { LOGIN } from '../../graphql/mutatuon'
import { AuthService } from '../../auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false
  error: string = ''
  form: FormGroup

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  constructor(
    private apollo: Apollo,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup<any>({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    if (this.form.invalid) return
    this.loading = true

    this.apollo.mutate<any>({
      mutation: LOGIN,
      variables: {
        signInInput: { email: this.form.value.email, password: this.form.value.password }
      }
    }).subscribe(({data}) => {
      if (data?.signIn) this.authService.setToken(data.signIn)
      this.form.reset()
      this.loading = false
    }, (error) => {
      this.error = error.message
      this.form.reset()
      this.loading = false
    })
  }

  toPasswordRecovery() {
    this.authService.logout()
  }
}
