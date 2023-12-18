import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllProducts } from '../apiCalls'
import { toast } from 'react-toastify'
import ErrorBoundary from './ErrorBoundary'

export const Dashboard = () => {
	const navigate = useNavigate()
	const [products, setProducts] = useState([])

	// this is a new async func - where I can call my API
	const loadProducts = async () => {
		try {
			const response = await getAllProducts()
			if (response.status == 200) {
				setProducts(response.data)
			}
		} catch (error) {
			toast.error("Unable to load products")
		}
	}

	// whenever component mounted
	useEffect(() => {
		loadProducts()
	}, [])

	const handleLogout = () => {
		localStorage.removeItem("ecom-token")
		navigate("/login")
	}

	return (
		<>
			<div>
				<h1>My Ecom Project</h1>
				<div className='logout-btn'>
					<button className="btn btn-danger" onClick={handleLogout}>Logout</button>
				</div>
				{
					products.map((product, index) => {
						return (
							<div class="card mb-3" key={index}>
								<div class="row no-gutters">
									<div class="col-md-4">
										<img src={product.image} class="card-img" style={{ maxHeight: "300px" }} />
									</div>
									<div class="col-md-8">
										<div class="card-body">
											<h5 class="card-title">{product.title}</h5>
											<p class="card-text">{product.description}</p>
											<p class="card-text">₹ {product.price}/-</p>
										</div>
										<button className='btn btn-primary'>Add to Cart</button>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</>
	)
}