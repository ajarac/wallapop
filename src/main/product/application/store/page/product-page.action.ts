const KEY_STATE = '[PRODUCT PAGE]';

export class SetPageListProductAction {
    static type = `${KEY_STATE} Set Page List Product`;

    constructor(public page: number) {}
}
