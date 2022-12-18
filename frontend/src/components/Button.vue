<script setup>
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    link: String,
    color: {
        type: String,
        default: '#3D8BE4',
    },
    text: {
        type: String,
        default: 'Action',
    },
    icon: {
        type: String,
        default: 'fa-pen'
    },
});

const router = useRouter();
const emits = defineEmits(['buttonPressed']);

function action() {
    if(props.link && props.link !== '') {
        router.push({ 
            path: props.link 
        });
    } else {
        emits('buttonPressed');
    }
}
</script>

<template>
    <button class="button" @click="action()" :style="{ border: `2px solid ${color}` }">
        <div class="text-area" :style="{ backgroundColor: color }">
            <span>{{text}}</span>
        </div>
        <div class="icon-container" :style="{ backgroundImage: `linear-gradient(to left, transparent 50%, ${color} 50%)` }">
            <icon class="icon" :icon="icon" />
        </div>
    </button>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.button {
    display: flex;
    height: 40px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2s ease-in;
    background: transparent;
    border: none;
    padding: 0px;
    outline-color: $text-color;
    .text-area {
        height: 100%;
        display: none;
        border-radius: 50px 0 0 50px;
        width: 100px;
        position: relative;
        span {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: fit-content;
            width: fit-content;
            margin: auto;
            font-weight: 500;
            text-transform: uppercase;
        }
    }
    .icon-container {
        height: 100%;
        width: 35px;
        border-radius: 50px;
        position: relative;
        background-size: 200%;
        transition: 0.2s ease-in;
        background-position-x: right;
        .icon {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            height: auto;
            width: 16px;
        }
    }
    &:hover {
        .icon-container {
            background-position: left;
        }
    }
}

@media only screen and (min-width: $screen-md) {
    .button {
        width: 135px;
        .text-area {
            display: block;
        }
        .icon-container {    
            border-radius: 0 50px 50px 0;
        }
    }
}
</style>