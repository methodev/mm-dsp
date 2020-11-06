<template>
  <section :class="$style.root">
    <WhiteBoard :class="$style.board">
      <Heading type="heading2">{{ title }}</Heading>
      <form @submit.prevent="submitEmailForm">
        <fieldset :class="$style.body">
          <TextField
            id="email"
            v-model="email"
            name="email"
            type="email"
            :class="$style.userField"
            :placeholder="$t('email')"
            :invalid="$v.email.$error"
            :system-note="emailNote"
            :disabled="submitting"
            @blur="$v.email.$touch()"
            @input="$emit('input-change')"
            @clear="email = ''"
          />
        </fieldset>
        <div :class="$style.foot">
          <div v-if="formState" :class="$style.noteCell">
            <FormNote :type="formState.status">
              {{ formState.message }}
            </FormNote>
          </div>
          <div :class="$style.buttonCell">
            <Button
              :class="$style.button"
              :element="'button'"
              :disabled="$v.$invalid"
              :loading="submitting"
            >
              <span v-if="!submitting">{{ submitButtonLabel }}</span>
            </Button>
          </div>
        </div>
      </form>
    </WhiteBoard>
  </section>
</template>

<script>
// Validators
import { required, email } from 'vuelidate/lib/validators';

// Mixins
import formMixin from '../forms-mixin';

export default {
  mixins: [formMixin],

  props: {
    title: {
      type: String,
      required: true
    },
    submitButtonLabel: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      email: ''
    };
  },

  computed: {
    emailNote() {
      if (!this.$v.email.$error) {
        return null;
      }

      return !this.$v.email.email
        ? this.$t('enterValidEmail')
        : !this.$v.email.required
        ? this.$t('requiredField')
        : null;
    }
  },

  methods: {
    submitEmailForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$emit('submit', this.email);
      }
    }
  },

  validations: {
    email: {
      required,
      email
    }
  }
};
</script>

<style src="./EmailForm.scss" module lang="scss" />
