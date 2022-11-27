<template>
  <div class="pl-5 pr-14">
    <div class="flex flex-col mt-4">
      <div class="flex flex-row justify-between mb-10">
        <h1 class="font-semibold text-xl">List Branch Officer</h1>
        <router-link to="/add-new-branch-officer">
          <button
            class="p-2 rounded-md font-normal text-base text-white bg-[#FF8000] hover:bg-[#D06800]"
          >
            <font-awesome-icon icon="fa-solid fa-plus" class="mr-1" />
            Add New Branch Officer
          </button>
        </router-link>
      </div>
      <div>
        <div @click="goToDetailBranchOfficer(officer.nikKaryawan)" v-for="officer in getAllBranchOfficersData" :key="officer.id">
          <ListBranchOfficer :officer="officer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListBranchOfficer from "@/components/ListBranchOfficer.vue";

export default {
  name: "AllBranchOfficer",
  components: { ListBranchOfficer },
  computed: {
    ...mapGetters(["getAllBranchOfficersData"]),
  },
  created() {
    this.$store.dispatch("getAllBranchOfficers");
  },
  methods: {
    goToDetailBranchOfficer(nikKaryawan) {
      this.$router.push(`/branch-officer/detail`);
      this.$store.dispatch("getDetailBranchOfficer", nikKaryawan);
    }
  }
};
</script>
