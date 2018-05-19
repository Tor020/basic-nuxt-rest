<template>
    <div>
        <div v-for="category in categories" :key="`category-link-${ category.slug }`">
            <a :href="category.slug">{{ category.title }}</a>
        </div>
    </div>
</template>

<script>
export default {
    
    // since we use an ajax call to our api, we need to wait for the data
    // to have an asynchrous function, we need to make it async
    async asyncData({ app }){
        // let's get all categories from our api
        let categories = await app.$axios.$get('categories');

        return {
            categories
        }
    }

    
}
</script>