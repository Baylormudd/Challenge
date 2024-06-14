<script>
  import Users from '@/repository/modules/users.js'
import userCard from './userCard.vue'
import pagination from './pagination.vue'
export default {
  name: 'cardGrid',
  components: {
    userCard,
    pagination
  },

  data() {
    return {
      users: [],
      paginationModel: {
        page: 1,
        isLoading: true
      },
      errorMessage: ''
    }
  },

  methods: {
    generateRandomDollarAmount() {
      const randomAmount = Math.random() * 100000;
      const formattedAmount = `$${randomAmount.toLocaleString('en-US')}`;
      return formattedAmount;
    },
    // Function to generate a random date in the format 'Month Day, Year'
    generateRandomDate() {
      const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
      // Generate a random month (index from 0 to 11)
      const randomMonthIndex = Math.floor(Math.random() * months.length);
      const randomMonth = months[randomMonthIndex];
      // Generate a random day (from 1 to 28 to simplify)
      const randomDay = Math.floor(Math.random() * 28) + 1;
      // Generate a random year (from 2010 to 2024 to have recent and future dates)
      const randomYear = Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010;
      // Format the date as 'Month Day, Year'
      const formattedDate = `${randomMonth} ${randomDay}, ${randomYear}`;

      return formattedDate;
    },
    async getUsers() {
      this.paginationModel.isLoading = true
      this.errorMessage = ''
      try {
        let res = await Users.GetUsers(this.paginationModel.page)

        this.users = res.data.data
        this.users = this.users.map((user) => {
          return {
            ...user,
            invoiceAmount: this.generateRandomDollarAmount(),
            invoiceDate: this.generateRandomDate(),
            isPaid: Math.random() < 0.5
          }
        })
        //can uncomment the timeout to see the loaders in action for longer
        //setTimeout(() => {
          this.paginationModel = {
            page: res.data.page,
            totalPages: res.data.total_pages,
            isLoading: false
          }
        //}, 2000);

      } catch (error) {
        this.errorMessage = error + ' Please try again later...'
      } finally {
        //can uncomment the timeout to see the loaders in action for longer
        //setTimeout(() => {
          this.paginationModel.isLoading = false
        // }, 2000);
      }
    }
  },
  mounted() {
    this.getUsers()
  }
} 
</script>

<template>
  <div class="fixed-grid has-1-cols-mobile has-2-cols-tablet has-3-cols-desktop">
    <div class="notification is-danger" v-show="errorMessage !== ''">
      <button class="delete" @click="errorMessage = ''"></button>
      {{ errorMessage }}
    </div>
    <div class="grid" v-show="errorMessage == ''">
      <div class="skeleton-block" v-if="paginationModel.isLoading" v-for="n in 6" :key="n">
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Donec sed odio dui.
        Nullam quis risus eget urna mollis ornare vel eu leo.
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nullam id dolor id
        nibh ultricies vehicula ut id elit.
      </div>
      <userCard v-if="!paginationModel.isLoading" class="cell" v-for="user in users" :userData="user" :key="user.id" />
    </div>
    <pagination v-if="errorMessage == ''" v-model="paginationModel" @modelChange="getUsers()" />
  </div>
</template>

<style scoped>
.card__header {
  width: 100%;
}
.skeleton-block:not(:last-child){
  margin-bottom: 0px;
}
.cell:last-child {
  margin-bottom: var(--bulma-block-spacing);
}

.card__body {
  background-color: var(--card-body-background);
}

.card__content__info-row:not(:last-child) {
  border-bottom: 2px solid var(--background-color);
}
</style>