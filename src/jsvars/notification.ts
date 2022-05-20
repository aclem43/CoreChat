import { ref } from 'vue';

const notifcationContent = ref("")
const notifcationVisible = ref()
const notifcationColor = ref(true)


export const getNotifcationColor = () => {
    return notifcationColor;
}

export const setNotifcationColor = (content: boolean) => {
    notifcationColor.value = content;
}

export const getNotifcationContent = () => {
    return notifcationContent;
}

export const setNotifcationContent = (content: string) => {
    notifcationContent.value = content;
}

export const getNotifcationVisibilty = () => {
    return notifcationVisible;
}

export const setNotifcationVisibilty = (visibilty: boolean) => {
    notifcationVisible.value = visibilty
}