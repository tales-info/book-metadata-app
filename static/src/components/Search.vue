<template>
    <div>
        <h4>Pesquisar por título, nome dos autores, etc.</h4>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="email" class="form-control" id="autocomplete" v-model="search" aria-describedby="helpPesquisa" placeholder="Digite para pesquisar...">
                    <small id="helpPesquisa" class="form-text text-muted">Comece a digitar para pesquisar o livro pelo titulo</small>
                </div>
            </div>
        </div>
        <div>
            <button @click="getData(format)" class="btn btn-primary btn-sm">Pesquisar</button>&nbsp;
            <button @click="result = ''" v-if="result" class="btn btn-secondary btn-sm">Limpar</button>
        </div>
        <div>
        <result-set @format="(format) => getData(format)" v-if="result">
          <div class="mt-5">
            <h5>Endpoint</h5>
            <code><a target="blank" :href="getUrl(format)">{{getUrl(format)}}</a></code>
            <hr/>
            <div v-if="format != ''">
              <code>
                {{result}}
              </code>
            </div>
            <div v-else>
              <h5 class="mt-2 mb-2">Quantidade: {{result.count}}</h5>
              <hr/>
              <h5>Itens</h5>
              <div class="list-group">
                <div class="list-group-item"  v-for="(v, i) in result.result" v-bind:key="i">
                  <h5 v-if="v.title">{{v.title}}</h5>
                  <h6 v-if="v.subtitle">{{v.subtitle}}</h6>
                  <p v-if="v.authors.length > 0"><strong>{{v.authors|commaSeparated}}</strong></p>
                </div>
              </div>
              <template v-if="result.errors.length > 0">
                <hr/>
                <h5>Erros</h5>
                <div class="list-group">
                  <div class="list-group-item"  v-for="(v, i) in result.errors" v-bind:key="i">
                    <h5 v-if="v.isbn">{{v.isbn}}</h5>
                    <h6 v-if="v.error">{{v.error}}</h6>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </result-set>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import ResultSet from './ResultSet'
export default {
    name: 'Search',
    components: {ResultSet},
    data: function () {
        return {
            search: '',
            format: '',
            result: ''
        }
    },
    filters: {
      commaSeparated: function (v) {
        if (!v) return ''
        return v.join(', ')
      }
    },
    methods: {
      getUrl: function (format) {
        return '/api/search/' + this.search + (format ? ('?format=' + format) : '')
      },
      getData: function (format=''){
        axios.get(this.getUrl(format)).then(r => {
          this.result = r.data
          this.format = format;
        }).catch((e) => {
          console.error(e)
        })
        
      }
    }
}
</script>

<style>

</style>
