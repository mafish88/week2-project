import { closeClient } from "./connectDb.js";
import { addClothing } from "./clothing.js";
import { addStore } from "./stores.js";

const shirts = {
    color:'yellow',
    size:'large',
    neckType:'crew',
}
const hats = {
    color:'black',
    type: 'bucket',
    size: 'large',
    }
const pants = {
    color: 'blue',
    type: 'jeans',
    style: 'slimFit',
    size: 'large',
}

    await addClothing([pants,shirts,hats])
    
    closeClient()
    
    
    
    

    
    const theGap = {
        location:'plantation',
        name: 'theGap'
        

    }
    const macys = {
        location:'miami',
        name:'macys'
        }
    const  urbanOutfitters= {
       location:'westPalm',
       name:'urbanOutfitters'
    }
    
        await addStore([theGap,macys,urbanOutfitters])
        
        closeClient()

















