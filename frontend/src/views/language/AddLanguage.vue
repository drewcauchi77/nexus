<template>
    <div id="new-language">
        <title-header :title="'Add New Language'"></title-header>
        <form @submit.prevent="">
            <input-vue 
              :label="'Enter Language Name in Native Language'" 
              :placeholder="'Malti'" 
              :name="'language'"
              :required="true"
              v-model="languageName" />
            <input-vue 
              :label="'Enter Language Code'" 
              :placeholder="'mt'" 
              :name="'language_code'"
              :required="true"
              v-model="languageCode" />
            <button-vue 
              :color="'#3D8BE4'" 
              :text="'Save'" 
              :icon="'fa-floppy-disk'"
              @buttonPressed="addLanguage()" />
        </form>
    </div>
</template>

<script>
import TitleHeader from '@/components/TitleHeader.vue';
import InputVue from '@/components/Input.vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { ADD_LANGUAGE } from '@/queries/languages';

export default {
    name: 'AddLanguage',
    setup() {
        return {
            v$: useVuelidate(),
        }
    },
    data() {
        return {
            languageName: '',
            languageCode: '',
        }
    },
    validations() {
        return {
            languageName: { required },
            languageCode: { required },
        }
    },
    components: {
        TitleHeader,
        InputVue,
    },
    methods: {
        addLanguage() {
            if(!this.v$.$dirty && !this.v$.$invalid && this.v$.$silentErrors.length == 0) {
                this.$apollo.mutate({
                    mutation: ADD_LANGUAGE,
                    variables: {
                        name: this.languageName,
                        code: this.languageCode,
                    }
                })
            } else {
                console.log('Error')
            }
        }
    },
}
</script>