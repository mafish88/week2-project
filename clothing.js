import { db } from './connectDb.js'
const clothingStore = db.collection('clothing')



//add an item of clothing

export async function addClothing(clothing){
    const listOfClothing = await clothingStore.insertMany(clothing)
console.log(listOfClothing);
}
export async function fillMyCloset(){
    addClothing(hats)
    addClothing(shirts)
    addClothing(pants)
}

