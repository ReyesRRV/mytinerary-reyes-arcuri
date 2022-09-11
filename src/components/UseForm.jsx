function UseForm(props) {
  const allInput = props.data;

  const FormItem = (item) => (
    <label className="placeholder" htmlFor={item.value}>
      <input
        type={item.type} className="inputFloat"
        required
        id={item.value}
        placeholder={item.value}
      />
    </label>
  );
  return <>
  {allInput.map(FormItem)}
  </>;
}

export default UseForm;
