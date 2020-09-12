import { InjectionToken } from '@angular/core';
import { Environment } from '@env/environment.model';

export const CONFIG_ENVIRONMENT_TOKEN: InjectionToken<Environment> = new InjectionToken<Environment>('CONFIG_ENVIRONMENT_TOKEN');
