import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import { fetchProducts } from "../actions/ProductActions";

export const ProductTable = () => {
  const [products, setProudcts] = useState([]);
  const [search, setSearch]  = useState("");
  const [filteredProducts, setFilteredProducts] = useState([])
  
  const navigate = useNavigate()

  const columns = [
    {
      name: "Proudct Title",
      selector: (row) => row.title,
      sortable: true
    },
    {
      name: "Prices",
      selector: (row) => `${row.price} $`,
      sortable: true
    },
    {
      name: "Categories",
      selector: (row) => row.category.name,
    },
    {
      name: "Photos",
      selector: (row) => <img width={100} style={{margin: 20}} src={row.images[0]} />,
    },
    {
        name: "Action",
        cell: (row) => <button 
            className="btn btn-primary"
            onClick={() => navigate("/update", {
                state: {
                    nav_product: row
                }
            })}
        >Edit</button>,
      },
  ];

// ----- columns
    // const columns = [
    //     {
    //         name: 'Product Title',
    //         selector: product => product.title,
    //         sortable: true
    //     },
    //     {
    //         name: 'Prices',
    //         selector: product => product.price,
    //         sortable: true
    //     },
    //     {
    //         name: 'Category',
    //         selector: product => product.category.name,
    //     },
    //     {
    //         name: 'Photos',
    //         selector: product => <img src={product.images[0]} width="70" />,
    //     },
    //     {
    //         name: 'Actions',
    //         selector: product => <button 
    //             className="btn btn-primary"
    //             onClick={() => navigate("/update", {
    //                 state: {
    //                     nav_product: product
    //                 }
    //             })}
    //         >Edit</button>,
    //     },
    // ];


  useEffect(() => {
    fetchProducts()
      .then((res) => res.json())
      .then((resp) => {
        setProudcts(resp);

        setFilteredProducts(resp)

      });
  }, []);

  useEffect(() => {
    const result = products.filter(product => {
        return product.title.toLowerCase().match(search.toLowerCase())
    })
    setFilteredProducts(result)
  }, [search])

  return (
    <Container>
      <Row className="g-2 mt-3">
        <Col md={10}>
        
        </Col>
        <Col md={2}>
        <button type="button" class="btn btn-warning" onClick={() => navigate("/create", {
                  state: {
                    nav_product: {}
                  }
                })}>Insert Product</button>
        </Col>
      </Row>
      <DataTable
        title="Product Collection"
        // fixedHeader
        columns={columns}
        data={filteredProducts}
        pagination
        highlightOnHover
        subHeader
        subHeaderComponent={
            <input 
                type="search" 
                placeholder="search here"
                className="w-25 form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            
        }
      />
    </Container>
  );
};
