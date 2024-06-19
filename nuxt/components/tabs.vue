<template>
  <div class="protocols-desktop">
    <v-container class="d-flex protocols__container">
      <v-row class="protocols__row">
        <v-col class="protocols__col" v-for="(project, index) in projects" :key="index">
          <v-card class="protocols__card" :class="{ 'active-card': activeIndex === index }">
            <v-card-title class="protocols__card-title" @click="setActiveTabs(project.data, index)">
              <img class="protocols-item-icon" :src="project.img" />
              {{ project.name }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-select
    class='protocols-select'
    :items="projectNames"
    label="Select Project"
    v-model="selectedProject"
    @input="handleProjectChange"
  ></v-select>
</template>

<script>
import { mapActions } from 'vuex';
import { projectsData } from '/projectsData';

export default {
  data() {
    return {
      projectNames: [],
      selectedProject: '',
      projects: [],
      activeIndex: 0,
    };
  },
  methods: {
    ...mapActions(['addDateMut']),
    setActiveTabs(data, index) {
      console.log(data)
      this.addDateMut(data);
      this.activeIndex = index;
      this.selectedProject = this.projects[index].name;
    },
  handleProjectChange(projectName) {
      const selectedProjectData = this.projects.find(project => project.name === projectName);
      this.addDateMut(selectedProjectData.data);
      this.activeIndex = this.projects.findIndex(project => project.name === projectName);
    },

  },
  mounted() {
    this.projects = projectsData;
    this.projectNames = projectsData.map(project => project.name);
    this.selectedProject = projectsData[0].name;
    this.addDateMut(projectsData[0].data);
  },
   watch: {
    selectedProject(newProject) {
      this.handleProjectChange(newProject);
    },
  },
};
</script>

<style>
.v-field__outline{
  --v-field-border-opacity: 0;
}
.v-field__input{
  padding-top: 8px;
}
.protocols-select{
  max-width: 300px;
  min-width: 350px;
  background: white;
  height: 56px;
  margin-bottom: 24px;
  border-radius: 20px;
}
.v-field--variant-filled .v-field__overlay{
  opacity: 0;
}
.protocols-desktop, .v-field.v-field--active .v-label.v-field-label--floating{
  display: none;
}
@media screen and (min-width: 768px){
  .protocols-select{
    min-width: 416px;
  }
}
@media screen and (min-width: 1024px){
  .protocols__container{
    padding: 0;
  }
  .protocols-select{
    display: none;
  }
  .protocols__card-title{
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .active-card {
    border-radius: 15px;
    background: #0094FF12;
  }
  .v-card--variant-elevated{
    box-shadow: none;
  }
  .protocols-item-icon{
    margin-right: 26px;
    width: 30px;
  }
  .protocols__col{
    padding: 8px 0 8px 0;
  }
  .protocols-desktop{
    display: block;
    background: #F3F5F8;
  }
  .protocols__card{
    width: 288px;
    height: 80px;
    margin: 0px 0 0 22px;
  }
  .protocols__row{
    max-width: 335px;
    height: 600px;
    background: white;
    border-radius: 25px;
    overflow: auto;
    margin: 0 30px 0 0;
    padding: 24px 0 0 0;
  }
}
@media screen and (min-width: 1920px){
  .protocols{
    background: #F3F5F8;
  }
  .protocols__card{
    width: 352px;
    margin: 0px 62px 0 32px;
  }
  .protocols__row{
    max-width: 466px;
  }
}
</style>
