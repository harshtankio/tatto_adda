<template>
  <div class="container text-black">
    <!-- Banner -->
    <homeBanner />

    <!-- personal-offer-section-->
    <OfferSection />

    <!-- minimal-tattoo-design -->
    <MinimalDesigns />

    <!-- big-offer -->
    <BigOffer />

    <!-- gallery / best work -->
    <bestWork />

    <!-- About us/ Our artists -->
    <information />

    <!-- About us/ Our artists -->
    <Artists />

    <!-- Testimonials/Review -->

    <!-- faq -->
    <faq />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import MinimalDesigns from "./minimal-designs.vue";
import OfferSection from "./offer-section.vue";
import bestWork from "./best-work.vue";
import homeBanner from "./home-banner.vue";
import Artists from "./artists.vue";
import information from "./information.vue";
import faq from "./faq.vue";
import BigOffer from "./big-offer.vue";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
    MinimalDesigns,
    BigOffer,
    OfferSection,
    bestWork,
    homeBanner,
    information,
    Artists,
    faq,
  },
});
</script>
