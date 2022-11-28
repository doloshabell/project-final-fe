<template>
  <div
    :class="
      mutation.mutasi < 0
        ? 'bg-[#FFDDDD] border flex flex-row justify-between items-center mb-3 px-6 py-2 rounded w-full hover:bg-[#D1D1D1]'
        : 'bg-[#E6F6FF] border flex flex-row justify-between items-center mb-3 px-6 py-2 rounded w-full hover:bg-[#D1D1D1]'
    "
  >
    <div class="w-1/3">
      <h1 class="text-base font-semibold capitalize">
        {{ mutation.keterangan }}
      </h1>
    </div>
    <div class="text-center w-1/3">
      <h1 class="text-base font-semibold">
        {{
          new Intl.NumberFormat("id", {
            style: "currency",
            currency: "IDR",
          }).format(mutation.mutasi)
        }}
      </h1>
    </div>
    <div class="text-end w-1/3">
      <h1 class="text-sm font-semibold">
        {{
          new Date(mutation.tanggalTransaksi).toLocaleString("id", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListMutation",
  props: ["mutation"],
};
</script>
