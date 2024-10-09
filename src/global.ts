import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--miniitalic: Inter;

/* font sizes */
--regular-size: 16px;
--miniitalic-size: 13px;
--italicquote-size: 25px;

/* Colors */
--bordera: #373d48;
--backgrounda: #2e343d;
--text: #fff;
--grey500: #9fa8b6;
--red: #c73232;
--lime: #adde34;

/* Spacing */
--tight: 4px;
--large: 12px;

/* Gaps */
--gap-xs: 12px;
--gap-2xl-7: 21.7px;
--gap-59xl-8: 78.8px;
--gap-3xl-2: 22.2px;
--gap-321xl-8: 340.8px;
--gap-3xl: 22px;
--gap-6xl-7: 25.7px;

/* Paddings */
--padding-12xs: 1px;
--padding-smi-6: 12.6px;
--padding-78xl: 97px;
--padding-smi-7: 12.7px;
--padding-sm-8: 13.8px;
--padding-59xl-2: 78.2px;
--padding-8xs: 5px;
--padding-mid: 17px;
--padding-lgi: 19px;
--padding-lg: 18px;
--padding-89xl: 108px;
--padding-52xl: 71px;

/* Border radiuses */
--br-9xs: 4px;
--br-xs: 12px;

}
`;
