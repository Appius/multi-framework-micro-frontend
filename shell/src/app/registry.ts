import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule, NgModuleFactory } from '@angular/core';

export const registry = {
    mfe1: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './bootstrap'
    }).then(m => m.BootstrapModule)
};
