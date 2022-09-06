let mobiles = {
    infinix:{
        V20:{
            ram : 4,
            storage :64
        }, 
        V2:{
            ram : 6,
            storage :128
        },
        V11:{
            ram : 8,
            storage :256
        }
    },
    xiomi:{
        x2:{
            ram : 4,
            storage :64
        }, 
        xi2:{
            ram : 6,
            storage :128
        },
        xs5:{
            ram : 8,
            storage :256
        }
    },
    Samsung:{
        S2:{
            ram : 4,
            storage :64
        }, 
        S3:{
            ram : 6,
            storage :128
        },
        S5:{
            ram : 8,
            storage :256
        }
    },
  
}

let mobileName = document.getElementById("mobileName")
let mobileModel = document.getElementById("mobileModel")
let key = Object.keys(mobiles)

function render(){

    for(let i = 0 ; i < key.length ; i++){
        mobileName.innerHTML+=`<option>${key[i]}</option>`

    }
}
render()
function nestedRender(){
    let nestedKeys = Object.keys(mobiles[mobileName.value])
    for (let i = 0 ; i < nestedKeys.length ; i++){
        mobileModel.innerHTML+=`<option>${nestedKeys[i]}</option>`
    }
}
// nestedRender()
function search(){
    let res = mobiles[mobileName.value][mobileModel.value]
      console.log(res)
}