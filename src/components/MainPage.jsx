import React, { useState,useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Logo from "../assets/Logo-50.png"
import ModalWithTransitions from './Modal'
import Pagination from "./Pagination"
import ThemeSelect from "./ThemeSelect"
import GsapAnimation from "./GsapAnimation"

const MainPage = (theme) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  useEffect(() => {
    const fetchDefaultBooks = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=picture book+${theme.theme.title}+book&maxResults=36`
      );
      setBooks(response.data);
      setLoading(false);
      console.log(response.data);
      
    };

    fetchDefaultBooks();
  }, [theme.theme]);

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${theme.theme.title}+${searchTerm}+picture book&maxResults=36`);
    setBooks(result.data);
    console.log(result.data)
  };

  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };
  
  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = books.items.slice(indexOfFirstPost, indexOfLastPost);

  function pagiNate(number) {
    setCurrentPage(number);
    console.log(number)
  }

  return (
    <section id="MainPage">
      <Nav>
        <img src={Logo} alt="Logo" />
        <ThemeSelect />
      </Nav>
      <TopArea>
        <GsapAnimation/>
        <CrossMark>×</CrossMark>
        <Form onSubmit={onSubmitHandler}>
            <TextInput
              type="search"
              placeholder="type any key word..."
              value={searchTerm}
              onChange={onInputChange}
            />
            <InputButton type="submit" name="SUBMIT"/>
        </Form>
      </TopArea>
      <div className="search_result_container">
        <div>
          {(loading) ? <Loading>Loading...</Loading>
            :
            <BookItems>
              {currentPosts.map((book, index) => {
                return (
                  <BookItem key={index}>
                    <BookItemDetail>
                      <BookImg
                        alt={`${book.volumeInfo.title} book`}
                        src={`http://books.google.com/books/content?id=${
                          book.id
                        }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                      />
                      <div>
                        <BookTitle>{book.volumeInfo.title}</BookTitle>
                        <BookAuthor>{book.volumeInfo.authors}</BookAuthor>
                        <ModalWithTransitions
                          activator={({ setShow }) => (
                            <ModalOpenButton
                              className="modal-open-btn"
                              type="button"
                              onClick={() => setShow(true)}
                            >
                              READ MORE
                            </ModalOpenButton>
                          )}
                        >
                          <img
                          alt={`${book.volumeInfo.title} book`}
                          src={`http://books.google.com/books/content?id=${
                            book.id
                          }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                          />
                          <h1>{book.volumeInfo.title}</h1>
                          <p>{book.volumeInfo.authors}</p>
                          {book.volumeInfo.description&&
                            <BookSummary>
                              <h3>- SUMMARY -</h3>
                              <p>{book.volumeInfo.description}</p>
                            </BookSummary>
                          }
                        </ModalWithTransitions>
                      </div>
                    </BookItemDetail>
                  </BookItem>
                );
              })}
            </BookItems>
          }
        </div>
        {(!loading) &&
          <Pagination
          pagiNate={number => pagiNate(number)}
          postPerPage={postPerPage}
          totalPosts={books.items.length}
          />
        }
      </div>
    </section>
  );
};

export default MainPage;

const Nav = styled.nav`
    background: ${({ theme }) => theme.primary};
    display:flex;
    justify-content: space-between;
    padding:20px;
`;

const TopArea = styled.div`
    height:300px;
    background: linear-gradient(${({ theme })=>theme.secondary}, rgba(0, 0, 0, 0));
    display:flex;
    justify-content: center;
    padding:50px 0px;
    align-items:center;
    @media (max-width: 768px){
      flex-direction:column;
    }
`;

const CrossMark = styled.h1`
      margin-left:20px;
      text-align:center;
      font-weight:300;
      color:rgba(170,170,170,0.3);
      font-size:100px;
      width:100px;
      @media (max-width: 768px){
        padding-left:0px;
        margin-left:0px;
      }
`;

const Form = styled.form`
      margin-left:20px;
      height:42px;
      border-radius:8px 8px 8px 8px;
      border:none;
      background-color:rgb(255, 255, 255);
      text-align:center;
      font-size:20px;
      &::placeholder{
        font-size:15px;
        color:rgb(175, 175, 175);
      }
      &:focus{
      outline:none;
      }
      @media (max-width: 768px){
        margin-left:0px;
        margin:15px 0px;
      }
`;

const TextInput = styled.input`
      width:180px;
      height:42px;
      border-radius:8px 8px 8px 8px;
      border:none;
      background-color:rgb(255, 255, 255);
      text-align:center;
      font-size:20px;
      &::placeholder{
        font-size:15px;
        color:rgb(175, 175, 175);
      }
      &:focus{
      outline:none;
      }
`;

const InputButton = styled.input`
      width:100px;
      height:42px;
      background: ${({ theme }) => theme.primary};
      border:none;
      border-radius:0px 8px 8px 0px;
      color:white;
      font-size:15px;
      &:focus{
      outline:none;
      }
      &:hover{
      cursor: pointer;
      }
`;


const Loading = styled.h1`
    text-align:center;
`;

const BookTitle = styled.h1`
    font-size:18px;
`;

const BookAuthor = styled.p`
    color:rgb(87, 87, 87);
    padding-top:3px;
    font-size:15px;
`;


const BookItems = styled.ul`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
`;
const BookItem = styled.li`
    width:480px;
    list-style: none;
    @media (max-width: 768px){
      width:380px;
    }
`;

const BookItemDetail = styled.div`
    display:flex;
    background: linear-gradient(${({ theme }) => theme.secondary}, rgba(0, 0, 0, 0));
    border-radius: 30px;
    margin: 56px;
    padding: 32px;
    @media (max-width: 768px){
      flex-direction:column;
      align-items.center
      margin: 16px;
    }
`;

const BookImg = styled.img`
      margin-right: 32px;
      border-radius: 16px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
      transition: all .2s;
      transform: translate(0, -64px);
      &:hover{
        box-shadow: 0 6px 8px rgba(0, 0, 0, .4);
        transform: translate(0, -64px) scale(1.1);
      }
      @media (max-width: 768px){
        margin-right: 0px;
      }
`;

const ModalOpenButton = styled.button`
      background: ${({ theme }) => theme.primary};
      border:none;
      border-radius:5px;
      margin-top:10px;
      font-size:15px;
      font-weight:500;
      padding:5px 17px;
      color:white;
      &:focus{
        outline:none;
`;

const BookSummary = styled.div`
      margin-top:20px;
      background: ${({ theme }) => theme.modal};
      padding:10px 10px 30px 10px;
`;