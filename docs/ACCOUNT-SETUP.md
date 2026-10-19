# Connect real accounts · owner setup

This module is prepared for Supabase Auth. It is not connected until you configure your own project. GitHub Pages hosts the HTML/CSS/JavaScript; the authentication service handles passwords and email confirmation.

## Setup

1. Create or choose your Supabase project. Enable email/password sign-up and **email confirmation**. Do not enable automatic confirmation for this flow.
2. Configure an appropriate email sender in the provider dashboard. Keep SMTP credentials there, never in GitHub. Test delivery with your own test addresses before inviting students.
3. Set the Site URL to your published Smart MUET root. Add these exact callback URLs to the authentication redirect allow-list, replacing the example account/repository paths:
   - `https://YOUR-ACCOUNT.github.io/YOUR-REPOSITORY/02-account/callback.html`
   - `https://YOUR-ACCOUNT.github.io/YOUR-REPOSITORY/02-account/callback.html?intent=recovery`
4. Use the provider’s confirmation and recovery email templates with their confirmation links. Those links must return to the allowed callback above. Do not insert a fixed OTP or simulate a sent message.
5. In `02-account/config.js`, put the project URL and **publishable key**, then set `enabled: true`. A legacy public `anon` key is supported too. Never use a secret or `service_role` key.
6. Match your provider’s password minimum to the UI setting (10 characters by default), then upload the complete folder structure to GitHub Pages. Real account functions require HTTPS; localhost is supported for development.
7. Test registration → actual email → confirmation callback → server-confirmed account; resend and cooldown; login with right/wrong credentials; forgotten password; expired/missing links; sign-out on a shared device.

The callback URL is calculated relative to this module, so repository and subfolder paths are preserved. PKCE proof is stored temporarily in localStorage so a confirmation link can open in a new tab in the **same browser**. Tokens live in sessionStorage. Opening a link in another browser/device cannot use the original proof: request a new link from the intended browser.

Registration deliberately requires the email-confirmation flow. If the service unexpectedly returns a session at sign-up, the module signs that session out and reports a connection problem instead of labelling the user as email-verified.

## What is stored

- The account provider holds email, password credentials and the supplied name, learner group and target-band metadata. User metadata is editable by the user and must never be used as an authorisation role.
- Session tokens use `smh.rebuild.account` in sessionStorage. The pending confirmation email and resend deadline also use sessionStorage.
- The temporary PKCE proof uses the SDK’s `smh.rebuild.account-code-verifier` local key and is removed when the SDK completes the exchange.
- The shared animation preference remains under `smh.rebuild.motionPaused`.
- No practice, audio or research records are uploaded by this module. Their consent controls belong to later parts.

The Welcome module remains public. It is an orientation page, not protected student data. If later modules introduce cloud progress, enforce authorisation and row-level access on the backend; a client-side navigation check does not secure a database.

## Testing scope

Browser checks exercised the configured SDK against mocked HTTPS responses for signup, resend, password login, cross-tab PKCE exchange, server user lookup, recovery, password update, missing links and logout. Mock addresses and keys were used. No live account or email was created. A real provider configuration and delivery test are still required.

## Official references

- https://supabase.com/docs/reference/javascript/auth-signup
- https://supabase.com/docs/reference/javascript/auth-signinwithpassword
- https://supabase.com/docs/reference/javascript/auth-exchangecodeforsession
- https://supabase.com/docs/reference/javascript/auth-resetpasswordforemail
- https://supabase.com/docs/reference/javascript/auth-updateuser
- https://supabase.com/docs/guides/auth/redirect-urls

The local SDK bundle is pinned to 2.118.0; its source and licence are in `02-account/vendor/`.
