<script setup>
import Message from './Message.vue'
import Sideboard from './Sideboard.vue';
import BottomBoard from './BottomBoard.vue'
import { computed, ref } from 'vue';
import { getmessages } from '../jsvars/messages';
import { getconnectionStatus } from '../jsvars/connectionstate';
import MobileLogin from './MobileLogin.vue';
import { getLoginBool } from '../jsvars/connection';
import Changelog from './Changelog.vue';
import { getchangelogs } from '../jsvars/changelog';



const messageDiv = ref();
const mobilelogin = ref(false)
const messagepage = computed(() => getLoginBool().value)

const version = getchangelogs().VERSION

const changelogs = computed(() => {
    if (messagepage.value == false && mobilelogin.value == false) {
        return true
    }
    else {
        return false
    }
});

if (window.innerWidth <= 800) {
    mobilelogin.value = true;
} else {
    mobilelogin.value = false;
}


window.addEventListener(
    'resize',
    () => {
        if (window.innerWidth <= 800) {
            mobilelogin.value = true;
        } else {
            mobilelogin.value = false;
        }
    }

)


</script>

<template >
    <div class="grow pt-2 pr-4" style="height: 110vh;">
        <div class="flex grow gap-2 grid-cols-2 pl-3 pb-3 md:h-5/6 mobile:h-4/5">
            <div class="md:w-2/12">
                <Sideboard />
            </div>
            <div
                id="messagecontainer"
                class="w-10/12 mobile:w-full bg-secondary rounded-md overflow-y-scroll"
            >
                <div class="pb-5">
                    <div
                        v-if="messagepage"
                        v-for="messsage in getmessages().value"
                        :key="messsage.msgid"
                        ref="messageDiv"
                    >
                        <Message :messagecontent="messsage" />
                    </div>
                    <div v-if="mobilelogin">
                        <MobileLogin />
                    </div>
                    <div v-if="changelogs">
                        <Changelog />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex grow pl-3">
            <BottomBoard />
        </div>
        <div class="grid grid-cols-2 pl-3">
            <div class="text-tetiary text-xs">{{ getconnectionStatus }}</div>
            <div class="text-tetiary text-xs text-right">Version - {{ version }}</div>
        </div>
    </div>
</template>

<style>
body {
    background-color: #172121;
    overflow: hidden;
}
</style>
