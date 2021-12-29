import styled from "styled-components";

const Button = styled.button`
-webkit-appearaunce: none;

.foo:hover {
  color: rgba(0, 0,　0, .5);
  background-image: url(${toStaticUrl('/img/foo.png')});
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
}
.foo {
  border: 1px 0px 1px 0px;
}
`