<script>
import floatingMenu from './floatingMenu.vue'
export default {
  name: 'userCard',
  props: ['userData'],
  components: {
    floatingMenu
  },
}
</script>

<template>
  <div class="card">
    <div class="card-header p-2">
      <div class="media-left p-2">
        <figure class="image is-48x48">
          <img class="avatar" :src="userData.avatar" alt="avatar" />
        </figure>
      </div>
      <div class="title is-4 is-flex is-justify-content-space-between card__header p-2 my-auto">
        <div>{{userData.first_name}} {{userData.last_name}}</div>
        <div>
          <floatingMenu />
        </div>
      </div>
    </div>
    <div class="card-content card__body is-flex is-flex-direction-column p-0 is-size-6 px-4">
      <div class="card__content__info-row is-flex is-justify-content-space-between text-page-subtitle py-3">
        <div class="card-body-text"> Last invoice </div>
        <div class="card-body-text"> {{userData.invoiceDate}} </div>
      </div>
      <div class="card__content__info-row is-flex is-justify-content-space-between py-3">
        <div class="card-body-text"> Amount </div>
        <div class="card-body-text-attenion">
          {{userData.invoiceAmount}}
          <span class="pill"
            :class="[userData.isPaid ? 'paid' : 'overdue']">{{userData.isPaid ? 'Paid' : 'Overdue'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

}

.pill {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 999px;
  text-align: center;
  font-size: .65rem;
}

.paid {
  background-color: var(--success-light);
  color: var(--success);
}

.overdue {
  background-color: var(--danger-light);
  color: var(--danger);
}

.card__header {
  width: 100%;
}

.card__body {
  background-color: var(--card-body-background);
}

.card__content__info-row:not(:last-child) {
  border-bottom: 2px solid var(--background-color);
}

.avatar {
  border-radius: .85rem .85rem;
}
</style>