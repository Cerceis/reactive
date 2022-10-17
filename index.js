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
        bind(el){
            this._el.push(el);
            //bind data according to element type.
            this._apply(el)
        }
    }
}

//Define something
const myValue = reactive(1);
const myName = reactive("type something");

myValue.bind(document.querySelector("#displaySection1"))
myValue.bind(document.querySelector("#displaySection2"))
myValue.bind(document.querySelector("#displaySection3"))


myName.bind(document.querySelector("#inputDisplaySection"))
myName.bind(document.querySelector("#inputSection"))

// functions
const addValue = () => {
    myValue.value ++;
}






