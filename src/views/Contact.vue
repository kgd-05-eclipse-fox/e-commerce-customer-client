<template>
    <section class="contact">
        <NavbarDashboard/>
        <div class="text">
            <h1>Contact</h1>
            <h5>Please email me if you need more information or have some trouble with this website.</h5>
            <h5>Email: jeplindmorico@gmail.com</h5>
        </div>
    </section>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
export default {
  name: 'Contact',
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
