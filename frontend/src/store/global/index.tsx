import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import viVN from 'antd/lib/locale/vi_VN';
import enUS from 'antd/lib/locale/en_US';
import dayjs from 'dayjs';
import i18n from 'i18next';

import { API, keyRefreshToken, keyToken, keyUser, lang, routerLinks } from '@utils';
import { Message } from '@core/message';
import { useAppDispatch, useTypedSelector, UserRole, Code } from '@store';
import { CommonEntity } from '@models';

const name = 'Auth';
const action = {
  name,
  set: createAsyncThunk(name + '/set', async (values: State) => values),
  logout: createAsyncThunk(name + '/logout', async () => {
    // if (localStorage.getItem(keyRefreshToken)) {
    //   return await API.get(`${routerLinks(name, 'api')}/logout`);
    // }
    return true;
  }),
  profile: createAsyncThunk(name + '/profile', async () => {
    const { data } = await API.get<User>(`${routerLinks(name, 'api')}/profile`);
    return data || {};
  }),
  putProfile: createAsyncThunk(name + '/putProfile', async (values: User) => {
    const { data, message } = await API.put<{ user: User; accessToken: string; refreshToken: string }>(
      `${routerLinks(name, 'api')}/profile`,
      values,
    );
    if (data) {
      if (message) await Message.success({ text: message });
      localStorage.setItem(keyToken, data?.accessToken);
      localStorage.setItem(keyRefreshToken, data?.refreshToken);
    }
    return data!.user;
  }),
  login: createAsyncThunk(name + '/login', async (values: { password: string; email: string }) => {
    const { data, message } = await API.post<{ user: User; accessToken: string; refreshToken: string }>(
      `${routerLinks(name, 'api')}/login`,
      values,
    );
    if (data) {
      if (message) await Message.success({ text: message });
      localStorage.setItem(keyToken, data?.accessToken);
      localStorage.setItem(keyRefreshToken, data?.refreshToken);
    }
    return data!.user;
  }),
  forgottenPassword: createAsyncThunk(name + '/forgotten-password', async (values: { email: string }) => {
    const { message } = await API.post(`${routerLinks(name, 'api')}/forgotten-password`, values);
    if (message) await Message.success({ text: message });
    return true;
  }),
  otpConfirmation: createAsyncThunk(name + '/otp-confirmation', async (values: { email: string; otp: string }) => {
    const { message } = await API.post(`${routerLinks(name, 'api')}/otp-confirmation`, values);
    if (message) await Message.success({ text: message });
    return true;
  }),
  resetPassword: createAsyncThunk(name + '/reset-password', async (values: ResetPassword) => {
    const { message } = await API.post(`${routerLinks(name, 'api')}/reset-password`, values);
    if (message) await Message.success({ text: message });
    return true;
  }),
};
interface ResetPassword {
  password?: string;
  retypedPassword?: string;
  passwordOld?: string;
  email?: string;
  otp?: string;
}
export class User extends CommonEntity {
  constructor(
    public name?: string,
    public avatar?: string,
    public password?: string,
    public email?: string,
    public phoneNumber?: string,
    public dob?: string,
    public description?: string,
    public positionCode?: string,
    public position?: Code,
    public retypedPassword?: string,
    public roleCode?: string,
    public role?: UserRole,
    public createdAt?: string,
    public updatedAt?: string,
  ) {
    super();
  }
}
const checkLanguage = (language: string) => {
  const formatDate = language === 'vn' ? 'DD-MM-YYYY' : 'DD-MM-YYYY';
  const locale = language === 'vn' ? viVN : enUS;
  dayjs.locale(language === 'vn' ? 'vi' : language);
  localStorage.setItem('i18nextLng', language);
  return { language: language, formatDate, locale };
};
export enum EStatusGlobal {
  idle = 'idle',
  logoutFulfilled = 'logout.fulfilled',
  profilePending = 'profile.pending',
  profileFulfilled = 'profile.fulfilled',
  profileRejected = 'profile.rejected',
  putProfilePending = 'putProfile.pending',
  putProfileFulfilled = 'putProfile.fulfilled',
  putProfileRejected = 'putProfile.rejected',
  loginPending = 'login.pending',
  loginFulfilled = 'login.fulfilled',
  loginRejected = 'login.rejected',
  forgottenPasswordPending = 'forgottenPassword.pending',
  forgottenPasswordFulfilled = 'forgottenPassword.fulfilled',
  forgottenPasswordRejected = 'forgottenPassword.rejected',
  otpConfirmationPending = 'otpConfirmation.pending',
  otpConfirmationFulfilled = 'otpConfirmation.fulfilled',
  otpConfirmationRejected = 'otpConfirmation.rejected',
  resetPasswordPending = 'resetPassword.pending',
  resetPasswordFulfilled = 'resetPassword.fulfilled',
  resetPasswordRejected = 'resetPassword.rejected',
}
const initialState: State = {
  data: JSON.parse(localStorage.getItem(keyUser) || '{}'),
  routeLanguage: undefined,
  user: JSON.parse(localStorage.getItem(keyUser) || '{}'),
  isLoading: false,
  isVisible: false,
  status: EStatusGlobal.idle,
  pathname: '',
  ...checkLanguage(lang),
};
export const globalSlice = createSlice({
  name: action.name,
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      if (action.payload !== state.language) {
        const { language, formatDate, locale } = checkLanguage(action.payload);
        i18n.changeLanguage(language);
        state.formatDate = formatDate;
        state.locale = locale;
        if (state.routeLanguage) state.pathname = state.routeLanguage[language];
        else
          state.pathname = location.hash.substring(1).replace('/' + state.language + '/', '/' + action.payload + '/');
        state.language = language;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(action.set.fulfilled, (state, action) => {
        let key: keyof State;
        for (key in action.payload) {
          state[key] = action.payload[key];
        }
      })
      // .addCase(action.logout.pending, (state: State) => {
      //   state.isLoading = true;
      //   state.status = 'logout.pending';
      // })
      .addCase(action.logout.fulfilled, (state) => {
        state.user = {};
        state.data = {};
        localStorage.removeItem(keyUser);
        localStorage.removeItem(keyToken);
        localStorage.removeItem(keyRefreshToken);
        state.isLoading = false;
        state.status = EStatusGlobal.logoutFulfilled;
      })

      .addCase(action.profile.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
          state.data = action.payload;
          localStorage.setItem(keyUser, JSON.stringify(action.payload));
          state.status = EStatusGlobal.profileFulfilled;
        } else state.status = EStatusGlobal.idle;
        state.isLoading = false;
      })
      .addCase(action.profile.rejected, (state) => {
        state.status = EStatusGlobal.profileRejected;
        state.isLoading = false;
      })

      .addCase(action.putProfile.pending, (state, action) => {
        state.data = { ...state.data, ...action.meta.arg };
        state.isLoading = true;
        state.status = EStatusGlobal.putProfilePending;
      })
      .addCase(action.putProfile.fulfilled, (state, action) => {
        if (action.payload) {
          localStorage.setItem(keyUser, JSON.stringify(action.payload));
          state.user = action.payload;
          state.status = EStatusGlobal.putProfileFulfilled;
        } else state.status = EStatusGlobal.idle;
        state.isLoading = false;
      })
      .addCase(action.putProfile.rejected, (state) => {
        state.status = EStatusGlobal.putProfileRejected;
        state.isLoading = false;
      })

      .addCase(action.login.pending, (state, action) => {
        state.data = action.meta.arg;
        state.isLoading = true;
        state.status = EStatusGlobal.loginPending;
      })
      .addCase(action.login.fulfilled, (state, action) => {
        if (action.payload) {
          localStorage.setItem(keyUser, JSON.stringify(action.payload));
          state.user = action.payload;
          state.data = {};
          state.status = EStatusGlobal.loginFulfilled;
        } else state.status = EStatusGlobal.idle;
        state.isLoading = false;
      })
      .addCase(action.login.rejected, (state) => {
        state.status = EStatusGlobal.loginRejected;
        state.isLoading = false;
      })

      .addCase(action.forgottenPassword.pending, (state, action) => {
        state.data = action.meta.arg;
        state.isLoading = true;
        state.status = EStatusGlobal.forgottenPasswordPending;
      })
      .addCase(action.forgottenPassword.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = EStatusGlobal.forgottenPasswordFulfilled;
        } else state.status = EStatusGlobal.idle;
        state.isLoading = false;
      })
      .addCase(action.forgottenPassword.rejected, (state) => {
        state.status = EStatusGlobal.forgottenPasswordRejected;
        state.isLoading = false;
      })

      .addCase(action.otpConfirmation.pending, (state, action) => {
        state.data = action.meta.arg;
        state.isLoading = true;
        state.status = EStatusGlobal.otpConfirmationPending;
      })
      .addCase(action.otpConfirmation.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = EStatusGlobal.otpConfirmationFulfilled;
        } else state.status = EStatusGlobal.idle;
        state.isLoading = false;
      })
      .addCase(action.otpConfirmation.rejected, (state) => {
        state.status = EStatusGlobal.otpConfirmationRejected;
        state.isLoading = false;
      })

      .addCase(action.resetPassword.pending, (state, action) => {
        state.data = action.meta.arg;
        state.isLoading = true;
        state.status = EStatusGlobal.resetPasswordPending;
      })
      .addCase(action.resetPassword.fulfilled, (state, action) => {
        if (action.payload) {
          state.data = {};
          state.status = EStatusGlobal.resetPasswordFulfilled;
        } else state.status = EStatusGlobal.idle;
        state.isLoading = false;
      })
      .addCase(action.resetPassword.rejected, (state) => {
        state.status = EStatusGlobal.resetPasswordRejected;
        state.isLoading = false;
      });
  },
});

interface State {
  [selector: string]: any;
  user?: User;
  data?: ResetPassword & User;
  routeLanguage?: Record<string, string>;
  isLoading?: boolean;
  isVisible?: boolean;
  status?: EStatusGlobal;
  pathname?: string;
  formatDate?: string;
  language?: string;
  locale?: typeof viVN | typeof enUS;
}
export const GlobalFacade = () => {
  const dispatch = useAppDispatch();
  return {
    ...(useTypedSelector((state) => state[action.name]) as State),
    set: (values: State) => dispatch(action.set(values)),
    logout: () => dispatch(action.logout()),
    profile: () => dispatch(action.profile()),
    putProfile: (values: User) => dispatch(action.putProfile(values)),
    login: (values: { password: string; email: string }) => dispatch(action.login(values)),
    forgottenPassword: (values: { email: string }) => dispatch(action.forgottenPassword(values)),
    otpConfirmation: (values: { email: string; otp: string }) => dispatch(action.otpConfirmation(values)),
    resetPassword: (values: ResetPassword) => dispatch(action.resetPassword(values)),
    setLanguage: (value: string) => dispatch(globalSlice.actions.setLanguage(value)),
  };
};
