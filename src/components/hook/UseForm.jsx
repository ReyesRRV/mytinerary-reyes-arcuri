

function UseForm(props){
    const allInput = props.data
    

    const FormItem = (item)=>(
        <label className="labelFrom" htmlFor={item.value}>{item.value}
            <input type={item.type} required id={item.value} placeholder={item.placeholder}/>
        </label>
    )
    return(
        <>
        {allInput.map(FormItem)}
        </>
    )
}

export default UseForm