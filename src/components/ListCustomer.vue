<template>
  <div
    class="bg-[#FAFAFA] border flex flex-row justify-between items-center mb-3 px-6 py-2 rounded w-full hover:bg-[#D1D1D1]"
  >
    <div class="w-1/3">
      <h1 class="text-lg font-semibold">{{ customer.nama }}</h1>
      <span class="text-base text-gray-800">{{ customer.nikKtp }}</span>
    </div>
    <div class="text-center w-1/3">
      <h1 class="text-lg font-semibold">{{ customer.email }}</h1>
    </div>
    <div class="text-end w-1/3">
      <h1 class="text-sm font-semibold">
        Aktif Sejak
      </h1>
      <span>
        {{new Date(customer.tanggalBuat).toLocaleString('id', {year: "numeric", month: "long"})}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCustomer",
  props: ["customer"],
};
</script>
