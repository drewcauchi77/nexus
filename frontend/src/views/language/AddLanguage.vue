<script setup>
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { ADD_LANGUAGE } from '@/queries/languages';
import TitleHeader from '@/components/TitleHeader.vue';
import InputVue from '@/components/Input.vue';
import store from '@/store/state';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const languageName = ref('');
const languageCode = ref('');

const rules = {
    languageName: { required },
    languageCode: { required },
};

const v$ = useVuelidate(rules, {
    languageName,
    languageCode
});

function addLanguage() {
    if(!v$.value.$dirty && !v$.value.$invalid && v$.value.$silentErrors.length == 0) {
        const { mutate: addLanguage, onDone, onError } = useMutation(ADD_LANGUAGE, () => ({
            variables: {
                name: languageName.value,
                code: languageCode.value,
            }
        }));

        addLanguage();

        onDone(() => {
            store.addAlertMessage({
                error: false,
                message: 'Language has been added successfully!',
            }, '@/views/language/AddLanguage.vue -> addLanguage()');

            languageName.value = '';
            languageCode.value = '';
        });

        onError(() => {
            store.addAlertMessage({
                error: true,
                message: 'A technical error has occurred!',
            }, '@/views/language/AddLanguage.vue -> addLanguage()');
        });
    } else {
        store.addAlertMessage({
            error: true,
            message: 'Some required fields are empty!',
        }, '@/views/language/AddLanguage.vue -> addLanguage()');
    }
}
</script>

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
              :color="'#18bdb1'" 
              :text="'Save'" 
              :icon="'fa-floppy-disk'"
              @buttonPressed="addLanguage()" />
        </form>
    </div>
</template>