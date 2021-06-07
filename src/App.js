import logo from './logo.svg';
import './App.css';
import Routers from './Routers';
import { useState, useEffect } from 'react';
import productAPI from './api/productAPI';


function App() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const { data } = await productAPI.getAll();
        setProducts(data);
        setLoading(false);
      } catch (error) {

      }
    }
    getProducts();
  }, []);

  const addProduct = async (item) => {

    const index = products.length === 0 ? 1 : 1 + Number(products[products.length - 1].id);

    const data = {
      id: index,
      ...item,
    }
    await fetch('http://localhost:3008/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    setProducts([
      ...products,
      data
    ]);

  }

  const removeProduct = async (id) => {
    let confirmRemove = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirmRemove) {
      await fetch(`http://localhost:3008/products/${id}`, {
        method: 'DELETE',
      });
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
    }
  }


  const editProduct = async (product) => {
    await fetch(`http://localhost:3008/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    const newProducts = products.map(item => (item.id == product.id ? product : item));
    console.log(newProducts)
    setProducts(newProducts)
  }

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const getEmployees = async () => {
      const response = await fetch('http://localhost:3008/employees');
      const data = await response.json();
      setEmployees(data);
    }
    getEmployees();
  }, []);

  const addEmployee = async (item) => {
    const index = employees.length === 0 ? 1 : 1 + Number(employees[employees.length - 1].id);
    const data = {
      id: index,
      ...item,
      password: "12341234",
      role: "0"
    }
    await fetch('http://localhost:3008/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    await fetch('http://localhost:3008/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    setEmployees([
      ...employees,
      data
    ]);
  }

  const editEmployee = async (employee) => {
    await fetch(`http://localhost:3008/employees/${employee.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    });
    const newEmployee = employees.map(item => (item.id == employee.id ? employee : item));
    console.log(newEmployee)
    setEmployees(newEmployee)
  }


  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = products.slice(indexOfFirstItem,indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>

      <Routers products={products}
        employees={employees}
        loading={loading}
        onAddProduct={addProduct}
        onRemoveProduct={removeProduct}
        onEditProduct={editProduct}
        onAddEmployee={addEmployee}
        onEditEmployee={editEmployee}
        itemPerPage={itemPerPage}
        totalItems={products.length}
        paginate={paginate}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        currentPage={currentPage}
        itemPerPage={itemPerPage}
      />

    </div>
  );
}

export default App;
