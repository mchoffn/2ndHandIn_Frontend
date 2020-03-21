<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    
<br>


<div>
		<h1 class="ui center aligned header">{{ heading }}</h1>
		<div class="ui container">
			<table v-if="loaded" class="ui celled table">
				<thead>
					<tr>
						<th>ID</th>
						<th @click="sortBy = 'firstName'">Name</th>
						<th @click="sortBy = 'lastName'">Email</th>
            <th>Additional info</th>
            
					</tr>
				</thead>
				<tbody>
					<tr v-for="user in users" :key="user.id">
						<td>{{ user.id }}</td>
						<td>{{ user.name }}</td>
						<td>{{ user.email }}</td>
            <td><button @click="(modal = user.id)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">More info</button></td>
            
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<th colspan="5"></th>
					</tr>
				</tfoot>
			</table>
		</div>
</div>

<!-- Modal -->
<div v-if="modal" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Additional info</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
						<td>{{ users[modal].username }}</td>
						<td>{{ users[modal].address }}</td>
            <td>{{ users[modal].phone }}</td>
            <td>{{ users[modal].website }}</td>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'middlepage',
  data () {
    return {
      msg: 'This is the middle page!',
      users: {},
      heading: "Index of users",
      modal: null,
      loaded: false
    }
  },
    methods:{
        middlepage(){
        this.$router.push({name:'lastpage'})
        }
    },
    created(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response)
        //this.users = response.data
        response.data.forEach(user => {
          this.users[user.id] = user    
        });
        this.loaded = true
      })


    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
