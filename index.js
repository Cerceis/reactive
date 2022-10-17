const reactive = (v) => {
    return {
        _value: v,
        _el: [],
        get value(){return this._value},
        set value(v){
            this._value = v;
            for(let i = 0; i < this._el.length; i++)
                this._apply(this._el[i]);
        },
        _apply(el){
            switch(el.localName){
                case "input":
                    el.value = this._value;
                    break;
                default:
                    el.textContent = this._value;
            } 
        },
        bind(query){
            const el = document.querySelector(query);
            if(!el) return;
            this._el.push(el);
            //bind data according to element type.
            this._apply(el)
        }
    }
}

//Define something
const myValue = reactive(1);
const myName = reactive("type something");

myValue.bind("#displaySection1")
myValue.bind("#displaySection2")
myValue.bind("#displaySection3")


myName.bind("#inputDisplaySection")
myName.bind("#inputSection")

// functions
const addValue = () => {
    myValue.value ++;
}






