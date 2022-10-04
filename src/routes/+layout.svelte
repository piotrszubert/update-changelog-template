<script>
  import Nav from '$lib/Nav.svelte';
</script>

<Nav/>

<main class="container-fluid p-0" style="min-height: 100vh;">
  <slot></slot>
</main>

<footer class="p-3 border-top">
  <div>
    Logo 2022 &copy;
  </div>
</footer>