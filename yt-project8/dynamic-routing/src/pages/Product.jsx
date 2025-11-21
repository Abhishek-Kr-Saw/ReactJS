import {Link,Outlet} from "react-router-dom"

function Product() {
  return (
    <div>
        <div className="flex items-center justify-center gap-8">
            <Link className="text-xl font-semibold" to='/product/men'>Men</Link>
            <Link className="text-xl font-semibold" to='/product/women'>Women</Link>
            <Link className="text-xl font-semibold" to='/product/kids'>Kids</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product