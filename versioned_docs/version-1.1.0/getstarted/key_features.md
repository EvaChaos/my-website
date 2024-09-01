---
sidebar_position: 2
---

# Explore key features

 This section provides an overview of key features that make SecureVault secure and easy to use.

## Basic 

Learn how to store your data, manage and update passwords, and use **Auto-fill** to access websites quickly.

### Store sensitive information 
:::info

SecureVault allows you to store the following types of information:
- Logins
- Cards
- Identity documents
- [Secure notes](glossary/securevault_pm.md) 
:::

To start saving data in your newly created vault, complete the following steps:

1. Log into your vault using your email and master password.
2. In the top left corner of the dashboard, select **New**>**Folder**. 
3. Name the folder and click **Save**. Your new folder appears in the **Filters** pane of the dashboard. 
<figure style={{ textAlign: 'center' }}>
  <img src="/img/Create_folder.png" alt="Screenshot of the Add folder field" style={{ display: 'block', margin: '20px auto' }} />
  <figcaption>*Create and name your folder* </figcaption>
</figure>

<figure style={{ textAlign: 'center' }}>
  <img src="/img/filters_section.png" alt="Screenshot of the Filter section of the vault" style={{ display: 'block', margin: '20px auto' }} />
  <figcaption>*Locate your folder* </figcaption>
</figure>

4. Add a login.

	1. Select **New**>**Item**. The **New item** dialog opens.
	2. From the drop-down list, choose **Login**.
	3. In the **Name** field, enter a name for your item. Names help you identify items in your vault. 
	4. From the **Folder** list, select the name of the folder you want to add this item to.
	5. Enter a username and a password you want to save. 
	6. In the **URI 1** field, enter the URL of the website you want to save credentials for.
	7. Click **Save**.
<figure style={{ textAlign: 'center' }}>
  <img src="/img/New_item.png" alt="Screenshot of the New Item form" style={{ display: 'block', margin: '20px auto' }} />
  <figcaption>*Add a new item*</figcaption>
</figure>

Your login information is saved in the **Social Media Logins** folder of the vault.

### Generate strong password

SecureVault password generator is a great tool to secure your online accounts. To replace the existing password with a stronger one, do the following: 

1. In your vault, select the name of the item you want to secure. 
2. In the **URI 1 field** of the **Edit item** dialog, click the **Launch** icon to open the website directly from your vault.
<figure style={{ textAlign: 'center' }}>
  <img src="/img/generate_password_url.png" alt="Screenshot of the URI 1 field" style={{ display: 'block', margin: '20px auto' }} />
  <figcaption>*Launch icon*</figcaption>
</figure>

:::tip

If you left the **URI 1** field empty, open the website in a new tab or window.

:::

3. On the website, log into your account and navigate to the area where you can change your password. Typically, you can find this in the **My Account**, **User Settings**, or **Security** section.
4. Return to your vault and click the **Generate** icon next to the **Password** field.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/password_field.png" alt="Screenshot of the Password field and the Generate icon" style={{ display: 'block', margin: '20px auto' }} />
  <figcaption>*Generate icon*</figcaption>
</figure>

5. The warning pop-up message appears. To confirm you want to overwrite the current password, select **Yes**.
6. Copy your randomly generated password with the **Copy** icon and click **Save**.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/password_history.png" alt="Screenshot of the Password history section" style={{ display: 'block', margin: '20px auto' }} />
  <figcaption>*Password history*</figcaption>
</figure>

:::tip

SecureVault maintains the password history of the last five passwords for every login. To access password history, click the name of the item and scroll down to the **Custom fields** section.

:::

7. Return to the website and paste your new password in the **New password** field.
8. Confirm the password and save changes.

You have successfully replaced your weak password.

### Use Auto-fill 

You can quickly input your login credentials from the vault using the **Auto-fill** option. 

:::tip

To avoid conflicts with the SecureVault Auto-fill, we recommend you disable your browser’s auto-fill option.

:::

To enable **Auto-fill**, do the following:
1. Install the SecureVault browser extension.
2. Log in with your username and master password.
3. Select **Settings**>**Auto-fill**.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/autofill.png" alt="Screenshot of the autofill menu" style={{ display: 'block', margin: '20px auto' }} />
  <figcaption>*Auto-fill option of the browser extension app*</figcaption>
</figure>

4. Locate **Show auto-fill menu on form fields** and select your preferred auto-fill menu behavior.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/autofill1.png" alt="Screenshot of Show auto-fill menu on form fields drop-down" style={{ display: 'block', margin: '20px auto' }} />
  <figcaption>*Auto-fill settings*</figcaption>
</figure>

The **Auto-fill** option is now enabled. Select the login you wish to use for the website and see how SecureVault takes care of the rest.

## Advanced

Learn how to navigate and use advanced features, such as 2-factor authentication and encryption. 

### Enable 2-factor authentication

With 2-factor authentication, you can add an extra layer of security to your account in case your master password is stolen. To enable 2-factor authentication, complete the following steps:

1. From the device you want to use as an authenticator, log into the SecureVault web application.
2. Go to **Settings**>**Security**>**Two-step login**.

:::warning

SecureVault support will not be able to assist you if you lose access to your authenticator device. A recovery code allows you to restore access in such cases.

:::

3. Click **View recovery code** and enter your master password.
4. Ensure you write down or print the recovery code and store it in a safe place.


<figure style={{ textAlign: 'center' }}>
  <img src="/img/recovery_code.png" alt="Screenshot of the recovery code pop-up" style={{ display: 'block', margin: '20px auto' }} />
  <figcaption>*Recovery code*</figcaption>
</figure>

5. Choose a provider you want to use and click **Manage**.

:::tip

We recommend you use [FIDO2](glossary/general.md) WebAuthn. Instead of passwords, [FIDO2](glossary/general.md) authentication lets you use a biometric method, such as fingerprint reading, to validate your identity. This reduces the risk of [phishing](glossary/cybersecurity.md), password theft, and [replay attacks](glossary/cybersecurity.md).

:::

6. If you chose FIDO2 WebAuthn as a provider, complete the following steps:
	1. Enter your master password.
	2. In the **Two step login Fido WebAuthn** dialog, enter a name for your security key.
	3. Click **Read Key**>**This device** if you use a mobile device. Click **Read Key**>**Windows Hello or external security key** if you use desktop and enter the **Windows Security** key. The key appears with a green checkbox. 
	5. Select **Save**>**Close**.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/private_key.png" alt="Screenshot of the authenticator setup window" style={{ display: 'block', margin: '20px auto' }} />
  <figcaption>*Set up a biometric key*</figcaption>
</figure>


You successfully turned on 2-factor authentication for your SecureVault account. Next time you try to log in, SecureVault will ask for your biometric data.

### Change encryption settings

Changing encryption settings can help protect your master password from [brute force attacks](glossary/cybersecurity.md). SecureVault uses [AES-CBC 256-bit encryption](https://bitwarden.com/help/what-encryption-is-used/#aes-cbc) for your vault data and [PBKDF2 SHA-256](https://bitwarden.com/help/what-encryption-is-used/#aes-cbc) to derive your encryption key. PBKDF2 SHA-256 algorithms rely on [KDF (Key Derivation Function)](https://en.wikipedia.org/wiki/Key_derivation_function) iterations that refer to how many times the key derivation function algorithm runs before you can access your vault. 

:::warning

Changing KDF iterations may result in vault data loss. To prevent data loss, make sure to export your vault before changing your encryption setting by clicking **Tools**>**Export vault**.

:::

To change the value of KDF iterations, do the following:

1. Log into your SecureVault account.
2. Go to **Settings**>**Security**>**Keys**.
3. In the **KDF iterations** field, change the KDF iterations value.

:::tip 

Setting your KDF iterations too high could result in poor performance when logging into (and unlocking) SecureVault on slower and older devices. We recommend that you increase the value in increments of 100,000 and then test all of your devices.

:::
<figure style={{ textAlign: 'center' }}>
  <img src="/img/kdf.png" alt="Screenshot of the encryption settings" style={{ display: 'block', margin: '20px auto' }} />
  <figcaption>*Encryption settings*</figcaption>
</figure>

4. Click **Change KDF**. You will be logged out of all active sessions.
5. If you want to proceed, enter your master password and click **Change KDF** again. 

Your KDF settings have been updated. Log in to continue using SecureVault. 
