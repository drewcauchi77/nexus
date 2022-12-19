<script setup>
import { ref, defineProps, computed, watch } from 'vue';
import store from '@/store/state';

const keyToAlertMessage = ref({
    'creation-success': 'Creation of item has been successful!',
    'technical-error': 'A technical error has occurred!<br>Please contact tech support.',
    'vuelidate-error': 'There are some missing fields which are required!',
});

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
            <span v-html="keyToAlertMessage[alert.key]"></span>
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
        text-align: center;
        &.success {
            background-color: #198754;
        }
    }
}
</style>