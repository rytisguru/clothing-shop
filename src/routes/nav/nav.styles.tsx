import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { responsive } from '../../design/mixins';

export const Navigation = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 20px 0;

  ${responsive.forPhone`
    width: 70%;
  `}
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
  