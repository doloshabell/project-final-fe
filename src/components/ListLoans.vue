<template>
  <div
    class="bg-[#FAFAFA] border flex flex-row justify-between items-center mb-3 px-6 py-2 rounded w-full hover:bg-[#D1D1D1]"
  >
    <div class="w-1/3">
      <h1 class="text-lg font-semibold">{{ loan.nama }}</h1>
      <span class="text-base text-gray-800">{{ loan.nikKtp }}</span>
    </div>
    <div class="text-center w-1/3">
      <h1 class="text-lg font-semibold">
        {{
          new Intl.NumberFormat("id", {
            style: "currency",
            currency: "IDR",
          }).format(loan.jumlahHarusBayar)
        }}
      </h1>
    </div>
    <div class="text-end w-1/3">
      <h1 class="text-lg font-semibold">
        {{ loan.status === 1 ? "Belum Lunas" : "Lunas" }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListLoans",
  props: ["loan"],
};
</script>
