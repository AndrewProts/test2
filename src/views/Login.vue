<template>
    <div class="login">
        <el-card class="card">
            <h3>Log in</h3>
            <el-form ref="form" :model="form" :rules="rules">
                <el-form-item label="E-mail" prop="email">
                    <el-input type="email" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        rules: {
          email: [
            { required: true, message: 'Please input E-mai;', trigger: 'blur' },
            { type: 'email', message: 'Please input correct E-mai address', trigger: ['blur', 'change'] }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$router.push({name: 'Home'})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss">
.login {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .card {
        width: 420px;
    }
}
</style>
