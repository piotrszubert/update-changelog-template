<script>
  import "../app.css"
  import Navbar from "../components/navbar.svelte";
  import Footer from "../components/footer.svelte";
</script>
  
<Navbar/>
<main class="max-w-lg mx-auto my-10 text-primary">
  <slot/>
</main>
<Footer/>