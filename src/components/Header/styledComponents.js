import styled from 'styled-components/macro'

export const NavHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: sticky;
  scroll-behavior: smooth;
  height: 50px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
`
export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`
export const ContentListItem = styled.li`
  display; fle;
`
export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px 16px;
  color: #fff;
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px none;
  cursor: pointer;
  color: ${props => props.color};
`
export const WebsiteLogo = styled.img`
  width: 110px;
  @media screen and (min-width: 768px) {
    width: 165px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
`
export const NavbarLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.background};
  }
`
export const NavbarSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.background};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
`
export const ProfileImg = styled.img`
  width: 40px;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 1px solid gray;
  padding: 13px;
  padding-right: 20px;
  padding-left: 20px;
  color: green;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin: 10xp;
  color: #000;
`
export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: #fff;
  padding: 10px;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
`
export const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`
