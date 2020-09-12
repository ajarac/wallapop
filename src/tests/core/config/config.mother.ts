import { internet, random } from 'faker';

import { Environment } from '@env/environment.model';

export class ConfigMother {
    static random(): Environment {
        return {
            production: random.boolean(),
            api: internet.domainName(),
        };
    }
}
