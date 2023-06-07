<template>
  <div class="container">
    <div class="card-container">
      <div class="right">
        <div class="right-container">
          <form action="">
            <br>
            <h2 class="lg-view">Hubungi Kami</h2>
            <h2 class="sm-view">Hubungi Kami</h2>
            <input type="text" placeholder="Nama">
            <input type="email" placeholder="Alamat Email">
            <input type="text" placeholder="Perusahaan" autocomplete="off">
            <input type="phone" placeholder="Telepon" autocomplete="off">
            <textarea rows="10" placeholder="Pesan"></textarea>
            <button>Kirim</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  components: {}
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card-container {
  display: flex;
  width: 100%;
}

.right {
  flex: 1;
  height: 460px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-container {
  width: 100%;
  height: 100%;
  text-align: center;
}

input,
textarea {
  background-color: #DEB887;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: 1px solid #00b4cf;
}

button {
  border-radius: 20px;
  border: 1px solid grey;
  background-color: grey;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-out;
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}

textarea {
  height: 90px;
}

/* responsive */
@media only screen and (max-width: 600px) {
  .left {
    display: none;
  }

  .lg-view {
    display: none;
  }
}

@media only screen and (min-width: 600px) {
  .sm-view {
    display: none;
  }
}
</style>
