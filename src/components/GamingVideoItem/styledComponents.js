import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  list-style-type: none;
  cursor: pointer;
  margin: 25px;
  border-bottom: 1px #000 solid;
  padding-bottom: 10px;
  height: 400px;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: fill;
`
export const VideoCardBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`
export const VideoDetailsText = styled.p`
  color: blue;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
`
export const NavLink = styled(Link)`
  color: blue;
  text-decoration: none;
  margin-bottom: 10px;
`
