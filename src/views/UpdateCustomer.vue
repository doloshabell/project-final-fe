<template>
  <div class="pl-5 pr-14">
    <div class="mt-4">
      <h1 class="font-semibold text-xl">Update Customer</h1>
    </div>
    <div class="mt-6">
      <form @submit.prevent="submitUpdateCustomers">
        <div class="grid grid-cols-2 gap-4">
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Nama</p>
            <input
              type="text"
              name="nama"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateCustomer.nama"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Nomor Induk Kependudukan</p>
            <input
              type="text"
              name="nikKtp"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateCustomer.nikKtp"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Email</p>
            <input
              type="text"
              name="email"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateCustomer.email"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">No HP</p>
            <input
              type="text"
              name="noHP"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateCustomer.noHP"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Pekerjaan</p>
            <input
              type="text"
              name="pekerjaan"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateCustomer.pekerjaan"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Alamat</p>
            <input
              type="text"
              name="alamat"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formUpdateCustomer.alamat"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Agen Warung Tepat</p>
            <input
              v-model="formUpdateCustomer.flagWarungTepat"
              type="radio"
              value="1"
              name="ya"
            />
            <label for="ya" class="ml-1 mr-4">Ya</label>
            <input
              v-model="formUpdateCustomer.flagWarungTepat"
              type="radio"
              value="0"
              name="tidak"
            />
            <label for="tidak" class="ml-1">Tidak</label>
          </div>
        </div>
        <div class="flex justify-center mt-4">
          <button
            type="submit"
            class="text-center text-lg bg-[#FF8000] text-white p-1 rounded w-4/5 hover:bg-[#D06800]"
          >
            Update Data Customer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateCustomer",
  computed: {
    formUpdateCustomer() {
      return this.$store.state.formUpdateCustomer;
    },
  },
  methods: {
    submitUpdateCustomers() {
      this.$store.dispatch("updateCustomer");
      this.$router.push("/customers");
    },
  },
};
</script>
