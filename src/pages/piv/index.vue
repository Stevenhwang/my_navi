<template>
  <wapper>
    <div class="search-box">
      <div class="search-wrapper">
        <input
          type="text"
          v-model="keyword"
          placeholder="实时检索..."
        />
        <label>Search Title</label>
      </div>
      <div class="wrapper">
        <div
          class="card"
          v-for="post in filteredList"
          :key="post.Name"
        >
          <a
            v-bind:href="post.Link"
            target="_blank"
          >
            <img v-bind:src="post.Img" />
            <small>维护人: {{ post.Operator }}</small> {{ post.Name }}
          </a>
        </div>
      </div>
    </div>
  </wapper>
</template>

<script>
import { getList } from '@/api/piv'

class Post {
    constructor(name, link, operator, img) {
        this.name = name;
        this.link = link;
        this.operator = operator;
        this.img = img;
    }
}

export default {
  data(){
    return {
       keyword: '',
       postList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods:{
    toggleOnOff() {
      this.onOff = !this.onOff;
    },
    fetchData() {
      getList().then(response => {
        this.postList = response
      })
    }
  },
  computed: {
    filteredList() {
        return this.postList.filter((post) => {
            return post.Name.toLowerCase().includes(this.keyword.toLowerCase());
        });
    }
  }
}
</script>
<style lang="scss">
@import "./index";
</style>