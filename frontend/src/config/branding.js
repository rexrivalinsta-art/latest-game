/**
 * VANGUARD — single source of truth for all user-facing branding.
 *
 * Change the game name, tagline, colours and community links HERE and they
 * update everywhere. Nothing user-facing should hard-code these strings.
 */

export const BRAND = {
  GAME_NAME: 'VANGUARD',
  GAME_SHORT: 'VG',
  GAME_TAGLINE: 'Enter the grid. Own the fight.',
  LOGO: '/vanguard-wordmark.png', // served from public/
  VERSION: '1.0.0',

  // Brand colours (also mirrored in CSS variables in src/ui/theme.css).
  PRIMARY_BRAND: '#FF6A1A', // vanguard orange
  ACCENT_BRAND: '#FFB020', // warm amber
  BG_VOID: '#05070D',

  // Community / links — swap placeholders for real URLs.
  WEBSITE: 'https://example.com',
  DISCORD: 'https://discord.gg/your-invite',
  TWITTER: 'https://x.com/vanguardfps',
  UPDATES: 'https://example.com/updates',

  // Studio / legal.
  STUDIO: 'VANGUARD',
  COPYRIGHT: '© 2026 VANGUARD. All rights reserved.',
};

export default BRAND;
