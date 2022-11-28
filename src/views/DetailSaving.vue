<template>
  <div class="pl-5 pr-14">
    <div class="flex flex-col mt-4">
      <div class="flex flex-row justify-between mb-10">
        <h1 class="font-semibold text-xl">Detail Saving</h1>
      </div>
      <div class="w-full">
        <div class="mb-2">
          <span>Nama</span>
          <h1 class="font-semibold text-base">
            {{ getDetailCustomerData.nama }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Nomor Rekening</span>
          <h1 class="font-semibold text-base">
            {{ getDetailCustomerData.noRekening }}
          </h1>
        </div>
        <div class="mb-2">
          <span>Jumlah Saldo</span>
          <h1 class="font-semibold text-base">
            {{
              new Intl.NumberFormat("id", {
                style: "currency",
                currency: "IDR",
              }).format(getDetailCustomerData.saldo)
            }}
          </h1>
        </div>
        <div class="mb-1 mt-10">
        <h1 class="font-semibold text-xl">Mutasi Rekening</h1>
      </div>
        <div class="mt-5">
          <div v-for="mutation in getDetailSaving" :key="mutation.id">
            <ListMutation :mutation="mutation" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListMutation from "../components/ListMutation.vue";

export default {
  name: "DetailSaving",
  components: { ListMutation },
  computed: {
    ...mapGetters(["getDetailCustomerData", "getDetailSaving"]),
  },
};
</script>
