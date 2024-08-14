<template>
  <Header />
  <router-view></router-view>
  <Rating class="fixed bottom-5 left-5" />
  <Footer />
</template>

<script>
import Header from "../components/global/header.vue";
import Footer from "../components/global/footer.vue";
import rating from "../components/global/rating.vue";
import Rating from "../components/global/rating.vue";
export default {
  name: "default",
  components: {
    Header,
    Rating,
    Footer,
  },
};
</script>
