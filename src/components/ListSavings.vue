<template>
  <div
    class="bg-[#FAFAFA] border flex flex-row justify-between items-center mb-3 px-6 py-2 rounded w-full hover:bg-[#D1D1D1]"
  >
    <div class="w-2/3">
      <h1 class="text-lg font-semibold">{{saving.nama}}</h1>
      <span class="text-base text-gray-800">{{ saving.noRekening }}</span>
    </div>
    <div class="text-end w-1/3">
      <h1 class="text-lg font-semibold">
        {{
          new Intl.NumberFormat("id", {
            style: "currency",
            currency: "IDR",
          }).format(saving.saldo)
        }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListSavings",
  props: ["saving"],
};
</script>
