<template>
  <div>
    <v-dialog :active="dialog.active"
    @submit-click="dialog.active=false, deleteContact(dialog.id)"
    @reject-click="dialog.active=false"/>       
    <h3 class="m-3 text-gray-500 ">Contacts list</h3>
    <ul>
      <li class="my-1.5"  v-for="(contact, id) in contacts"  :key="id">
       <div class="flex justify-between px-7 py-2.5 text-base text-gray-400  border border-border">
          <span class="text-main-black">{{contact.name}}</span>
          <span class="text-sm">{{contact.number}}</span>
          <span class="text-sm text-red-600 cursor-pointer" 
          @click="dialog.active=true, dialog.id=id">
             Delete
          </span>

        </div>
      </li>
    </ul>
    
      <button class="text-base px-4 py-3 text-white bg-blue-600 m-5"
       @click="addNew">
       Add new 
      </button>
  </div>

</template>

<script>



import {v4 as uuid} from "uuid";

import VDialog from '../modals/dialog.vue';
export default {
  components:{
    VDialog
  },
  data(){
    return{
        dialog:{
            active:false,
            id:null
        }
    }
  },
 computed:{
   contacts(){
     console.log(this.$root.$data);
     return this.$root.$data.contacts;

   }
 },
  methods:{
      addNew(){
         const id = uuid();
            this.$set(this.contacts , id , {
              name:"Andre Viknus",
              number:"097-56-12-564"
            });
             console.log('added_id:'+ id)
      },
      deleteContact(id){
          this.$delete(this.contacts, id);
          console.log('deleted_id:'+ id);
      }
  }

}
</script>

<style>

</style>