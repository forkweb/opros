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
        <h4>Вы можете отправить результат на почту или сохранить в файл</h4>

        <div class="controls-finish">

          <div class="btn modal-trigger" @click="showModal">Отправить на почту</div>
          <!-- Modal Structure -->
          <div :class="['modal', open ? 'open' : '']" :style="[open ? modalStyle: '']">
            <div class="modal-content">
              <h4>Отправить резульататы на почту</h4>
              <p>тест</p>
              <button @click="step1">Назад</button>
            </div>
          </div>

          <download-excel 
            :data="checkedNames">
            <a class="waves-effect waves-light btn">Экспорт в Excel</a>
          </download-excel>

        </div>



    </div>

  </div>
</template>

<script>
import Vue from "vue";
import JsonExcel from "vue-json-excel";
 
Vue.component("downloadExcel", JsonExcel);

export default {
  props: ["title", "survey"],
  data() {
    return {
      id: this.$route.params["id"],
      surveyNow: this.$route.params.searchTags,
      checkedNames: [],
      showblock: true,
      open: false,
      modalStyle: {
        'z-index': 1003,
        'display': 'block', 
        'opacity': 1,
        'transform': 'scaleX(1); top: 10%'
      }
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
    window.M.Modal.init("#modal1")
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
    },
    showModal() {
      if(!this.checkedNames.length == 0) {
        this.open = true;
      }else {
        alert("Необходимо пройти опрос")
        // this.$router.push({ path: '/finish' })
      }
     
    },
    step1(){
      this.open = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>