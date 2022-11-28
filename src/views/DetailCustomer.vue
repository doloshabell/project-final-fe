<template>
  <div class="pl-5 pr-14">
    <div class="flex flex-col mt-4">
      <div class="flex flex-row justify-between mb-10">
        <h1 class="font-semibold text-xl">Detail Customer</h1>
        <router-link
          to="/customers/update"
          v-if="getUserData.hak == 'Head Branch Officer'"
        >
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
        <div class="mt-5">
          <div
            class="bg-[#D1D1D1] border flex flex-col px-6 py-2 rounded-md w-full hover:cursor-pointer"
          >
            <div
              :class="
                isShowLoans
                  ? 'flex flex-row justify-between border-b-2 border-[#FAFAFA] pb-1 items-center align-middle mb-7'
                  : 'flex flex-row justify-between items-center align-middle'
              "
              @click="showLoans"
            >
              <div class="w-1/3">
                <h1 class="text-lg font-semibold">Pembiayaan</h1>
              </div>
              <div class="text-end w-1/3">
                <font-awesome-icon
                  :icon="!isShowLoans ? iconFaChevronDown : iconFaChevronUp"
                  class="mr-1"
                />
              </div>
            </div>
            <div v-if="isShowLoans">
              <div
                v-for="loan in getDetailCustomerData.pembiayaan"
                :key="loan.id"
              >
                <ListLoans :loan="loan" />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 mb-10">
          <div
            class="bg-[#FAFAFA] border flex flex-col px-6 py-2 rounded w-full hover:cursor-pointer"
          >
            <div
              :class="
                isShowSavings
                  ? 'flex flex-row justify-between border-b-2 border-[#D1D1D1] pb-1 items-center align-middle mb-7'
                  : 'flex flex-row justify-between items-center align-middle'
              "
              @click="showSavings"
            >
              <div class="w-1/3">
                <h1 class="text-lg font-semibold">Tabungan</h1>
              </div>
              <div class="text-end w-1/3">
                <font-awesome-icon
                  :icon="!isShowSavings ? iconFaChevronDown : iconFaChevronUp"
                  class="mr-1"
                />
              </div>
            </div>
            <div v-if="isShowSavings">
              <div v-for="mutation in getDetailSaving" :key="mutation.id">
                <ListMutation :mutation="mutation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ListLoans from "@/components/ListLoans.vue";
import ListMutation from "@/components/ListMutation.vue";

export default {
  name: "DetailCustomer",
  components: { ListLoans, ListMutation },
  data() {
    return {
      isShowLoans: false,
      isShowSavings: false,
    };
  },
  computed: {
    ...mapGetters(["getDetailCustomerData", "getDetailSaving", "getUserData"]),
    iconFaChevronDown() {
      return faChevronDown;
    },
    iconFaChevronUp() {
      return faChevronUp;
    },
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
    showLoans() {
      !this.isShowLoans
        ? (this.isShowLoans = true)
        : (this.isShowLoans = false);
    },
    showSavings() {
      !this.isShowSavings
        ? (this.isShowSavings = true)
        : (this.isShowSavings = false);
    },
  },
};
</script>
