<template>
  <nav class="breadcrumb">
    <ul class="mt-3 mx-3">
      <li v-for="(item, index) in items" :key="index">
        <router-link class=" no-underline"  :to="item.to">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: Array
  }
};
</script>

<style scoped>
.breadcrumb {
  overflow: hidden; /* İçerik taşmalarını önlemek için */
}

.breadcrumb ul {
  list-style: none;
  padding: 0;
  margin: 0;
  white-space: nowrap; /* Öğeleri yan yana sığdırmak için */
}

.breadcrumb li {
  display: inline-block;
  margin-right: 10px; /* İtemler arası boşluk */
}
.no-underline {
  text-decoration: none;
}


</style>
