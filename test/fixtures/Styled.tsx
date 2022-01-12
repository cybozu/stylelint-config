import styled from "styled-components";


const toStaticUrl = p => p;

const Button = styled.button`
-webkit-appearaunce: none;

.foo:hover {
  color: rgba(0, 0,　0, .5);
  /* function-url-quotes raises this as an error */
  background-image: url(${toStaticUrl(
    '/img/foo.png'
  )});
  /* function-whitespace-after raises this as an error */
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
}
.foo {
  border: 1px 0px 1px 0px;
}
`