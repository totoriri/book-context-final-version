import React from "react";
import styled from "styled-components" 

function Pagination({ postPerPage, totalPosts, pagiNate }) {
  // debugger;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
      <PaginationContainer>
        {pageNumbers.map(item => (
          <PageItem key={item}>
            <a href="#" onClick={() => pagiNate(item)} className="page-link">
              {item}
            </a>
          </PageItem>
        ))}
      </PaginationContainer>
  );
}

export default Pagination;


const PaginationContainer = styled.ul`
        display:flex;
        justify-content: center;
        margin:40px;
        position:absolute;
        left:50%;
        transform:translate(-70%)
`;

const PageItem = styled.li`
            list-style:none;
            font-size:25px;
            &:hover{
                cursor: pointer;
            }
            a{
                color:rgb(82, 82, 82);
                text-decoration: none;
                padding:7px 14px;
                border-radius: 50%;
                // border:1px solid lightgray;
                &:hover{
                    cursor: pointer;
                    background-color:lightgray;
                }
                &:active{
                    background-color:gray;
                }
            }
        }
`;