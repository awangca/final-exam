<template>
    <div class="container">
      <form action="/users" method="post" >

      <div class="form-group">
        <input type="text" class="form-control" name="firstName" placeholder="FIRST NAME" v-model="firstName">
      </div>

      <div class="form-group">
        <input type="text" class="form-control" name="lastNme" placeholder="LAST NAME//err" v-model="lastNme">
      </div>

      <div class="form-group">
        <!-- <label      class="control-label" for="email">Email</label> -->
       <input type="text" v-validate="email" data-rules="required|email" class="form-control" name="email" placeholder="EMAIL" v-model="email">
      </div>

      <div class="form-group">
        <input type="text" class="form-control" name="telephone" placeholder="PHONE NUMBER" v-model="telephone">
      </div>

      <div class="form-group">
        <input type="text" class="form-control" name="company" placeholder="COMPANY" v-model="company">
      </div>

      <div class="form-group">
        <!-- <input type="text" class="form-control" name="company" placeholder="COMPANY" v-model="company"> -->
        <input type="checkbox" id="officalVisit" value="officalVisit" v-model="officalVisit">
        <label for="officalVisit">Official Visit</label>
      </div>

      <div class="form-group">
        <!-- <input type="text" class="form-control" name="company" placeholder="COMPANY" v-model="company"> -->
        <input type="checkbox" id="escort_Required" value="escortRequired" :isChecked="escortRequired">
        <label for="escort_Required">Escort Required+{{escortRequired}}</label>
      </div>

      <div class="form-group" v-if="escortRequired">
        <input type="text" class="form-control" name="escortName" placeholder="ESCORT NAME" v-model="escortName">
      </div>


      <!-- <div class="form-group">
        <input type="password" class="form-control" name="password" placeholder="Password" v-model="password">
      </div>

      <div class="form-group">
        <input type="password" class="form-control" name="passwordConf" placeholder="Confirm password" v-model="passwordConf">
      </div> -->

      <button class="btn btn-success" type="submit" >CHECK IN</button>
      </form>
    </div>

</template>

<style>
.container form{

    witdth:200px;



}



</style>

<script>
export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastNme:'',
      telephone: '',
      email: '',
      company:'',
      offcialVisit:true,
      escortRequired:true,
      escortName:''
    }
  },
  methods: {
    registerUser() {
      const newUser = {
        // displayName: this.displayName,
        // username: this.username,
        // email: this.email,
        // password: this.password,
        // passwordConf: this.passwordConf,

        firstName: this.firstName,
        lastNme:this.lastNme,
        telephone: this.telephone,
        email: this.email,
        company:this.company,
        offcialVisit:this.officalVisit,
        escortRequired:this.escortRequired,
        escortName:this.escortName
      }
      this.$store.dispatch('register', newUser)
    }
  }
}
</script>
