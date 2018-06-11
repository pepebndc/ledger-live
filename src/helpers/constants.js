// Socket endpoint

export const BASE_SOCKET_URL = 'ws://api.ledgerwallet.com'
export const BASE_SOCKET_URL_TEMP = 'ws://manager.ledger.fr:3500'
export const API_BASE_URL = process.env.API_BASE_URL || 'https://beta.manager.live.ledger.fr/api'
// If you want to test locally with https://github.com/LedgerHQ/ledger-update-python-api
// export const BASE_SOCKET_URL = 'ws://localhost:3001/update'

// List of APDUS
export const APDUS = {
  GET_FIRMWARE: [0xe0, 0x01, 0x00, 0x00],
  // we dont have common call that works inside app & dashboard
  // TODO: this should disappear.
  GET_FIRMWARE_FALLBACK: [0xe0, 0xc4, 0x00, 0x00],
}
