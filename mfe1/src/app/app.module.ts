import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { endsWith } from './router.utils';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { Action, ActionReducerMap, StoreModule } from '@ngrx/store';

export function someStateReducer(state = { foo: 'bar' }, action: Action) {
  return state;
}

export const mfe1StateReducer: ActionReducerMap<{}> = {
    someState: someStateReducer
};

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { matcher: endsWith('a'), component: AComponent},
      { matcher: endsWith('b'), component: BComponent},
    ]),
    StoreModule.forFeature('mfe1', mfe1StateReducer)
  ],
  declarations: [
    AComponent,
    BComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('mfe1-element', ce);

    // <mfe1-element></mfe1-element>
  }

}
