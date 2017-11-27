import {Component} from 'react'
import CryptoJS from 'crypto-js'

class PasswordHelper extends Component {
    static convert(d, type) {
        let uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let lowers = 'abcdefghijklmnopqrstuvwxyz'
        let numbers = '0123456789'
        let chars = '!@#$%^&*()'
        let convert

        switch (type) {
            case 'u':
                convert = uppers
                break
            case 'n':
                convert = numbers
                break
            case 'c':
                convert = chars
                break
            default:
                convert = lowers
        }

        let floor = parseInt(d / convert.length, 10)
        let odd = d % convert.length
        let first = convert[floor]
        let second = convert[odd]

        return first + second
    }

    static generate(hash) {
        let result = ''
        for (let count = 0; count < 16; count += 2) {
            let type
            let len = 2

            switch (count) {
                case 0:
                    type = 'u'
                    break
                case 4:
                    type = 'n'
                    len = 1
                    break
                case 8:
                    type = 'c'
                    len = 1
                    break
                default:
                    type = 'l'
            }

            let d = parseInt(hash.substr(count, len), 16)

            result += this.convert(d, type)
        }

        return result
    }

    static get(data, key) {
        let str = CryptoJS.HmacSHA512(data, key).toString()

        return this.generate(str)
    }
}

// Data: 0
// Key: 0
// ISek04hc!&iwbigc

export default PasswordHelper