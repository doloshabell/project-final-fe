<template>
  <div class="pl-5 pr-14">
    <div class="flex flex-col mt-4">
      <div class="flex flex-row justify-between mb-10">
        <h1 class="font-semibold text-xl">List Savings</h1>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div v-for="saving in getAllSavingsData" :key="saving.id" class="w-11/12">
          <ListSavings :saving="saving" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListSavings from "@/components/ListSavings.vue";
import { mapGetters } from "vuex";

export default {
  name: "AllSavings",
  computed: {
    ...mapGetters(["getAllSavingsData"]),
  },
  created() {
    this.$store.dispatch("getAllSavings");
  },
  components: { ListSavings },
};
</script>
