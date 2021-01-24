import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline,PlusOutline,SyncOutline,FileExcelOutline,SettingOutline,
  MenuFoldOutline,DashboardOutline,FormOutline,RedoOutline,SaveOutline,MenuUnfoldOutline,
  SearchOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill,PlusOutline,SyncOutline,
  FileExcelOutline,SettingOutline,MenuFoldOutline,DashboardOutline,FormOutline,RedoOutline,
  SaveOutline,MenuUnfoldOutline,SearchOutline ];
// 还要在@NgModule 中imports :NzIconModule.forRoot(icons)
// 可以看出 PlusOutline 已经指定了样式是 outline 而不是 fill

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,NzIconModule.forRoot(icons)
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
