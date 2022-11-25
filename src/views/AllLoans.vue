<template>
  <div class="pl-5 pr-14">
    <div class="flex justify-between mt-4">
      <h1 class="font-semibold text-xl">List Loans</h1>
      <router-link to="add-new-loans">
        <button
          class="p-2 rounded-md font-normal text-base text-white bg-[#FF8000] hover:bg-[#D06800]"
        >
          <font-awesome-icon icon="fa-solid fa-plus" />
          Add New Loan
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllLoans",
};
</script>
