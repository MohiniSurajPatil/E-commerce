import React, { useState } from 'react';
import { Card, Icon, Image, Modal, Button, Header } from 'semantic-ui-react';
import './Cardsample.css';

const Cardsample = ({ productId, productName, productDescription, sellingPrice, productImage, removeProduct, updateProduct }) => {
  const [open, setOpen] = useState(false);
  const [updatedProductName, setUpdatedProductName] = useState(productName);
  const [updatedProductDescription, setUpdatedProductDescription] = useState(productDescription);
  const [updatedSellingPrice, setUpdatedSellingPrice] = useState(sellingPrice);

  const handleUpdate = () => {
    updateProduct(productId, updatedProductName, updatedProductDescription, updatedSellingPrice);
    setOpen(false);
  };

  return (
    <div className="product-card">
      <Card>
        <Image src={productImage} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            <p>Product ID: {productId}</p>
          </Card.Header>
          <br></br>
          <Card.Meta>
            <span className="date">
              <h4>Product Name: {productName}</h4>
            </span>
          </Card.Meta>
          <Card.Description>
            <p>Product Description: {productDescription}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <h5>
              Selling Price: {sellingPrice} <Icon name="rupee" />
            </h5>
          </a>
        </Card.Content>
        <br></br>
        <button className="removebtn" onClick={() => removeProduct(productId)}>
          Remove Product
        </button>
        <br></br>
        <Button className="updatebtn" onClick={() => setOpen(true)}>
          Update Product
        </Button>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Header icon="edit" content="Update Product" />
        <Modal.Content>
          <div>
            <label>Product Name:</label>
            <input type="text" value={updatedProductName} onChange={(e) => setUpdatedProductName(e.target.value)} />
            <br></br>
            <br></br>
          </div>
          <div>
            <label>Product Description:</label>
            <input type="text" value={updatedProductDescription} onChange={(e) => setUpdatedProductDescription(e.target.value)} />
            <br></br>
            <br></br>
          </div>
          <div>
            <label>Selling Price:</label>
            <input type="text" value={updatedSellingPrice} onChange={(e) => setUpdatedSellingPrice(e.target.value)} />
            <br></br>
            <br></br>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => setOpen(false)}>
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="green" onClick={handleUpdate}>
            <Icon name="checkmark" /> Save
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Cardsample;
