function addOne(x) {
        return x + 1;
    }
    
    function pipe(args){
        for(let i=1;i<arguments.length;i++){
            args = arguments[i](args);
        }
        return args;
    }
    
    pipe(1, addOne);
    pipe(1, addOne, addOne);