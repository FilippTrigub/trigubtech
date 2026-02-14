## Getting Started

To get started, you will need to have Node.js and pnpm installed.

1.  Install the dependencies:

    ```bash
    pnpm install
    ```

2.  Start the development server:

    ```bash
    pnpm dev
    ```

## Production Build

To create a production build, run the following command:

```bash
pnpm build
```

**Note:** For the production build to work correctly, you will need to configure your server to redirect all 404s to `/index.html`. This is necessary because the website uses client-side routing.

### Server Configuration Examples

Here are some examples of how to configure common servers to handle client-side routing:

#### Apache

Create a `.htaccess` file in your public directory with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx

In your server block, add the following location block:

```nginx
location / {
  try_files $uri /index.html;
}
```

#### Other Servers

For other servers, please consult their documentation on how to configure them to handle client-side routing.
