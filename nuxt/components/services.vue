<template>
  <v-card class='project-card'>
    <v-tabs v-model="tab" class='project-tabs' >
      <v-tab class='project-tabs__tab' value="one">
       <img class='project-tabs__icon'  src="/vector3.svg" />
        Bridges
      </v-tab>
      <v-tab class='project-tabs__tab' value="two">
        <img class='project-tabs__icon' src="/vector2.svg" />
        Swaps
      </v-tab>
      <v-tab class='project-tabs__tab' value="three">
        <img class='project-tabs__icon' src="/vector1.svg" />
        Landings
      </v-tab>
      <v-tab class='project-tabs__tab' value="four">
        <img class='project-tabs__icon' src="/vector.svg" />
        Mints
      </v-tab>
    </v-tabs>
    <v-card-text class='project-card__content'>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <div class="project-items" v-for="(value, index) in myDate.Bridges" :key="index">
            <div>
              <img class='project-items__icon' :src="value.img" />
            </div>
            <div class="d-flex align-center">
              {{ value.name }}
              <img class='project-items__action-icon' src="/vector24.svg" />
            </div>
          </div>
        </v-tabs-window-item>
        <v-tabs-window-item value="two">
          <div class="project-items"  v-for="(value, index) in myDate.Swaps" :key="index">
            <div>
              <img class='project-items__icon' :src="value.img" />
            </div>
            <div class="d-flex align-center">
              {{ value.name }}
              <img class='project-items__action-icon' src="/vector24.svg" />
            </div>
          </div>
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          <div class="project-items" v-for="(value, index) in myDate.Landings" :key="index">
            <div>
              <img class='project-items__icon' :src="value.img" />
            </div>
            <div class="d-flex align-center">
              {{ value.name }}
              <img class='project-items__action-icon' src="/vector24.svg" />
            </div>
          </div>
        </v-tabs-window-item>
        <v-tabs-window-item value="four">
          <div class="project-items" v-for="(value, index) in myDate.Mints" :key="index">
            <div>
              <img class='project-items__icon' :src="value.img" />
            </div>
           <div class="d-flex align-center">
              {{ value.name }}
              <img class='project-items__action-icon' src="/vector24.svg" />
            </div>
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script>
import {mapState} from 'vuex'
  export default{
    data: () => ({
      tab: null,
    }),
   computed:{
     ...mapState(['myDate'])
   }
  }
</script>

<style>
.project-card{
  width: 350px;
  border-radius: 25px;
  height: 460px;
}
.project-items__icon{
  height: 28px;
}
.project-tabs{
  min-height: 84px;
  margin: 32px;
  border-bottom: 1px solid #F3F5F8;
}
.project-tabs__icon{
  width: 14px;
  margin-right: 16px;
}
.project-tabs .v-slide-group__content{
  justify-content: space-between;
}
.project-items{
  width: 292px;
  height: 64px;
  border: 1px solid #F3F5F8;
  border-radius: 25px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 25px 0 24px;
  margin: 0 16px 16px 0;
 }
 .project-items__action-icon{
  margin-left: 97px;
  width: 10px;
 }
 .v-tab-item--selected{
  background: #0094FF12;
  border: none;
  border-radius: 15px !important;
}
.v-tab--selected .v-tab__slider{
  opacity: 0;
}
.project-tabs__tab{
  width: 133px;
  min-height: 50px;
  margin-left: 13px;
}
.project-card__content{
  padding: 0 0 0 32px;
}
.project-card__content .v-window-item{
  display: flex;
  flex-wrap: wrap;
  height: 285px;
  overflow: auto;
}
@media screen and (min-width: 768px){
  .project-card{
    width: 589px;
    height: 600px;
  }
  .project-items{
    width: 260px;
    height: 76px;
  }
  .project-tabs__tab{
    width: 191px;
    min-height: 60px;
  }
  .project-card__content .v-window-item{
    height: fit-content;
  }
}
@media screen and (min-width: 1920px){
  .project-card{
    width: 924px
  }
}
</style>