import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './components/UsePagination';
import './pagination.scss';

import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'


const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    currentPage < (totalCount / pageSize) ? onPageChange(currentPage + 1) : onPageChange(currentPage);
    console.log('onNext');

  };

  const onPrevious = () => {
    currentPage > 1 ? onPageChange(currentPage - 1) : onPageChange(currentPage);
    console.log('onPrev');
  };

/*   let lastPage = paginationRange[paginationRange.length - 1];
 */  
return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
       {/* Left navigation arrow */}

            <li className={currentPage === 1 ? 'prev-page disabled' : 'prev-page'} onClick={onPrevious}>
                <AiOutlineArrowLeft />
                <p className="body2">Previous Page</p>
            </li>

      {paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li key={pageNumber}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
        <li className={currentPage === (totalCount / pageSize) ? 'prev-page disabled' : 'prev-page'} onClick={onNext}>
                <p className="body2">Next Page</p>
                <AiOutlineArrowRight />
        </li>
    </ul>
  );
};

export default Pagination;