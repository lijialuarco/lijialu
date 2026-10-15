# Deployment layout

The current homepage is exported as static files and served directly by Nginx.

- Production root: `/var/www/lijialu.com/current`
- Immutable releases: `/var/www/lijialu.com/releases/<git-sha>`
- Nginx source config: `deploy/nginx/lijialu.com.conf`
- Future Go API: bind to `127.0.0.1:8080` and enable the commented `/api/` location.

Each release is uploaded to a new directory, verified, and activated by changing
the `current` symlink. A rollback only needs to point that symlink to the
previous release and reload Nginx.
