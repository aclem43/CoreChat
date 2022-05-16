import { ref } from 'vue';

const notifcationContent = ref("")
const notifcationVisible = ref()

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