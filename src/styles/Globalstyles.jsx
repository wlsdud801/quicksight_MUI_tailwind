import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
  width: 100%;
  height: 100%;
}
*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: theme('borderColor.DEFAULT', currentColor);
  padding: 0;
  margin: 0;
}

ul,
dl,
ol,
li,
dd {
  list-style: none;
}

a{
  text-decoration: none!important;
  color: inherit;
}

.react-grid-item{
  background-color: white;
}
.react-grid-item.react-grid-placeholder {
  background-color: gray;
  border-radius: 10px;
  opacity: 0.1;
}

.apexcharts-tooltip {
  width: 50% !important;
}
.echarts-for-react{
  width: 100%;
  height: 100% !important;
}
.echarts-for-react>div:first-child{
  height: 100% !important;
}
.echarts-for-react>div:last-child{
  width:  50% !important;
}
canvas {
  height: calc(100% - 3rem) !important;
}
`;

export default GlobalStyles;
