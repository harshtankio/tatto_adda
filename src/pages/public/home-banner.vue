<template>
  <div class="px-4 sm:px-0">
    <div class="mb-6 sm:mb-10">
      <div
        ref="videoContainer"
        class="w-full h-full max-w-full carousel__item rounded-xl sm:rounded-3xl"
      >
        <video
          ref="lazyVideo"
          loop
          autoplay="autoplay"
          muted
          class="w-full h-full"
          playsinline
          :src="isIntersecting ? '/src/assets/Banners/banner-video.mp4' : ''"
        >
          <source
            v-if="isIntersecting"
            src="/src/assets/Banners/banner-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    <div class="grid text-center place-items-center">
      <h2
        class="px-4 pt-6 pb-4 font-mono text-xl font-bold sm:pt-10 sm:text-2xl"
      >
        Let's craft your masterpiece together
      </h2>
      <div class="py-3">
        <a href="https://wa.link/2c1gtv" target="_blank">
          <button
            class="px-8 py-3 text-sm text-white bg-blue-800 rounded-lg sm:px-16 sm:py-4 sm:text-md"
          >
            Book Appointment
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "Autoplay",
  setup() {
    const videoContainer = ref(null);
    const lazyVideo = ref(null);
    const isIntersecting = ref(false);

    const onIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isIntersecting.value = true;
          lazyVideo.value.play();
        } else {
          isIntersecting.value = false;
          lazyVideo.value.pause();
        }
      });
    };

    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.5,
    });

    onMounted(() => {
      observer.observe(videoContainer.value);
    });

    onUnmounted(() => {
      observer.disconnect();
    });

    return {
      videoContainer,
      lazyVideo,
      isIntersecting,
    };
  },
});
</script>
