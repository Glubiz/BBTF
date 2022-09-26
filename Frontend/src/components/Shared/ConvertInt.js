export const ConvertInt = (Value) => { 
    if (Value.toString().length > 3 && Value.toString().length < 7){
        Value = parseFloat(Value / 1000).toFixed(2).toString() + " K"
    } else if (Value.toString().length > 6 && Value.toString().length < 10){
        Value = parseFloat(Value / 1000000).toFixed(2).toString() + " M"
    } else if (Value.toString().length >= 10){
        Value = parseFloat(Value / 1000000000).toFixed(2).toString() + " B"
    }
    return Value
}