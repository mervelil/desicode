<template>
 <div class="card">
    <div class="card-header d-flex align-items-center justify-content-between" @click="toggleCollapse">
      <h5 class="mb-0">{{ title }}</h5>
      <div class="d-flex align-items-center">
        <a href="javascript:void(0)" @click="openAddAlarmUserModal" class="btn btn-primary font-weight-bolder">{{title2}}</a>
        &nbsp; &nbsp;
        <i :class="['fas', isOpen ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
      </div>
    </div>
    <div class="card-body" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    isOpen: Boolean,
    title2:String,
    // initialOpen: Boolean
  },

  data() {
    return {
      // isOpen: this.initialOpen || false
       internalOpenState: this.isOpen,
    };
  },
  computed: {
  internalOpenState: {
    get() {
      return this.isOpen;
    },
    set(value) {
      // Burada istediğiniz ek işlemleri yapabilirsiniz
      this.$emit('update:isOpen', value);
    }
  }
},
  methods: {
    toggleCollapse() {
      this.isOpen = !this.isOpen;
      this.internalOpenState = true;
  
    this.$emit('update:isOpen', !this.isOpen);
  
    },
     openAddAlarmUserModal() {
     this.isOpen = !this.isOpen;
     }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  overflow: hidden;
}

.card-header {
  background-color: #f0f0f0;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body {
  padding: 10px;
}
</style>
