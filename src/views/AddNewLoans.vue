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
              @focusout="upData"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Jumlah Yang Harus Dibayar</p>
            <input
              type="text"
              name="jumlahHarusBayar"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              :value="jumlahHarusBayar"
              disabled
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Jumlah Angsuran Per Bulan</p>
            <input
              type="text"
              name="angsuranPerBulan"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              :value="jumlahHarusBayarBulan"
              disabled
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Tenor</p>
            <input
              type="text"
              name="tenor"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              :value="tenorPinjaman"
              disabled
            />
          </div>
          <div class="mr-4">
            <p class="mb-1 text-base">NIK</p>
            <select
              name="nikKtp"
              id="nikKtp"
              class="ml-[3px] rounded-sm p-1 w-full outline"
              v-model="formAddNewLoan.nikKtp"
            >
              <option
                v-for="customerData in getAllCustomersData"
                :key="customerData.id"
                :value="customerData.nikKtp"
              >
                {{ `${customerData.nikKtp} - ${customerData.nama}` }}
              </option>
            </select>
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
      <div class="mt-7" v-if="jumlahHarusBayar > 0">
        <div class="border-b-2 border-black pb-1 w-full">
          <h1 class="font-semibold text-xl">Simulasi Pinjaman</h1>
        </div>
        <div class="flex flex-row justify-between">
          <h1 class="font-semibold text-start text-lg w-1/4">Periode</h1>
          <h1 class="font-semibold text-center text-lg w-1/4">
            Angsuran Margin
          </h1>
          <h1 class="font-semibold text-center text-lg w-1/4">
            Angsuran Pokok
          </h1>
          <h1 class="font-semibold text-center text-lg w-1/4">
            Total Angsuran
          </h1>
        </div>
        <div class="mt-1">
          <div
            v-for="(cicilan, index) in simulasiPinjaman"
            :key="index"
            class="flex flex-row justify-between bg-[#D1D1D1] p-2 mb-2"
          >
            <h1 class="w-1/4 text-base font-medium text-start">
              {{ cicilan.angsuran }}
            </h1>
            <h1 class="w-1/4 text-base font-medium text-center">
              {{ cicilan.angsuranMargin }}
            </h1>
            <h1 class="w-1/4 text-base font-medium text-center">
              {{ cicilan.angsuranPokok }}
            </h1>
            <h1 class="w-1/4 text-base font-medium text-center">
              {{ cicilan.totalAngsuran }}
            </h1>
          </div>
        </div>
        <div class="flex flex-row justify-between bg-[#D1D1D1] p-2 mt-[6px] mb-10">
          <h1 class="w-1/4 text-base font-semibold text-start">Total</h1>
          <h1 class="w-1/4 text-base font-semibold text-center">
            {{ totalAngsuranMargin }}
          </h1>
          <h1 class="w-1/4 text-base font-semibold text-center">
            {{ totalAngsuranPokok }}
          </h1>
          <h1 class="w-1/4 text-base font-semibold text-center">
            {{ totalAngsuranPokok + totalAngsuranMargin }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddNewLoans",
  data() {
    return {
      jumlahHarusBayar: "",
      jumlahHarusBayarBulan: "",
      tenorPinjaman: "",
      simulasiPinjaman: [],
      totalAngsuranMargin: "",
      totalAngsuranPokok: "",
    };
  },
  computed: {
    ...mapGetters(["getAllCustomersData"]),
    formAddNewLoan() {
      return this.$store.state.formAddNewLoan;
    },
  },
  updated() {
    if (this.jumlahHarusBayar <= 0 || this.jumlahHarusBayar == "") {
      this.simulasiPinjaman = [];
    }
  },
  methods: {
    addNewLoan() {
      this.formAddNewLoan.jumlahHarusBayar = this.jumlahHarusBayar.toString();
      this.formAddNewLoan.jumlahHarusBayarBulan =
        this.jumlahHarusBayarBulan.toString();
      this.formAddNewLoan.tenor = "12";
      this.$store.dispatch("addNewLoan");
      this.jumlahHarusBayar = "";
      this.jumlahHarusBayarBulan = "";
      this.simulasiPinjaman = [];
      this.totalAngsuranMargin = "";
      this.totalAngsuranPokok = "";
      // this.$router.push("/loans");
    },
    upData() {
      this.jumlahHarusBayar =
        this.formAddNewLoan.jumlahPembiayaan * 0.3 +
        parseInt(this.formAddNewLoan.jumlahPembiayaan);
      this.jumlahHarusBayarBulan = this.jumlahHarusBayar / 12;
      this.tenorPinjaman = "12";
      let angsuranMargin = (this.formAddNewLoan.jumlahPembiayaan * 0.3) / 12;
      this.totalAngsuranMargin = angsuranMargin * 12;
      let angsuranPokok = this.formAddNewLoan.jumlahPembiayaan / 12;
      this.totalAngsuranPokok = angsuranPokok * 12;
      let totalAngsuran = angsuranMargin + angsuranPokok;
      if (this.simulasiPinjaman.length > 0) {
        this.simulasiPinjaman = []
      }
      for (let i = 1; i <= 12; i++) {
        let cicilan = {};
        cicilan["angsuran"] = i;
        cicilan["angsuranMargin"] = angsuranMargin;
        cicilan["angsuranPokok"] = angsuranPokok;
        cicilan["totalAngsuran"] = totalAngsuran;
        this.simulasiPinjaman.push(cicilan);
      }
    },
  },
};
</script>
