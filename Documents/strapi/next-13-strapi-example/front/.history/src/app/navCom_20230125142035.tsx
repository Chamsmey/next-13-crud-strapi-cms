const NavCom = () => {
    return ( 

      <header className="bg-black">
      <nav className="flex justify-between py-2 px-1">
        <div className="logo">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-lg">
            PNC Film
          </h1>
        </div>
        <ul className="px-2 flex text-white">
          <li className="p-2 rounded bg-clip-border text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-lg text-white">
            Sign In
          </li>
        </ul>
      </nav>
    </header>
     );
}
 
export default NavCom;