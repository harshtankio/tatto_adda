<template>
  <div class="max-w-4xl p-4 mx-auto artist-profile">
    <!-- Artist Introduction -->
    <div class="flex items-center mb-8">
      <img
        :src="artist.image"
        alt="Artist photo"
        class="w-24 h-24 mr-6 rounded-full"
      />
      <div>
        <h2 class="text-2xl font-bold">{{ artist.name }}</h2>
        <p class="mb-2 text-gray-600">{{ artist.description }}</p>
      </div>
    </div>

    <!-- Artist's Work -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div v-for="(work, index) in artist.works" :key="index" class="relative">
        <img
          :src="work.image"
          :alt="work.description"
          class="w-full h-auto rounded-lg"
        />
        <div
          class="absolute px-2 py-1 text-xs text-white bg-black bg-opacity-50 rounded bottom-2 left-2"
        >
          {{ artist.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artist: {
        name: "Jay",
        image: "/artists/jay.JPG",
        description:
          "Meet our artist Jay. He is humble, talented & skilled artist.",
        works: [
          { image: "/hemal-portfolio/best-1.jpg" },
          {
            image: "/hemal-portfolio/best-2.jpg",
          },
          {
            image: "/hemal-portfolio/best-3.jpg",
          },
          {
            image: "/hemal-portfolio/best-4.jpg",
          },
          {
            image: "/hemal-portfolio/best-5.jpg",
          },
          {
            image: "/hemal-portfolio/best-5.jpg",
          },
          {
            image: "/hemal-portfolio/best-5.jpg",
          },
          {
            image: "/hemal-portfolio/best-5.jpg",
          },
          {
            image: "/hemal-portfolio/best-5.jpg",
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
