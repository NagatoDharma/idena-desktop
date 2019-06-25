/* eslint-disable import/prefer-default-export */
import api from './api-client'
import {strip} from '../utils/obj'

export async function sendInvite({to, amount}) {
  const {data} = await api().post('/', {
    method: 'dna_sendInvite',
    params: [strip({to, amount})],
    id: 1,
  })
  return data
}

export async function activateInvite(to, key) {
  const {data} = await api().post('/', {
    method: 'dna_activateInvite',
    params: [strip({to, key})],
    id: 1,
  })
  return data
}

export async function fetchIdentities() {
  const {data} = await api().post('/', {
    method: 'dna_identities',
    params: [],
    id: 1,
  })
  const {result} = data
  return result
}

/**
 * Fetch identity info for the address
 *
 * @param {string} address Address
 * @returns {object} Identity details
 * @example {
    "address": "0x994cf4cccf6463a903f339ea87288fe253e23b98",
    "nickname": "",
    "stake": "1998",
    "invites": 0,
    "age": 0,
    "state": "Undefined",
    "pubkey": "",
    "requiredFlips": 0,
    "madeFlips": 0
  }
 */
export async function fetchIdentity(address) {
  const {data} = await api().post('/', {
    method: 'dna_identity',
    params: [address],
    id: 1,
  })
  const {result} = data
  return result
}

/**
 * Epoch
 * @typedef {Object}
 * @property {String} epoch Current epoch
 * @property {String} nextValidation Next validation timestamp
 * @property {String} currentPeriod Current period
 */

/**
 * Fetches current epoch, next validation time and current period
 *
 * @returns {Epoch} Epoch details
 * @example
 * {
 *   "epoch": 184,
 *   "nextValidation": "2019-05-08T19:40:00+02:00",
 *   "currentPeriod": "None"
 * }
 */
export async function fetchEpoch() {
  const {data} = await api().post('/', {
    method: 'dna_epoch',
    params: [],
    id: 1,
  })
  const {result} = data
  return result
}

/**
 * Fetches timings specific to validation ceremony
 * 
 * @returns {object}
 * @example {
    "ValidationInterval": 600,
    "FlipLotteryDuration": 60,
    "ShortSessionDuration": 60,
    "LongSessionDuration": 60,
    "AfterLongSessionDuration": 30
  }
 */
export async function fetchCeremonyIntervals() {
  const {data} = await api().post('/', {
    method: 'dna_ceremonyIntervals',
    params: [],
    id: 1,
  })
  const {result} = data
  return result
}

/**
 * Fetches coinbase address
 *
 * @returns {string} Address
 * @example 0xf228fa1e9236343c7d44283b5ffcf9ba50df37e8
 */
export async function fetchCoinbaseAddress() {
  const {data} = await api().post('/', {
    method: 'dna_getCoinbaseAddr',
    params: [],
    id: 1,
  })
  const {result} = data
  return result
}

/**
 * Fetches hex representation of the FLIP published in the network
 * @param {string} hash Flip hash
 */
export async function fetchFlip(hash) {
  const {data} = await api().post('/', {
    method: 'flip_get',
    params: [hash],
    id: 1,
  })
  return data
}

export async function submitFlip(hex) {
  const {data} = await api().post('/', {
    method: 'flip_submit',
    params: [hex],
    id: 1,
  })
  return data
}

export async function killIdentity(from) {
  const {data} = await api().post('/', {
    method: 'dna_sendTransaction',
    params: [
      {
        type: 3,
        from,
      },
    ],
    id: 1,
  })
  return data
}
