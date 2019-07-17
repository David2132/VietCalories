
class DataService {
    pho = {
        meat: [],
        quantity: []
    }
    com ={
        
        egg: null,
        shrimp: null,
        sugarcane: null,
        nem: null,
        rice: null,
        meat: null,
        soup: null,
        eggRoll:null,
    }
    bun ={
        shrimp: null,
            sugarcane: null,
            nem: null,
            carb: null,
            meat: null,
            eggRoll: null
    }
    
    clearData(){
        const pho = {
            meat: [],
            quantity: []
        }
        const com ={
            
            egg: null,
            shrimp: null,
            sugarcane: null,
            nem: null,
            rice: null,
            meat: null,
            soup: null,
            eggRoll:null,
        }
        const   bun ={
            shrimp: null,
                sugarcane: null,
                nem: null,
                carb: null,
                meat: null,
                eggRoll: null
        }
        this.bun = bun
        this.pho = pho
        this.com = com
    }
    getMeat() {
        return this.pho.meat;
    }
    getIndex() {
        return this.pho.meat.length
    }
    setMeat(meat, index): void {
        if (this.getIndex() === 0)
            this.pho.meat.push(meat)
        else
            this.pho.meat[index] = meat;
    }
    setQuantity(quantity,index): void {
        if (this.getIndex() === 0)
            this.pho.quantity.push(quantity)
        else
            this.pho.quantity[index] = quantity;
    }
    delete():void{
        this.pho.meat.pop()
        this.pho.quantity.pop()

    }


}
export default new DataService()
