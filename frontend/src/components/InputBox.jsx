export function InputBox({label,placeholder , onChange}){

    return (
        <>

        <div className="font-medium text-small text-left py-2 ">{label}</div>
        <input onChange={onChange}placeholder={placeholder} className="rounded-lg p-2 w-full py-2 border-solid border-2"></input>
    
        
        
        </>
    )
}