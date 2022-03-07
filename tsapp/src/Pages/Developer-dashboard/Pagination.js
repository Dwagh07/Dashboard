import ReactPaginate from 'react-paginate';
import {useEffect, useState} from 'react';
import Cardcompnents from '../Cards/Cardcomponents';
import Cards from '../Cards/Cards';


function Items({ currentItems }) {
    return (
      <div className="items">
      {currentItems && currentItems.map((item) => (
        <div>
          <Cards/>
        </div>
      ))}
        </div>
    );
  }

function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
         console.log(`Loading items from ${itemOffset} to ${endOffset}`);
          setCurrentItems(Items.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(Items.length / itemsPerPage));
  }, 
       [itemOffset, itemsPerPage]);
      const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % Cardcompnents.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
         onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;