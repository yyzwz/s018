"use strict";(self["webpackChunks018"]=self["webpackChunks018"]||[]).push([[2630],{2630:(t,s,e)=>{e.r(s),e.d(s,{default:()=>g});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"topDiv",style:{height:t.clientHeight}},[s("Row",{attrs:{gutter:20}},[s("div",{staticClass:"body"},[s("img",{staticClass:"title",attrs:{src:e(6949),alt:""}}),s("div",{staticClass:"awayMenu"},[s("div",{staticClass:"awayLeft"},[s("span",{staticClass:"manage2"},[t._v(" 欢迎 "),s("span",[t._v(t._s(t.name))])]),s("div",{staticClass:"manage"},[t._v("登入地址："+t._s(t.location))])]),s("div",{staticClass:"bottom"},[s("span",{staticClass:"showtime"},[t._v(t._s(t.showtime))]),s("span",{staticClass:"showtime2"},[t._v(t._s(t.showtime2))])])]),s("div",{staticClass:"bigTips"},[s("span",{staticStyle:{color:"rgba(255,255,255,0.8)"}},[t._v("常用模块")]),s("span",{staticStyle:{}})]),s("div",{staticClass:"buttonMenu"},[s("div",{staticClass:"addMenuBox"},t._l(t.addMenuTempList,(function(e,i){return s("div",{key:i,staticClass:"addMenu",on:{click:function(s){return t.selectItem(e)}}},[t._v(" "+t._s(e.title)+" ")])})),0),s("div",{staticClass:"shu"}),s("div",{staticClass:"threeButton"},[s("div",{staticClass:"button",on:{click:t.toDaiBanPage}},[s("div",{staticClass:"left"},[s("img",{staticClass:"homeThreeIcon",attrs:{src:e(6353)}}),s("span",{staticClass:"text"},[t._v("我的待办")])])]),s("div",{staticClass:"button",on:{click:t.toFaQiPage}},[s("div",{staticClass:"left"},[s("img",{staticClass:"homeThreeIcon",attrs:{src:e(6012)}}),s("span",{staticClass:"text"},[t._v("我的未办")])])]),s("div",{staticClass:"button",on:{click:t.toJingBanPage}},[s("div",{staticClass:"left"},[s("img",{staticClass:"homeThreeIcon",attrs:{src:e(8204)}}),s("span",{staticClass:"text"},[t._v("我的经办")])])])])]),s("div",{staticClass:"bottomText",on:{click:t.toOwnMenu}},[t._v(' 添加"常用模块"? 点我 进入个人门户设置 ')])])])],1)},a=[],n=e(1955),A=e(2439);const c={name:"home",data(){return{name:"",showtime:"",showtime2:"",location:"公司内网",addMenuTempList:[],number1:0,number2:0,number3:0,number1List:[],number2List:[],number3List:[]}},methods:{init(){this.getMyDoorListFx();let t=JSON.parse(n.Z.get("userInfo"));this.name=t.nickname,this.getNowTime(),(0,A.v_)().then((t=>{t.success&&(this.location=t.result)})),this.timer=setInterval(this.getNowTime,1e3)},selectItem(t){void 0!=t.name&&"null"!=t.name&&this.$router.push({name:t.name})},toDaiBanPage(){this.$Message.success("正在开发，敬请期待！")},toFaQiPage(){this.$Message.success("正在开发，敬请期待！")},toJingBanPage(){this.$Message.success("正在开发，敬请期待！")},toOwnMenu(){this.$router.push("/myHome")},getMyDoorListFx(){var t=this;(0,A.lR)().then((s=>{t.addMenuTempList=s.result}))},getNowTime(){this.showtime=this.format(new Date,"yyyy年MM月dd日"),this.showtime2=this.format(new Date,"HH:mm:dd")}},mounted(){this.init(),this.clientHeight=`${document.documentElement.clientHeight}`;let t=this;window.onresize=function(){this.clientHeight=`${document.documentElement.clientHeight}`,t.$refs.page&&(t.$refs.page.style.minHeight=clientHeight-100+"px")}},watch:{clientHeight(){this.changeFixed(this.clientHeight)}}},o=c;var l=e(1001),m=(0,l.Z)(o,i,a,!1,null,"8f2b9c06",null);const g=m.exports},2439:(t,s,e)=>{e.d(s,{KF:()=>a,e3:()=>o,lR:()=>n,uJ:()=>A,v_:()=>c});var i=e(7184);const a=t=>(0,i.j0)("/myDoor/getMyDoorList",t),n=t=>(0,i.j0)("/myDoor/getMyDoorList6",t),A=t=>(0,i.j0)("/myDoor/setMyDoorList",t),c=t=>(0,i.A_)("/common/ip/info",t),o=t=>(0,i.j0)("/user/edit",t)},6353:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABeCAYAAADR9mGiAAAACXBIWXMAABcRAAAXEQHKJvM/AAAEnklEQVR4nO2d/3XaMBDHD17/xxuEThBvAJkgdILSCepOULIBmaBkgsAETTbAExRvgCdwn+i5z0mQbMuSdT7f9z1e8h6JkPXRj9PdSUyKooCK1gCQAMAtiHTKAGCLL28qwUQA8CJAWikFgCUAnH0UXoJRUBbeHoGvFJzYx9NNcfoSKHa6xfZzLgVmNbDGoKbER33UVKbmyNmgmya8Jq5roMAUDf5OVNOOrttnKg1OUwKGqAQMUQkYohIwRCVgiErAEJWAIapPHaulXOAnBu0QUfOsdwHzDQB2DusSWsqFv6finrKdyh6YQQEMfWwI1OMiWzAvjutBRWQ6myz+bzWnUhFbMF5iEAQ0+KnsHhdKL2HVAJrj89xTqZDEY9xI4jFjkYAhKgFDVAKGqAQMUQkYohIwRCVgiErAEJWAISoBQ1QChqi6xvxTXyeqGortuR5bMDmeqwkdyYyxDuyOkdhOZVsi4eUj16Adh5j/nkAdnMsWTEToGcjE6V2KQ8yfTJzepbqEll9xrQlplSVE4vRyBpOonIPpuo8Zg3I0do7484y/e5WAua4Mrb1dHxCuScC8VbluBjfBBcw/pWhIkNmfjd2JqdaPHxXXDhmNecSkeEFPkDWkTmMF84RTV5s92BJHVmzwNpTW27HrSbsx7mOeWlxltaq82nqwU7Tq9jaQxgamKZQ1unpuHH7upg2gMYFpAmWJ5rKvg7IPTX17YwFzaHBhnmqwnz3UpZHRMQYwGS7YuoU+wnWgzzB1jnC0G9kx7GPWNVBCXNSqDIln09TKHcyjYeNI4UrjXzo4nKeyHPcbutGiTNmvHT/jgOVEHS4Sz9HoeLvmFHyVqD6neSUOnnpzpey9ZVmnoiiiallcR0xuyEuYY+/skvKkK1+V/ceyzMdqyJ7rGmO6d3/nIA9NZ+p2ccN8rx7P5wpGd/XIknj25v8OxRHMwdBzqScHLkoHKUcwOvN4TunmC4MunYcjGN1ueijfYXDZ13ADkxumsaGAUYZJzA2MyTE4pCMbK25gdOvL0G6JiscSWu4z8fyu5v15A/dNxA2Mbirrc8Q0ybbZ1dyPtuA2lYVMcG8r455q7HllIWV03wgYOy0cHN5amt7kBqbPk25dvqA0qvn/nJvbX5eFonrnbw+fl1nc1Rzh7t7k4X7lZpXpRowvo+DGU2bNidtUpjOLj+iuGYqO3MCY3C5Duvb+haNVphs1Q7kPIOM4YsBghg4FzMWY4AhGl0R3xvxl6rqA4Zol81mzs+6SxdKHnrgGykrpMupPhEdNXq03VzArw54mIWo6b6ujnCuYmcF7e25xoqwvpe9HOffc5djgxd1ikl1oXc2x5uxdntU4ChMC602ZUP7BZTTF2yC46r4mO2YdEM71LH/UlOHXJr7XribmHwJOZoICFTBpv/XqVTPc9ZtiNWv8wtU+rLUDrn3GM5jlGrNkDue2gUtmhw128FQHNUq+4NRaG4YowZwRzsPA3ONttGgwbZ+w4e4crr0Ztmvcxl830VjLMbELSV3q2CJwNsdpbtXyGF+OEPa2zlMdGNFHqY6qOmzpva56sUvYasSVd8nYCwD+Ag4lmuvuYV1GAAAAAElFTkSuQmCC"},6012:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABfCAYAAAD1aNk5AAAACXBIWXMAABcRAAAXEQHKJvM/AAAFFklEQVR4nO2d/3XaMBDHL7z8H2eC0AlCJ0g6Qdkg6QRNJwiZoMkEhQkaNoAJChuUDfAE6hM9UZNYPyxL9vV83/d4IQlgoY91Pt2d5DOlFNTotu6PooM2ALDvoivOK88LAHgGgCkAXAgHpxYA8JAbkhk5EwB4BYCrnAdjphItzCbX1zJw9AGuB9rJbbTDEzvLCBoBwL2AidYVmrcsMnBE8Zrm6jtt1mrdNVGzfszRXSNhQFcCh7AEDmEJHMISOIQlcAhL4BCWwCEsgUNY5y2bpgN/vxn0w5hiRL4NnG+Y/+EiHcD8Tum7xMbWljkDfj1qDgB3EYcnFVvLlmDqWXNKjYmFUyRuBxVNKDUm1qxlT9H2IA1mFVk/kcWstcnnlFh3wMFbKzDpGFvYQg6OqNKPOfpCJqGEJXAIS+AQlsAhLIFDWAKHsAQOYQkcwhI4hCVwCEvgEJbAIay2NQTbrtZH1qjgvq6oDZwvBDKHOsz/o+c2ZFOsWVsQSenqNrwQaEcWxcKhlGB7JdCGLOJQQ8B2z4Q2mdCPBGoI2uT9U4pkmnrZI6BxZI1ZDkkNAWFlgdN2njMUrdF8mn1vOtn/RuDUy5R9vfbpDQqcU+lVEzME0lfk4yiB81cGCotaaU56QZecFBgY+MjZYWxuFfHeSc1EPLmTMFQ4W4wshHTmGF87RSi+FXDGs3ttOwcc4jxnEbhT1hRf97nFsXZoLp9jRtXQ4ISAucUOTb1G9KkppCHB8S2VLBBKm5HiU4knR9DcaShwfNeYrgOoQaZ1CHBK7HxbDqqvbKrXKRnCPOeBIBjA+oeVKzfGfeSsHck4ff352XF76rS1LRTmPnJsdp1SRODattkGZzgLhzmbE9t1/mudJ8nZrH2wwNEBzsce2uNTidGIo4PAdeTYRs045ybdLXXxtm1c4dgmeTPiN9F4qHpvHOGUFjgFgc2U1p7/n4wejnBso6bPW89oM3uJbv0lhpJsOnqYHOHY8jN93bPBhGrMhX6Pv5eW11+Zec9Q4GiTdtNDW2wxtL0n13Mwv9zglBYvrY+tunzBTVdJ8yGqwQ2O7Wzsup7aB8Z3zyKWZs0W4e2y8D4EjC/YenBchjJyujJrKcAY3Upp1KmeMOxzic+bKCWYg6So8J8WGEEwmqFzEdKhycGAFBWeqC6FMMe1ry5lAQMM4dgu/CEVL7b3ugBlA6NHLTc4tgt/SHGfK1pdBygnGOAIx3b2hywwvvFkR6uAcoPRqWt2DoFtYhdaFmuWMdo6fo6gXfXVKYpGDu3l6BDURQM2WBobojvPCMoN5niMocCBhqsJfIDqlLLM6pD24AjHllBrejuZJoBSglka75IjnGusFXirjbnQNlAIoNSFiceTiOsk1HZBn1n+7pILUGow66r55VoatbOMHsAvH5N4W1ZKewt8nrrE6tMQ4IBjyzE9Uf3V4nO3CD51PcK7JSqc4bhGD7XCwh2eNCdhJs6BzyvHNWbmqYDpUiWOmHfxPz1y9sQL7drItTanQPve91aU1h0fR5FLvf8XXTg8rT1OWJu61ynl3IpzxOxen3W6cZg3A6hrE1eiZ+acQ5mRQ8X+5tKjY+6zR5vfNC0dq21lDapTZ+isFRjP6aPwrkv5dlecoCXJ0Q8lfnb4RFjDqTzulVIbxVd7pdTkzXeue9wqpVaJekEfc6aUKgKOe/I4k40KnZqgOZxGbBqxrOzXFrUnjsAJl9kDR/80j6r0NcTUQLf3gAHgD50czZG8QpzeAAAAAElFTkSuQmCC"},8204:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABfCAYAAAD1aNk5AAAACXBIWXMAABcRAAAXEQHKJvM/AAAE4ElEQVR4nO2d/3HaMBSAX3L5H28AmaB0gtIJmkwQMkEzApmgdILCBCUTFG8QJihsgCdwT/SJc4xly5Kf/ZDed8eFaxqj+LN+viflJs9zKDEFgBkAJOVvCHAEgC0AvPdxK+4K75WUJQB8EQeNpADwQi1J15wpPhEjyg8LkEcA2FD9WkqOar72IsaJDB/sPcXFb7F6ihg3Rnj/SFByHq7shnCD7P6pZu1iuCa0v48Ut+yW4qJCN4gcxogcxogcxogcxogcxogcxogcxogcxtx5Fi3F1exrZ8YxVOIj52sgYjTswiauzdo6MDGAgbMVg3KccZVDEr9gAFngzAVXOZNhi00Gq/CJT8jgmVsz4IkaFPxxvARJyMA3nrPDjJRrR4XqP/ncR4rfX4Jt3SDBttgQOYwROYwROYwROYwROYwROYwROYwROYwROYwROYwROYzxzSFYDxh4UzGlp4E+uxdcV6UzjH/0snG1Bi5xf1ar0isGYgDLsGRQDhJc5XAKsIWWaHImhByCYLdNusp5otyo2oI5AHxnUA4SfMPUhwFHa75x/y6RHAJm6OSWKdVRNL7znBjY4aBji61Eb6NUkVPNDqcLmyGzW0XOR9YohcXwXOT8p5dToNoSu5wMpbBMK45Zzg4nsG37lFnpK2CNO+K1OuujYpWzxgmsDQ8oZGY5r8oKozuvAUWM85xXAFg0/J8EmzslcOz5eW+4ONt6kBGbHJttKwuiM+hSlG1dk2KS09SUTVEc9ZKQTc09EYuct4bVayXtV4/lSbE8taGXGHIIDg01ZtmzGMBt9VusrUZiqDl1W/JXA+ch1Ib7Q685dVvyXxgkiIzwAalc1Q655mQYsa1q130251KQwsdJ7YmQa87SICbhdt4A9kEXkeVQa05drVkyDW1fHCAeqhzTnEYJ++twvRSlJoXklknpve9KApTLHaqcz4YRkMvorGmOVKYYttbv1ddvlj9/r2tPiHIOhtQt11pz39FKs+1E96fuf0IcEJg6e9f8tq4SKFdYC5s4N2shyjHNa2xDBF39XBU2kdaRfpBikeOT47boMIHStvae5jyhBdsONZNOV9ST/ANfWeHpPxbe7y1CEW1WvE9rbqHJMXXctQuMLRiVzgLVI7Dnhku0HSWePiO0Zs3UeVMm3jcF8FwXV5PQ5Jg6XCo5VGIUU9kT6g6lmBMixw1yMSBynOhFDAQox9S3dJXo15sY1X+KHHv6FKM4xiLHN0G9bzEqVTi4Zm1siMf7yOlbDOglqBAHBFWrAXtc2mnLEGIgZDmmxcW2eQOvA4nJdFkl2Gamboc0Zb7bOVQdYs0Z1zRtqeU16ppA6kTE83ExoU5CTQEyqwRyFFwVZqAWkxYHLzGmRm0sky0ylLnCmrjo4U+H3ceQGgU1Wy0m+HSy+fNfyEV5Y03HVSO63wOUycSuqp8MeeFzVNPHbDAFiQOZafivas6+o2xFrpgSDOEatoAEe5gcsqk5OGiO84ohaDyK8zawv7tWxbjhqMk5dsZ9srM5I1XXHC7tLxVPDXMc9b1HfJqpWVsfXqsGa/ha5uEzL/y+Va+E8D7s8zyfNXz+h1f5HyZ5nq/yPN8GrOnB4sbo+9AF7xYPReXrRg4qrCXBYa4+YsV24qoP0PM64lnktENNFNXEtmphVafn6kOK/ACAf2QkUVnDU8NYAAAAAElFTkSuQmCC"}}]);