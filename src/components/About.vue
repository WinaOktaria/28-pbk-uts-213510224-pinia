<template>
  <div class="about-container">
    <h1>About Us</h1>
    <div class="content">
      <p>Kami adalah tim pengembang yang bersemangat yang membuat perangkat lunak luar biasa.</p>
      <p>Tujuan kami adalah menciptakan produk yang disukai orang untuk digunakan dan yang membuat perbedaan nyata dalam hidup mereka.</p>
      <p>Baik dalam mengerjakan proyek kecil atau besar, kami selalu berusaha untuk mencapai kesempurnaan dan bangga dengan pekerjaan kami.</p>
      <p>Jika Anda tertarik untuk bekerja dengan kami atau mempelajari lebih lanjut tentang apa yang kami lakukan, jangan ragu untuk menghubungi kami!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  component: {}
}
</script>

<style>
.about-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  background-color: #DEB887;
  padding: 2rem;
  padding-top: 5px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

h1 {
  font-size: 3rem;
  color: black;
  margin-top: 2rem;
}

.content {
  margin-top: 3rem;
}

p {
  font-size: 1.5rem;
  color: #444444;
  margin-top: 1rem;
  line-height: 1.5;
}
</style>

