function Greetuser({name,title}:{name:string,title:string})
{
return(
<>
<div>
{title?`Hello ${title} ${name}`:`Hello ${name}`}
</div>
</>
)
}
function Add({a,b}:{a:number,b:number})
{
    return(
        <>
        <div>
          Add: {a+b}
        </div>
        </>
    ) 
}
function Mul({a,b}:{a:number,b:number})
{
    return(
        <>
        <div>
          Mul: {a*b}
        </div>
        </>
    ) 
}

export default Greetuser
export {Add}
export {Mul}