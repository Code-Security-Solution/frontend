import 'styled-components';
import { ColorsType, FontsType, ZIndexType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    zIndex: ZIndexType;
    fonts: FontsType;
  }
}
