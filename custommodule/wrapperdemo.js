console.log(__filename);
console.log(__dirname);

module.exports={
     greet:(name)=>{
        console.log(name);
    }
}


//wrapperfunction(require,__filename,__dirname,exports,module etc)wrapped inside a function first