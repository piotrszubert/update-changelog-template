<script>
  import Nav from '$lib/Nav.svelte';
</script>

<Nav/>

<main style="min-height: 100vh;">
  <slot></slot>
</main>

<footer class="p-3 bg-dark">
  <div class="text-white">
    acab2022 &copy;
  </div>
</footer>