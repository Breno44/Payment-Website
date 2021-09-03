import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: #444;
`;
const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: #444;
`;

export const Container = styled.div`
  min-height: 100vh;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 600px;
  padding-top: 160px;
`;

export const InputBox = styled.div`
  margin-top: 20px;
`;

export const CardNumberInput = styled(Input)``;

export const CardHolderInput = styled(Input)``;

export const Span = styled.span`
  display: block;
  color: #999;
  padding-bottom: 5px;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 15px;
`;

export const InputBoxS = styled(InputBox)`
  flex: 1 1 150px;
`;

export const MonthInput = styled(Select)``;

export const YearInput = styled(Select)``;

export const Option = styled.option``;

export const CvvInput = styled(Input)``;

export const SubmitBtn = styled.button`
  width: 100%;
  background: linear-gradient(45deg, blueviolet, deeppink);
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    letter-spacing: 2px;
    opacity: 0.8;
  }
`;

export const CardContainer = styled.div`
  margin-bottom: -150px;
  position: relative;
  height: 250px;
  width: 400px;
`;

export const Front = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(45deg, blueviolet, deeppink);
  border-radius: 5px;
  backface-visibility: hidden;
  box-shadow: 0 15px 25px rgb(0, 0, 0, 0.2);
  transform: perspective(1000px) rotateY(0deg);
  padding: 20px;
  transition: transform 0.4s ease-out;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;

export const Img = styled.img`
  height: 50px;
`;

export const CardNumberBox = styled.div`
  padding: 30px 0;
  font-size: 22px;
  color: #fff;
`;

export const Box = styled.div`
  font-size: 15px;
  color: #fff;

  &::nth-child(1) {
    margin-right: auto;
  }
`;

export const CardHolderName = styled.div`
  padding-top: 5px;
`;

export const Expiration = styled.div`
  padding-top: 5px;
`;

export const ExpMonth = styled.span``;

export const ExpYear = styled.span``;

export const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(45deg, blueviolet, deeppink);
  border-radius: 5px;
  padding: 20px 0;
  text-align: right;
  backface-visibility: hidden;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  transform: perspective(1000px) rotateY(180deg);
  transition: transform 0.4s ease-out;
`;

export const Stripe = styled.div`
  background: #000;
  width: 100%;
  margin: 10px 0;
  height: 50px;
`;

export const CvvBox = styled.div`
  height: 50px;
  padding: 10px;
  margin-top: 5px;
  color: #333;
  background: #fff;
  border-radius: 5px;
`;

export const BoxS = styled.div`
  padding: 0 20px;

  span {
    color: #fff;
    font-size: 15px;
  }

  img {
    margin-top: 30px;
    height: 30px;
  }
`;

export const FlexBoxS = styled.div`
  display: flex;
  justify-content: space-between;
`;
