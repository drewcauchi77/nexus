<script setup>
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { GET_LANGUAGES, ADD_LANGUAGE } from '@/queries/languages';
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
    try {
        if(!v$.value.$dirty && !v$.value.$invalid && v$.value.$silentErrors.length == 0) {
            const { mutate: addLanguage, onDone, onError } = useMutation(ADD_LANGUAGE, () => ({
                variables: {
                    name: languageName.value,
                    code: languageCode.value,
                },
                update: (cache, { data: { addLanguage } }) => {
                    let data = cache.readQuery({ query: GET_LANGUAGES });
                    if(data && data.languages) {
                        data = {
                            ...data, 
                            languages: [
                                ...data.languages,
                                addLanguage
                            ],
                        };
                    }
                    cache.writeQuery({ query: GET_LANGUAGES, data })
                }
            }));

            onDone(() => {
                store.addAlertMessage({ error: false, key: 'creation-success' }, '@/views/language/AddLanguage.vue -> addLanguage() -> onDone');
                languageName.value = '';
                languageCode.value = '';
            });

            onError((error) => {
                console.error(error);
                store.addAlertMessage({ error: true, key: 'technical-error' }, '@/views/language/AddLanguage.vue -> addLanguage() -> onError');
            });

            addLanguage();
        } else {
            store.addAlertMessage({ error: true, key: 'vuelidate-error' }, '@/views/language/AddLanguage.vue -> addLanguage() -> validation check');
        }
    } catch (error) {
        console.error(error);
        store.addAlertMessage({ error: true, key: 'technical-error' }, '@/views/language/AddLanguage.vue -> addLanguage() -> try..catch');
    }
}
</script>

<template>
    <div id="new-language">
        <title-header :title="'Add New Language'" />
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