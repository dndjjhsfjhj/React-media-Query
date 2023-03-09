import React,{useState} from "react";
import "./style.css";
import SearchBar from './SearchBar'
export default function App() {
  const [toggle,setToggle]=useState(true)
  const Toggle=()=>{
   setToggle(!toggle)

 }
  return (
    <div>
      <table className="parent">
        <thead className="main">
           <tr>
           <td className="image" rowspan="">
             <img src={"https://www.wordstream.com/wp-content/uploads/2021/05/logo-1.svg"}/>
           </td>
           
           <td className="Blog" span="4"> 
             Blog
           </td>
           <td className="Free Tools">
             Free Tools
           </td>

          <td className="Resources">
            Resources
           </td>
           <td className="About Us">
             About Us
           </td>
           <td className="searchbar">
             <SearchBar/>

           </td>
           <td className="googlead" >
            {
             <button onClick={Toggle} className="Togglebutton">Google ads Grader</button>
            }
          </td>
          </tr>
          </thead>
        </table>
    </div>
  );
}
