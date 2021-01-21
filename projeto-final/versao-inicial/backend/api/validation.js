module.exports = app => {
    function existsOrError(value, msg){
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }
    
    function notExistsOrError(value, msg){
        try{
            existsOrError(value, msg)
        } catch(msg){
            return
        }
        throw msg
    }   
    
    function equalsOrError(valueA, ValueB, msg){
        if(valueA !== ValueB) throw msg
    }
    
    function validEmaiOrError(email, msg){
        if (!(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email))) throw msg 
    }

    function lenghtGreaterThanOrErro(value, len, msg){
        if ( value.length > len ) throw msg
    }
    
    function numNaturalOrError(value, msg){
        if ( isNaN( parseInt(value, 10 )) || value <= 0 ) throw msg
    }

    return { existsOrError, notExistsOrError,
             equalsOrError, validEmaiOrError, 
             lenghtGreaterThanOrErro, numNaturalOrError }
}
