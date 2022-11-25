<template>
  <div class="pl-5 pr-14">
    <div class="mt-4">
      <h1 class="font-semibold text-xl">Add New Branch Officer</h1>
    </div>
    <div class="mt-6">
      <form>
        <div class="grid grid-cols-2 gap-4">
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Nama</p>
            <input
              type="text"
              name="email"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Nomor Induk Kependudukan</p>
            <input
              type="text"
              name="nik"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Password</p>
            <input
              type="password"
              name="password"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Tanggal Lahir</p>
            <input
              type="text"
              name="tanggalLahir"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Tempat Lahir</p>
            <input
              type="text"
              name="tempatLahir"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Alamat</p>
            <input
              type="text"
              name="alamat"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Agama</p>
            <input
              type="text"
              name="agama"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Jabatan</p>
            <input
              type="text"
              name="jabatan"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
            />
          </div>
          <div class="mb-2 mr-4">
            <p class="mb-1 text-base">Cabang</p>
            <input
              type="text"
              name="cabang"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
            />
          </div>
          <div class="mb-2">
            <p class="mb-1 text-base">Jenis Kelamin</p>
            <input
              type="text"
              name="jenisKelamin"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
            />
          </div>
          <div class="mb-4 mr-4">
            <p class="mb-1 text-base">Status</p>
            <input
              type="text"
              name="status"
              class="ml-[3px] rounded-sm p-[2px] w-full outline"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="text-center text-lg bg-[#FF8000] text-white p-1 rounded w-4/5 hover:bg-[#D06800]"
          >
            Add Data
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewBranchOfficer",
};
</script>
