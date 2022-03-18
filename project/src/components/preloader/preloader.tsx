import {css} from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

function Preloader() {
  const override = css`
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: red;
`;

  return (
    <ClipLoader css={override} size={100}/>
  );
}

export default Preloader;
