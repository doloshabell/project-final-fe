<template>
  <div class="pl-5 pr-14">
    <div class="mt-4">
      <h1 class="font-semibold text-xl">Update Branch Officer</h1>
    </div>
    <div class="mt-6">
      <form @submit.prevent="submitUpdateBranchOfficer">
        <div class="grid grid-cols-2 gap-4">
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Nama</p>
            <input
              type="text"
              name="nama"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateBranchOfficer.nama"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Nomor Induk Kependudukan</p>
            <input
              type="text"
              name="nik"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateBranchOfficer.nikKtp"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Tempat Lahir</p>
            <input
              type="text"
              name="tempatLahir"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateBranchOfficer.tempatLahir"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Tanggal Lahir</p>
            <input
              type="date"
              name="tanggalLahir"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateBranchOfficer.tanggalLahir"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Alamat</p>
            <input
              type="text"
              name="alamat"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateBranchOfficer.alamat"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Jabatan</p>
            <!-- <input
              type="text"
              name="jabatan"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateBranchOfficer.jabatan"
            /> -->
            <select
              name="jabatan"
              id="jabatan"
              class="ml-[3px] rounded-sm p-1 w-full outline"
              v-model="formUpdateBranchOfficer.jabatan"
            >
              <option
                value="Head Branch Officer"
                v-if="getUserData.hak == 'Pusat'"
              >
                Head Branch Officer
              </option>
              <option value="Community Officer">Community Officer</option>
            </select>
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Cabang</p>
            <select
              name="cabang"
              id="cabang"
              class="ml-[3px] rounded-sm p-1 w-full outline"
              v-model="formUpdateBranchOfficer.cabang"
            >
              <option value="Jawa">Jawa</option>
              <option value="Sumatera">Sumatera</option>
              <option value="Kalimantan">Kalimantan</option>
              <option value="Sulawesi">Sulawesi</option>
              <option value="Papua">Papua</option>
            </select>
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Status Bekerja</p>
            <input
              v-model="formUpdateBranchOfficer.status"
              type="radio"
              value="1"
              name="aktif"
            />
            <label for="aktif" class="ml-1 mr-4">Aktif</label>
            <input
              v-model="formUpdateBranchOfficer.status"
              type="radio"
              value="0"
              name="aktif"
            />
            <label for="aktif" class="ml-1">Tidak Aktif</label>
          </div>
        </div>
        <div class="flex justify-center mt-4">
          <button
            type="submit"
            class="text-center text-lg bg-[#FF8000] text-white p-1 rounded w-4/5 hover:bg-[#D06800]"
          >
            Update Data Branch Officer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UpdateBranchOfficer",
  computed: {
    ...mapGetters(["getUserData"]),
    formUpdateBranchOfficer() {
      return this.$store.state.formUpdateBranchOfficer;
    },
  },
  methods: {
    submitUpdateBranchOfficer() {
      this.$store.dispatch("updateBranchOfficer");
      this.$router.push("/branch-officer");
    },
  },
};
</script>
