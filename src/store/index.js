import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import localForage from "localforage";
import router from "@/router";
import axios from "axios";
import baseUrlAPI from "@/api";

const vuexLocal = new VuexPersistence({
  storage: localForage,
  asyncStorage: true,
});

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userData: {
      isLogin: false,
      nama: "",
      hak: "",
    },
    formAddNewBranchOfficer: {
      nama: "",
      nikKtp: "",
      password: "",
      tanggalLahir: "",
      tempatLahir: "",
      alamat: "",
      jabatan: "",
      cabang: "",
    },
    formAddNewCustomer: {
      nama: "",
      nikKtp: "",
      email: "",
      password: "",
      noHP: "",
      pekerjaan: "",
      alamat: "",
      flagWarungTepat: "",
    },
    formAddNewLoan: {
      status: "1",
      jumlahPembiayaan: "",
      jumlahHarusBayar: "",
      jumlahHarusBayarBulan: "",
      tenor: "",
      nikKtp: "",
    },
    formUpdateBranchOfficer: {
      id: "",
      nikKaryawan: "",
      nikKtp: "",
      nama: "",
      tanggalLahir: "",
      tempatLahir: "",
      alamat: "",
      jabatan: "",
      cabang: "",
      status: "",
    },
    formUpdateCustomer: {
      id: "",
      nama: "",
      nikKtp: "",
      email: "",
      password: "",
      noHP: "",
      pekerjaan: "",
      alamat: "",
      flagWarungTepat: "",
      tanggalBuat: "",
    },
    allBranchOfficers: [],
    allLoans: [],
    allSavings: [],
    allCustomers: [],
    detailBranchOfficer: {},
    detailCustomer: {},
  },
  mutations: {
    SET_USER_DATA(state, payload) {
      if (!state.userData.isLogin) {
        state.userData.isLogin = true;
        state.userData.nama = payload.nama;
        state.userData.hak = payload.hak;
      } else if (state.userData.isLogin) {
        state.userData.isLogin = false;
        state.userData.nama = payload.nama;
        state.userData.hak = payload.hak;
        state.allBranchOfficers = payload.allBranchOfficers;
        state.allLoans = payload.allLoans;
        state.allSavings = payload.allSavings;
        state.allCustomers = payload.allCustomers;
      }
    },
    SET_ALL_BRANCH_OFFICERS_DATA(state, payload) {
      state.allBranchOfficers = payload;
    },
    SET_ALL_LOANS_DATA(state, payload) {
      state.allLoans = payload;
    },
    SET_ALL_SAVINGS_DATA(state, payload) {
      state.allSavings = payload;
    },
    SET_ALL_CUSTOMERS_DATA(state, payload) {
      state.allCustomers = payload;
    },
    SET_FORM_ADD_NEW_BRANCH_OFFICER(state, payload) {
      state.formAddNewBranchOfficer = payload;
    },
    SET_FORM_ADD_NEW_LOAN(state, payload) {
      state.formAddNewLoan = payload;
    },
    SET_FORM_ADD_NEW_CUSTOMER(state, payload) {
      state.formAddNewCustomer = payload;
    },
    SET_FORM_UPDATE_BRANCH_OFFICER(state, payload) {
      state.formUpdateBranchOfficer = payload;
    },
    SET_FORM_UPDATE_CUSTOMER(state, payload) {
      state.formUpdateCustomer = payload;
    },
    SET_DETAIL_BRANCH_OFFICER(state, payload) {
      state.detailBranchOfficer = payload;
    },
    SET_DETAIL_CUSTOMER(state, payload) {
      state.detailCustomer = payload;
    },
    ADD_NEW_BRANCH_OFFICER_DATA(state, payload) {
      state.allBranchOfficers.push(payload);
    },
    ADD_NEW_LOAN_DATA(state, payload) {
      state.allLoans.push(payload);
    },
    ADD_NEW_CUSTOMER_DATA(state, payload) {
      state.allCustomers.push(payload);
    },
  },
  actions: {
    loginUser({ commit }, data) {
      axios
        .post(`${baseUrlAPI}/login`, data)
        .then(({ data, status }) => {
          if (status === 200) {
            localStorage.setItem("nama", data.payload.nama);
            localStorage.setItem("hak", data.payload.jabatan);
            commit("SET_USER_DATA", {
              nama: data.payload.nama,
              hak: data.payload.jabatan,
            });
            router.push("/");
          }
        })
        .catch((err) => console.log(err));
    },
    logoutUser({ commit }) {
      localStorage.removeItem("nama");
      localStorage.removeItem("hak");
      commit("SET_USER_DATA", {
        nama: "",
        hak: "",
      });
      router.push("/login");
    },
    getAllBranchOfficers({ commit }) {
      axios
        .get(`${baseUrlAPI}/api/officer/all`)
        .then(({ data, status }) => {
          if (status === 200) {
            commit("SET_ALL_BRANCH_OFFICERS_DATA", data.payload);
          }
        })
        .catch((err) => console.log(err));
    },
    getAllLoans({ commit }) {
      axios
        .get(`${baseUrlAPI}/api/pembiayaan/all`)
        .then(({ data, status }) => {
          if (status === 200) {
            commit("SET_ALL_LOANS_DATA", data.payload);
          }
        })
        .catch((err) => console.log(err));
    },
    getAllSavings({ commit }) {
      axios
        .get(`${baseUrlAPI}/api/tabungan/all`)
        .then(({ data, status }) => {
          if (status === 200) {
            commit("SET_ALL_SAVINGS_DATA", data.payload);
          }
        })
        .catch((err) => console.log(err));
    },
    getAllCustomers({ commit }) {
      axios
        .get(`${baseUrlAPI}/api/nasabah/all`)
        .then(({ data, status }) => {
          if (status === 200) {
            commit("SET_ALL_CUSTOMERS_DATA", data.payload);
          }
        })
        .catch((err) => console.log(err));
    },
    getDetailBranchOfficer({ commit }, nikKaryawan) {
      axios
        .get(`${baseUrlAPI}/api/officer/${nikKaryawan}`)
        .then(({ data }) => {
          commit("SET_DETAIL_BRANCH_OFFICER", data.payload);
        })
        .catch((err) => console.log(err));
    },
    getDetailCustomer({ commit }, nikKtp) {
      axios
        .get(`${baseUrlAPI}/api/nasabah/${nikKtp}`)
        .then(({ data }) => {
          commit("SET_DETAIL_CUSTOMER", data.payload);
        })
        .catch((err) => console.log(err));
    },
    addNewBranchOfficer({ commit, state }) {
      axios
        .post(`${baseUrlAPI}/api/officer/create`, state.formAddNewBranchOfficer)
        .then(({ data }) => {
          commit("ADD_NEW_BRANCH_OFFICER_DATA", data.payload);
          commit("SET_FORM_ADD_NEW_BRANCH_OFFICER", {
            nama: "",
            nikKtp: "",
            password: "",
            tanggalLahir: "",
            tempatLahir: "",
            alamat: "",
            jabatan: "",
            cabang: "",
          });
        })
        .catch((err) => console.log(err));
    },
    addNewCustomer({ commit, state }) {
      axios
        .post(`${baseUrlAPI}/api/nasabah/create`, state.formAddNewCustomer)
        .then(({ data }) => {
          commit("ADD_NEW_CUSTOMER_DATA", data.payload);
          commit("SET_FORM_ADD_NEW_CUSTOMER", {
            nama: "",
            nikKtp: "",
            email: "",
            password: "",
            noHP: "",
            pekerjaan: "",
            alamat: "",
            flagWarungTepat: "",
          });
        })
        .catch((err) => console.log(err));
    },
    addNewLoan({ commit, state }) {
      axios
        .post(`${baseUrlAPI}/api/pembiayaan/create`, state.formAddNewLoan)
        .then(({ data }) => {
          console.log(data);
          commit("ADD_NEW_LOAN_DATA", data.payload);
          commit("SET_FORM_ADD_NEW_LOAN", {
            status: "1",
            jumlahPembiayaan: "",
            jumlahHarusBayar: "",
            jumlahHarusBayarBulan: "",
            tenor: "",
            nikKtp: "",
          });
        })
        .catch((err) => console.log(err));
    },
    updateBranchOfficer({ commit, state }) {
      axios
        .put(`${baseUrlAPI}/api/officer/update`, state.formUpdateBranchOfficer)
        .then(({ status }) => {
          if (status == 200) {
            commit("SET_FORM_UPDATE_BRANCH_OFFICER", {
              id: "",
              nikKaryawan: "",
              nikKtp: "",
              nama: "",
              tanggalLahir: "",
              tempatLahir: "",
              alamat: "",
              jabatan: "",
              cabang: "",
              status: "",
            });
          }
        })
        .catch((err) => console.log(err));
    },
    updateCustomer({ commit, state }) {
      axios
        .put(`${baseUrlAPI}/api/nasabah/update`, state.formUpdateCustomer)
        .then(({ status }) => {
          if (status == 200) {
            commit("SET_FORM_UPDATE_CUSTOMER", {
              id: "",
              nama: "",
              nikKtp: "",
              email: "",
              password: "",
              noHP: "",
              pekerjaan: "",
              alamat: "",
              flagWarungTepat: "",
              tanggalBuat: "",
            });
          }
        })
        .catch((err) => console.log(err));
    },
  },
  getters: {
    getUserData(state) {
      return state.userData;
    },
    getAllBranchOfficersData(state) {
      return state.allBranchOfficers;
    },
    getAllLoansData(state) {
      return state.allLoans;
    },
    getAllSavingsData(state) {
      return state.allSavings;
    },
    getAllCustomersData(state) {
      return state.allCustomers;
    },
    getDetailBranchOfficerData(state) {
      return state.detailBranchOfficer;
    },
    getDetailCustomerData(state) {
      return state.detailCustomer;
    },
  },
  plugins: [vuexLocal.plugin],
});

export default store;
