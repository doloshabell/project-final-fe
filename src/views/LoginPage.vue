<template>
  <div class="flex justify-center w-full h-screen items-center">
    <div class="flex flex-col justify-center">
      <h1 class="text-4xl mb-5">Welcome to Prospera</h1>
      <div class="p-3 border border-black rounded-lg">
        <form autocomplete="off">
          <div class="mb-2">
            <p class="text-lg">Email</p>
            <input
              type="text"
              name="email"
              class="border-b-2 border-[#1B1A17] p-1 w-full focus:outline-none"
              autocomplete="false"
            />
          </div>
          <div class="mb-4">
            <p class="text-lg">Password</p>
            <input
              type="password"
              name="password"
              class="border-b-2 border-[#1B1A17] p-1 w-full focus:outline-none"
            />
          </div>
          <input
            type="button"
            value="Login"
            class="text-center text-xl border border-black p-1 rounded w-full"
          />
        </form>
      </div>
      <div class="flex justify-center relative top-20">
        <img src="../assets/logo_btpns.png" alt="Logo BTPN Syariah" class="w-[115px] h-[64px]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>
