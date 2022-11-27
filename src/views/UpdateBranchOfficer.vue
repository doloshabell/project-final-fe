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
            <p class="mb-1 text-base">Nomor Induk Karyawan</p>
            <input
              type="text"
              name="nikKaryawan"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateBranchOfficer.nikKaryawan"
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
            <p class="mb-1 text-base">Tempat Lahir</p>
            <input
              type="text"
              name="tempatLahir"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateBranchOfficer.tempatLahir"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Alamat</p>
            <input
              type="text"
              name="alamat"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateBranchOfficer.alamat"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Jabatan</p>
            <input
              type="text"
              name="jabatan"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateBranchOfficer.jabatan"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Cabang</p>
            <input
              type="text"
              name="cabang"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateBranchOfficer.cabang"
            />
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
export default {
  name: "UpdateBranchOfficer",
  computed: {
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
