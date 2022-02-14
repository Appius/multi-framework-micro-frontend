import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';
import { Action, ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BootstrapModule } from './bootstrap.module';
import { registry } from './registry';

@NgModule({
  imports: [
    BrowserModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ name: 'shell' }),

    BootstrapModule,

    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { matcher: startsWith('mfe1'), loadChildren: registry.mfe1 }
    ], { relativeLinkResolution: 'legacy' })
  ],
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
