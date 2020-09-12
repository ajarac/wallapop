import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { CONFIG_ENVIRONMENT_TOKEN } from '@core/config/config.environment';
import { Environment } from '@env/environment.model';

export abstract class ApiRepository {
    protected httpClient: HttpClient;
    private api: string;

    constructor(injector: Injector) {
        this.httpClient = injector.get(HttpClient);
        const { api }: Environment = injector.get(CONFIG_ENVIRONMENT_TOKEN);
        this.api = api;
    }

    protected buildUrl(path: string): string {
        return this.api + path;
    }
}
