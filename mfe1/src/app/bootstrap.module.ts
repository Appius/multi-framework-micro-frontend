import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action, ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { endsWith } from './router.utils';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

export function someStateReducer(state = { foo: 'bar' }, action: Action) {
  return state;
}

export const mfe1StateReducer: ActionReducerMap<{}> = {
    someState: someStateReducer
};

@NgModule({
  declarations: [
    AComponent,
    BComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('mfe1', someStateReducer),
    EffectsModule.forFeature([]),

    RouterModule.forChild([
      { path: '', component: AppComponent },
      { matcher: endsWith('a'), component: AComponent},
      { matcher: endsWith('b'), component: BComponent},
    ]),
  ]
})
export class BootstrapModule {
}
