<template>
  <div class="pl-5 pr-14">
    <div class="flex flex-col mt-4">
      <div class="flex flex-row justify-between mb-10">
        <h1 class="font-semibold text-xl">List Loans</h1>
        <router-link to="add-new-loans" v-if="getUserData.hak == 'Head Branch Officer'">
          <button
            class="p-2 rounded-md font-normal text-base text-white bg-[#FF8000] hover:bg-[#D06800]"
          >
            <font-awesome-icon icon="fa-solid fa-plus" class="mr-1" />
            Add New Loan
          </button>
        </router-link>
      </div>
      <div v-for="loan in getAllLoansData" :key="loan.id">
        <ListLoans :loan="loan" />
      </div>
    </div>
  </div>
</template>

<script>
import ListLoans from "../components/ListLoans.vue";
import { mapGetters } from "vuex";

export default {
    name: "AllLoans",
    computed: {
        ...mapGetters(["getAllLoansData", "getUserData"]),
    },
    created() {
        this.$store.dispatch("getAllLoans");
    },
    components: { ListLoans }
};
</script>
