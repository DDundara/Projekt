<template>
  <div class="about-container">
    <div class="about">
      <h2>O Nama</h2>
      <p>
        Dobrodošli u svijet Redomat, inovativne aplikacije koja revolucionira način na koji trošite svoje dragocjeno vrijeme čekajući u redovima. Mi vam omogućavamo da izbjegnete nepotrebno gubljenje vremena i stresa, pružajući vam mogućnost da unaprijed rezervirate svoje mjesto u redu čekanja u raznim ustanovama.
      </p>
    </div>
    <div class="about">
      <h2>Naša Misija</h2>
      <p>
        Naša misija je jednostavna - osigurati vam glatko i učinkovito iskustvo u čekanju u redovima. Redomat je stvoren kako bi odgovorio na sve češće izazove dugotrajnih i nepredvidivih čekanja u bankama, ljekarnama, restoranima, zdravstvenim ustanovama i drugim mjestima. Naš cilj je olakšati vam život tako što ćemo vam omogućiti da planirate svoje vrijeme bolje i iskoristite svaku minutu.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Stack content vertically */
  height: 50vh; /* Adjust this value to center vertically */
}

.about {
  text-align: center;
  padding: 20px;
  margin: 20px; /* Add some spacing between sections */
}
</style>