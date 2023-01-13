import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
		heading: 'Poppins',
		body: 'Poppins',
	},
  colors: {
    ['light-heading']: '#F5F8FA',
    ['light-text']: '#F5F8FA',
    ['light-info']: '#DADADA',
    ['dark-heading']: '#47585B',
    ['dark-text']: '#47585B',
    ['dark-info']: '#999999',
    ['highlight']: '#FFBA08',
    ['highlight-50']: '#FFBA0888',
  }
})