<template>
    <div id="new-language">
        <title-header :title="'Add New Language'"></title-header>
        <form>
            <input-vue :label="'Enter Language Name in Native Language'"></input-vue>
            <input-vue :label="'Enter Language Code'"></input-vue>
            <button-vue :color="'#3D8BE4'" :text="'Save'" :icon="'fa-floppy-disk'"></button-vue>
        </form>
    </div>
</template>

<script>
import TitleHeader from '@/components/TitleHeader.vue';
import InputVue from '@/components/Input.vue';

export default {
    name: 'AddLanguage',
    components: {
        TitleHeader,
        InputVue,
    }
}
</script>

<style lang="scss" scoped>
#new-language {

}
</style>