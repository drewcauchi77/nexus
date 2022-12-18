<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: 'Enter here',
    },
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
        <label :for="name">
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
            color: $main-highlight-color;
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
</style>