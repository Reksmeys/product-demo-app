import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchCategories, insertProductToAPI, updateProduct, uploadFile } from '../actions/ProductActions'
import Alert from '../components/Alert'

export default function CreateProduct({update}) {

    const [categories, setCategories] = useState([])
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    // state product for insert
    const [product, setProduct] = useState({
        id: 0,
        title: "",
        price: 0,
        description: "",
        categoryId: 0,
        images: ["https://api.lorem.space/image/watch?w=640&h=480&r=9123"]
    })

    // create function to get value from form
    const onInputChange = (e) => {
        console.log(e.target.value);
        const {name, value} = e.target

        setProduct(preState => {
            return{
                ...preState,
                [name]: value
            }
        })
        console.log(product);

    }
    const callAlert = () => {
        return <Alert msg="ផលិតផលបានកែប្រែដោយជោគជ័យ!" mode={true} />
    }

    const onSubmitProduct = () => {
        if (update){
            console.log("before submit", product);
            updateProduct(product, product.id)
            .then(res => res.json())
            .then(res => callAlert())
            .then(res =>  navigate("/data-table"))

        }else{
            console.log('new product will insert', product);
            insertProduct()
        }
        msg && <Alert msg="ផលិតផលបានកែប្រែដោយជោគជ័យ!" mode={true} />
    }
    
    const [source, setSource] = useState("");
    const onChangeFileHandler = (e) => {
        console.log(e.target.files[0]);
        setSource(e.target.files[0]);
    }

    useEffect(() => {
        fetchCategories()
        .then(res => res.json())
        .then(res => setCategories(res))
        console.log(update);
        
        if (update){
            const {nav_product} = location.state
            product.id = nav_product.id
            product.title = nav_product.title
            product.description = nav_product.description
            product.price = nav_product.price
            product.categoryId = nav_product.category.id
            product.images = [nav_product.images[0]]
        }else{
            setSource("")
        }
    }, [])

    const insertProduct = (e) => {
        // e.preventDefault()
        const formData = new FormData();
        formData.append("file", source, source.name);
        uploadFile(formData).then((res) => {
            console.log(res.data);
            product.images = [res.data.location];
            console.log('product', product);
            insertProductToAPI(product)
            .then(res => res.json())
            .then(res => {
                setMsg("ផលិតផលបានបញ្ចូលថ្មីដោយជោគជ័យ!")
                msg && (<Alert msg={msg} willDisplay={true} />)
                navigate("/")
            })
        })
    }

  return (
    <Container>
    <main class="form-product w-50 m-auto">
            <h1 class="h3 my-3 fw-normal">New Product</h1>
            <div class="form-floating">
            <input 
                onChange={onInputChange}
                name="title"
                value={product.title}
                type="text" class="form-control mb-2" placeholder="Magic Mouse" />
            <label for="floatingInput">Product Name</label>
            </div>
            <div class="form-floating">
            <input
                onChange={onInputChange} 
                name="price"
                value={product.price}
                type="text" class="form-control mb-2" placeholder="Prices ($)" />
            <label for="floatingPassword">Prices $</label>
            </div>
            <div className='form-floating mb-3'>
                <select class="form-select" aria-label="Product Category" onChange={onInputChange} name="categoryId" value={product.categoryId}>
                    <option selected disabled>Product Category</option>
                    {
                        categories && categories.map((category) => (
                            <option value={category.id}>{category.name}</option>
                        ))
                    }
                    
                </select>
            </div>
            <div class="form-floating">
                <textarea
                    onChange={onInputChange} 
                    name="description"
                    value={product.description}
                    class="form-control mb-2 h-100" placeholder="Leave a comment here"></textarea>
                <label for="floatingTextarea">Description</label>
            </div>
            <div className="col-md-12 mt-5 d-flex justify-content-center align-items-center">
            <div style={{border: '3px dotted darkblue', height: 200, width: 200}}> 
              <img src={source != "" ? URL.createObjectURL(source) : product.images[0] } style={{objectFit: 'cover', textAlign: 'center'}}/>
              <input className="mt-3" type="file" onChange={onChangeFileHandler} />
            </div>
            
          </div>
    
            <button 
                onClick={onSubmitProduct}
                class="w-100 btn btn-lg btn-primary mt-5" 
                type="submit">{update ? "Update" : "Insert"} Product</button>
            <p class="mt-5 mb-3 text-muted">Codewithmey © 2023</p>
            
        </main> 
    </Container>
  )
}
