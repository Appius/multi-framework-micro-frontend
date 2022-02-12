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

export function sharedReducer(state = { userName: 'John'}, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<{}, Action>>(
  'Root reducers token',
  {
    factory: () => ({
      shared: sharedReducer
    }),
  },
);


@NgModule({
  imports: [
    BrowserModule,

    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
        name: 'Store Dev Tools',
        maxAge: 50
    }),

    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { matcher: startsWith('mfe1'), component: WrapperComponent, data: { importName: 'mfe1', elementName: 'mfe1-element' } },
    { matcher: startsWith('mfe2'), component: WrapperComponent, data: { importName: 'mfe2', elementName: 'mfe2-element' } },
    { matcher: startsWith('mfe3'), component: WrapperComponent, data: { importName: 'mfe3', elementName: 'mfe3-element' } },
    { matcher: startsWith('mfe4'), component: WrapperComponent, data: { importName: 'mfe4', elementName: 'mfe4-element' } },
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
