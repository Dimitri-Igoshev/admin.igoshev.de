import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loading: boolean = false
  emailFormControl: any
  title = 'AUTH.TITLE.SIGN_IN'

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    this.translate.use(lang)
  }
}
