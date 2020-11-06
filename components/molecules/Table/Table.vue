<template>
  <WhiteBoard :class="$style.root">
    <OverflowBoard :settings="{ suppressScrollX: false }">
      <div v-if="$slots.header" :class="$style.head">
        <!-- @slot *Provides a place in the top for external content.* -->
        <slot name="header" />
      </div>

      <table>
        <colgroup>
          <col
            v-for="({ width }, index) in columns"
            :key="index"
            :style="{ width: width || `${100 / Object.keys(columns).length}%` }"
          />
        </colgroup>
        <thead>
          <tr>
            <th
              v-for="({ title, tooltip }, index) in columns"
              :key="index"
              :class="$styleOverview[index]"
            >
              <span v-tooltip="tooltip">
                {{ title }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- @slot *Provides the place for the body data.* -->
          <slot />
        </tbody>
      </table>
    </OverflowBoard>
    <div v-if="$slots['footer']" :class="$style.footer">
      <!-- @slot *Provides a place in the bottom for external content.* -->
      <slot name="footer" />
    </div>
  </WhiteBoard>
</template>

<script>
/**
 * `Table` provides an interface for displaying data, organized in a table structure.
 */

export default {
  props: {
    /**
     * *Expects an object containing the column structure.*
     */
    columns: {
      type: Object,
      required: true
    }
  }
};
</script>

<style src="./Table.scss" module lang="scss" />
<style
  src="@/components/molecules/Table/TableOverview.scss"
  module="$styleOverview"
  lang="scss"
/>
