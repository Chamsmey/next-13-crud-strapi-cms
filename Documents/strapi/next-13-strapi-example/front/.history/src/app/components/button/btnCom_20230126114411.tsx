const BtnCom = ({label,action}:{label:string,action:Function}) => {
    return ( 

        <button onClick={action()}
        className="w-full py-1 rounded-sm text-white text-lg bg-indigo-600"
        >
        {label}
      </button>
     );
}
 
export default BtnCom;