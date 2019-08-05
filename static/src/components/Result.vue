<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name: 'Result',
    props: {
        title: {type: String},
        subtitle: {type: String},
        authors: {type: Array, default: () => []}
    },
    computed: {
        authorList: function () {
            return this.authors.join(', ')
        }
    }
}
</script>

<style>

</style>
