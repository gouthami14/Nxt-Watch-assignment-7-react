import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const SearchVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
  padding: 30px;
`
export const SearchInput = styled.input`
  width: 250px;
  border: 1px solid #fff;
  margin-left: 60px;
  border-radius: 2px;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
`

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
`

export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`
export const Image = styled.img`
  width: 200px;
  margin: 20px;
`
export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`
export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 30px;
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  margin-bottom: 32px;
`
export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`
