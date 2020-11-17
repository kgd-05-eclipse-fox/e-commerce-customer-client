<template>
<div class="container d-flex p-0">
    <div class=" row">
        <div v-for="el in allDataProduct" :key="el.id">
            <div v-if="el == allDataProduct[0] || el == allDataProduct[1] || el == allDataProduct[2]" class="col-3 mx-4">
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <div class="card text-light" style="background-color: #223B4C; border-radius: 20px;">
                                <img class="card-img-top" :src="el.image_url" alt="HYPERLITE SUMMIT 35">
                                <div class="card-body">
                                    <h6 class="card-title">{{ el.name }}</h6>
                                    <h6 class="card-title">Stock: {{ el.stock }} Pcs</h6>
                                </div>
                            </div>
                        </div>
                        <div class="flip-box-back">
                            <div class="card text-light" style="background-color: #223B4C; border-radius: 20px;">
                                <img class="card-img-top" :src="el.image_url" alt="HYPERLITE SUMMIT 35">
                                <div class="card-body">
                                    <h6 class="card-title">{{ el.name }}</h6>
                                    <p style="font-size: small;" class="card-text mb-1  text-monospace">Rp. {{ el.price }},00</p>
                                    <div class=" d-flex justify-content-between">
                                        <a href="">
                                            <img class=" my-1" src="../assets/img/love.png" alt="">
                                        </a>
                                        <a href="">
                                            <img @click.prevent="infoGambar(el)" class=" my-1" src="../assets/img/detail.png" alt="">
                                        </a>
                                        <a href="">
                                            <img class=" my-1" src="../assets/img/shop.png" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="el !== allDataProduct[0] || el !== allDataProduct[1] || el !== allDataProduct[2]" class="col-3 mx-4" style="margin-top: 200px;">
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <div class="card text-light" style="background-color: #223B4C; border-radius: 20px;">
                                <img class="card-img-top" :src="el.image_url" alt="HYPERLITE SUMMIT 35">
                                <div class="card-body">
                                    <h6 class="card-title">{{ el.name }}</h6>
                                    <h6 class="card-title">Stock: {{ el.stock }} Pcs</h6>
                                </div>
                            </div>
                        </div>
                        <div class="flip-box-back">
                            <div class="card text-light" style="background-color: #223B4C; border-radius: 20px;">
                                <img class="card-img-top" :src="el.image_url" alt="HYPERLITE SUMMIT 35">
                                <div class="card-body">
                                    <h6 class="card-title">{{ el.name }}</h6>
                                    <p style="font-size: small;" class="card-text mb-1  text-monospace">Rp. {{ el.price }},00</p>
                                    <div class=" d-flex justify-content-between">
                                        <a href="">
                                            <img class=" my-1" src="../assets/img/love.png" alt="">
                                        </a>
                                        <a href="">
                                            <img @click.prevent="infoGambar(el)" class=" my-1" src="../assets/img/detail.png" alt="">
                                        </a>
                                        <a href="">
                                            <img class=" my-1" src="../assets/img/shop.png" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Card',
  data () {
    return {
      detailProduct: []
    }
  },
  methods: {
    infoGambar (data) {
      this.detailProduct = data
      Swal.fire({
        imageUrl: this.detailProduct.image_url,
        title: this.detailProduct.name,
        text: `Price: Rp. ${this.detailProduct.price},00. Stock: ${this.detailProduct.stock} pcs`,
        imageHeight: 250,
        imageAlt: 'A tall image'
      })
    }
  },
  computed: {
    allDataProduct () {
      return this.$store.state.setDataAllProduct
    }
  }
}
</script>

<style scoped>
.flip-box {
  background-color: transparent;
  width: 300px;
  height: 200px;
  /* border: 1px solid #f1f1f1; */
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side */
.flip-box-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-box-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>
