import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingPage = styled.span`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  flex-grow: 1;

  &::before, &:after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }

  &:before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg, var(--secondary-color) 0%,
      var(--primary-color) 100%
    );
    animation: ${spin} 1s infinite linear; // Use the spin animation and correct duration
  }

  &:after {
    width: 85%;
    height: 85%;
    background-color: #151515;
    top: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    z-index: 1; // Ensure the inner circle is on top
  }
`;

export default LoadingPage;