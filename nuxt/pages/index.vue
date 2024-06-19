<template>
  <div class="main-background">
    <div class="main-block">
      
    <div class="protocols-block">
      Supported Protocols
    </div>
    <div class="protocols-block__title">
      Supports a variety of Ethereum networks for seamless exchangess
    </div>
  </div>
    <div class="d-flex content-block">
      <tabs/>
      <services/>
    </div>
    <sliders/>
  </div>

</template>
<style lang="scss">
@import 'scss/colors.scss';
.main-background{
  background: $main-color;
  widows: 390px;
  margin: 0 auto;
  padding-bottom:0;
}
.main-block{
  margin: 0 auto;
  width: 320px;
}
.content-block{
  padding-top: 80px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
}
.protocols-block{
  padding-top: 40px;
  font-family: Sora;
  font-size: 34px;
  font-weight: 800;
  line-height: 46px;
  width: 160px;
  text-align: left;
}
.protocols-block__title{
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-align: left;
  width: 250px;
}

@media screen and (min-width: 678px){
.main-block{
  width: auto
}
.main-background{
  padding-bottom: 90px;
}
.protocols-block,
.protocols-block__title{
  text-align: center;
  margin: 0 auto;
  width: fit-content;
}

}
@media screen and (min-width: 1024px){
  .content-block{
    flex-direction: row;
  }
  .protocols-block__title{
    font-size: 22px;
    font-weight: 400;
    line-height: 34px;
  }
  .protocols-block{
    font-size: 52px;
    font-weight: 700;
    line-height: 67.6px;
    padding-top: 100px;
  }
}
</style>
