<template>
    <div class="user" v-loading="loading">
        <el-card class="card">
            <img :src="user.avatar_url" alt="">
            <div class="user-info">
                <h1>{{ user.name }}</h1>
                <h3>{{ user.login }}</h3>
                <el-row>
                    <el-col :span="4">
                        <b>Public repos:</b>
                    </el-col>
                    <el-col :span="4">{{ user.public_repos }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">
                        <b>Public gists:</b>
                    </el-col>
                    <el-col :span="4">{{ user.public_gists }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">
                        <b>followers:</b>
                    </el-col>
                    <el-col :span="4">{{ user.followers }}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">
                        <b>following:</b>
                    </el-col>
                    <el-col :span="4">{{ user.following }}</el-col>
                </el-row>
                <router-link :to="{name: 'Home'}">
                    <el-button>Back</el-button>
                </router-link>
            </div>
        </el-card>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'User',
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions(['fetchUser'])
  },
  created() {
    console.log()
    this.fetchUser(this.$route.params.id)
  }
}
</script>

<style lang="scss">
.user {
    .card {
        display: flex;
        .el-card__body {
            display: flex;
            width: 100%;
        }
        .user-info {
            padding-left: 20px;
            width: calc(100% - 320px);
        }
        img {
            width: 320px;
        }
    }
}
</style>
