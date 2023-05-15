import { RecipleModuleScript } from 'reciple';


export default {
    versions: ['^7'],

    onStart(client) {
        return true;
    }
} satisfies RecipleModuleScript;
