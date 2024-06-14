<script>
export default {
  name: 'pagination',
  props: ['value'],
  methods: {
    changePage(direction) {
      this.value.page += direction
      this.$emit('modelChange')
    }
  }
}
</script>

<template>
  <div class="is-flex is-justify-content-space-between">
    <button class="button has-text-weight-bold" :class="{'is-loading': value.isLoading}" :disabled="value.page == 1" @click="changePage(-1)">Previous</button>
    <div class="select" :class="{'is-loading': value.isLoading}">
      <select v-model="value.page" @change="$emit('modelChange')" class="has-text-weight-bold is-loading">
        <option v-for="n in value.totalPages" :key="n">{{n}}</option>
      </select>
    </div>
    <button class="button has-text-weight-bold" :class="{'is-loading': value.isLoading}" :disabled="value.page == value.totalPages"
      @click="changePage(1)">Next</button>
  </div>
</template>

<style scoped>
.button[disabled] {
  background-color: var(--text-light-grey);
  color: var(--text-page-subtitle);
}

.button {
  background-color: var(--bulma-scheme-main);
  border: none;
  transition: filter 0.3s ease;
  /* Smooth transition */
}

.select select:not([multiple]) {
  transition: box-shadow 0.3s ease;
  /* Smooth transition for box-shadow */
  border-color: var(--text-light-grey);
  background-color: var(--card-body-background);
  color: var(--text-page-heading);
}

.select:hover {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.button.is-hovered,
.button:hover {
  filter: brightness(1.2);
}

.navbar-link:not(.is-arrowless):after,
.select:not(.is-multiple):not(.is-loading):after {
  border-color: var(--text-page-subtitle);
}
</style>