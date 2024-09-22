<template>
  <div>
    <!-- Menú de navegación con Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Programación Front End</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/Ejercicio1">Cálculo de calificaciones</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Ejercicio2">Formulario de Registro</router-link>
            </li>
            <li class="nav-item">
              <span class="nav-link disabled">En construcción</span>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="button">Búsqueda</button>
          </form>
        </div>
      </div>
    </nav>

    <!-- Vista de rutas -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
