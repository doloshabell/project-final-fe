<template>
  <div class="pl-5 pr-14">
    <div class="flex flex-col mt-4">
      <div class="flex flex-row justify-between mb-10">
        <h1 class="font-semibold text-xl">List Customers</h1>
        <router-link to="/add-new-customers">
          <button
            class="p-2 rounded-md font-normal text-base text-white bg-[#FF8000] hover:bg-[#D06800]"
          >
            <font-awesome-icon icon="fa-solid fa-plus" />
            Add New Customer
          </button>
        </router-link>
      </div>
      <div>
        <div @click="getData(customer.id)" v-for="customer in getAllCustomersData" :key="customer.id">
          <ListCustomer :customer="customer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListCustomer from "../components/ListCustomer.vue";

export default {
  name: "AllCustomers",
  components: { ListCustomer },
  computed: {
    ...mapGetters(["getAllCustomersData"]),
  },
  created() {
    this.$store.dispatch("getAllCustomers");
  },
  methods: {
    getData(id) {
      this.$router.push(`/customers/${id}`);
    }
  }
};
</script>
