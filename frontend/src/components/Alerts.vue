<script setup>
import { defineProps, computed, watch } from 'vue';
import store from '@/store/state';

const props = defineProps({
    success: Boolean,
});

const alerts = computed(() => {
    return store.state.alerts;
});

watch(alerts, () => {
    if(alerts.value.length > 0) {
        setTimeout(function() {
            store.removeAlertMessage('@/components/Alerts.vue -> watch:alerts()');
        }, 5000);
    }
});
</script>

<template>
    <div class="alerts" v-if="alerts.length > 0">
        <div class="alert" v-for="(alert, index) in alerts" :key="index" :class="{'success' : !alert.error}">
            <span>{{alert.message}}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.alerts {
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
    margin: 0 auto;
    max-width: 400px;
    z-index: 20;
    .alert {
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        background-color: #FF3333;
        &.success {
            background-color: #198754;
        }
    }
}
</style>