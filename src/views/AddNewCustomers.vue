<template>
  <div class="pl-5 pr-14">
    <div class="mt-4">
      <h1 class="font-semibold text-xl">Add New Customer</h1>
    </div>
    <div class="mt-6">
      <form @submit.prevent="addNewCustomer">
        <div class="grid grid-cols-2 gap-4">
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Nama</p>
            <input
              type="text"
              name="email"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewCustomer.nama"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Nomor Induk Kependudukan</p>
            <input
              type="text"
              name="nik"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewCustomer.nikKtp"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Email</p>
            <input
              type="text"
              name="email"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewCustomer.email"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Password</p>
            <input
              type="password"
              name="password"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewCustomer.password"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">No Handphone</p>
            <input
              type="text"
              name="noHandphone"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewCustomer.noHP"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Pekerjaan</p>
            <input
              type="text"
              name="pekerjaan"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewCustomer.pekerjaan"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Alamat</p>
            <input
              type="text"
              name="alamat"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
              v-model="formAddNewCustomer.alamat"
            />
          </div>
          <div class="mb-4">
            <p class="mb-1 text-base">Agen Warung Tepat?</p>
            <input
              v-model="formAddNewCustomer.flagWarungTepat"
              type="radio"
              value="1"
              name="ya"
            />
            <label for="ya" class="ml-1 mr-4">Ya</label>
            <input
              v-model="formAddNewCustomer.flagWarungTepat"
              type="radio"
              value="0"
              name="tidak"
            />
            <label for="tidak" class="ml-1">Tidak</label>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="text-center text-lg bg-[#FF8000] text-white p-1 rounded w-4/5 hover:bg-[#D06800]"
          >
            Add Data Customer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewCustomers",
  computed: {
    formAddNewCustomer() {
      return this.$store.state.formAddNewCustomer;
    }
  },
  methods: {
    addNewCustomer() {
      this.$store.dispatch("addNewCustomer");
      this.$router.push("/customers");
    }
  }
};
</script>
