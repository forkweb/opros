<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Создание опроса</h1>

      <form @submit.prevent="submitHandler">

          <div class="formcreate">
            <div class="input-field">
            <input id="title" v-model="title" type="text" class="validate" required>
            <label for="title">Заголовок вопроса</label>
            <span class="helper-text" data-error="Title is required"></span>
          </div>

          <!--  -->
          <div class="input-list">
            <label for="title">Варианты ответа</label>
        
            <div v-for="(item, key) in variant" :key="item.id" class="varaint_otv">
              <!-- <span>{{key}}</span> -->
              <span>{{item.variantinfo}}</span>
                <div class="btn-group pull-right" role="group">
                  <button type="button" class="btn btn-danger btn-sm" v-bind:data-id="key" v-on:click.prevent.stop="remove">Удалить</button>
                </div>
            </div>

            <input type="text" v-model="variantinfo" class="form-control validate" id="variantinfo" placeholder="Введите вариант"/>
            <button class="btn btn-success" v-on:click.prevent.stop="add()">Добавить вариант</button>
          </div>
          <!--  -->


          </div>
          <button @click.prevent="addBlock" class="btn add_new_block">Добавить новый блок с вопросом </button>
          <button @click.prevent="addAll" class="btn add_new_block">тест </button>

          

        <input type="text" ref="datepicker">
        <div class="input-field">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Описание</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        </div>
        <button class="btn" type="submit">Создать опрос</button>
      </form>
      
      
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
export default {
  name: 'create',
  data: () => ({
    description: '',
    title: '',
    chips: null,
    date: null,
    variant: [],
    variantinfo:"",
    alldata: []
  }),
  mounted() {
    this.date = window.M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },
  methods: {
    addBlock() {
      console.log("dasdas");
    },
    addAll() {

      const itemoros = {
        title: this.title,
        variants: this.variant
      }

      this.alldata.push({itemopros: itemoros});
      console.log(itemoros);


    },
    add() {
      if( this.variantinfo ){
        this.variant.push({variantinfo: this.variantinfo});
        this.variantinfo = "";
      }
    },
    remove: function(ev){
      let id = parseFloat(ev.target.getAttribute('data-id'));
      this.variant.splice(id, 1);
    },
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: 'active',
        date: this.date.date,
        variant: this.variant
      }

      this.$store.dispatch('createTask', task);
      this.$router.push('/list');


      // const db = firebase.firestore();
      // // let ref = db.ref('surveys');

      // db.collection('surveys').add({
      //   data: task
      // });


    }
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy();
    }

  }
}
</script>



<style lang="css">
  .add_new_block {
      margin-top: 35px;
      margin-bottom: 35px;
  }

  .varaint_otv {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .formcreate {
    border: 1px solid rgb(202 202 202);
    padding: 40px;
  }
</style>