<template>
    <div>
        <h1>{{ category.title }} / {{ subcategory.title }}</h1>
        <div v-html="content"></div>
        <div>
            <h2>All categories</h2>
            <div v-for="category in categories" :key="`category-link-${ category.slug }`">
                <a :href="`/${ category.slug }`">{{ category.title }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head(){
        return {
            title: this.category.title,
            meta: [
                { name: 'description', content: this.category.meta.description }
            ]
        }
    },

    async asyncData({app, params }){
        let categories = await app.$axios.$get('categories');
        let category = await app.$axios.$get(`categories?slug=${ params.category }&_embed=subcategories`);
        category = category[0];

        let subcategory = await app.$axios.$get(`subcategories?slug=${ params.subcategory }`);
        subcategory = subcategory[0];

        let content = require(`~/contents/${ subcategory.content }`);

        return {
            categories,
            category,
            subcategory,
            content
        }
    }
}
</script>
