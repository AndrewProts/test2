<template>
  <div class="home">
    <el-row>
      <el-col :span="12" :offset="6">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(user, i) in users" :key="i" >
            <router-link :to="{name: 'User', params: {id: user.login}}">
              <el-card shadow="hover" class="card">
                <img :src="user.avatar_url" alt="">
                <h3>{{ user.login }}</h3>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
        users: 'getUsers'
      })
  },
  methods: {
    ...mapActions(['fetchUsers'])
  },
  created() {
    this.fetchUsers({page: 1, quantity: 20});
  }
}
</script>

<style lang="scss">
.home {
  .card {
    cursor: pointer;
    margin-top: 20px;
    img {
      width: 100%;
    }
  }
}
</style>
