<template>
  <div class="pl-5 pr-14">
    <div class="flex flex-col mt-4">
      <div class="flex flex-row justify-between mb-10">
        <h1 class="font-semibold text-xl">Detail Branch Officer</h1>
        <router-link to="/branch-officer/update">
          <button
            v-if="
              getUserData.hak == 'Pusat' ||
              getUserData.hak == 'Head Branch Officer'
            "
            @click="getDataBranchOfficer"
            class="p-2 rounded-md font-normal text-base text-white bg-[#FF8000] hover:bg-[#D06800]"
          >
            <font-awesome-icon icon="fa-solid fa-wrench" class="mr-1" />
            Update Branch Officer
          </button>
        </router-link>
      </div>
      <div class="w-full">
        <div class="mb-2">
          <span>Nama</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailBranchOfficerData.nama }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Nomor Induk Karyawan</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailBranchOfficerData.nikKaryawan }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Nomor Induk Kependudukan</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailBranchOfficerData.nikKtp }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Tempat Lahir</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailBranchOfficerData.tempatLahir }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Tanggal Lahir</span>
          <h1 class="font-semibold text-lg">
            {{
              new Date(getDetailBranchOfficerData.tanggalLahir).toLocaleString(
                "id",
                { year: "numeric", month: "long", day: "numeric" }
              )
            }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Alamat</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailBranchOfficerData.alamat }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Posisi Jabatan</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailBranchOfficerData.jabatan }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Penempatan Kerja</span>
          <h1 class="font-semibold text-lg">
            {{ getDetailBranchOfficerData.cabang }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Status Karyawan</span>
          <h1 class="font-semibold text-lg">
            {{
              getDetailBranchOfficerData.status === 1 ? "Aktif" : "Non Aktif"
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
  name: "DetailBranchOfficer",
  computed: {
    ...mapGetters(["getDetailBranchOfficerData", "getUserData"]),
  },
  methods: {
    getDataBranchOfficer() {
      this.$store.commit("SET_FORM_UPDATE_BRANCH_OFFICER", {
        id: this.getDetailBranchOfficerData.id,
        nikKaryawan: this.getDetailBranchOfficerData.nikKaryawan,
        nikKtp: this.getDetailBranchOfficerData.nikKtp,
        nama: this.getDetailBranchOfficerData.nama,
        tanggalLahir: this.getDetailBranchOfficerData.tanggalLahir,
        tempatLahir: this.getDetailBranchOfficerData.tempatLahir,
        alamat: this.getDetailBranchOfficerData.alamat,
        jabatan: this.getDetailBranchOfficerData.jabatan,
        cabang: this.getDetailBranchOfficerData.cabang,
        status: this.getDetailBranchOfficerData.status,
      });
    },
  },
};
</script>
