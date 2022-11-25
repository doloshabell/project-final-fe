<template>
  <div class="pl-5 pr-14">
    <div class="flex justify-between mt-4">
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
  </div>
</template>

<script>
export default {
  name: "AllCustomers",
};
</script>
