<template>
<div>
  <h4>Buscar metadados através do ISBN</h4>
  <div class="row">
    <div class="col-md-3">
      <div class="form-group">
        <small id="isbnHelp" class="form-text text-muted">Um ISBN por linha</small>
        <textarea class="form-control" id="isbnList" v-model="isbnList" rows="10" aria-describedby="isbnHelp"></textarea>
        <button class="btn btn-primary btn-block mt-2" @click="() => getData(format)">Obter Metadados</button>
      </div>
    </div>
    <div class="col">
      <div>
        <result-set @format="(format) => getData(format)" v-if="result">
          <div>
            <button class="btn btn-primary" @click="() => getData(format)">Obter Metadados</button>
          </div>
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
                  <div>
                    <code class="mr-2" v-if="v.isbn_10">ISBN 10: {{v.isbn_10}}</code>
                    <code class="mr-2" v-if="v.isbn_13">ISBN 13: {{v.isbn_13}}</code>
                  </div>
                  <p v-if="v.authors.length > 0"><strong>{{v.authors|commaSeparated}}</strong></p>
                  <div>
                    <span class="badge badge-pill badge-primary mr-2" v-if="v.id">Id (Busca Local){{v.id}}</span>
                    <span class="badge badge-pill badge-primary mr-2" v-if="v.language">Idioma: {{v.language}}</span>
                    <span class="badge badge-pill badge-primary mr-2" v-if="v.page_count">{{v.page_count}} páginas</span>
                    <span class="badge badge-pill badge-primary mr-2" v-if="v.publisher">Editora: {{v.publisher}}</span>
                    <span class="badge badge-pill badge-primary mr-2" v-if="v.published_date">Publicado em {{v.published_date}}</span>
                    <span class="badge badge-pill badge-primary mr-2" v-if="v.main_category">Categoria: {{v.main_category}}</span>
                  </div>
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
  </div>
</div>
  
</template>

<script>
import axios from 'axios'
import ResultSet from './ResultSet'
export default {
    name: 'GetIsbn',
    components: {ResultSet},
    data: function () {
        return {
            isbnList: '8535236996\n9788543025001\n123456',
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
        return '/api/get/' + this.isbnList.split('\n').join('/') + (format ? ('?format=' + format) : '')
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
