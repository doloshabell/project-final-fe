<template>
  <div class="flex h-screen items-center justify-center w-full">
    <h1 class="font-bold text-2xl">Selamat Datang di PROSPERA</h1>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "HomePage", 
  created() {
    axios
      .get("http://192.168.100.7:8080/api/officer")
      .then(({ data }) => {
        console.log(data.payload);
      })
      .catch((err) => alert(err));
  }
};
</script>
