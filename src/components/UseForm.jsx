function UseForm(props) {
  const allInput = props.data;

  const FormItem = (item) => (
    <>
      <div className="input-group" >
      <input
        type={item.type} className="input"
        required
        id={item.value}
        placeholder=" "
        />
      <label className="placeholder" htmlFor={item.value} id={item.id} >
      {item.value} </label>
        </div>
        </>
  );
  return <>
  {allInput.map(FormItem)}
  </>;
}

export default UseForm;
