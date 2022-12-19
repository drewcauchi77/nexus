<script setup>
import { ref, defineEmits } from 'vue';
import SideMenuLink from './SideMenuLink.vue';

const isMenuExpanded = ref(false);
const emits = defineEmits(['isMenuExpanded'])

function expandMenu() {
    isMenuExpanded.value = !isMenuExpanded.value;
    emits('isMenuExpanded', isMenuExpanded.value);
}
</script>

<template>
    <div id="side-menu" :class="{'expanded-menu' : isMenuExpanded}">
        <div class="inner-side-menu">
            <div class="dashboard-icon">
                <img class="icon" src="/icon.png" />
            </div>
            <side-menu-link 
              :anchor="'/'" 
              :anchorIcon="'fa-house-chimney'" 
              :anchorText="'Home'" />
            <side-menu-link 
              :anchor="'/languages'" 
              :anchorIcon="'fa-language'" 
              :anchorText="'Languages'" />
            <side-menu-link 
              :anchor="'/'" 
              :anchorIcon="'fa-globe'" 
              :anchorText="'Sites'" />
        </div>

        <div class="collapse-button" @click="expandMenu()">
            <div class="collapse-icon" :class="{'collapse-menu' : isMenuExpanded}">
                <icon icon="fa-arrow-right" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

#side-menu {
    height: calc(100vh - 8px);
    width: 100%;
    max-width: 64px;
    position: sticky;
    top: 0;
    padding: 4px;
    flex: none;
    transition: 0.2s ease-in;
    .collapse-button {
        display: none;
        position: absolute;
        bottom: 15px;
        right: 0px;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        background-color: $main-highlight-color;
        box-shadow: $box-shadow;
        cursor: pointer;
        transition: 0.2s ease-in;
        z-index: 1;
        .collapse-icon {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            height: fit-content;
            width: fit-content;
            transition: 0.2s ease-in;
            &.collapse-menu {
                transform: rotate(180deg);
            }
        }
        &:hover {
            transform: translateY(-3%);
        }
    }
    .inner-side-menu {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 100%;
        background-color: $background-color;
        border-radius: $border-radius;
        box-shadow: $box-shadow;
        .dashboard-icon {
            border-radius: $border-radius;
            margin-bottom: 20px;
            padding: 5px 10px;
            position: relative;
            height: 70px;
            background: rgb(224,204,163);
            background: linear-gradient(180deg, rgba(224,204,163,1) 0%, rgba(199,148,102,1) 35%, rgba(189,107,82,1) 94%, rgba(131,84,80,1) 100%);
            box-shadow: $box-shadow;
            .icon {
                width: 55px;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
            }
        }
        .side-menu-item {
            &:first-child {
                margin-top: 100px;
            }
            &:last-child {
                margin-bottom: 40px;
            }
        }
        &::-webkit-scrollbar {
            display: none;
        }
    }
}

@media only screen and (min-width: $screen-md) {
    #side-menu {
        .collapse-button {
            display: block;
        }
        &.expanded-menu {
            max-width: 180px;
        }
    }
}

@media only screen and (min-width: $screen-lg) {
    #side-menu {
        height: calc(100vh - 20px);
        width: 100%;
        max-width: 90px;
        padding: 10px;
        .inner-side-menu {
            .dashboard-icon {
                height: 80px;
                .icon {
                    width: 65px;
                }
            }
            .side-menu-item {
                &:last-child {
                    margin-bottom: 60px;
                }
            }
        }
        &.expanded-menu {
            max-width: 220px;
        }
    }
}
</style>