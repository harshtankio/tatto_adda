<template>
  <div class="max-w-4xl p-4 mx-auto artist-profile">
    <!-- Artist Introduction -->
    <div class="w-full mb-20">
      <h1 class="text-4xl text-center text-black">
        Here are some of our designs
      </h1>
    </div>

    <!-- Artist's Work -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div v-for="(work, index) in artist.works" :key="index" class="relative">
        <img
          :src="work.image"
          :alt="work.description"
          class="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artist: {
        name: "Hemal Barot",
        image: "/public/artists/hemal.JPG",
        description:
          "Meet our artist Hemal. He is humble, talented & skilled artist.",
        works: [
          { image: "src/assets/hemal-portfolio/best-1.jpg" },
          {
            image: "src/assets/hemal-portfolio/best-2.jpg",
          },
          {
            image: "src/assets/hemal-portfolio/best-3.jpg",
          },
          {
            image: "src/assets/hemal-portfolio/best-4.jpg",
          },
          {
            image: "src/assets/hemal-portfolio/best-5.jpg",
          },
          {
            image: "src/assets/hemal-portfolio/best-5.jpg",
          },
          {
            image: "src/assets/hemal-portfolio/best-5.jpg",
          },
          {
            image: "src/assets/hemal-portfolio/best-5.jpg",
          },
          {
            image: "src/assets/hemal-portfolio/best-5.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
