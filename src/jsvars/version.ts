import { Ref, ref } from "vue";


const serverVersion = ref("")


export const getServerVersion = (): Ref => {
    return serverVersion
}

export const setServerVersion = (version: string): void => {
    serverVersion.value = version;
}
