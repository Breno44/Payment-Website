import React from "react";
import Chip from "./assets/images/chip.png";
import Visa from "./assets/images/visa.png";
import {
  Container,
  Form,
  InputBox,
  CardNumberInput,
  CardHolderInput,
  Span,
  FlexBox,
  InputBoxS,
  MonthInput,
  YearInput,
  Option,
  CvvInput,
  SubmitBtn,
  CardContainer,
  Front,
  Image,
  Img,
  CardNumberBox,
  Box,
  CardHolderName,
  Expiration,
  ExpMonth,
  ExpYear,
  Back,
  Stripe,
  CvvBox,
  BoxS,
  FlexBoxS,
} from "./App.elements";

const App = () => {
  return (
    <Container>
      <CardContainer>
        <Front>
          <Image>
            <Img src={Chip} alt="" />
            <Img src={Visa} alt="" />
          </Image>
          <CardNumberBox id="card-number-box">################</CardNumberBox>
          <FlexBoxS>
            <Box>
              <span>card holder</span>
              <CardHolderName>Full name</CardHolderName>
            </Box>
            <Box>
              <span>expires</span>
              <Expiration>
                <ExpMonth>mm</ExpMonth>
                <ExpYear>yy</ExpYear>
              </Expiration>
            </Box>
          </FlexBoxS>
        </Front>
        <Back>
          <Stripe></Stripe>
          <BoxS>
            <span>cvv</span>
            <CvvBox></CvvBox>
            <img src={Visa} alt="" />
          </BoxS>
        </Back>
      </CardContainer>
      <Form>
        <InputBox>
          <Span>card number</Span>
          <CardNumberInput type="text" maxlength="16" id="card-number-input" />
        </InputBox>
        <InputBox>
          <Span>card holder</Span>
          <CardHolderInput type="text" />
        </InputBox>
        <FlexBox>
          <InputBoxS>
            <Span>expiration mm</Span>
            <MonthInput name="" id="">
              <Option value="month" selected disabled>
                month
              </Option>
              <Option value="01">01</Option>
              <Option value="02">02</Option>
              <Option value="03">03</Option>
              <Option value="04">04</Option>
              <Option value="05">05</Option>
              <Option value="06">06</Option>
              <Option value="07">07</Option>
              <Option value="08">08</Option>
              <Option value="09">09</Option>
              <Option value="10">10</Option>
              <Option value="11">11</Option>
              <Option value="12">12</Option>
            </MonthInput>
          </InputBoxS>
          <InputBox>
            <Span>expiration yy</Span>
            <YearInput name="" id="">
              <Option value="year" selected disabled>
                year
              </Option>
              <Option value="2022">2022</Option>
              <Option value="2023">2023</Option>
              <Option value="2024">2024</Option>
              <Option value="2025">2025</Option>
              <Option value="2026">2026</Option>
              <Option value="2027">2027</Option>
              <Option value="2028">2028</Option>
              <Option value="2029">2029</Option>
              <Option value="2030">2030</Option>
            </YearInput>
          </InputBox>
          <InputBox>
            <Span>cvv</Span>
            <CvvInput type="text" maxlength="4" />
          </InputBox>
        </FlexBox>
        <SubmitBtn type="submit" value="Submit">
          Button
        </SubmitBtn>
      </Form>
    </Container>
  );
};

export default App;
