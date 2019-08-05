<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-auto mr-auto">
        <img alt="Sucupira" height="80" src="./assets/logo-sucupira.png">
      </div>
      <div class="col-auto ml-auto">
        <img alt="Coleta Capes" height="80" src="./assets/ico-coleta.png">
      </div>
    </div>
    
    <h2 class="mt-5">Obter Metadados de Livros através do ISBN</h2>
    <hr/>
    <!--<search/>
    <hr/>-->
    <get-isbn/>
    <hr/>
    <h4>Especificações da API</h4>
    
    <h5 class="mt-4 mb-4">Pesquisa</h5>

    <h6>Endpoint: /api/search/:termo-de-busca?start=0&format=json</h6>

    <code>
    :termo-de-busca: pode ser o nome de um livro, autor, etc..<br/>
    start: por padrão o valor é 0. serve para paginar o resultado<br/>
    format: por padrão é json. mas pode ser setado como xml
    </code>

    <h6>Exemplos de Endpoints:</h6>
    <ul>
      <li><a target="blank" href="/api/search/ziviani">/api/search/ziviani</a></li>
      <li><a target="blank" href="/api/search/ziviani?start=10">/api/search/ziviani?start=10</a></li>
      <li><a target="blank" href="/api/search/ziviani?start=20&format=xml">/api/search/ziviani?start=20&format=xml</a></li>
    </ul>

    <h5 class="mt-4 mb-4">Obter pelo isbn</h5>
    <h6>Endpoint: /api/get/:isbn1/:isbn2/...&format=json</h6>
    <code>
    :isbn1, isbn2,... : um ou mais isbn para retornar (isbn 10 ou isbn 13)<br/>
    format: por padrão é json. mas pode ser setado como xml
    </code>

    <h6>Exemplos de Endpoints:</h6>
    <ul>
      <li><a target="blank" href="/api/get/1849051259">/api/get/1849051259</a></li>
      <li><a target="blank" href="/api/get/9781568823522">/api/get/9781568823522</a></li>
      <li><a target="blank" href="/api/get/1849051259/9781568823522">/api/get/1849051259/9781568823522</a></li>
      <li><a target="blank" href="/api/get/1849051259/9781568823522&format=xml">/api/get/1849051259/9781568823522&format=xml</a></li>
    </ul>


  </div>
</template>

<script>
import GetIsbn from './components/GetIsbn'
import Search from './components/Search'

export default {
  name: 'app',
  components: {
    GetIsbn, 
    Search
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
code {
  background: #efefef;
  color: #3daaff !important;
  border-radius: .3rem;
  padding: 1px 2px;
  display: inline-block;
}
</style>
