<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link :to="{ name: 'Main' }" class="nav-link" href="#">Mainpage<span class="sr-only">(current)</span></router-link>
      </li> 
      <li class="nav-item active">
        <router-link :to="{ name: 'Middlepage' }" class="nav-link" href="#">Middlepage<span class="sr-only">(current)</span></router-link>
      </li> 
      <li class="nav-item active">
        <router-link :to="{ name: 'Lastpage' }" class="nav-link" href="#">Lastpage <span class="sr-only">(current)</span></router-link>
      </li> 
    </ul>  
  </div>
</nav>





</template>

<script>
export default {
    name: 'Navbar',
  data () {
    return {

    }
  }
}
</script>
