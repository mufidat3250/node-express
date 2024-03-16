const Input = ({onChange, type, value, otherClass, placeHolder}:{onChange:()=>void, value:string, type?:string, otherClass:string, placeHolder:string}) => {
  return (
    <div className={`w-full py-3 px-2 border-[1px] border-blue-600 ${otherClass}`}>
      <input type={type || "text"} placeholder={placeHolder}  value={value} onChange={onChange} className="w-full h-full outline-none border-none py-1"/>
    </div>
  )
}

export default Input
