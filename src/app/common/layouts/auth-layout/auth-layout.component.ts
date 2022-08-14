import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  copyright: string = `© ${new Date().getFullYear()} Igoshev Software`

  constructor(
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    this.translate.use(lang)
  }
}
