class MiniMaple{
    constructor(string, variable){
        this.items = string.replace(",",".").replace(/[ *^]/g,'').split(/[-+]/g);
        this.signs = Array.from(string.replaceAll(/[^+-]/g, ""));
        this.variable = variable;
    }

    diff(){
        let decision = '';
        this.items.forEach((item, key) => {
            if(item.indexOf(this.variable) >= 0){
                let number = item.split(this.variable)[0];
                let pow = item.split(this.variable)[1];
                item = "";
                if (number && pow) {
                    number *= pow;
                    item += `${number}*`;
                }
                else{
                    if (number){
                        item += number;
                    }
                    else{
                        if (pow){
                            item += `${pow}*`;
                        }
                        else{
                            item += 1;
                        }
                    }
                }
                if (pow){
                    pow--;
                    if (pow > 1) item += `${this.variable}^${pow}`;
                    else item += this.variable;
                }
            }
            else{
                item = "";
            }
            if (item != "") decision += item + this.signs[key];
        });
        return decision.replace(/[+-]$/,'').replace('undefined','');
    }
}

export {MiniMaple}