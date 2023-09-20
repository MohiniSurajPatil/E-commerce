import 'semantic-ui-css/semantic.min.css';
import { Header, Icon, Modal } from 'semantic-ui-react';
import React, { useState } from 'react';
import CardSample from './Cardsample';
import './Adminpage.css';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { useEffect } from 'react';

const Adminpage = () => {
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [product, setProduct] = useState([
    {
      productId: 'PID101',
      productName: 'Persnalised Love gift lamp',
      sellingPrice: 750,
      productDescription: 'The lamp emits a soft and comforting glow, creating a cozy atmosphere in any room.',
      productImage: 'https://designyourown.pk/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-20-at-9.27.18-PM-1.jpeg',
    },
    {
      productId: 'PID102',
      productName: 'Customised Photo Pillow',
      sellingPrice: 500,
      productDescription: 'This custom pillow allows you to personalize it with your favorite photos, creating comfort and joy.',
      productImage: 'https://www.giftsholic.in/cdn/shop/products/GH-130-1_350x_crop_center.jpg?v=1663786213',
    },
  ]);

  const addProduct = () => {
    const newProduct = {
      productId: productId,
      productName: productName,
      sellingPrice: productPrice,
      productDescription: productDescription,
      productImage: productImage,
    };
    setProduct([...product, newProduct]);
    setOpen(false);
  };

  const [searchProduct, setSearchProduct] = useState('');
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    setFilteredProduct(product.filter((tempProduct) => tempProduct.productName.includes(searchProduct)));
  }, [searchProduct, product]);

  const removeProduct = (productIdDelete) => {
    setProduct(product.filter((tempProduct) => tempProduct.productId !== productIdDelete));
  };

  
  const updateProduct = (productId, updatedProductName, updatedProductDescription, updatedSellingPrice) => {
    setProduct(
      product.map((temp) => {
        if (temp.productId === productId) {
          return {
            ...temp,
            productName: updatedProductName,
            productDescription: updatedProductDescription,
            sellingPrice: updatedSellingPrice,
          };
        }
        return temp;
      })
    );
  };
  
  
    
  

  return (
    <div className="Adminpage">
      <div>
        <Input
          type="text"
          placeholder="Search Product..."
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          className="search-input"
        />
        <br />
        <br />
        <Modal closeIcon open={open} trigger={<Button onClick={() => setOpen(true)}>Add New Product</Button>} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
          <Header icon="add" content="Add New Product" />
          <Modal.Content>
            <p>Enter Product Id :  <input type="text" placeholder="Enter Product Id" onChange={(e) => setProductId(e.target.value)} /> </p>
            
             
            <p>Enter Product Name : <input type="text" placeholder="Enter Product Name" onChange={(e) => setProductName(e.target.value)} /></p>
            
            <p>Enter Selling Price : <input type="text" placeholder="Enter Selling Price" onChange={(e) => setProductPrice(e.target.value)} /></p>
            
            <p>Enter Product Description  : <input type="text" placeholder="Enter Product Description" onChange={(e) => setProductDescription(e.target.value)} /></p>
            
            <p>Enter Image URL :  <input type="text" placeholder="Enter Image URL" onChange={(e) => setProductImage(e.target.value)} /></p>
           
            <br />
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={() => setOpen(false)}>
              <Icon name="remove" /> Cancel
            </Button>
            <Button color="green" onClick={addProduct}>
              <Icon name="checkmark" /> Add
            </Button>
          </Modal.Actions>
        </Modal>
      </div>

      <div className="main">
        <br />
        <h1>Product List :</h1>
        <div className="product-list">
          {searchProduct
            ? filteredProduct.map((tempProduct) => (
                <CardSample
                  productId={tempProduct.productId}
                  productName={tempProduct.productName}
                  productDescription={tempProduct.productDescription}
                  sellingPrice={tempProduct.sellingPrice}
                  productImage={tempProduct.productImage}
                  removeProduct={removeProduct}
                  updateProduct={updateProduct}
                />
              ))
            : product.map((tempProduct) => (
                <CardSample
                  productId={tempProduct.productId}
                  productName={tempProduct.productName}
                  productDescription={tempProduct.productDescription}
                  sellingPrice={tempProduct.sellingPrice}
                  productImage={tempProduct.productImage}
                  removeProduct={removeProduct}
                  updateProduct={updateProduct}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
