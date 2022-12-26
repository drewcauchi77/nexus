<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    anchor: String,
    anchorIcon: String,
    anchorText: String,
});
</script>

<template>
    <nav class="side-menu-item">
        <router-link :to="anchor">
            <div class="active-link"></div>
            <div class="link-section">
                <icon :icon="anchorIcon" />
                <span>{{anchorText}}</span>
            </div>
        </router-link>
    </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.side-menu-item {
    margin: 4px 0;
    text-align: center;
    font-size: 14px;
    a {
        color: $main-highlight-color;
        display: block;
        position: relative;
        .active-link {
            max-width: 0px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            background: $main-highlight-color;
            margin: auto;
            height: 100%;
            border-radius: 0 $border-radius $border-radius 0;
            transition: 0.2s ease-in;
        }
        .link-section {
            display: grid;
            grid-template-columns: 64px auto;
            height: 50px;
            align-content: center;
            span {
                text-align: left;
            }
        }
        &:hover, &.router-link-active, &.router-link-exact-active {
            .active-link {
                border-left: 1px solid $background-color;
                max-width: 4px;
            }
        }
    }
}

@media only screen and (min-width: $screen-lg) {
    .side-menu-item {
        a {
            .link-section {
                grid-template-columns: 90px auto;
                height: 60px;
                span {
                    font-size: 16px;
                }
            }
        }
    }
}
</style>

<style lang="scss">
@import '@/assets/variables';

.side-menu-item {
    a {
        svg {
            justify-self: center;
            width: 22px;
            height: auto;
            flex: none;
        }
    }
}

@media only screen and (min-width: $screen-lg) {
    .side-menu-item {
        a {
            svg {
                width: 28px;
            }
        }
    }
}
</style>