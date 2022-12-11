<template>
    <div class="input">
        <label>{{label}}</label>
        <input :type="type" name="name" id="name">
    </div>
</template>

<script>
export default {
    name: 'InputVue',
    props: {
        label: {
            type: String,
            default: 'Enter here',
        },
        type: {
            type: String,
            default: 'text',
        },
    }
}
</script>

<style lang="scss" scoped>
.input {
    margin-bottom: 20px;
    label {
        display: block;
        margin-bottom: 20px;
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