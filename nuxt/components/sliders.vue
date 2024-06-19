<template>
  <div class="sliders-background d-flex justify-center align-center">
    <div class="sliders-container">
      <div>
        <div class="d-flex justify-space-between pb-5">
          <div class="d-flex align-center">
            <img class="sliders-container__icon" src="/vector8.svg" />
            <div class="sliders-container__title">Wallets</div>
          </div>
          <div class="sliders-container__value">{{ walletsSliderValue }}</div>
        </div>
        <v-slider v-model="walletsSliderValue" :max="1000" :step="1" class="slider-container__slider"></v-slider>
        <div class="sliders-container__markers ">
          <div class="sliders-container__marker">0</div>
          <div class="sliders-container__marker sliders-container__marker--statr">250</div>
          <div class="sliders-container__marker sliders-container__marker--mid">500</div>
          <div class="sliders-container__marker sliders-container__marker--end">1000</div>
        </div>
      </div>
      <div class="gbvfdsa">
        <div class="d-flex justify-space-between pb-5">
          <div class="d-flex align-center">
            <img class="sliders-container__icon" src="/vector9.svg" />
            <div class="sliders-container__title">Transactions</div>
          </div>
          <div class="sliders-container__value">{{ transactionsSliderValue }}</div>
        </div>
        <v-slider v-model="transactionsSliderValue" :max="200" :step="1" class="slider-container__slider"></v-slider>
        <div class="sliders-container__markers">
          <div class="sliders-container__marker ">0</div>
          <div class="sliders-container__marker sliders-container__second--statr">50</div>
          <div class="sliders-container__marker sliders-container__second--mid">100</div>
          <div class="sliders-container__marker sliders-container__second--end">200</div>
        </div>
      </div>
      <div class="gbvfdsa">
        <div class="d-flex justify-space-between pb-5">
          <div class="d-flex align-center">
            <img class="sliders-container__icon" src="/vector10.svg" />
            <div class="sliders-container__title">Services</div>
          </div>
          <div class="sliders-container__value">{{ servicesSliderValue }}</div>
        </div>
        <v-slider v-model="servicesSliderValue" :max="80" :step="1" class="slider-container__slider"></v-slider>
        <div class="sliders-container__markers">
          <div class="sliders-container__marker">0</div>
          <div class="sliders-container__marker sliders-container__three--statr">20</div>
          <div class="sliders-container__marker sliders-container__three--mid">40</div>
          <div class="sliders-container__marker sliders-container__three--end">80</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      walletsSliderValue: ref(560),
      transactionsSliderValue: ref(75),
      servicesSliderValue: ref(20),
    };
  }
};
</script>


<style lang="scss">
@import 'scss/colors.scss';

.sliders-container__second--mid{
	padding-left: 99px;
}
.sliders-container__second--end,
.sliders-container__second--statr,
.sliders-container__three--statr{
	padding-left: 112px;
}
.sliders-container__three--mid{
	padding-left: 102px;
}
.sliders-container__three--end{
	padding-left: 224px;
}
.sliders-container__marker--end{
	padding-left: 208px;
}
.sliders-container__marker--mid{
	padding-left: 93px;
}
.sliders-container__marker--statr{
	padding-left: 108px;
}
.sliders-container__marker{
	font-size: 14.9px;
	font-weight: 500;
	line-height: 26.48px;
	color: #667098;
}
.v-slider-track__fill{
	background: linear-gradient(90deg, #098EFF 0%, #3FCAFF 100%);
}
.sliders-container__markers{
	display: none;
}
.slider-container__slider{
	height: 29px;
}
.gbvfdsa{
	padding-top: 80px;
}
.sliders-container__icon{
	height: 20px;
	margin-right: 16px;
}
.sliders-background{
	width: 100vw;
	height: 810px;
	background: none;
	margin-top: 100px;
}
.sliders-container{
	padding: 60px;
	width: 350px;
	height: 610px;
	background: $tabs-color;
	border: 2px solid #FFFFFF08;
	margin: 0 auto;
	border-radius: 25px;
}
.sliders-container__title{
	font-size: 22.51px;
	font-weight: 600;
	line-height: 37.51px;
	color: white;
}
.sliders-container__value{
	font-size: 40px;
	font-weight: 700;
	line-height: 40px;
	color: white;
}
@media screen and (min-width: 768px){
	.sliders-background{
		background: $tabs-color;
	}
	.sliders-container__markers{
		display: flex;
	}
	.sliders-container{
		width: 620px;
		background: #FFFFFF03;
	}
}
</style>