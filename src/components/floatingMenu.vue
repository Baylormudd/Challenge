<script>
export default {
  name: 'floatingMenu',
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if (this.showMenu) {
        this.addClickOutsideListener();
      } else {
        this.removeClickOutsideListener();
      }
    },
    handleClickOutside(event) {
      if (this.$refs.floatingDiv && !this.$refs.floatingDiv.contains(event.target) && !this.$refs.floatingDivBtn.contains(event.target)) {
        this.showMenu = false;
        this.removeClickOutsideListener();
      }
    },
    addClickOutsideListener() {
      document.addEventListener('click', this.handleClickOutside);
    },
    removeClickOutsideListener() {
      document.removeEventListener('click', this.handleClickOutside);
    },
  }
}
</script>
<template>
  <div>
    <div class="menu-toggle-btn is-flex is-justify-content-center items-center" @click="toggleMenu()"
      ref="floatingDivBtn">
      <button class="is-flex " style="text-align: center;"> ...</button>
    </div>
    <div v-show="showMenu" class="popover" ref="floatingDiv">
      <div>
        <div class="menu">
          <ul class="menu-list" role="navigation">
            <li tabindex="1"><a href="javascript: void(0)">View</a></li>
            <li tabindex="2"><a href="javascript: void(0)">Edit</a></li>
            <li tabindex="3"><a href="javascript: void(0)" class="danger">Delete</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.popover {
  position: absolute;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 30;
  overflow: hidden;
  border-radius: 15px;
  width: 115px;
  background-color: var(--card-body-background);
  font-weight: 400;
  right: 15px;
  top: 58px;
}

.menu ul li #menu-list:target {
  display: block;
}

.menu ul li #menu-list:focus {
  background-color: var(--text-light-grey);
}

.menu-toggle-btn {
  cursor: pointer;
  transition: background-color 0.3s ease;
  /* Smooth transition effect */
  border-radius: 50%;
  height: 24px;
  width: 24px;
  font-size: 1rem;
  letter-spacing: 1px;
}

.menu-toggle-btn:hover {
  background-color: var(--success);
  border-radius: 50%;

  transition: background-color 0.3s ease;
  /* Smooth transition effect */
}

.menu {
  padding: 8px 0;
}

.menu-list a {
  background-color: var(--card-body-background);
  border-radius: 0;
  padding: 8px 8px;
  color: var(--text-page-heading);

}

.menu-list .danger {
  background-color: var(--card-body-background);
  border-radius: 0;
  padding: 8px 8px;
  color: var(--danger);

}

.menu-list a:hover {
  background-color: var(--text-light-grey);
}
</style>