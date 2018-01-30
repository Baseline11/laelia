import {colors, fonts} from '../../utils';

export default {
  baseAction: {
    ...fonts.baseText,
    fontSize: 20,
    color: colors.white,
    background: colors.cornflowerBlue,
    borderRadius: 3,
    border: 0,
    outline: 0,
    padding: '5px 10px',
    display: 'inline-block',
    margin: '0',
    ':hover': {
      background: colors.jordyBlue
    }
  }
};
