<template>
  <div
    :class="
      routeName !== 'login'
        ? 'bg-[#FAFAFA] border-r border-[#D1D1D1] fixed w-48 h-full'
        : 'hidden'
    "
  >
    <div class="px-5 my-5">
      <h1 class="font-semibold text-2xl">PROSPERA</h1>
      <h1 class="text-base">Halo, {{ getUserData.nama }}</h1>
      <h1 class="text-[#6E6E6E] text-sm">{{ getUserData.hak }}</h1>
    </div>
    <div class="mt-10 px-2">
      <router-link to="/">
        <div
          :class="
            routeName == 'home'
              ? 'mb-2 border-l-4 border-[#FF8000] rounded w-full hover:bg-[#F0F0F0] hover:rounded'
              : 'mb-2 w-full hover:bg-[#F0F0F0] hover:rounded'
          "
        >
          <div class="text-[#6E6E6E] px-3 py-2">
            <div class="inline">
              <font-awesome-icon
                :icon="iconFaHouse"
                :class="
                  routeName == 'home' ? 'text-[#FF8000]' : 'text-[#6E6E6E]'
                "
              />
            </div>
            <span
              :class="
                routeName == 'home'
                  ? 'ml-[10px] text-[#6F6F6F] font-semibold'
                  : 'ml-[10px] hover:text-[#4A4A4A]'
              "
              >Home</span
            >
          </div>
        </div>
      </router-link>
      <router-link to="/branch-officer" v-if="getUserData.hak == 'Pusat' || getUserData.hak == 'Head Branch Officer'">
        <div
          :class="
            routeName == 'branch-officer' || routeName == 'addNewBranchOfficer' || routeName == 'detailBranchOfficer'
              ? 'mb-2 border-l-4 border-[#FF8000] rounded w-full hover:bg-[#F0F0F0] hover:rounded'
              : 'mb-2 w-full hover:bg-[#F0F0F0] hover:rounded'
          "
        >
          <div class="text-[#6E6E6E] px-3 py-2">
            <div class="inline">
              <font-awesome-icon
                :icon="iconFaUserTie"
                :class="
                  routeName == 'branch-officer' ||
                  routeName == 'addNewBranchOfficer' || routeName == 'detailBranchOfficer'
                    ? 'text-[#FF8000]'
                    : 'text-[#6E6E6E]'
                "
              />
            </div>
            <span
              :class="
                routeName == 'branch-officer' ||
                routeName == 'addNewBranchOfficer' || routeName == 'detailBranchOfficer'
                  ? 'ml-[10px] text-[#6F6F6F] font-semibold'
                  : 'ml-[10px] hover:text-[#4A4A4A]'
              "
              >Branch Officer</span
            >
          </div>
        </div>
      </router-link>
      <router-link to="/loans">
        <div
          :class="
            routeName == 'loans' || routeName == 'addNewLoans'
              ? 'mb-2 border-l-4 border-[#FF8000] rounded w-full hover:bg-[#F0F0F0] hover:rounded'
              : 'mb-2 w-full hover:bg-[#F0F0F0] hover:rounded'
          "
        >
          <div class="text-[#6E6E6E] px-3 py-2">
            <div class="inline w-full">
              <font-awesome-icon
                :icon="iconFaHandHoldingDollar"
                :class="
                  routeName == 'loans' || routeName == 'addNewLoans'
                    ? 'text-[#FF8000]'
                    : 'text-[#6E6E6E]'
                "
              />
            </div>
            <span
              :class="
                routeName == 'loans' || routeName == 'addNewLoans'
                  ? 'ml-[10px] text-[#6F6F6F] font-semibold'
                  : 'ml-[10px] hover:text-[#4A4A4A]'
              "
              >Loans</span
            >
          </div>
        </div>
      </router-link>
      <router-link to="/savings">
        <div
          :class="
            routeName == 'savings'
              ? 'mb-2 border-l-4 border-[#FF8000] rounded w-full hover:bg-[#F0F0F0] hover:rounded'
              : 'mb-2 w-full hover:bg-[#F0F0F0] hover:rounded'
          "
        >
          <div class="text-[#6E6E6E] px-3 py-2">
            <div class="inline w-full">
              <font-awesome-icon
                :icon="iconFaCircleDollarToSlot"
                :class="
                  routeName == 'savings' ? 'text-[#FF8000]' : 'text-[#6E6E6E]'
                "
              />
            </div>
            <span
              :class="
                routeName == 'savings'
                  ? 'ml-[10px] text-[#6F6F6F] font-semibold'
                  : 'ml-[10px] hover:text-[#4A4A4A]'
              "
              >Savings</span
            >
          </div>
        </div>
      </router-link>
      <router-link to="/customers">
        <div
          :class="
            routeName == 'customers' || routeName == 'addNewCustomers' || routeName == 'detailCustomer'
              ? 'mb-2 border-l-4 border-[#FF8000] rounded w-full hover:bg-[#F0F0F0] hover:rounded'
              : 'mb-2 w-full hover:bg-[#F0F0F0] hover:rounded'
          "
        >
          <div class="text-[#6E6E6E] px-3 py-2">
            <div class="inline w-full">
              <font-awesome-icon
                :icon="iconFaUserGroup"
                :class="
                  routeName == 'customers' || routeName == 'addNewCustomers' || routeName == 'detailCustomer'
                    ? 'text-[#FF8000]'
                    : 'text-[#6E6E6E]'
                "
              />
            </div>
            <span
              :class="
                routeName == 'customers' || routeName == 'addNewCustomers' || routeName == 'detailCustomer'
                  ? 'ml-[10px] text-[#6F6F6F] font-semibold'
                  : 'ml-[10px] hover:text-[#4A4A4A]'
              "
              >Customers</span
            >
          </div>
        </div>
      </router-link>
      <div
        class="mb-2 w-full hover:bg-[#F0F0F0] hover:rounded"
        @click="logoutUser"
      >
        <div class="text-[#6E6E6E] px-3 py-2">
          <div class="inline w-full">
            <font-awesome-icon :icon="iconFaRightFromBracket" />
          </div>
          <span class="ml-[11px] hover:text-[#4A4A4A]">Logout</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  faCircleDollarToSlot,
  faHandHoldingDollar,
  faHouse,
  faRightFromBracket,
  faUserTie,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { mapGetters } from "vuex";

export default {
  name: "SideBar",
  props: ["routeName"],
  computed: {
    ...mapGetters(["getUserData"]),
    currentRouteName() {
      return this.$route.name;
    },
    iconFaCircleDollarToSlot() {
      return faCircleDollarToSlot;
    },
    iconFaHandHoldingDollar() {
      return faHandHoldingDollar;
    },
    iconFaHouse() {
      return faHouse;
    },
    iconFaRightFromBracket() {
      return faRightFromBracket;
    },
    iconFaUserGroup() {
      return faUserGroup;
    },
    iconFaUserTie() {
      return faUserTie;
    },
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
  },
};
</script>
