<template>
    <section class="about">
        <NavbarDashboard/>
        <div class="text">
            <h1>About</h1>
            <h5>Einkofen is e-commerce from Indonesia was built in November 2020. Einkofen will provide your favorite apparel from bottom to the top.</h5>
        </div>
    </section>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
export default {
  name: 'About',
  components: {
    NavbarDashboard
  }
}
</script>

<style scoped>
.text{
    margin-left: 300px;
    padding-top: 30px;
}
h1{
    text-decoration-line: underline;
}
h5{
    padding-top: 4px;
    padding-right: 4px;
}
</style>
