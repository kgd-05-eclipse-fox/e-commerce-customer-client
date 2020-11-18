<template>
  <div id="basket">
    <div>
        <NavBar/>
    </div>
    <div class="container">
        <div class=" d-flex justify-content-center mb-4 posisiBasket">
            <h1  style="font-family: 'Pacifico', cursive;" class=" text-light">Your Basket</h1>
        </div>
        <div class="row d-flex- justify-content-center">
            <div class=" col-3" style="background-color: rgb(0, 0, 0, 0.5);">
                <img id="myImg" class="card my-2 text-light" src="https://eigeradventure.com/media/catalog/product/cache/4fcc276cc458f0c20c7cb141f7d9fdf7/9/1/910005604002_1_2.jpg" alt="Snow" style="width:100%;max-width:300px">
                <!-- The Modal -->
                <div id="myModal" class="modal">
                    <!-- The Close Button -->
                    <span class="close">&times;</span>
                    <!-- Modal Content (The Image) -->
                    <img class="modal-content" id="img01">
                    <!-- Modal Caption (Image Text) -->
                    <div id="caption"></div>
                </div>
            </div>
            <div class=" col-8 align-items-center text-light" style="background-color: rgb(0, 0, 0, 0.5);">
                <div class=" d-flex mt-3">
                    <h3>Name: Lunatic 60l</h3>
                </div>
                <div class=" d-flex">
                    <h3>Price: Rp. 2.000.000</h3>
                </div>
                <div class=" d-flex">
                    <h3>Total : <a href="#"><img src="../assets/img/minus.png" width="20px" alt=""></a> 1 <a href="#"><img width="20px" src="../assets/img/plus.png" alt=""></a></h3>
                </div>
            </div>
            <div class="deletBasket col-1 p-0 text-center text-light">
                <a href="#" style="text-decoration: none; color: white;"><h3 style="margin-top: 80px;">Delete</h3></a>
            </div>
        </div>
        <div class="row d-flex- justify-content-center">
            <div class=" col-3" style="background-color: rgb(0, 0, 0, 0.5);">
                <img id="myImg" class="card my-2 text-light" src="https://eigeradventure.com/media/catalog/product/cache/4fcc276cc458f0c20c7cb141f7d9fdf7/9/1/910005435001-ELIPTIC-SOLARIS-45L-1A-BLK1.jpg" alt="Snow" style="width:100%;max-width:300px">
                <!-- The Modal -->
                <div id="myModal" class="modal">
                    <!-- The Close Button -->
                    <span class="close">&times;</span>
                    <!-- Modal Content (The Image) -->
                    <img class="modal-content" id="img01">
                    <!-- Modal Caption (Image Text) -->
                    <div id="caption"></div>
                </div>
            </div>
            <div class=" col-8 align-items-center text-light" style="background-color: rgb(0, 0, 0, 0.5);">
                <div class=" d-flex mt-3">
                    <h3>Name: Lunatic 60l</h3>
                </div>
                <div class=" d-flex">
                    <h3>Price: Rp. 2.000.000</h3>
                </div>
                <div class=" d-flex">
                    <h3>Total : <a href="#"><img src="../assets/img/minus.png" width="20px" alt=""></a> 1 <a href="#"><img width="20px" src="../assets/img/plus.png" alt=""></a></h3>
                </div>
            </div>
            <div class="deletBasket col-1 p-0 text-center text-light">
                <a href="#" style="text-decoration: none; color: white;"><h3 style="margin-top: 80px;">Delete</h3></a>
            </div>
        </div>
        <div class="row d-flex- justify-content-center">
            <div class=" col-3" style="background-color: rgb(0, 0, 0, 0.5);">
                <div class="card my-2 text-light">
                    <img class="card-img-top" src="https://eigeradventure.com/media/catalog/product/cache/4fcc276cc458f0c20c7cb141f7d9fdf7/9/1/910005604002_1_2.jpg" alt="HYPERLITE SUMMIT 35">
                </div>
            </div>
            <div class=" col-8 align-items-center text-light" style="background-color: rgb(0, 0, 0, 0.5);">
                <div class=" d-flex mt-3">
                    <h3>Name: Lunatic 60l</h3>
                </div>
                <div class=" d-flex">
                    <h3>Price: Rp. 2.000.000</h3>
                </div>
                <div class=" d-flex">
                    <h3>Total : <a href="#"><img src="../assets/img/minus.png" width="20px" alt=""></a> 1 <a href="#"><img width="20px" src="../assets/img/plus.png" alt=""></a></h3>
                </div>
            </div>
            <div class="deletBasket col-1 p-0 text-center text-light">
                <a href="#" style="text-decoration: none; color: white;"><h3 style="margin-top: 80px;">Delete</h3></a>
            </div>
        </div>
        <div class="row d-flex  text-center mb-4 border-top">
            <div class=" col-3 text-light" style="background-color: rgb(0, 0, 0, 0.5);">
                <h3 class=" mt-2">Total</h3>
            </div>
            <div class=" col-8 align-items-center text-light" style="background-color: rgb(0, 0, 0, 0.5);">
                <h3 class=" mt-2">Rp. 10.000.000,00</h3>
            </div>
            <div class="chectOut col-1 text-light p-0">
                <a href="#" style="text-decoration: none; color: white;"><h6 class=" mt-3">Chect Out</h6></a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Basket',
  data () {
    return {
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.posisiBasket {
  margin-top: 10%;
}
.chectOut{
  background-color: rgb(40, 119, 40);
}

.chectOut:hover {
  background-color: rgb(55, 162, 55);;
}

.deletBasket{
    background-color: rgb(249,70,70)
}

.deletBasket:hover{
    background-color: rgb(252, 88, 88)
}
</style>
