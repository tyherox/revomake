/**
 * Created by JohnBae on 3/28/17.
 */
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});

AccountsTemplates.configure({
    homeRoutePath: '/home',
    redirectTimeout: 4000,
});