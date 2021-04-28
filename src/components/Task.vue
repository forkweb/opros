<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>{{id}}</h1>
      {{title}}
      {{surveyNow}}
    </div>
  </div>
</template>

<script>

export default {
  props: ['title', 'survey'],
  data() {
    return {
      id: this.$route.params['id'],
      surveyNow: this.$route.params.searchTags
    }
  },
  created() { 
    // const film = films.find(film => film.id == this.$route.params.id)
    // if (film) {
    //   this.film = film
    // }
  },
  computed: {
    // nowTasks() {
    //   return this.tasks
    // }
  },
  mounted () {
    // const db = firebase.firestore();

    //  db.collection("surveys").onSnapshot(snap => {

    //   this.task = snap.docs.map(doc => doc.data());
    //  });

    // db.collection('surveys').doc(this.$route.params.id).get().then(snapshot => {
    //     if (!snapshot.exists) return;
    //     let data = snapshot.data() // 
    //     this.task = data
    // });
    
  }
}
</script>

<style lang="scss" scoped>

</style>