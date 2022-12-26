<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    label: String,
    type: {
        type: String,
        default: 'text',
    },
    name: {
        type: String,
        default: 'name',
    },
    placeholder: {
        type: String,
        default: 'Enter Here',  
    },
    required: Boolean,
});

const emits = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="input">
        <label :for="name" v-if="label">
            {{label}}
            <span v-if="required" class="required">&nbsp;&#10033;</span>
        </label>
        <input 
          :type="type" 
          :name="name" 
          :id="name" 
          :placeholder="placeholder" 
          :value="modelValue" 
          @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.input {
    margin-bottom: 20px;
    label {
        display: block;
        margin-bottom: 20px;
        .required {
            color: $darken-secondary-highlight-color;
        }
    }
    input {
        height: 50px;
        width: 100%;
        border-radius: 10px;
        border: none;
        padding: 10px 15px;
        box-sizing: border-box;
    }
}

@media only screen and (min-width: $screen-lg) {
    .input {
        margin-bottom: 40px;
    }
}
</style>