<template>
    <div class="button" @click="action()">
        <div class="text-area" :style="{ backgroundColor: color }">
            <span>{{text}}</span>
        </div>
        <div class="icon-container" :style="{ backgroundImage: `linear-gradient(to left, transparent 50%, ${color} 50%)`, border: `2px solid ${color}` }">
            <icon class="icon" :icon="icon" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ButtonVue',
    props: {
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
    },
    methods: {
        action() {
            this.$router.push({ path: this.link });
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

.button {
    display: flex;
    height: 40px;
    border-radius: 50px;
    width: 135px;
    cursor: pointer;
    transition: 0.2s ease-in;
    .text-area {
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
        width: 35px;
        border-radius: 0 50px 50px 0;
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
</style>