<script>
    import { page } from '$app/stores';
</script>

<style>
.offcanvas.offcanvas-end {
    border: 0;
}
</style>

<nav class="navbar navbar-expand-sm border-bottom" aria-label="Offcanvas navbar large">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">acab</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link" rel="prefetch" class:active={$page.url.pathname === '/'} aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="prefetch" class:active={$page.url.pathname === '/about'} href="/about">O nas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="prefetch" class:active={$page.url.pathname === '/contact'} href="/contact">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>