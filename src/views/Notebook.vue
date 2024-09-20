<template>
  <div>
    <TopArea />
    <h3>寫筆記</h3>
    <textarea class="area-border" v-model="content"/>
    <button class="common-btn" :disabled="saveBtn" @click="save">存擋</button>
    <button class="common-btn" @click="toOverview">綜覽</button>
    <p style="color: #ffbd59;">{{ msg }}</p>
  </div>
</template>

<script>
import TopArea from '@/components/TopArea.vue'
import axios from 'axios'

export default {
  components: { TopArea },
  data: () => {
    return {
      content: '',
      collectdata: [],
      msg: '',
      saveBtn: true,
    }
  },
  watch: {
    content(value) {
      console.log('--------------content', value)
      if (value.length !== 0) {
        this.saveBtn = false;
      } else {
        this.saveBtn = true;
      }
    }
  },
  mounted() {
    this.$store.state.collectdata = [];
  },
  methods: {
    async save() {
      try {
        let param = {
          note: this.content,
        }
        const response = await axios.post('https://django-mynotebook.onrender.com/api/notes/', param);
        console.log('------------saved-------------', response.data);
        this.$store.state.collectdata.push(response.data.id);
        this.content = '';
        this.msg = '新增成功';
        setTimeout(() => {
          this.msg = '';
        }, 3000)
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    },
    toOverview() {
      this.$store.state.keepNoteOrReview = 'keepnote';
      this.$router.push('/overview')
    }
  }
}

</script>

<style>
</style>