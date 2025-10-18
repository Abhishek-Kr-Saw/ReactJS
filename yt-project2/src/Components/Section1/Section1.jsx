import Navbar from "./Navbar";"./Navbar";
import PageContent from "./PageContent";"./PageContent"

function Section1(props) {

  return (
    <div className="h-screen w-full p-5 border-whit">
        <Navbar />
        <PageContent users={props.users}/> 
    </div>
  )
}

export default Section1