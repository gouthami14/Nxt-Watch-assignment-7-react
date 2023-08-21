import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  list-style-type: none;
  cursor: pointer;
  margin: 25px;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
`
export const ThumbnailImage = styled.img`
  width: 50%;
  height: 250px;
  object-fit: scale-down;
`

export const VideoCartBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 10px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`
export const VideoDetailsText = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: ${props => props.size}px;
  font-weight: bold;
`
export const NavLink = styled(Link)`
  color: ${props => props.textColor};
  text-decoration: none;
  margin-bottom: 10px;
`
