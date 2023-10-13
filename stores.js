import { db } from './connectDb.js'
const clothingStore = db.collection('store')



//add a store

export async function addStore(stores){
    const listOfStores = await clothingStore.insertMany(stores)
console.log(listOfStores);
}
export async function fillMyCloset(){
    addStore(hats)
    addStore(shirts)
    addStore(macys)
}