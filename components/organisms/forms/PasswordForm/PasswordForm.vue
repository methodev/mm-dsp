<template>
  <section :class="$style.root">
    <WhiteBoard :class="$style.board">
      <Heading type="heading2">{{ title }}</Heading>
      <form @submit.prevent="submit">
        <fieldset :class="$style.body">
          <slot name="additional-fields" />

          <TextField
            id="password"
            v-model="password"
            name="password"
            type="password"
            :class="$style.passwordField"
            :placeholder="$t('password')"
            :disabled="submitting"
            @blur="$v.password.$touch()"
            @input="$emit('input-change')"
            @clear="password = ''"
          >
            <template slot="system-note">
              {{ $t('required') }}:
              <span :class="{ [forms.valid]: minLength }">
                {{
                  $t('atLeastNCharacters', { length: passwordMinLength })
                }} </span
              >,
              <span :class="{ [forms.valid]: atLeastOneLetter }">
                {{ $t('oneLetter') }}</span
              >,
              <span :class="{ [forms.valid]: atLeastOneNumber }">{{
                $t('oneNumber')
              }}</span
              >,
              <span :class="{ [forms.valid]: atLeastOneSpecialChar }">
                {{ $t('oneSpecialCharacter') }}
              </span>
              <Icon v-tooltip="specialChars" name="information-circle" />
            </template>
          </TextField>

          <TextField
            id="password-confirmation"
            v-model="passwordConfirmation"
            name="password_confirmation"
            type="password"
            :placeholder="$t('confirmPassword')"
            :disabled="submitting"
            @blur="$v.passwordConfirmation.$touch()"
            @input="$emit('input-change')"
            @clear="passwordConfirmation = ''"
          >
            <template slot="system-note">
              <span
                :class="[
                  {
                    [forms.invalid]: passwordConfirmation && !passwordConfirmed
                  },
                  {
                    [forms.valid]: passwordConfirmation && passwordConfirmed
                  }
                ]"
              >
                {{ passwordConfirmationNote }}
              </span>
            </template>
          </TextField>
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
import { required, sameAs, minLength } from 'vuelidate/lib/validators';
import {
  atLeastOneLetter,
  atLeastOneNumber,
  atLeastOneSpecialChar
} from '@/utils/validators';

// Restrictions
import {
  PASSWORD_VALID_SPECIAL_CHARS,
  PASSWORD_MIN_LENGTH
} from '@/defs/constants/restrictions';

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
      password: '',
      passwordConfirmation: '',
      specialChars: PASSWORD_VALID_SPECIAL_CHARS,
      passwordMinLength: PASSWORD_MIN_LENGTH
    };
  },

  computed: {
    minLength() {
      return this.password ? this.$v.password.minLength : false;
    },
    atLeastOneLetter() {
      return this.$v.password.atLeastOneLetter;
    },
    atLeastOneNumber() {
      return this.$v.password.atLeastOneNumber;
    },
    atLeastOneSpecialChar() {
      return this.$v.password.atLeastOneSpecialChar;
    },
    passwordConfirmed() {
      return this.$v.passwordConfirmation.sameAsPassword;
    },
    passwordConfirmationNote() {
      return this.passwordConfirmation && !this.passwordConfirmed
        ? this.$t('passwordDoesNotMatch')
        : this.$t('repeatThePasswordToConfirm');
    }
  },

  methods: {
    submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$emit('submit', {
          password: this.password,
          passwordConfirmation: this.passwordConfirmation
        });
      }
    }
  },

  validations: {
    password: {
      required,
      minLength: minLength(PASSWORD_MIN_LENGTH),
      atLeastOneLetter,
      atLeastOneNumber,
      atLeastOneSpecialChar
    },
    passwordConfirmation: {
      required,
      sameAsPassword: sameAs('password')
    }
  }
};
</script>

<style src="./PasswordForm.scss" module lang="scss" />
<style src="../forms-styles.scss" module="forms" lang="scss" />
