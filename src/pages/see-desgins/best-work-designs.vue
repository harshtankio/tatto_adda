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
          { image: "/hemal/IMG_2292.JPG" },
          { image: "/hemal/IMG_2586.JPG" },
          { image: "/hemal/IMG_2671.JPG" },
          { image: "/hemal/IMG_3728.JPG" },
          { image: "/hemal/IMG_3765.JPG" },
          { image: "/hemal/IMG_3932.JPG" },
          { image: "/hemal/IMG_5150.JPG" },
          { image: "/hemal/IMG_5898.JPG" },
          { image: "/hemal/IMG_6382.JPG" },
        ],
      },
    };
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
