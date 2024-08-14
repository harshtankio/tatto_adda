<template>
  <div
    class="flex flex-col items-center gap-2 py-2 space-y-2 bg-white border rounded-lg shadow-md"
  >
    <div v-for="(item, index) in items" :key="index" class="">
      <div class="flex flex-col items-center justify-between">
        <div class="flex flex-col items-center w-20">
          <img
            v-if="item.icon"
            :src="item.icon"
            :alt="item.label"
            class="w-6 h-6"
          />
          <div
            v-else-if="item.symbol"
            class="flex items-center justify-center w-6 h-6 font-bold text-white rounded-full"
            :class="item.symbol === 'G' ? 'bg-blue-500' : 'bg-green-500'"
          >
            {{ item.symbol }}
          </div>
          <span class="text-xs font-medium text-center text-gray-700">{{
            item.label
          }}</span>
        </div>
        <span class="text-lg font-bold text-gray-900">{{ item.rating }}</span>
      </div>
      <div
        v-if="index < items.length - 1"
        class="my-2 border-b border-gray-200"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingComponent",
  data() {
    return {
      items: [
        {
          label: "Google Reviews",
          symbol: "G",
          rating: 4.9,
        },
        {
          label: "Hygiene & Safety",
          symbol: "+",
          rating: 4.9,
        },
      ],
    };
  },
};
</script>
