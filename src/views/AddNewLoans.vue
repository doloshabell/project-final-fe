<template>
  <div class="pl-5 pr-14">
    <div class="mt-4">
      <h1 class="font-semibold text-xl">Add New Loan</h1>
    </div>
    <div class="mt-6">
      <form @submit.prevent="addNewLoan">
        <div class="grid grid-cols-2 gap-4">
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Jumlah Pembiayaan</p>
            <input
              type="text"
              name="jumlahPembiayaan"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewLoan.jumlahPembiayaan"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Jumlah Yang Harus Dibayar</p>
            <input
              type="text"
              name="jumlahHarusBayar"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewLoan.jumlahHarusBayar"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Jumlah Angsuran Per Bulan</p>
            <input
              type="text"
              name="angsuranPerBulan"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewLoan.jumlahHarusBayarBulan"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Tenor</p>
            <input
              type="text"
              name="tenor"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewLoan.tenor"
            />
          </div>
          <div class="mr-4">
            <p class="mb-1 text-base">NIK</p>
            <input
              type="text"
              name="tenor"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewLoan.nikKtp"
            />
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <button
            type="submit"
            class="text-center text-lg bg-[#FF8000] text-white p-1 rounded w-4/5 hover:bg-[#D06800]"
          >
            Add Data Loan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewLoans",
  computed: {
    formAddNewLoan() {
      return this.$store.state.formAddNewLoan;
    }
  },
  methods: {
    addNewLoan() {
      this.$store.dispatch("addNewLoan");
      this.$router.push("/loans");
    }
  }
};
</script>
