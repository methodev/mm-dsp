<template>
  <section :class="$style.root">
    <WhiteBoard :class="$style.board">
      <form @submit.prevent="submit">
        <fieldset :class="$style.body">
          <TextField
            id="login_user"
            v-model="email"
            name="login_user"
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
          <TextField
            id="login_pass"
            v-model="password"
            name="login_pass"
            type="password"
            :class="$style.passField"
            :placeholder="$t('password')"
            :invalid="$v.password.$error"
            :system-note="passwordNote"
            :disabled="submitting"
            @blur="$v.password.$touch()"
            @input="$emit('input-change')"
            @clear="password = ''"
          />
        </fieldset>
        <div :class="$style.foot">
          <div v-if="formState" :class="$style.noteCell">
            <FormNote :type="formState.status">{{
              formState.message
            }}</FormNote>
          </div>
          <div :class="$style.buttonCell">
            <Button
              :class="$style.button"
              :element="'button'"
              :disabled="$v.$invalid"
              :loading="submitting"
            >
              <span v-if="!submitting">{{ $t('logIn') }}</span>
            </Button>
          </div>
        </div>
      </form>
    </WhiteBoard>
    <Hyperlink
      :class="$style.forgotPass"
      :to="localePath({ name: 'page-account-reset-password' })"
    >
      {{ $t('forgotYourPassword') }}
    </Hyperlink>
  </section>
</template>

<script>
// Validators
import { required, email } from 'vuelidate/lib/validators';

// Mixins
import formMixin from '../forms-mixin';

export default {
  mixins: [formMixin],

  data() {
    return {
      email: '',
      password: ''
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
    },

    passwordNote() {
      if (!this.$v.password.$error) {
        return null;
      }

      return !this.$v.password.required ? this.$t('requiredField') : null;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$emit('submit', {
          data: {
            email: this.email,
            password: this.password
          }
        });
      }
    }
  },

  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  }
};
</script>

<style src="./LoginForm.scss" module lang="scss" />
