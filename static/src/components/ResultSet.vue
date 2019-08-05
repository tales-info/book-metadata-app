<template>
    <div>
        <h2>Resultados 
            <div class="btn-group float-right" role="group" aria-label="Basic example">
                <button type="button" :class="`btn btn-secondary btn-sm${viewFormat == '' ? ' active' : ''}`" @click="() => changeFormat('')">Formatado</button>
                <button type="button" :class="`btn btn-secondary btn-sm${viewFormat == 'xml' ? ' active' : ''}`" @click="() => changeFormat('xml')">XML</button>
                <button type="button" :class="`btn btn-secondary btn-sm${viewFormat == 'json' ? ' active' : ''}`" @click="() => changeFormat('json')">JSON</button>
            </div>
        </h2>
        <div v-if="$slots.default">
            <slot :format="viewFormat"/>
        </div>
        <div v-else>
            Nada a ser exibido
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultSet',
    props: {
        url: {type: String, default: undefined} 
    },
    data: function () {
        return {
            viewFormat: ''
        }
    }, 
    methods: {
        changeFormat: function (format) {
            this.viewFormat = format;
            this.$emit('format', format)
        }
    }
}
</script>

<style>

</style>
