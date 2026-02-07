import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../common/Navbar';
import { fetchCategories, fetchProducts, setCategory } from '../../slice/productslice';
import { addToCart } from '../../slice/cartslice';


function Product() {
  const dispatch = useDispatch();
  const { items, categories, selectedCategory, loading } =
    useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts(selectedCategory));
    setCurrentPage(1);
  }, [dispatch, selectedCategory]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = items.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(items.length / productsPerPage);

  return (
    <>
      <Navbar />

      <div className="container my-4">
        {/* Category Filter */}
        <select
          className="form-select w-25 mb-4"
          value={selectedCategory}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* Empty State */}
        {!loading && items.length === 0 && (
          <h5 className="text-center text-muted">
            No products found
          </h5>
        )}

        {/* Products */}
        {!loading && items.length > 0 && (
          <div className="row">
            {currentProducts.map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6>{product.title}</h6>
                    <p className="text-muted">₹ {product.price}</p>
                    <button
                      className="btn btn-primary mt-auto"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            thumbnail: product.thumbnail
                          })
                        )
                      }
                    >
                      Add to Cart
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <ul className="pagination justify-content-center mt-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? 'active' : ''
                  }`}
              >
                <button
                  className="page-link"
                  disabled={currentPage === index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Product;
