

Vue.component('hello',{
    template:'<h1>hello</h1>'
})

new Vue({
        el:'#app',
        data:{
            playerHealth:100,
            monsterHealth:100,
            gameIsRunning:false,
            logs:[]
        },
        methods:{
                start:function(){
                    this.gameIsRunning=true;
                },
                giveUp:function(){
                this.gameIsRunning=false;
                this.monsterHealth=100;
                this.playerHealth=100;
                this.logs=[];
                },
                heal:function(){
                this.playerHealth+=10;
                this.logs.push('heal');
                },
                attack:function(){
        
                this.monsterHealth-=this.calculateDamge(3,10);
                this.logs.push('attack');

                if(this.monsterHealth<=0){
                    alert("you win");
                    this.giveUp()
                }     
                this.playerHealth-=this.calculateDamge(5,12);
                if(this.playerHealth<=0){
                    alert("you lost");
                    this.giveUp()
                }
                },
                spacialAttak:function(){
                    this.logs.push('spacialAttak');

                    this.monsterHealth-=this.calculateDamge(10,20);
                    if(this.monsterHealth<=0){
                        alert("you win");
                        this.giveUp()
                    }     
                this.playerHealth-=this.calculateDamge(5,12);
                if(this.playerHealth<=0){
                    alert("you lost");
                    this.giveUp()
                }

                },calculateDamge:function(min,max){
                    return damge=Math.max(Math.floor(Math.random()*max)+1,min);
                }
                

            }

    })