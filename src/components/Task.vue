<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>{{id}}</h1>
      {{title}}
      <!-- {{surveyNow.data}} -->


      <div v-for="surveyI of surveyNow.data" :key="surveyI.id">
          {{surveyI.itemopros.title}}
          <!-- {{surveyI.itemopros.variants}} -->
          

          <!-- <div class="panel-item" v-for="(value, key) in surveyI.itemopros.variants" :key="key">

            <input 
              type="checkbox" 
              :id="surveyI.itemopros.variants[key].variantinfo" 
              v-model="checkedNames">

            <label 
              :for="surveyI.itemopros.variants[key].variantinfo">
              {{ surveyI.itemopros.variants[key].variantinfo }}
            </label>

          </div> -->
            <!-- <input type="checkbox" v-bind:value="user" v-model="selectedUsers">
            <label>{{user.variantinfo}}</label> -->


          <div v-for="user in surveyI.itemopros.variants" :key="user.key">
            <label>
              <input type="checkbox" v-bind:value="user" v-model="checkedNames">
              <span>{{user.variantinfo}}</span>
            </label>
          </div>



      </div>

      

    </div>
  </div>
</template>

<script>

export default {
  props: ['title', 'survey'],
  data() {
    return {
      id: this.$route.params['id'],
      surveyNow: this.$route.params.searchTags,
      checkedNames: []
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