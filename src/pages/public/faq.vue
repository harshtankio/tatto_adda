<template>
  <div class="max-w-full px-4 mx-auto my-10">
    <div class="text-center">
      <h1 class="mb-2 text-4xl font-bold">FAQs</h1>
      <h2 class="mb-6 text-xl">Frequently Asked Questions</h2>
    </div>
    <div class="space-y-4">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="border-b border-gray-200"
      >
        <button
          @click="toggleFaq(index)"
          class="flex items-center justify-between w-full py-4 text-left"
          :class="{ 'text-blue-600': openFaqIndex === index }"
        >
          <span class="font-medium">{{ faq.question }}</span>
          <svg
            class="w-5 h-5 transition-transform duration-200"
            :class="{ 'rotate-180': openFaqIndex === index }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-show="openFaqIndex === index" class="px-6 py-2">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "Can I pay for my tattoo in installments (EMI)?",
    answer:
      "Yes, we offer EMI options for certain tattoo projects. This can be discussed during your consultation to find a payment plan that suits your budget.",
  },
  {
    question: "How are touch-ups or follow-up sessions priced?",
    answer:
      "Touch-ups within a certain period after your initial session are often included in the original price. For follow-up sessions beyond this period, additional charges may apply.",
  },
  {
    question: "Is a deposit required for booking a tattoo session?",
    answer:
      "Yes, we typically require a deposit to secure your appointment. This amount is deducted from the final cost of your tattoo.",
  },
  {
    question:
      "What factors might lead to a higher tattoo cost than initially estimated?",
    answer:
      "Factors include changes in design complexity, size increases, or additional color requests made after the initial consultation.",
  },
  {
    question: "Is the cost of aftercare products included in the tattoo price?",
    answer:
      "The cost of aftercare products is typically not included in the tattoo price. We offer a range of aftercare products for purchase.",
  },
]);

const openFaqIndex = ref(null);

const toggleFaq = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index;
};
</script>
