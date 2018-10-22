<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'photo');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '#@1%tT06{45 `6]=Iy|YxqXPL#%+2*<s&OM{/28MS[s`$zjFzb&3p 4?C$8YIF3D');
define('SECURE_AUTH_KEY',  'GM k-xL/|$gNFqpF.aeBp?*k,*!AH#*N^7J!%JwWh~[k!Pvry?Ahc))|:fRNP}$A');
define('LOGGED_IN_KEY',    '*xYU`AAw9X+f#|S.+j-d!)%_[e 3>Rq-W_u3-?9Z/,(V1g.[ch4h-X$Q<ill4hvq');
define('NONCE_KEY',        '0}h+Ov5eD<qEp )xG:hLg}z3m+l@%WCvN%Ag9)o_hAg@!SrAID;R2D*jQr$p(Y#i');
define('AUTH_SALT',        'OGk=#:IpYoawQ>ZlDEcCzuIZF&tAcxA.;<rx{*LDRD~>gm-c}do9Rpf*NCXq6Cm+');
define('SECURE_AUTH_SALT', '#/`^9bvkgu})ybP@Fl,L~:BJ^f-:=L9vxG<s-9tg-e4vdK,:n[fS#R^7g~U^n yM');
define('LOGGED_IN_SALT',   'Are$NOP]-[)fY</YMo;_[tQz+,b*v=@a(`01w,umxu-Ioh4Q^pwc:<ZB*m,@K99C');
define('NONCE_SALT',       'u]<m`qI%Dxv!N6}KCzYhr_ 86?#T {>kw8dp)KEQ.cjmBD#YxHf-J4R&N *JRbTj');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'photo_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
