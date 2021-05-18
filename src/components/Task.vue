<template>
  <div class="row">
    <div
      v-if="showblock == true"
      class="task_item">
      <!-- <h1>{{id}}</h1> -->
      <h1>Тема опроса: {{ surveyNow.otherinfo.title }}</h1>
      <p>Описание: {{ surveyNow.otherinfo.description }}</p>
      <!-- {{surveyNow.data}} -->

      <div v-for="surveyI of surveyNow.data" :key="surveyI.id">
        {{ surveyI.itemopros.title }}
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
            <input type="checkbox" v-bind:value="user" v-model="checkedNames" />
            <span>{{ user.variantinfo }}</span>
          </label>
        </div>
      </div>

      <div class="finish">
        <a @click="finish" class="waves-effect waves-light btn-large">Готово</a>
      </div>
    </div>

    <div class="task_item" v-else>
        <h3>Поздравляю, вы прошли опрос</h3>
        <h4>В ыможете отправить или сохранить результат</h4>

        <div class="controls-finish">
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Отправить на почту
          <i class="material-icons right">send</i>
        </button>
        <a class="waves-effect waves-light btn">Экспорт в Excel</a>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ["title", "survey"],
  data() {
    return {
      id: this.$route.params["id"],
      surveyNow: this.$route.params.searchTags,
      checkedNames: [],
      showblock: true
    };
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
  mounted() {
    // const db = firebase.firestore();
    //  db.collection("surveys").onSnapshot(snap => {
    //   this.task = snap.docs.map(doc => doc.data());
    //  });
    // db.collection('surveys').doc(this.$route.params.id).get().then(snapshot => {
    //     if (!snapshot.exists) return;
    //     let data = snapshot.data() //
    //     this.task = data
    // });
  },
  methods: {
    finish() {
      this.showblock = false
      // this.$router.push({ path: '/finish' })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>