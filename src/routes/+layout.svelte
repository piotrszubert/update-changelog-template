<script>
  import Nav from '$lib/Nav.svelte';
</script>

<Nav/>

<main class="container-fluid" style="min-height: 100vh;">
  <slot></slot>
</main>

<footer class="p-3 border-top">
  <div>
    acab2022 &copy;
  </div>
</footer>