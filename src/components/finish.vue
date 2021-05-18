<template>
  <div class="row">
    <div class="task_item">
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
};
</script>

<style lang="scss" scoped>
</style>