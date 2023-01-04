import { ButtonProps, BoxProps, TooltipProps } from '@chakra-ui/react';

// == Color =======================================================================
export const AppColors = {
  PURPLE:  '#5916F3',
  PURPLE_2: '#BFBAFF',
  WHITE:   '#FFFFFF',
  WHITE_2:   '#FBF8F4EC',
  BLACK_1: '#191919',
  BLACK_2: '#222222',
};

// == Class =======================================================================
export const HOVERABLE_CLASS = 'hoverable';

// == ChakraUI ====================================================================
export const TOAST_DURATION = 2500/*T&E*/;

export const buttonProps: Partial<ButtonProps> = {
  className: HOVERABLE_CLASS,
  color: AppColors.WHITE,
  backgroundColor: AppColors.PURPLE,
  _active: { color: AppColors.PURPLE, backgroundColor: AppColors.WHITE },
  _hover: { color: AppColors.PURPLE, backgroundColor: AppColors.WHITE },
}

export const boxProps: Partial<BoxProps> = {
  padding: '1em',
  flexBasis: '50%',
  overflow: 'auto',
}

export const tooltipProps: Partial<TooltipProps> = {
  hasArrow: true,
  placement: 'top',
  color: AppColors.PURPLE,
  backgroundColor: AppColors.WHITE,
  _after: { backgroundColor: AppColors.PURPLE },
}
