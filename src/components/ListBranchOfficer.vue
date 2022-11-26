<template>
  <div
    v-if="officer.jabatan !== 'Pusat'"
    class="bg-[#FAFAFA] border flex flex-row justify-between items-center mb-3 px-6 py-2 rounded w-full hover:bg-[#D1D1D1]"
  >
    <div class="w-1/3">
      <h1 class="text-lg font-semibold">{{ officer.nama }}</h1>
      <span class="text-base text-gray-800">{{ officer.nikKaryawan }}</span>
    </div>
    <div class="text-center w-1/3">
      <h1 class="text-lg font-semibold">{{ officer.cabang }}</h1>
    </div>
    <div class="text-end w-1/3">
      <h1 class="text-lg font-semibold">
        {{
          officer.jabatan === "HBO"
            ? "Head Branch Officer"
            : "Community Officer"
        }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListBranchOfficer",
  props: ["officer"],
};
</script>
