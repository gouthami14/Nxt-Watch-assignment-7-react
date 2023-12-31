import styled from 'styled-components/macro'

export const LoginFromContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  max-width: 1110px;
  margin: auto;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  max-width: 350px;
  @media screen and (min-width: 992px) {
    width: 350px;
    flex-shrink: 0px;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
    padding: 64px 48px 64px 48px;
  }
`
export const LoginWebsiteLogo = styled.img`
  width: 185px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #4f46e5;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const InputLabel = styled.label`
  margin-bottom: 2px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #475569;
`
export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #fff;
  color: #fff;
  border-radius: 2px;
  margin-top: 5px;
  padding: 6px 18px 6px 18px;
  outline: none;
`
export const UserNameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #fff;
  color: #fff;
  border-radius: 2px;
  margin-top: 5px;
  padding: 6px 18px 6px 18px;
  outline: none;
`
export const ErrorMessage = styled.p`
  align-self: start;
  margin-top: 2px;
  font-size: 12px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  line-height: 16px;
  color: #ff0b37;
`
export const ShowHideContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const CheckboxInput = styled.input`
  margin-right: 4px;
`
