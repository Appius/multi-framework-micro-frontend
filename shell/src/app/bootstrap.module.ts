import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action, ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';


export function sharedReducer(state = { userName: 'John'}, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('shared', sharedReducer),
    EffectsModule.forFeature([]),
    RouterModule.forChild([])
  ]
})
export class BootstrapModule {
}
