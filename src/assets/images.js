import CONSTANT from '../utils/constant';

let publicPath = CONSTANT.PUBLIC_PATH;

class Images {
	LOGO = publicPath + '/images/logo.svg';
  WHITE_LOGO = publicPath + '/images/white_logo.svg';
  USER = publicPath + '/images/user.png';
  Message = publicPath + '/images/message.png';
  SEARCH_ICON = publicPath + '/images/srch_icn.svg';
  PROFILE_PIC = publicPath + '/images/pro_pic.jpg';
  SAMSUNG = publicPath + '/images/samsung.png';
  CARD_PRO = publicPath + '/images/card_pro.jpg';
  APPLE = publicPath + '/images/apple_logo.png';
  GOOGLE = publicPath + '/images/google.png';
}

export default new Images();
