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
          v-model="inputValue" 
          @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script>
export default {
    name: 'InputVue',
    data() {
        return {
            inputValue: '',
        }
    },
    props: {
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
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

.input {
    margin-bottom: 20px;
    label {
        display: block;
        margin-bottom: 20px;
        .required {
            color: $highlight-color;
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