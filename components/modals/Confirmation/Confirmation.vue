<template>
  <ModalBoard :class="$style.root" :title="title">
    <template slot="body">
      <div :class="$style.text" v-html="text" />
      <component
        :is="addon.component"
        v-if="addon.component"
        v-bind="addon.props"
        :class="$style.addon"
      />
      <div>
        <PickboxCheck
          v-if="preventCheckbox"
          v-model="preventCheckbox.value"
          :class="$style.checkbox"
          v-bind="preventCheckbox"
        >
          {{ preventCheckbox.label }}
        </PickboxCheck>
      </div>
    </template>

    <template slot="foot">
      <div>
        <Button
          v-if="!noDiscard"
          type="transparent"
          :disabled="submitting"
          @click="discard"
        >
          {{ $t('cancel') }}
        </Button>

        <Button :loading="submitting" @click="approveConfirmation">
          {{ confirmButtonText }}
        </Button>
      </div>
    </template>
  </ModalBoard>
</template>

<script>
export default {
  props: {
    /**
     * *Expects an optional label for the discard button.*
     */
    discardLabel: {
      type: String,
      default() {
        return this.$t('cancel');
      }
    },

    /**
     * *Expects a custom action function which will run on discard.*
     */
    discardAction: {
      type: Function,
      default: () => Promise.resolve()
    },

    /**
     * *Expects a custom action function which will run on submit.*
     */
    submitAction: {
      type: Function,
      default: () => Promise.resolve()
    },

    title: {
      type: String,
      required: true
    },

    text: {
      type: String,
      required: true
    },

    preventCheckbox: {
      type: Object,
      default: undefined
    },

    confirmButtonText: {
      type: String,
      default() {
        return this.$t('ok');
      }
    },

    addon: {
      type: Object,
      default: () => ({
        props: {}
      })
    },

    noDiscard: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      submitting: false,
      result: null
    };
  },

  methods: {
    approveConfirmation() {
      if (this.preventCheckbox && this.preventCheckbox.value) {
        localStorage.setItem(this.preventCheckbox.name, true);
      }

      this.submit();
    },

    emitCloseEvent() {
      if (this.$listeners.close) {
        /**
         * *Emits a close event after modal is being discarded or submitted.*
         * @type {Event}
         */
        this.$emit('close');
      }

      if (this.$parent.$listeners.close) {
        this.$parent.$emit('close');
      }
    },

    async discard() {
      await this.discardAction();
      this.emitCloseEvent();
    },

    async submit() {
      try {
        this.submitting = true;
        await this.submitAction(this.result);
        this.emitCloseEvent();
      } catch (e) {
        this.$errorHandler(e);
      } finally {
        this.submitting = false;
      }
    }
  }
};
</script>

<style src="./Confirmation.scss" module lang="scss" />
