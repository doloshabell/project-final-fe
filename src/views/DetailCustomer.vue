<template>
  <div class="pl-5 pr-14">
    <div class="flex flex-col mt-4">
      <div class="flex flex-row justify-between mb-10">
        <h1 class="font-semibold text-xl">Detail Customer</h1>
        <router-link to="/customers/update">
          <button
            @click="getDataCustomer"
            class="p-2 rounded-md font-normal text-base text-white bg-[#FF8000] hover:bg-[#D06800]"
          >
            <font-awesome-icon icon="fa-solid fa-wrench" class="mr-1" />
            Update Customer
          </button>
        </router-link>
      </div>
      <div class="w-full">
        <div class="mb-2">
          <span>Nama</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailCustomerData.nama }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Nomor Induk Kependudukan</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailCustomerData.nikKtp }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Nomor Rekening</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailCustomerData.noRekening }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Jumlah Saldo</span>
          <h1 class="font-semibold text-lg">
            {{
              new Intl.NumberFormat("id", {
                style: "currency",
                currency: "IDR",
              }).format(getDetailCustomerData.saldo)
            }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Email</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailCustomerData.email }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Nomor Telephone</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailCustomerData.noHP }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Alamat</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailCustomerData.alamat }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Pekerjaan</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailCustomerData.pekerjaan }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Agen Warung Tepat</span>
          <h1 class="font-semibold text-lg">
            {{
              getDetailCustomerData.flagWarungTepat === 1
                ? "Terdaftar"
                : "Tidak Terdaftar"
            }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Aktif Sejak</span>
          <h1 class="font-semibold text-lg">
            {{
              new Date(getDetailCustomerData.tanggalBuat).toLocaleString("id", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DetailCustomer",
  computed: {
    ...mapGetters(["getDetailCustomerData"]),
  },
  methods: {
    getDataCustomer() {
      this.$store.commit("SET_FORM_UPDATE_CUSTOMER", {
        id: this.getDetailCustomerData.id,
        nama: this.getDetailCustomerData.nama,
        nikKtp: this.getDetailCustomerData.nikKtp,
        email: this.getDetailCustomerData.email,
        password: this.getDetailCustomerData.password,
        noHP: this.getDetailCustomerData.noHP,
        pekerjaan: this.getDetailCustomerData.pekerjaan,
        alamat: this.getDetailCustomerData.alamat,
        flagWarungTepat: this.getDetailCustomerData.flagWarungTepat,
        tanggalBuat: this.getDetailCustomerData.tanggalBuat,
      });
    },
  },
};
</script>
